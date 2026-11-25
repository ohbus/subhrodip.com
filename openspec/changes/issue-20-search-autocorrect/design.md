# Design

## Context

Search behavior is implemented in the Angular home/results feature and uses local portfolio content.

## Goals / Non-Goals

**Goals:** Provide a small, testable, deterministic correction map.

**Non-Goals:** Fuzzy matching every arbitrary word or adding a search backend.

## Decisions

Prefer a normalized query helper and a short alias map over a dependency; keep suggestion text in localized content where displayed.

## Risks / Trade-offs

Over-correction can be surprising, so rules must be explicit and tested for exact, typo, and unknown inputs.
