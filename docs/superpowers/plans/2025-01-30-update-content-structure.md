# Update App Content Structure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update `src/app/data/en.ts`, `src/app/data/bn.ts`, and `src/app/data/de.ts` to match the new `peopleAlsoAsk` structure in the `AppContent` interface.

**Architecture:** Surgical updates to constant data objects to align with TypeScript interface requirements.

**Tech Stack:** TypeScript, Angular

---

### Task 1: Update English Content (en.ts)

**Files:**
- Modify: `src/app/data/en.ts`

- [ ] **Step 1: Update peopleAlsoAsk in EN_CONTENT**

```typescript
<<<<
    peopleAlsoAsk: {
      title: 'People also ask',
      study: 'Where did Subhrodip Mohanta study?',
      tech: 'What technologies does Subhrodip Mohanta use?'
    },
====
    peopleAlsoAsk: {
      title: 'People also ask',
      items: [
        { label: 'Where did Subhrodip Mohanta study?', routerLink: '/education' },
        { label: 'What technologies does Subhrodip Mohanta use?', routerLink: '/skills' }
      ]
    },
>>>>
```

- [ ] **Step 2: Verify compilation**
Run: `npm run build` (or similar check)

### Task 2: Update Bengali Content (bn.ts)

**Files:**
- Modify: `src/app/data/bn.ts`

- [ ] **Step 1: Update peopleAlsoAsk in BN_CONTENT**

```typescript
<<<<
    peopleAlsoAsk: {
      title: 'মানুষ আরও জানতে চায়',
      study: 'শুভ্রদীপ মহান্ত কোথায় পড়াশোনা করেছেন?',
      tech: 'শুভ্রদীপ মহান্ত কোন কোন প্রযুক্তি ব্যবহার করেন?'
    },
====
    peopleAlsoAsk: {
      title: 'মানুষ আরও জানতে চায়',
      items: [
        { label: 'শুভ্রদীপ মহান্ত কোথায় পড়াশোনা করেছেন?', routerLink: '/education' },
        { label: 'শুভ্রদীপ মহান্ত কোন কোন প্রযুক্তি ব্যবহার করেন?', routerLink: '/skills' }
      ]
    },
>>>>
```

- [ ] **Step 2: Verify compilation**
Run: `npm run build`

### Task 3: Update German Content (de.ts)

**Files:**
- Modify: `src/app/data/de.ts`

- [ ] **Step 1: Update peopleAlsoAsk in DE_CONTENT**

```typescript
<<<<
    peopleAlsoAsk: {
      title: 'Nutzer fragen auch',
      study: 'Wo hat Subhrodip Mohanta studiert?',
      tech: 'Welche Technologien nutzt Subhrodip Mohanta?'
    },
====
    peopleAlsoAsk: {
      title: 'Nutzer fragen auch',
      items: [
        { label: 'Wo hat Subhrodip Mohanta studiert?', routerLink: '/education' },
        { label: 'Welche Technologien nutzt Subhrodip Mohanta?', routerLink: '/skills' }
      ]
    },
>>>>
```

- [ ] **Step 2: Verify compilation**
Run: `npm run build`
