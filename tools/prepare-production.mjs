import { readFile, writeFile } from 'node:fs/promises';

const browserDir = 'dist/subhrodip.com/browser';
await writeFile(`${browserDir}/404.html`, await readFile(`${browserDir}/index.html`));
