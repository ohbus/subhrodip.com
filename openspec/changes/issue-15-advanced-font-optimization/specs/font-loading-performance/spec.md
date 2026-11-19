# Spec Delta

## Purpose

Make portfolio font loading explicit and measurable without changing the visual font choices.

## ADDED Requirements

### Requirement: Font loading behavior

The application SHALL preconnect only to the font origins it uses and SHALL request fonts with explicit swap-friendly behavior.

#### Scenario: The document loads

- **WHEN** the browser parses `src/index.html`
- **THEN** required font origins are preconnected and font CSS uses `font-display: swap`

### Requirement: FCP verification

Production verification SHALL include a browser check confirming that first contentful paint is not blocked by font availability.

#### Scenario: Fonts are slow or unavailable

- **WHEN** a font request is delayed
- **THEN** fallback text renders and the verification records observed FCP behavior
