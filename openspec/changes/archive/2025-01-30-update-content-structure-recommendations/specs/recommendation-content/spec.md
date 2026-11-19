# Spec Delta

## Purpose

Represent localized professional recommendations in the results content shape.

## ADDED Requirements

### Requirement: Recommendation data

Each supported language SHALL provide a recommendations title and items matching the typed name, role, text, avatar, and LinkedIn fields.

#### Scenario: Recommendations render

- **WHEN** the results view renders recommendation content
- **THEN** the object shape is complete and localized without a TypeScript mismatch
