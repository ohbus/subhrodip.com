# Search-style portfolio experience

## Purpose

Define the search-inspired home and results experience used to navigate portfolio content.

## Requirements

### Requirement: Search navigation

The home page SHALL accept a query and provide navigation to the search results experience while preserving the search-engine-inspired visual hierarchy.

#### Scenario: A user submits a query

- **WHEN** a user submits the home search form
- **THEN** the application navigates to the results route with the query available to the results view

### Requirement: Search result composition

The results experience SHALL compose metrics, primary results, related searches, people-also-ask content, and a knowledge panel from the active localized content.

#### Scenario: Results are rendered

- **WHEN** the results route loads in a supported language
- **THEN** all visible result sections use that language's typed content and route links

### Requirement: Accessible shared result UI

Shared result components SHALL use semantic links, labels, keyboard-operable controls, and responsive layout behavior.

#### Scenario: A keyboard user navigates results

- **WHEN** focus moves through result controls
- **THEN** the control order and names communicate the destination or action without requiring pointer input
