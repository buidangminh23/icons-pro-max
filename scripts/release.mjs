import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifests = ['.claude-plugin/plugin.json', '.claude-plugin/marketplace.json', '.codex-plugin/plugin.json', 'gemini-extension.json'];
const payload = ['.agents', '.claude-plugin', '.codex-plugin', 'skills', 'README.md', 'CONTRIBUTING.md', 'CHANGELOG.md', 'LICENSE', 'gemini-extension.json'];
const read = (file) => readFileSync(path.join(root, file), 'utf8');
const json = (file) => JSON.parse(read(file));
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();

export function releaseNotes(changelog, version) {
  assert.match(version, /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/, 'Use a stable SemVer version');
  const sections = [...changelog.matchAll(/^## \[([^\]]+)\] - (\d{4}-\d{2}-\d{2})\r?$/gm)];
  const matching = sections.filter((section) => section[1] === version);
  assert.equal(matching.length, 1, `Expected exactly one dated changelog entry for ${version}`);
  const section = matching[0];
  const start = section.index + section[0].length;
  const rest = changelog.slice(start);
  const boundary = rest.search(/^## /m);
  const body = (boundary < 0 ? rest : rest.slice(0, boundary)).trim();
  assert.match(body, /^### (Added|Changed|Deprecated|Removed|Fixed|Security)$/m, 'Missing changelog category');
  assert.match(body, /^- \S/m, 'Missing release details');
  return body;
}

export function checkVersions(version, documents, tag) {
  assert.match(version, /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/);
  for (const document of documents) {
    const entry = document.plugins ? document.plugins.find((plugin) => plugin.name === 'icons-pro-max') : document;
    assert.equal(entry?.version, version, 'Plugin versions must match package.json');
    assert.equal(entry.name, 'icons-pro-max');
  }
  if (tag) assert.equal(tag, `v${version}`, 'Tag must match package.json');
}

function check(tag) {
  const version = json('package.json').version;
  assert.equal(json('package-lock.json').version, version, 'Lockfile version must match');
  assert.equal(json('package-lock.json').packages[''].version, version, 'Lockfile root version must match');
  checkVersions(version, manifests.map(json), tag);
  releaseNotes(read('CHANGELOG.md'), version);
  assert.match(read('skills/icons-pro-max/SKILL.md'), /^name: icons-pro-max\r?$/m);
  assert.equal(json('.agents/plugins/marketplace.json').plugins[0].source.path, './');
  assert.equal(json('.codex-plugin/plugin.json').skills, './skills/');
  assert.equal(json('gemini-extension.json').contextFileName, 'skills/icons-pro-max/SKILL.md');
  const assets = readdirSync(path.join(root, 'skills/icons-pro-max/assets'), { recursive: true }).filter((file) => /\.(svg|png)$/.test(file));
  assert.ok(assets.length > 0, 'The release must contain icon assets');
  for (const asset of assets) {
    const bytes = readFileSync(path.join(root, 'skills/icons-pro-max/assets', asset));
    if (asset.endsWith('.svg')) assert.match(bytes.toString(), /<svg[\s>]/);
    else assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  }
  return version;
}

function build(tag) {
  const version = check(tag);
  assert.equal(git('status', '--porcelain', '--untracked-files=normal'), '', 'Build from a clean committed checkout');
  assert.equal(JSON.parse(git('show', 'HEAD:package.json')).version, version);
  if (tag) assert.equal(git('rev-parse', `${tag}^{commit}`), git('rev-parse', 'HEAD'), 'Tag must point to HEAD');
  const output = path.join(root, 'dist');
  mkdirSync(output, { recursive: true });
  const sums = [];
  for (const format of ['zip', 'tar.gz']) {
    const name = `icons-pro-max-${version}.${format}`;
    git('archive', `--format=${format}`, `--prefix=icons-pro-max-${version}/`, `--output=${path.join(output, name)}`, 'HEAD', '--', ...payload);
    const hash = createHash('sha256').update(readFileSync(path.join(output, name))).digest('hex');
    sums.push(`${hash}  ${name}`);
  }
  writeFileSync(path.join(output, 'SHA256SUMS'), `${sums.join('\n')}\n`);
  writeFileSync(path.join(output, 'release-notes.md'), `${releaseNotes(read('CHANGELOG.md'), version)}\n`);
  process.stdout.write(`Built icons-pro-max ${version} from ${git('rev-parse', 'HEAD')}\n`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [command, tag] = process.argv.slice(2);
  if (command === 'sync') {
    const version = json('package.json').version;
    releaseNotes(read('CHANGELOG.md'), version);
    for (const file of manifests) {
      const document = json(file);
      if (document.plugins) document.plugins.find((plugin) => plugin.name === 'icons-pro-max').version = version;
      else document.version = version;
      writeFileSync(path.join(root, file), `${JSON.stringify(document, null, 2)}\n`);
    }
    check();
  } else if (command === 'check') {
    process.stdout.write(`Validated ${check(tag)}\n`);
  } else if (command === 'notes') {
    process.stdout.write(`${releaseNotes(read('CHANGELOG.md'), tag ?? json('package.json').version)}\n`);
  } else if (command === 'build') {
    build(tag);
  } else {
    throw new Error('Usage: node scripts/release.mjs check [tag] | sync | notes [version] | build [tag]');
  }
}
