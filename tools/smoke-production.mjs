import { createServer } from 'node:http';
import { existsSync } from 'node:fs';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, normalize, sep } from 'node:path';
import { execFileSync, spawn } from 'node:child_process';

const browserDir = normalize('dist/subhrodip.com/browser');
const browserCandidates = [
  process.env.CHROME_BIN,
  process.env.BROWSER_BIN,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
].filter(Boolean);

function findBrowser() {
  const existing = browserCandidates.find(candidate => existsSync(candidate));
  if (existing) {
    return existing;
  }

  const command = process.platform === 'win32' ? 'where.exe' : 'which';
  for (const name of ['google-chrome', 'chromium', 'chromium-browser', 'msedge']) {
    try {
      return execFileSync(command, [name], { encoding: 'utf8' }).split(/\r?\n/)[0].trim();
    } catch {
      // Try the next installed browser.
    }
  }

  throw new Error('Chrome or Chromium is required for the production smoke test.');
}

function contentType(file) {
  if (file.endsWith('.html')) return 'text/html; charset=utf-8';
  if (file.endsWith('.js')) return 'text/javascript; charset=utf-8';
  if (file.endsWith('.css')) return 'text/css; charset=utf-8';
  if (file.endsWith('.json')) return 'application/json; charset=utf-8';
  return 'application/octet-stream';
}

async function dumpDom(browser, url, profile) {
  return new Promise((resolve, reject) => {
    const child = spawn(browser, [
      '--headless=new',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--no-sandbox',
      '--virtual-time-budget=4000',
      `--user-data-dir=${profile}`,
      '--dump-dom',
      url
    ], { stdio: ['ignore', 'pipe', 'pipe'] });

    let output = '';
    let errors = '';
    const timeout = setTimeout(() => {
      child.kill();
      reject(new Error(`Browser smoke test timed out for ${url}. ${errors}`));
    }, 20000);

    child.stdout.on('data', chunk => output += chunk);
    child.stderr.on('data', chunk => errors += chunk);
    child.on('error', error => {
      clearTimeout(timeout);
      reject(error);
    });
    child.on('close', code => {
      clearTimeout(timeout);
      if (code !== 0) {
        reject(new Error(`Browser smoke test failed for ${url}: ${errors}`));
      } else {
        resolve(output);
      }
    });
  });
}

const server = createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const requested = pathname === '/' ? 'index.html' : pathname.slice(1);
  const candidate = normalize(join(browserDir, requested));
  const file = candidate.startsWith(browserDir + sep) && existsSync(candidate)
    ? candidate
    : join(browserDir, '404.html');

  try {
    response.writeHead(200, { 'content-type': contentType(file) });
    response.end(await readFile(file));
  } catch (error) {
    response.writeHead(500);
    response.end(String(error));
  }
});

const browser = findBrowser();
const profile = await mkdtemp(join(tmpdir(), 'subhrodip-smoke-'));

try {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  const checks = [
    ['/', 'Subhrodip'],
    ['/search', 'People also ask'],
    ['/experience', 'Professional Experience'],
    ['/sentry-test', 'Sentry production test']
  ];

  for (const [path, expected] of checks) {
    const dom = await dumpDom(browser, `http://127.0.0.1:${port}${path}`, profile);
    if (!dom.includes(expected)) {
      throw new Error(`${path} did not render expected text: ${expected}`);
    }
    console.log(`Production browser smoke passed: ${path}`);
  }
} finally {
  server.close();
  await rm(profile, { recursive: true, force: true });
}
