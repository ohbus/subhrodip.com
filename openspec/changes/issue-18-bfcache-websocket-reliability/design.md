# Design

## Context

The deployed site is a static Angular artifact; the repository has no application-owned production WebSocket service.

## Goals / Non-Goals

**Goals:** Prove history restoration behavior and prevent development-only assumptions from entering production.

**Non-Goals:** Adding reconnect infrastructure for a service the site does not use.

## Decisions

Use browser smoke checks and a minimal lifecycle hook only if current components demonstrate stale state after BFCache restoration.

## Risks / Trade-offs

Over-handling `pageshow` can reset user state, so restoration must be idempotent and scoped to observed failures.
