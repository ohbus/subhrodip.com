# Update Content Structure with Recommendations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a new `recommendations` object to the `results` section of localized content files (`en.ts`, `bn.ts`, `de.ts`) to match the `AppContent` interface.

**Architecture:** Surgical update of TypeScript data files using the `replace` tool to insert the new object into the existing `results` block.

**Tech Stack:** TypeScript, Angular

---

### Task 1: Update English Content (EN)

**Files:**
- Modify: `src/app/data/en.ts`

- [ ] **Step 1: Add recommendations to EN_CONTENT**

```typescript
<<<<
    peopleAlsoAsk: {
      title: 'People also ask',
      items: [
        { label: 'Where did Subhrodip Mohanta study?', routerLink: '/education' },
        { label: 'What technologies does Subhrodip Mohanta use?', routerLink: '/skills' }
      ]
    },
    knowledgePanel: {
====
    peopleAlsoAsk: {
      title: 'People also ask',
      items: [
        { label: 'Where did Subhrodip Mohanta study?', routerLink: '/education' },
        { label: 'What technologies does Subhrodip Mohanta use?', routerLink: '/skills' }
      ]
    },
    recommendations: {
      title: 'Recommendations',
      items: [
        {
          name: '[Colleague Name]',
          role: '[Colleague Role]',
          text: '[Recommendation Text]',
          avatarUrl: 'https://www.google.com/s2/favicons?sz=128&domain=linkedin.com',
          linkedinUrl: 'https://www.linkedin.com/in/ohbusm'
        }
      ]
    },
    knowledgePanel: {
>>>>
```

- [ ] **Step 2: Verify English file compiles**
Run: `npx tsc src/app/data/en.ts --noEmit --esModuleInterop --skipLibCheck`

### Task 2: Update Bengali Content (BN)

**Files:**
- Modify: `src/app/data/bn.ts`

- [ ] **Step 1: Add recommendations to BN_CONTENT**

```typescript
<<<<
    peopleAlsoAsk: {
      title: 'মানুষ আরও জানতে চায়',
      items: [
        { label: 'শুভ্রদীপ মহান্ত কোথায় পড়াশোনা করেছেন?', routerLink: '/education' },
        { label: 'শুভ্রদীপ মহান্ত কোন কোন প্রযুক্তি ব্যবহার করেন?', routerLink: '/skills' }
      ]
    },
    knowledgePanel: {
====
    peopleAlsoAsk: {
      title: 'মানুষ আরও জানতে চায়',
      items: [
        { label: 'শুভ্রদীপ মহান্ত কোথায় পড়াশোনা করেছেন?', routerLink: '/education' },
        { label: 'শুভ্রদীপ মহান্ত কোন কোন প্রযুক্তি ব্যবহার করেন?', routerLink: '/skills' }
      ]
    },
    recommendations: {
      title: 'সুপারিশসমূহ',
      items: [
        {
          name: '[Colleague Name]',
          role: '[Colleague Role]',
          text: '[Recommendation Text]',
          avatarUrl: 'https://www.google.com/s2/favicons?sz=128&domain=linkedin.com',
          linkedinUrl: 'https://www.linkedin.com/in/ohbusm'
        }
      ]
    },
    knowledgePanel: {
>>>>
```

- [ ] **Step 2: Verify Bengali file compiles**
Run: `npx tsc src/app/data/bn.ts --noEmit --esModuleInterop --skipLibCheck`

### Task 3: Update German Content (DE)

**Files:**
- Modify: `src/app/data/de.ts`

- [ ] **Step 1: Add recommendations to DE_CONTENT**

```typescript
<<<<
    peopleAlsoAsk: {
      title: 'Nutzer fragen auch',
      items: [
        { label: 'Wo hat Subhrodip Mohanta studiert?', routerLink: '/education' },
        { label: 'Welche Technologien nutzt Subhrodip Mohanta?', routerLink: '/skills' }
      ]
    },
    knowledgePanel: {
====
    peopleAlsoAsk: {
      title: 'Nutzer fragen auch',
      items: [
        { label: 'Wo hat Subhrodip Mohanta studiert?', routerLink: '/education' },
        { label: 'Welche Technologien nutzt Subhrodip Mohanta?', routerLink: '/skills' }
      ]
    },
    recommendations: {
      title: 'Empfehlungen',
      items: [
        {
          name: '[Colleague Name]',
          role: '[Colleague Role]',
          text: '[Recommendation Text]',
          avatarUrl: 'https://www.google.com/s2/favicons?sz=128&domain=linkedin.com',
          linkedinUrl: 'https://www.linkedin.com/in/ohbusm'
        }
      ]
    },
    knowledgePanel: {
>>>>
```

- [ ] **Step 2: Verify German file compiles**
Run: `npx tsc src/app/data/de.ts --noEmit --esModuleInterop --skipLibCheck`

### Task 4: Final Validation

- [ ] **Step 1: Run full project build to ensure no regressions**
Run: `npm run build`
