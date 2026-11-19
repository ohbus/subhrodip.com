# Design

## Context

Assets are copied from `public/` into the Angular browser artifact and referenced by standalone feature templates.

## Goals / Non-Goals

**Goals:** Reduce bytes, preserve visual quality, and make image geometry testable.

**Non-Goals:** Introducing a runtime image CDN or changing unrelated artwork.

## Decisions

Use existing build assets and native `<picture>`/`img` behavior; add no dependency for conversion or lazy loading.

## Risks / Trade-offs

Lossy conversion can affect quality, so representative assets need visual inspection and source fallbacks.
