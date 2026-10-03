import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import test from 'node:test';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { gunzipSync, inflateRawSync } from 'node:zlib';
import { checkPortableManifest, checkVersions, releaseNotes } from '../scripts/release.mjs';

const entry = '## [2.1.0] - 2026-09-16\n\n### Added\n- Portable packages.\n';

test('notes contain only the requested release, including CRLF input', () => {
  const changelog = `${entry}\n## [2.0.0] - 2026-07-15\n\n### Changed\n- Rename.\n`;
  assert.equal(releaseNotes(changelog, '2.1.0'), '### Added\n- Portable packages.');
  assert.equal(releaseNotes(changelog.replaceAll('\n', '\r\n'), '2.0.0'), '### Changed\r\n- Rename.');
});

test('missing, empty, duplicate and malformed release notes fail closed', () => {
  for (const changelog of ['', '## [2.1.0] - 2026-09-16\n', entry + entry, entry.replace('2026-09-16', 'today')]) {
    assert.throws(() => releaseNotes(changelog, '2.1.0'));
  }
  assert.throws(() => releaseNotes(entry, '2.1'));
  assert.throws(() => releaseNotes(entry, '02.1.0'));
});

test('mismatched plugin versions or release tags are rejected', () => {
  const plugin = { name: 'icons-pro-max', version: '2.1.0' };
  checkVersions('2.1.0', [plugin, { plugins: [plugin] }], 'v2.1.0');
  assert.throws(() => checkVersions('2.1.0', [{ ...plugin, version: '2.0.0' }]));
  assert.throws(() => checkVersions('2.1.0', [plugin], 'v2.0.0'));
  assert.throws(() => checkVersions('2.1.0', [{ plugins: [] }]));
});

test('repository manifests, catalog, assets and current release notes validate', () => {
  execFileSync(process.execPath, ['scripts/release.mjs', 'check'], { stdio: 'pipe' });
});

test('portable metadata rejects unsafe paths, missing assets and unsupported components', () => {
  const manifest = JSON.parse(readFileSync('plugin.json', 'utf8'));
  checkPortableManifest(manifest);
  for (const unsafe of ['./../README.md', './assets/../../README.md', 'C:/private/icon.svg', '/private/icon.svg', './assets\\plugin-icon.svg', './assets/missing.svg']) {
    const changed = structuredClone(manifest);
    changed.extensions['com.openai'].interface.logo = unsafe;
    assert.throws(() => checkPortableManifest(changed));
  }
  for (const mutate of [
    (changed) => { changed.skills = './skills/'; },
    (changed) => { changed.extensions['com.openai'].hooks = './hooks/hooks.json'; },
    (changed) => { changed.extensions['com.openai'].interface.shortDescription = 'x'.repeat(31); },
    (changed) => { changed.author.email = 'other@example.invalid'; },
    (changed) => { changed.extensions['com.openai'].interface.category = 'Design'; },
    (changed) => { changed.extensions['com.openai'].interface.websiteURL = 'https://user:secret@example.invalid'; },
  ]) {
    const changed = structuredClone(manifest);
    mutate(changed);
    assert.throws(() => checkPortableManifest(changed));
  }
});

function zipFiles(bytes) {
  const end = bytes.length - 22;
  let directory = end;
  while (directory >= 0 && bytes.readUInt32LE(directory) !== 0x06054b50) directory--;
  assert.ok(directory >= 0);
  const count = bytes.readUInt16LE(directory + 10);
  let offset = bytes.readUInt32LE(directory + 16);
  const files = new Map();
  for (let index = 0; index < count; index++) {
    assert.equal(bytes.readUInt32LE(offset), 0x02014b50);
    const method = bytes.readUInt16LE(offset + 10);
    const compressedSize = bytes.readUInt32LE(offset + 20);
    const nameLength = bytes.readUInt16LE(offset + 28);
    const extraLength = bytes.readUInt16LE(offset + 30);
    const commentLength = bytes.readUInt16LE(offset + 32);
    const local = bytes.readUInt32LE(offset + 42);
    const name = bytes.subarray(offset + 46, offset + 46 + nameLength).toString();
    if (!name.endsWith('/')) {
      assert.equal(bytes.readUInt32LE(local), 0x04034b50);
      const start = local + 30 + bytes.readUInt16LE(local + 26) + bytes.readUInt16LE(local + 28);
      const compressed = bytes.subarray(start, start + compressedSize);
      assert.ok(method === 0 || method === 8);
      assert.ok(!files.has(name));
      files.set(name, method === 8 ? inflateRawSync(compressed) : compressed);
    }
    offset += 46 + nameLength + extraLength + commentLength;
  }
  return files;
}

