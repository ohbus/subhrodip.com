# Spec Delta

## Purpose

Reduce image transfer cost while preserving visual quality and stable layout.

## ADDED Requirements

### Requirement: Compressed image delivery

Displayed portfolio images SHALL use an appropriate compressed format when browser support and source quality allow it, with a safe fallback.

#### Scenario: An optimized asset is rendered

- **WHEN** a page displays a converted image
- **THEN** the browser receives the optimized source and a valid fallback remains available

### Requirement: Stable image geometry

Every displayed image SHALL provide intrinsic or explicit width and height information sufficient to reserve its layout space.

#### Scenario: An image request is delayed

- **WHEN** the image has not finished loading
- **THEN** reserved geometry prevents avoidable cumulative layout shift
