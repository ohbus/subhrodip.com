# Update Brand and Werner Vogels URL Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update `common.brand` in `bn.ts` for consistency and update Werner Vogels' URL in `en.ts`, `bn.ts`, and `de.ts` to his personal blog.

**Architecture:** Surgical updates to static data files using the `replace` tool.

**Tech Stack:** Angular (TypeScript data files)

---

### Task 1: Update Brand and Werner Vogels URL in `src/app/data/bn.ts`

**Files:**
- Modify: `src/app/data/bn.ts`

- [ ] **Step 1: Update brand name**

```typescript
// Replace:
    name: 'শুভ্রদীপ মহান্ত',
    brand: 'শুভ্রদীপ',
    roles: [
// With:
    name: 'শুভ্রদীপ মহান্ত',
    brand: 'Subhrodip',
    roles: [
```

- [ ] **Step 2: Update Werner Vogels URL**

```typescript
// Replace:
    related: {
      title: 'যাদের অনুসরণ করা যেতে পারে',
      items: [
        { label: 'Werner Vogels', url: 'https://www.linkedin.com/in/wernervogels/' },
        { label: 'Kelsey Hightower', url: 'https://www.linkedin.com/in/kelseyhightower/' },
// With:
    related: {
      title: 'যাদের অনুসরণ করা যেতে পারে',
      items: [
        { label: 'Werner Vogels', url: 'https://www.allthingsdistributed.com/' },
        { label: 'Kelsey Hightower', url: 'https://www.linkedin.com/in/kelseyhightower/' },
```

### Task 2: Update Werner Vogels URL in `src/app/data/en.ts`

**Files:**
- Modify: `src/app/data/en.ts`

- [ ] **Step 1: Update Werner Vogels URL**

```typescript
// Replace:
    related: {
      title: 'People to follow',
      items: [
        { label: 'Werner Vogels', url: 'https://www.linkedin.com/in/wernervogels/' },
        { label: 'Kelsey Hightower', url: 'https://www.linkedin.com/in/kelseyhightower/' },
// With:
    related: {
      title: 'People to follow',
      items: [
        { label: 'Werner Vogels', url: 'https://www.allthingsdistributed.com/' },
        { label: 'Kelsey Hightower', url: 'https://www.linkedin.com/in/kelseyhightower/' },
```

### Task 3: Update Werner Vogels URL in `src/app/data/de.ts`

**Files:**
- Modify: `src/app/data/de.ts`

- [ ] **Step 1: Update Werner Vogels URL**

```typescript
// Replace:
    related: {
      title: 'Personen, denen man folgen sollte',
      items: [
        { label: 'Werner Vogels', url: 'https://www.linkedin.com/in/wernervogels/' },
        { label: 'Kelsey Hightower', url: 'https://www.linkedin.com/in/kelseyhightower/' },
// With:
    related: {
      title: 'Personen, denen man folgen sollte',
      items: [
        { label: 'Werner Vogels', url: 'https://www.allthingsdistributed.com/' },
        { label: 'Kelsey Hightower', url: 'https://www.linkedin.com/in/kelseyhightower/' },
```

### Task 4: Verification

- [ ] **Step 1: Verify changes in all files**
- [ ] **Step 2: Run build to ensure no syntax errors**

Run: `npm run build`
Expected: Success
