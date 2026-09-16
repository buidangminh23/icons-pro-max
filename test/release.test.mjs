import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import test from 'node:test';
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
