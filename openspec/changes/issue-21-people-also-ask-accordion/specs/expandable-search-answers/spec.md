# Spec Delta

## Purpose

Make People also ask entries useful with keyboard, pointer, and assistive technology interaction.

## ADDED Requirements

### Requirement: Accessible disclosure

Each People also ask item SHALL use a keyboard-operable control with an accurate expanded state and a programmatic relationship to its answer.

#### Scenario: A visitor opens an answer

- **WHEN** the user activates an item with pointer or keyboard
- **THEN** the answer is revealed, `aria-expanded` reflects the state, and focus remains predictable

### Requirement: Independent localized answers

The accordion SHALL render the active language's answer content and SHALL allow items to open and close without navigating away unless the item explicitly links to a route.

#### Scenario: Language changes

- **WHEN** the active content language changes
- **THEN** visible question and answer text update without losing valid disclosure semantics
