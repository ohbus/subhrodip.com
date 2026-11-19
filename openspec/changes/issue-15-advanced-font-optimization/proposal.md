# Proposal

## Tracking issue

Tracking issue: #15

## Why

The current Google Fonts links can delay first paint and do not explicitly control font swap behavior.

## What Changes

Retain required preconnects, make font-display behavior explicit, and verify FCP in production output.

## Capabilities

### New Capabilities

- `font-loading-performance`: predictable web-font loading and FCP verification.

### Modified Capabilities

None.

## Impact

Likely changes are limited to `src/index.html`, global styles, and production verification evidence.
