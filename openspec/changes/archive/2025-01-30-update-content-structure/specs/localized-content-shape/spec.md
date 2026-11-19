# Spec Delta

## Purpose

Keep People also ask content typed and navigable in every supported language.

## ADDED Requirements

### Requirement: People also ask items

Each localized results content object SHALL expose People also ask items with a label and internal router link.

#### Scenario: Results render questions

- **WHEN** results render in English, Bengali, or German
- **THEN** each question uses the matching localized label and navigates to its declared route
