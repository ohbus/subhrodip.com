# Localized content and language selection

## Purpose

Define the typed English, Bengali, and German content model and the browser language-selection behavior.

## Requirements

### Requirement: Supported localized content

The content model SHALL expose complete English, Bengali, and German content with the same typed shape for shared UI and feature pages.

#### Scenario: A supported language is selected

- **WHEN** a user selects `en`, `bn`, or `de`
- **THEN** the matching localized content is rendered without changing route structure

### Requirement: Persisted language preference

The content service SHALL restore a valid stored language preference in the browser and SHALL ignore invalid or unavailable values.

#### Scenario: The browser has a saved preference

- **WHEN** the application starts with a valid `pref_lang` value
- **THEN** that language is selected before the user interacts with the picker

### Requirement: Safe lazy language loading

Non-default language modules SHALL load lazily, and a failed or stale request SHALL not replace newer content or prevent the application from rendering.

#### Scenario: A language request fails

- **WHEN** a lazy content import rejects
- **THEN** the service logs the failure and restores the last successfully loaded language
