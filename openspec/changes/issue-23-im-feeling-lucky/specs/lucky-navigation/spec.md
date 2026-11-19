# Spec Delta

## Purpose

Make the secondary search action useful, deterministic, and safe for keyboard users.

## ADDED Requirements

### Requirement: Deterministic lucky action

The secondary search action SHALL navigate to a documented portfolio destination or resume download without random selection.

#### Scenario: A visitor activates the action

- **WHEN** the user clicks or presses Enter on the secondary search button
- **THEN** the browser reaches the same intended destination every time

### Requirement: Safe navigation semantics

The action SHALL use an accessible name and preserve safe handling for internal versus external destinations.

#### Scenario: The action points outside the app

- **WHEN** the destination is an external resume or project URL
- **THEN** the link uses the existing safe external-navigation convention and communicates its purpose
