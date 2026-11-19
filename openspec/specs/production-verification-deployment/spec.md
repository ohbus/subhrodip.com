# Production verification and deployment

## Purpose

Define the production build gates, artifact checks, browser smoke checks, and GitHub Pages deployment path.

## Requirements

### Requirement: Production verification gates

The project SHALL provide reproducible commands for a production build, enforced coverage, production artifact verification, and browser smoke testing.

#### Scenario: The verification pipeline runs

- **WHEN** CI runs the production checks
- **THEN** it installs from the lockfile, builds, runs coverage, verifies the prepared artifact, and executes smoke checks

### Requirement: Master deployment source

The GitHub Pages deployment workflow SHALL deploy only from the `master` push workflow or an explicitly selected rollback ref, while preserving deployment concurrency and least-privilege permissions.

#### Scenario: A master commit is deployed

- **WHEN** a successful `master` deployment completes
- **THEN** the prepared browser artifact is deployed to GitHub Pages and the workflow summary identifies the deployed commit

### Requirement: Deployment-safe coordination

Coordination checks SHALL run with read-only permissions and SHALL not execute untrusted fork code in the issue-reference gate.

#### Scenario: A pull request lacks a tracker

- **WHEN** a non-Dependabot pull request has no issue reference
- **THEN** the dedicated coordination check fails before review can be considered complete
