# Design

## Context

The portfolio imports Google Fonts from `src/index.html` and must remain compatible with static GitHub Pages deployment.

## Goals / Non-Goals

**Goals:** Improve font connection and swap behavior and document a repeatable FCP check.

**Non-Goals:** Replacing selected font families or adding a font package.

## Decisions

Use document-level resource hints and provider-supported CSS parameters; add no runtime service or dependency.

## Risks / Trade-offs

Provider CSS can change, so the local fallback stack remains the safety net.
