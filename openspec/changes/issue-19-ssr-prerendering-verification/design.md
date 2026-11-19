# Design

## Context

The project has an Angular browser build, route metadata, and static GitHub Pages deployment but no server or Universal package.

## Goals / Non-Goals

**Goals:** Establish crawler behavior and select the smallest compatible rendering improvement.

**Non-Goals:** Adding a server runtime or framework package before evidence requires it.

## Decisions

Inspect `dist` and deployed HTML first; treat the static Pages constraint as a design input and preserve route fallback handling.

## Risks / Trade-offs

Prerendering can increase build complexity and route maintenance, while client-only route content may be less discoverable; the decision should expose that trade-off.
