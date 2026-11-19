# Proposal

## Tracking issue

Tracking issue: #16

## Why

Raster assets can increase transfer size and image layout shift.

## What Changes

Audit public images, convert only worthwhile assets to WebP or AVIF, update references, and verify dimensions and CLS behavior.

## Capabilities

### New Capabilities

- `optimized-image-assets`: compressed, dimensioned portfolio images.

### Modified Capabilities

None.

## Impact

Changes may touch `public/`, component templates, and production verification scripts. Existing URLs must remain valid or receive a deliberate fallback.
