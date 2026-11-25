# Proposal

## Tracking issue

Tracking issue: #23

## Why

The secondary home action already calls `onExperience()` and navigates deterministically to the declared `/experience` route. The change should confirm and test that behavior instead of rewiring an existing destination.

## What Changes

Retain `/experience` as the documented destination and add focused navigation coverage for click and keyboard activation.

## Capabilities

### New Capabilities

- `lucky-navigation`: deterministic secondary-search navigation.

### Modified Capabilities

None.

## Impact

Changes are limited to the home component, route or external resume target, and focused navigation tests.
