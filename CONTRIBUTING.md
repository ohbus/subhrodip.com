# Contributing

GitHub Issues are the canonical work tracker. OpenSpec is the committed requirements,
design, and task record for work that needs more than a trivial change.

## Before opening a pull request

- Choose or create the GitHub issue that owns the work.
- For planned work, use the matching directory under `openspec/changes/` and keep its
  `proposal.md`, `specs/`, `design.md`, and `tasks.md` current.
- Keep the issue body aligned with the OpenSpec acceptance criteria.

## Pull request requirements

The PR body must contain `Tracking issue: #N`, `Refs #N`, or a GitHub closing keyword
such as `Closes #N`. Dependabot PRs are exempt. Include the OpenSpec change path when
one exists, test/build results, screenshots for UI changes, and deployment or content
impact.

Use the existing Angular standalone-component and feature-based structure. Run the
smallest relevant checks locally, then run the production verification commands before
requesting review:

```bash
npm run build
npm run test:coverage
npm run verify:production
npm run smoke:production
openspec validate --all --strict
```

For local GitHub Actions workflow linting, install `actionlint` with Homebrew and run it:

```bash
brew install actionlint
actionlint
```

## Workflow

Move work through the linked GitHub Project from Todo to In Progress, In Review, and
Done. Merged PRs should use closing keywords so GitHub closes the issue and native
Project automation can move it to Done.
