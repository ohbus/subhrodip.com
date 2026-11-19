# Spec Delta

## Purpose

Help visitors recover from common typos while keeping search navigation deterministic and transparent.

## ADDED Requirements

### Requirement: Bounded typo tolerance

The search experience SHALL suggest or normalize only known portfolio terms within a documented bounded edit-distance or alias rule.

#### Scenario: A known typo is entered

- **WHEN** a query matches a supported typo rule
- **THEN** the results view offers the corresponding canonical term and preserves the user's ability to continue with the original query

### Requirement: Exact and unknown queries

Exact matches and unknown queries SHALL remain usable without an exception or silent navigation to unrelated content.

#### Scenario: No correction exists

- **WHEN** a query is not covered by the correction rules
- **THEN** the normal results experience renders without a correction
