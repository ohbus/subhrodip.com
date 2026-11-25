# Spec Delta

## Purpose

Keep secondary portfolio routes out of the initial JavaScript bundle and make that boundary verifiable.

## ADDED Requirements

### Requirement: Lazy secondary routes

Secondary feature routes SHALL use lazy component or route loading and SHALL not be imported eagerly by the application shell.

#### Scenario: The initial bundle is built

- **WHEN** `npm run build` creates the production artifact
- **THEN** secondary page code is emitted as lazy chunks rather than folded into the initial bundle

### Requirement: Bundle evidence

Verification SHALL record route-to-chunk evidence and fail if a targeted route becomes eager without an intentional update.

#### Scenario: A route boundary regresses

- **WHEN** a targeted feature is imported by the shell
- **THEN** focused verification reports the regression before deployment
