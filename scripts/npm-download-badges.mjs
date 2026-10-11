import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const packageName = '@minhspark/icons-pro-max';
const dayMs = 86_400_000;
const day = value => new Date(value).toISOString().slice(0, 10);
const escapeXml = value => String(value).replace(/[<>&"']/g, character => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[character]);

export function dateWindows(created, now = Date.now()) {
  const start = Date.parse(day(created));
  const end = Date.parse(day(now)) - dayMs;
  if (start > end) throw new Error('No completed publication day is available.');
  const total = [];
  for (let cursor = start; cursor <= end; cursor += 365 * dayMs) {
    total.push({ start: day(cursor), end: day(Math.min(cursor + 364 * dayMs, end)) });
  }
  return { total, month: { start: day(end - 29 * dayMs), end: day(end) } };
}

export function validateCount(data, window) {
  if (data.package !== packageName || data.start !== window.start || data.end !== window.end || !Number.isSafeInteger(data.downloads) || data.downloads < 0) {
    throw new Error('Invalid or incomplete npm download response.');
  }
  return data.downloads;
}

export function renderBadge(label, count, detail) {
  if (!Number.isSafeInteger(count) || count < 0) throw new Error('Invalid download count.');
  const message = count.toLocaleString('en-US');
  const labelWidth = Math.ceil(label.length * 7.25 + 16);
  const messageWidth = Math.ceil(message.length * 7.25 + 16);
  const width = labelWidth + messageWidth;
  const accessible = `${label}: ${message}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="24" viewBox="0 0 ${width} 24" role="img" aria-label="${escapeXml(accessible)}"><title>${escapeXml(`${accessible}. ${detail}`)}</title><rect width="${width}" height="24" rx="4" fill="#555"/><path d="M${labelWidth} 0H${width - 4}Q${width} 0 ${width} 4V20Q${width} 24 ${width - 4} 24H${labelWidth}Z" fill="#CB3837"/><g fill="#fff" font-family="DejaVu Sans Mono,monospace" font-size="12" text-anchor="middle"><text x="${labelWidth / 2}" y="16">${escapeXml(label)}</text><text x="${labelWidth + messageWidth / 2}" y="16">${message}</text></g></svg>\n`;
}

async function getJson(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`npm request failed: HTTP ${response.status}`);
  return response.json();
}

export async function collectDownloads({ request = getJson, now = Date.now() } = {}) {
  const encoded = encodeURIComponent(packageName);
  const metadata = await request(`https://registry.npmjs.org/${encoded}`);
  if (!metadata.time?.created) throw new Error('Package creation date is unavailable.');
  const windows = dateWindows(metadata.time.created, now);
  const count = async window => validateCount(await request(`https://api.npmjs.org/downloads/point/${window.start}:${window.end}/${encoded}`), window);
  let total = 0;
  for (const window of windows.total) total += await count(window);
  const month = await count(windows.month);
  if (!Number.isSafeInteger(total) || month > total) throw new Error('Inconsistent npm download counts.');
  return { package: packageName, collectedAt: new Date(now).toISOString(), total: { downloads: total, start: windows.total[0].start, end: windows.month.end }, month: { downloads: month, ...windows.month } };
}

async function main() {
  const data = await collectDownloads();
  const output = resolve('dist/npm-downloads');
  await mkdir(output, { recursive: true });
  for (const [name, label, metric] of [
    ['stats-npm-downloads.svg', 'npm downloads', data.total],
    ['stats-npm-downloads-month.svg', 'npm downloads / 30d', data.month],
  ]) {
    await writeFile(resolve(output, name), renderBadge(label, metric.downloads, `${metric.start} to ${metric.end} UTC. Source: npm download API. Updated: ${data.collectedAt}`));
  }
  await writeFile(resolve(output, 'downloads.json'), `${JSON.stringify(data, null, 2)}\n`);
  console.log(JSON.stringify(data));
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await main();
