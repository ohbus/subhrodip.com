# Design Doc: Update Content Structure with Recommendations

This document outlines the design for adding a new `recommendations` object to the localized content files of the subhrodip.com application.

## Problem Statement
The application requires a new section in the search results to display professional recommendations. The `AppContent` interface has already been updated to include this structure, but the actual data files (`en.ts`, `bn.ts`, `de.ts`) are missing the implementation.

## Proposed Changes

### 1. Data Structure
The `recommendations` object will be added to the `results` section of `AppContent` in each localized file.

```typescript
recommendations: {
  title: string;
  items: {
    name: string;
    role: string;
    text: string;
    avatarUrl: string;
    linkedinUrl: string;
  }[];
}
```

### 2. Localization
- **English (EN):** Title: 'Recommendations'
- **Bengali (BN):** Title: 'সুপারিশসমূহ'
- **German (DE):** Title: 'Empfehlungen'

### 3. Implementation Details
The object will be inserted surgically into the `results` block of the following files:
- `src/app/data/en.ts`
- `src/app/data/bn.ts`
- `src/app/data/de.ts`

Placeholder values will be used for the first item as requested:
- `name`: '[Colleague Name]'
- `role`: '[Colleague Role]'
- `text`: '[Recommendation Text]'
- `avatarUrl`: 'https://www.google.com/s2/favicons?sz=128&domain=linkedin.com'
- `linkedinUrl`: 'https://www.linkedin.com/in/ohbusm'

## Success Criteria
- [ ] All three files contain the new `recommendations` object.
- [ ] The structure matches the `AppContent` interface exactly.
- [ ] Localized titles are correct.
- [ ] Placeholders are correctly populated.
- [ ] No syntax errors in the TypeScript files.
