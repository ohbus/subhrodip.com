import { readFile } from 'node:fs/promises';

const report = await readFile('coverage/subhrodip.com/index.html', 'utf8');
const thresholds = {
  Statements: 100,
  Branches: 100,
  Functions: 100,
  Lines: 100
};
const requiredPages = [
  'app/app.config.ts.html',
  'app/app.routes.ts.html',
  'app/core/services/seo.service.ts.html',
  'app/services/content.service.ts.html',
  'app/features/experience/experience.ts.html',
  'app/features/redirect/redirect.ts.html',
  'app/data/bn.ts.html',
  'app/data/de.ts.html',
  'app/data/redirects.ts.html'
];

for (const page of requiredPages) {
  try {
    await readFile(`coverage/subhrodip.com/${page}`);
  } catch {
    throw new Error(`Coverage report is missing ${page}.`);
  }
}

for (const [metric, threshold] of Object.entries(thresholds)) {
  const match = report.match(new RegExp(`<span class="quiet">${metric}</span>[\\s\\S]{0,200}?<span class='fraction'>(\\d+)\\/(\\d+)</span>`));
  if (!match) {
    throw new Error(`Coverage report is missing ${metric}.`);
  }

  const percentage = Number(match[1]) / Number(match[2]) * 100;
  if (percentage < threshold) {
    throw new Error(`${metric} coverage ${percentage.toFixed(2)}% is below ${threshold}%.`);
  }

  console.log(`${metric}: ${percentage.toFixed(2)}% (minimum ${threshold}%)`);
}
