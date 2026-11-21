import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { issueNumbers } from './check-issue-reference.mjs';

export function hasIssueOrPullRequest(message, pulls) {
  return issueNumbers(message).length > 0 || pulls.some(pull => Number.isInteger(pull.number));
}

async function associatedPulls(repository, sha, token) {
  const response = await fetch(`https://api.github.com/repos/${repository}/commits/${sha}/pulls`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  if (!response.ok) throw new Error(`GitHub commit lookup failed with HTTP ${response.status}.`);
  return response.json();
}

const isMainModule =
  process.argv[1] !== undefined && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

async function main() {
  if (process.argv.includes('--self-test')) {
    assert.equal(hasIssueOrPullRequest('Fixes #15', []), true);
    assert.equal(hasIssueOrPullRequest('Direct maintenance', [{ number: 42 }]), true);
    assert.equal(hasIssueOrPullRequest('Direct maintenance', []), false);
    console.log('Master-reference self-test passed.');
    return;
  }

  const eventPath = process.argv[process.argv.indexOf('--event') + 1];
  const event = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
  if (event.repository == null || event.after == null) return;
  const pulls = await associatedPulls(event.repository.full_name, event.after, process.env.GITHUB_TOKEN);
  if (!hasIssueOrPullRequest(event.head_commit?.message ?? '', pulls)) {
    throw new Error('Master coordination failed: direct commits must reference an issue or associated PR.');
  }
  console.log(`Master coordination passed for ${event.after}.`);
}

if (isMainModule) {
  main().catch(error => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
