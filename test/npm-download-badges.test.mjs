import assert from 'node:assert/strict';
import test from 'node:test';
import { collectDownloads, dateWindows, renderBadge, validateCount } from '../scripts/npm-download-badges.mjs';

test('total windows cover leap days exactly once and the last 30 complete UTC days', () => {
  const windows = dateWindows('2024-02-28T12:00:00Z', Date.parse('2026-10-11T01:00:00Z'));
  assert.equal(windows.total[0].start, '2024-02-28');
  assert.equal(windows.total.at(-1).end, '2026-10-10');
  for (let i = 0; i < windows.total.length; i++) {
    const window = windows.total[i];
    assert.ok((Date.parse(window.end) - Date.parse(window.start)) / 86400000 < 365);
    if (i) assert.equal(Date.parse(window.start) - Date.parse(windows.total[i - 1].end), 86400000);
  }
  assert.deepEqual(windows.month, { start: '2026-09-11', end: '2026-10-10' });
});

test('missing, negative, fractional, wrong-package and truncated counts fail', () => {
  const window = { start: '2026-09-11', end: '2026-10-10' };
  const valid = { package: '@minhspark/icons-pro-max', downloads: 0, ...window };
  assert.equal(validateCount(valid, window), 0);
  for (const change of [{ downloads: null }, { downloads: -1 }, { downloads: 1.5 }, { package: 'other' }, { end: '2026-10-09' }]) {
    assert.throws(() => validateCount({ ...valid, ...change }, window));
  }
});

test('collection sums every total window and does not turn upstream errors into zero', async () => {
  const now = Date.parse('2026-10-11T01:00:00Z');
  const request = async url => {
    if (url.includes('registry.npmjs.org')) return { time: { created: '2025-01-01T00:00:00Z' } };
    const [start, end] = url.split('/').at(-2).split(':');
    return { package: '@minhspark/icons-pro-max', start, end, downloads: start === '2026-09-11' ? 5 : 10 };
  };
  const data = await collectDownloads({ request, now });
  assert.equal(data.total.downloads, 20);
  assert.equal(data.month.downloads, 5);
  await assert.rejects(collectDownloads({ now, request: async () => { throw new Error('HTTP 429'); } }), /429/);
});

test('badge matches the compact reference and escapes accessible text', () => {
  const svg = renderBadge('npm downloads', 7426, '<source & time>');
  assert.match(svg, /height="24"/);
  assert.match(svg, /#CB3837/);
  assert.match(svg, /DejaVu Sans Mono,monospace/);
  assert.match(svg, />7,426<\/text>/);
  assert.match(svg, /&lt;source &amp; time&gt;/);
  assert.throws(() => renderBadge('npm downloads', null, ''));
});
