import assert from 'node:assert/strict';
import fs from 'node:fs';

const ISSUE_REFERENCE = /(?:tracking\s+issue\s*:|refs?\b|clos(?:e|es|ed|ing)?\b|fix(?:e|es|ed|ing)?\b|resolv(?:e|es|ed|ing)?\b)\s*#(\d+)/gi;

export function issueNumbers(text = '') {
  return [...text.matchAll(ISSUE_REFERENCE)].map(match => Number(match[1]));
}

export function isDependabot(pullRequest = {}) {
  return (pullRequest.user?.login ?? '').toLowerCase() === 'dependabot[bot]';
}

export function validatePullRequest(payload) {
  const pullRequest = payload.pull_request ?? {};
  if (isDependabot(pullRequest)) return { exempt: true, issues: [] };
  const text = `${pullRequest.title ?? ''}\n${pullRequest.body ?? ''}`;
  const issues = [...new Set(issueNumbers(text))];
  return { exempt: false, issues };
}

function selfTest() {
  assert.deepEqual(issueNumbers('Tracking issue: #15'), [15]);
  assert.deepEqual(issueNumbers('Refs #21 and closes #22'), [21, 22]);
  assert.deepEqual(issueNumbers('No tracker here'), []);
  assert.equal(validatePullRequest({ pull_request: { user: { login: 'dependabot[bot]' } } }).exempt, true);
  assert.deepEqual(validatePullRequest({
    pull_request: { title: 'UI', body: 'No tracker', user: { login: 'ohbus' } }
  }).issues, []);
  assert.deepEqual(validatePullRequest({
    pull_request: { title: 'UI', body: 'Closes #23', user: { login: 'ohbus' } }
  }).issues, [23]);
}

if (process.argv.includes('--self-test')) {
  selfTest();
  console.log('Issue-reference self-test passed.');
} else if (process.argv.includes('--event')) {
  const eventPath = process.argv[process.argv.indexOf('--event') + 1];
  const result = validatePullRequest(JSON.parse(fs.readFileSync(eventPath, 'utf8')));
  if (result.exempt) {
    console.log('Dependabot PR: issue reference check exempt.');
  } else if (result.issues.length === 0) {
    console.error('PR coordination failed: add Tracking issue: #N, Refs #N, or Closes #N to the PR.');
    process.exitCode = 1;
  } else {
    console.log(`PR coordination passed: linked issue(s) ${result.issues.map(number => `#${number}`).join(', ')}.`);
  }
}
