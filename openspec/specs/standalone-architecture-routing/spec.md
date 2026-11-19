# Standalone architecture and routing

## Purpose

Define the application shell, route ownership, and lazy feature boundaries for the Angular portfolio.

## Requirements

### Requirement: Standalone feature architecture

The application SHALL use Angular standalone components with shared layout components under `core` and `shared`, route-level pages under `features`, and typed content under `data` and `models`.

#### Scenario: Application starts from the standalone shell

- **WHEN** the production browser bundle starts
- **THEN** the root application renders the shared shell without an `NgModule` boundary

### Requirement: Lazy route boundaries

Feature routes SHALL load route-level components with Angular lazy loading, while the home route MAY remain eager for the initial experience.

#### Scenario: A secondary page is opened

- **WHEN** a user navigates to a feature route such as `/experience` or `/skills`
- **THEN** Angular loads that feature component on demand and renders its route metadata

### Requirement: Route metadata

Every indexable portfolio route SHALL declare title and description metadata that the SEO service can apply to the document.

#### Scenario: Route metadata changes

- **WHEN** navigation completes on an indexable route
- **THEN** the document title and description reflect that route's metadata