test('archives preserve committed bytes with autocrlf and reject dirty builds', () => {
  const fixture = mkdtempSync(path.join(tmpdir(), 'icons-release-test-'));
  const git = (...args) => execFileSync('git', args, { cwd: fixture, stdio: ['ignore', 'pipe', 'pipe'] });
  try {
    for (const file of ['plugin.json', 'assets', 'THIRD_PARTY_NOTICES.md', '.agents', '.claude-plugin', '.codex-plugin', 'skills', 'scripts', 'README.md', 'CONTRIBUTING.md', 'CHANGELOG.md', 'LICENSE', 'gemini-extension.json', 'package.json', 'package-lock.json', '.gitignore']) {
      cpSync(file, path.join(fixture, file), { recursive: true });
    }
    git('init');
    git('config', 'user.name', 'Release Test');
    git('config', 'user.email', 'release-test@example.invalid');
    git('config', 'core.autocrlf', 'true');
    git('add', '.');
    git('-c', 'commit.gpgsign=false', '-c', 'core.hooksPath=empty-hooks', 'commit', '-m', 'Test fixture');
    const build = () => execFileSync(process.execPath, ['scripts/release.mjs', 'build'], { cwd: fixture, stdio: 'pipe' });
    build();
    const version = JSON.parse(readFileSync(path.join(fixture, 'package.json'))).version;
    const archive = gunzipSync(readFileSync(path.join(fixture, `dist/icons-pro-max-${version}.tar.gz`)));
    const names = [];
    let paxPath;
    for (let offset = 0; offset + 512 <= archive.length;) {
      const header = archive.subarray(offset, offset + 512);
      if (header.every((byte) => byte === 0)) break;
      const field = (start, length) => header.subarray(start, start + length).toString().replace(/\0.*$/s, '');
      const prefix = field(345, 155);
      const name = paxPath ?? (prefix ? `${prefix}/${field(0, 100)}` : field(0, 100));
      const size = parseInt(field(124, 12).trim(), 8) || 0;
      if (header[156] === 120) {
        const records = archive.subarray(offset + 512, offset + 512 + size).toString();
        paxPath = records.match(/^\d+ path=(.*)$/m)?.[1];
        offset += 512 + Math.ceil(size / 512) * 512;
        continue;
      }
      paxPath = undefined;
      if (header[156] === 48 || header[156] === 0) {
        const relative = name.slice(`icons-pro-max-${version}/`.length);
        assert.deepEqual(archive.subarray(offset + 512, offset + 512 + size), git('show', `HEAD:${relative}`), relative);
        names.push(relative);
      }
      offset += 512 + Math.ceil(size / 512) * 512;
    }
    for (const required of ['plugin.json', 'assets/plugin-icon.svg', 'THIRD_PARTY_NOTICES.md', '.agents/plugins/marketplace.json', '.claude-plugin/plugin.json', '.codex-plugin/plugin.json', 'gemini-extension.json', 'CONTRIBUTING.md', 'skills/icons-pro-max/SKILL.md']) {
      assert.ok(names.includes(required), required);
    }
    assert.ok(names.some((name) => name.endsWith('.png')));
    assert.ok(names.some((name) => name.endsWith('.svg')));
    const portal = zipFiles(readFileSync(path.join(fixture, `dist/icons-pro-max-${version}-plugin.zip`)));
    const expected = git('ls-tree', '-r', '--name-only', 'HEAD', '--', 'plugin.json', 'assets', 'skills', 'LICENSE', 'THIRD_PARTY_NOTICES.md', 'README.md').toString().trim().split('\n');
    assert.deepEqual([...portal.keys()].sort(), expected.sort());
    assert.equal([...portal.keys()].filter((name) => name.startsWith('skills/icons-pro-max/assets/')).length, 799);
    for (const [name, bytes] of portal) assert.deepEqual(bytes, git('show', `HEAD:${name}`), name);
    const fresh = path.join(fixture, 'dist', 'fresh-install');
    for (const [name, bytes] of portal) {
      assert.ok(!name.startsWith('/') && !name.split('/').includes('..'));
      const destination = path.join(fresh, name);
      mkdirSync(path.dirname(destination), { recursive: true });
      writeFileSync(destination, bytes);
    }
    checkPortableManifest(JSON.parse(readFileSync(path.join(fresh, 'plugin.json'), 'utf8')), fresh);
    const sums = readFileSync(path.join(fixture, 'dist/SHA256SUMS'), 'utf8');
    assert.equal(sums.trim().split('\n').length, 3);
    assert.match(sums, new RegExp(`  icons-pro-max-${version}-plugin\\.zip\\n`));
    writeFileSync(path.join(fixture, 'README.md'), 'Uncommitted change');
    assert.throws(build, /Build from a clean committed checkout/);
  } finally {
    rmSync(fixture, { recursive: true, force: true });
  }
});
