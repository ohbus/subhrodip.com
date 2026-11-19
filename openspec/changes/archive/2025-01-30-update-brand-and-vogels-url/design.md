# Design

## Context

The historical plan called for surgical static-data replacements.

## Decisions

Keep the existing typed content structure and update only the three localized data files.

## Risks / Trade-offs

Incorrect localized edits could affect links or compile-time content shape; the build is the regression check.
