# Proposal

## Tracking issue

Tracking issue: #15

## Why

The current Google Fonts links already request `display=swap`, but the configured font families do not include explicit generic fallback fonts. Delayed or unavailable web fonts can therefore produce inconsistent fallback text metrics.

## What Changes

Retain the existing preconnects and `display=swap` behavior, add explicit generic fallback stacks, and verify FCP in production output.

## Capabilities

### New Capabilities

- `font-loading-performance`: predictable web-font loading and FCP verification.

### Modified Capabilities

None.

## Impact

Likely changes are limited to `src/index.html`, global styles, and production verification evidence.
