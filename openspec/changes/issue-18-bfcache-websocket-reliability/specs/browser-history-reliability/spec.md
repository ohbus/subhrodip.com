# Spec Delta

## Purpose

Ensure browser history restoration does not leave the portfolio in a stale or broken state.

## ADDED Requirements

### Requirement: BFCache restoration

The application SHALL remain usable after a `pageshow` event restores a document from the back/forward cache.

#### Scenario: A cached page is restored

- **WHEN** the browser returns a route with `event.persisted === true`
- **THEN** the active route, language content, and interactive controls remain usable without a full reload

### Requirement: Connection boundary

Production code SHALL not depend on a development WebSocket or live-reload connection, and browser-only connection lifecycle SHALL clean up on page suspension.

#### Scenario: The page leaves the foreground

- **WHEN** the document is frozen or unloaded
- **THEN** no development connection is required for the deployed app to render or navigate
