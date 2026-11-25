# Design

## Context

People also ask data already exists in the typed results content and is rendered by the results feature.

## Goals / Non-Goals

**Goals:** Add accessible disclosure state with minimal component logic and preserve localized data.

**Non-Goals:** Introducing a UI library or changing unrelated result cards.

## Decisions

Use a native `<button>` and `aria-controls`/`aria-expanded` state; keep answer content in the existing data model.

## Risks / Trade-offs

Multiple open panels are simpler and less disruptive than forcing one open panel; tests should define the chosen behavior.
