# Design

## Context

`src/app/app.routes.ts` already uses `loadComponent` for results and portfolio feature pages.

## Goals / Non-Goals

**Goals:** Audit production output and preserve or tighten existing boundaries.

**Non-Goals:** Reorganizing features or adding a bundle-analysis dependency.

## Decisions

Use Angular production output and a small assertion over route source and emitted chunks; keep the router structure intact.

## Risks / Trade-offs

Chunk names can change with Angular upgrades, so assertions should target route ownership and budgets rather than hashes.
