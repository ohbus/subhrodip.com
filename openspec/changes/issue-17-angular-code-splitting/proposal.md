# Proposal

## Tracking issue

Tracking issue: #17

## Why

The application uses lazy route components, but generated chunks and eager imports need an explicit audit.

## What Changes

Measure the production bundle, verify secondary route boundaries, and remove only accidental eager imports found by the audit.

## Capabilities

### New Capabilities

- `route-code-splitting`: measurable lazy boundaries for feature routes.

### Modified Capabilities

None.

## Impact

Expected changes are limited to route imports, build verification, and focused tests. Route URLs remain stable.
