# Design

## Context

The historical plan was a surgical data-shape update against an already changed interface.

## Decisions

Use the existing `AppContent` type and update only localized constants; do not add adapters.

## Risks / Trade-offs

All languages must change together or compilation will fail or behavior will diverge.
