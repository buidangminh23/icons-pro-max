import assert from 'node:assert/strict';
import fs from 'node:fs';

const result = JSON.parse(fs.readFileSync(0, 'utf8'));
const [pack] = Array.isArray(result) ? result : Object.values(result);
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
assert.equal(pack.name, pkg.name);
assert.equal(pack.version, pkg.version);
const files = pack.files.map((file) => file.path);
for (const required of ['package.json', 'README.md', 'LICENSE', '.agents/plugins/marketplace.json', '.claude-plugin/plugin.json', '.claude-plugin/marketplace.json', '.codex-plugin/plugin.json', 'gemini-extension.json', 'skills/icons-pro-max/SKILL.md']) {
  assert.ok(files.includes(required), `Missing npm package file: ${required}`);
}
for (const relative of fs.readdirSync('skills/icons-pro-max/assets', { recursive: true, withFileTypes: true }).filter((entry) => entry.isFile()).map((entry) => `${entry.parentPath}/${entry.name}`.replaceAll('\\', '/'))) {
  assert.ok(files.includes(relative), `Missing bundled asset: ${relative}`);
}
for (const file of files) {
  assert.ok(!/^(scripts|test|dist|node_modules|\.github|\.git)\//.test(file), `Unexpected development file: ${file}`);
  assert.ok(!/(^|\/)\.env(?:\.|$)/.test(file), `Unexpected environment file: ${file}`);
}
console.log(`Verified ${pack.name}@${pack.version}: ${files.length} files`);
