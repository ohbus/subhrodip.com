# Design

## Context

The app uses standalone lazy routes, Tailwind utilities, localized data, and assets copied from `public/`.

## Goals / Non-Goals

**Goals:** Add the smallest route and reusable image list needed for screenshots/certificates.

**Non-Goals:** Remote image search, upload, filtering, or a gallery dependency.

## Decisions

Use a standalone feature component and CSS columns or grid utilities for the masonry effect; keep an explicit local asset manifest.

## Risks / Trade-offs

CSS masonry approximations can vary by browser, so the acceptance check must cover supported browsers and preserve reading order.
