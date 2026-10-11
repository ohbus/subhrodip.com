import { access, stat, readFile } from 'node:fs/promises';

const browserDir = 'dist/subhrodip.com/browser';
const requiredFiles = ['index.html', '404.html', 'favicon-32x32.png', 'site.webmanifest'];

for (const file of requiredFiles) {
  await access(`${browserDir}/${file}`);
}

const index = await readFile(`${browserDir}/index.html`, 'utf8');
if (!index.includes('<app-root>')) {
  throw new Error('Production index is missing the application shell.');
}

const files = await Promise.all(requiredFiles.map(async file => ({
  file,
  bytes: (await stat(`${browserDir}/${file}`)).size
})));
const oversized = files.filter(({ file, bytes }) => file.endsWith('.png') && bytes > 150_000);
if (oversized.length) {
  throw new Error(`Production asset budget exceeded: ${oversized.map(item => `${item.file} (${item.bytes} bytes)`).join(', ')}`);
}

console.log(`Production smoke check passed: ${files.map(item => `${item.file}=${item.bytes}B`).join(', ')}`);
