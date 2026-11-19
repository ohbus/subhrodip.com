# Design

## Context

The home view contains the primary search action and a secondary curiosity/lucky action, while redirects and external links already have established patterns.

## Goals / Non-Goals

**Goals:** Choose one stable destination and cover the activation path.

**Non-Goals:** Random recommendation algorithms or a new navigation service.

## Decisions

Prefer an existing internal project route or known resume target; use Angular router navigation for internal destinations and the existing anchor convention for external ones.

## Risks / Trade-offs

The destination is product-facing, so changing it later should update the issue/spec together with the test expectation.
