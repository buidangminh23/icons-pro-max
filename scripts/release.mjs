import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { lstatSync, mkdirSync, readFileSync, readdirSync, realpathSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifests = ['plugin.json', '.claude-plugin/plugin.json', '.claude-plugin/marketplace.json', '.codex-plugin/plugin.json', 'gemini-extension.json'];
const payload = ['plugin.json', 'assets', 'THIRD_PARTY_NOTICES.md', '.agents', '.claude-plugin', '.codex-plugin', 'skills', 'README.md', 'CONTRIBUTING.md', 'CHANGELOG.md', 'LICENSE', 'gemini-extension.json'];
const portalPayload = ['plugin.json', 'assets', 'skills', 'LICENSE', 'THIRD_PARTY_NOTICES.md', 'README.md'];
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

export function checkPortableManifest(document, base = root) {
  assert.ok(document && typeof document === 'object' && !Array.isArray(document));
  const fields = ['$schema', 'name', 'version', 'description', 'author', 'homepage', 'repository', 'license', 'keywords', 'extensions'];
  assert.ok(Object.keys(document).every((field) => fields.includes(field)), 'Unknown portable manifest field');
  assert.equal(document.$schema, 'https://agent-plugins.org/schemas/1.0.0/plugin.schema.json');
  assert.equal(document.name, 'icons-pro-max');
  assert.match(document.version, /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/);
  assert.equal(document.author?.name, 'buidangminh23');
  assert.equal(document.author?.email, 'buidangminh23@gmail.com');
  assert.ok(Object.keys(document.author).every((field) => ['name', 'email', 'url'].includes(field)));
  assert.equal(document.repository, 'https://github.com/buidangminh23/icons-pro-max');
  for (const value of [document.description, document.license]) assert.ok(typeof value === 'string' && value.trim());
  for (const value of [document.homepage, document.repository, document.author.url]) {
    const url = new URL(value);
    assert.equal(url.protocol, 'https:');
    assert.ok(!url.username && !url.password);
  }
  assert.ok(Array.isArray(document.keywords) && document.keywords.every((value) => typeof value === 'string'));
  assert.ok(document.extensions && Object.values(document.extensions).every((value) => value && typeof value === 'object' && !Array.isArray(value)));
  const openai = document.extensions['com.openai'];
  assert.ok(openai && !openai.apps && !openai.hooks && !openai.mcpServers, 'This package contains skills only');
  const listing = openai.interface;
  for (const [field, limit] of [['displayName', 30], ['shortDescription', 30], ['longDescription', 4000], ['developerName', 80]]) {
    assert.ok(typeof listing?.[field] === 'string' && listing[field].trim() && listing[field].length <= limit, `Invalid listing ${field}`);
  }
  assert.equal(listing.developerName, document.author.name);
  assert.equal(listing.category, 'Creativity');
  assert.ok(Array.isArray(listing.capabilities) && listing.capabilities.length <= 20 && listing.capabilities.every((value) => typeof value === 'string' && value.trim() && value.length <= 120));
  assert.ok(Array.isArray(listing.defaultPrompt) && listing.defaultPrompt.length <= 3 && new Set(listing.defaultPrompt).size === listing.defaultPrompt.length);
  assert.ok(listing.defaultPrompt.every((value) => typeof value === 'string' && value.trim() && value.length <= 128 && !value.includes('@')));
  for (const field of ['websiteURL', 'supportURL']) {
    const url = new URL(listing[field]);
    assert.equal(url.protocol, 'https:');
    assert.ok(!url.username && !url.password);
  }
  for (const field of ['brandColor', 'brandColorDark']) assert.match(listing[field], /^#[0-9A-Fa-f]{6}$/);
  for (const field of ['composerIcon', 'logo']) {
    const relative = listing[field];
    assert.ok(typeof relative === 'string' && relative.startsWith('./') && !/[\\:\x00-\x1f\x7f]/.test(relative) && !relative.split('/').includes('..'), `Unsafe listing asset: ${field}`);
    const file = path.resolve(base, relative);
    const inside = path.relative(realpathSync(base), realpathSync(file));
    assert.ok(inside && !path.isAbsolute(inside) && inside !== '..' && !inside.startsWith(`..${path.sep}`), 'Listing asset escapes package');
    assert.ok(lstatSync(file).isFile() && !lstatSync(file).isSymbolicLink(), 'Listing asset must be a regular file');
    const bytes = readFileSync(file);
    assert.ok(bytes.length <= 5 * 1024 * 1024);
    assert.ok(file.endsWith('.svg'));
    const svg = bytes.toString('utf8');
    assert.match(svg, /^<svg\s/);
    assert.match(svg, /xmlns="http:\/\/www.w3.org\/2000\/svg"/);
    const dimensions = svg.match(/viewBox="([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+)"/);
    assert.ok(dimensions && Number(dimensions[3]) >= 48 && dimensions[3] === dimensions[4], 'Listing icon must be square and at least 48px');
    assert.ok(!/<(?:script|foreignObject)\b|(?:href|onload|onclick)=/i.test(svg));
  }
}

function check(tag) {
  const pkg = json('package.json');
  const version = pkg.version;
  assert.equal(pkg.name, '@minhspark/icons-pro-max');
  assert.equal(pkg.private, false);
  assert.equal(pkg.publishConfig.access, 'public');
  assert.equal(json('package-lock.json').name, pkg.name);
  assert.equal(json('package-lock.json').packages[''].name, pkg.name);
  assert.equal(json('package-lock.json').version, version, 'Lockfile version must match');
  assert.equal(json('package-lock.json').packages[''].version, version, 'Lockfile root version must match');
  checkVersions(version, manifests.map(json), tag);
  checkPortableManifest(json('plugin.json'));
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
  const notices = read('THIRD_PARTY_NOTICES.md');
  for (const notice of ['Copyright (c) 2015 konpa', 'Copyright (c) 2023 LobeHub', 'CC0 1.0 Universal']) assert.ok(notices.includes(notice), `Missing upstream notice: ${notice}`);
  for (const file of ['skills/icons-pro-max/SKILL.md', 'plugin.json']) assert.ok(!/\b[A-Za-z]:[\\/]|\/Users\/|\/home\//.test(read(file)), `Machine-specific path in ${file}`);
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
    git('-c', 'core.autocrlf=false', 'archive', `--format=${format}`, `--prefix=icons-pro-max-${version}/`, `--output=${path.join(output, name)}`, 'HEAD', '--', ...payload);
    const hash = createHash('sha256').update(readFileSync(path.join(output, name))).digest('hex');
    sums.push(`${hash}  ${name}`);
  }
  const portalName = `icons-pro-max-${version}-plugin.zip`;
  git('-c', 'core.autocrlf=false', 'archive', '--format=zip', `--output=${path.join(output, portalName)}`, 'HEAD', '--', ...portalPayload);
  sums.push(`${createHash('sha256').update(readFileSync(path.join(output, portalName))).digest('hex')}  ${portalName}`);
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
