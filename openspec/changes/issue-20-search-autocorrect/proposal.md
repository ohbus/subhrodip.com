# Proposal

## Tracking issue

Tracking issue: #20

## Why

Search currently depends on an exact query and provides no help when a visitor makes a small typo.

## What Changes

Add a bounded typo-tolerance behavior for known portfolio terms and cover it with unit tests without changing arbitrary query text.

## Capabilities

### New Capabilities

- `search-autocorrection`: deterministic suggestions for common search typos.

### Modified Capabilities

None.

## Impact

Changes should remain local to search parsing/results and localized labels. No external search service or large dictionary is in scope.
