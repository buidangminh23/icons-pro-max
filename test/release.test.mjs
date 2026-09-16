import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import test from 'node:test';
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { gunzipSync } from 'node:zlib';
import { checkVersions, releaseNotes } from '../scripts/release.mjs';

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

test('archives preserve committed bytes with autocrlf and reject dirty builds', () => {
  const fixture = mkdtempSync(path.join(tmpdir(), 'icons-release-test-'));
  const git = (...args) => execFileSync('git', args, { cwd: fixture, stdio: ['ignore', 'pipe', 'pipe'] });
  try {
    for (const file of ['.agents', '.claude-plugin', '.codex-plugin', 'skills', 'scripts', 'README.md', 'CONTRIBUTING.md', 'CHANGELOG.md', 'LICENSE', 'gemini-extension.json', 'package.json', 'package-lock.json', '.gitignore']) {
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
    for (let offset = 0; offset + 512 <= archive.length;) {
      const header = archive.subarray(offset, offset + 512);
      if (header.every((byte) => byte === 0)) break;
      const name = header.subarray(0, 100).toString().replace(/\0.*$/s, '');
      const size = parseInt(header.subarray(124, 136).toString().replace(/\0.*$/s, '').trim(), 8) || 0;
      if (header[156] === 48 || header[156] === 0) {
        const relative = name.slice(`icons-pro-max-${version}/`.length);
        assert.deepEqual(archive.subarray(offset + 512, offset + 512 + size), git('show', `HEAD:${relative}`), relative);
        names.push(relative);
      }
      offset += 512 + Math.ceil(size / 512) * 512;
    }
    for (const required of ['.agents/plugins/marketplace.json', '.claude-plugin/plugin.json', '.codex-plugin/plugin.json', 'gemini-extension.json', 'CONTRIBUTING.md', 'skills/icons-pro-max/SKILL.md']) {
      assert.ok(names.includes(required), required);
    }
    assert.ok(names.some((name) => name.endsWith('.png')));
    assert.ok(names.some((name) => name.endsWith('.svg')));
    writeFileSync(path.join(fixture, 'README.md'), 'Uncommitted change');
    assert.throws(build, /Build from a clean committed checkout/);
  } finally {
    rmSync(fixture, { recursive: true, force: true });
  }
});
