# Spec Delta

## Purpose

Make crawler-visible rendering and the SSR/prerendering decision verifiable for the static deployment.

## ADDED Requirements

### Requirement: Rendering decision

The project SHALL record whether static prerendering, client-side rendering, or a hybrid is the supported production strategy based on built artifact evidence.

#### Scenario: The production artifact is inspected

- **WHEN** a crawler requests the deployed root and a representative route
- **THEN** validation identifies available title, description, canonical, and meaningful content before or after script execution

### Requirement: SEO validation

Production verification SHALL check route metadata and indexability rules for the chosen rendering strategy.

#### Scenario: A non-indexable route is checked

- **WHEN** crawler validation visits an internal test or redirect route
- **THEN** its `noindex` behavior is preserved and is not treated as public portfolio content
