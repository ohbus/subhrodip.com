# Subhrodip.com - Project Improvement Roadmap

This document serves as a comprehensive, step-by-step guide for developers (including interns and junior engineers) to improve the architecture, design, content, and feature set of the `subhrodip.com` Angular portfolio. 

The project is styled as a Google Search engine. Every change made should respect this core theme, prioritizing clean UI, instantaneous feedback, and structural consistency.

---

## Milestone 1: Architectural & Code Quality Improvements (Data-Driven Migration)

**Objective:** Transition the application from hardcoded HTML templates to a dynamic, data-driven architecture using reusable Angular components and semantic CSS.

### Task 1.1: Componentize Search Results
Currently, every search result (the title, link, snippet, and icon) is manually copy-pasted in pages like `results.html`, `sde.html`, and `education.html`.
- **Action:** 
  1. Generate a new standalone component: `ng g c components/shared/search-result`.
  2. Define an interface `SearchResultItem` in `src/app/models/search-result.model.ts` containing properties: `title`, `url`, `displayUrl`, `description`, `icon`, and optional `metadata` (like tags or dates).
  3. Create an `@Input() data!: SearchResultItem` binding in the new component.
  4. Move the repeated HTML structure (the group div containing the icon, link, and paragraph) into `search-result.html`.
- **Acceptance Criteria:** A developer can render a search result solely by passing a JSON object to `<app-search-result [data]="item"></app-search-result>`.

### Task 1.2: Componentize the Knowledge Panel
The right-hand sidebar ("Knowledge Panel") is duplicated across multiple routes.
- **Action:**
  1. Generate a new standalone component: `ng g c components/shared/knowledge-panel`.
  2. Define `@Input()` properties for: `title`, `subtitle`, `description`, `heroIcon`, `actionButton` (text and link), and an array of `infoRows` (key-value pairs like "Education: UEM").
  3. Replace the `<aside>` blocks in all page components with `<app-knowledge-panel [config]="panelConfig"></app-knowledge-panel>`.
- **Acceptance Criteria:** Updating the design of the Knowledge Panel in one file instantly updates it across the Home, SDE, CDE, Education, and Skills pages.

### Task 1.3: Centralize Data Sources
- **Action:** Create files in `src/app/data/` (e.g., `projects.data.ts`, `education.data.ts`). Move all hardcoded text strings from the HTML files into exported constant arrays of `SearchResultItem` objects.
- **Acceptance Criteria:** To add a new project or job experience, a developer only needs to edit a TypeScript `.ts` array; no HTML files need to be touched.

### Task 1.4: Semantic Tailwind Theme Mapping
HTML templates contain hardcoded hex colors (e.g., `text-[#1a0dab]`, `bg-[#f1f3f4]`).
- **Action:** Open `tailwind.config.js` and extend the `theme.colors` object.
  - Map `#1a0dab` to `search-link`.
  - Map `#4d5156` to `search-snippet`.
  - Map `#dfe1e5` to `search-border`.
  - Map `#f8f9fa` to `search-bg-hover`.
  - Replace all arbitrary hex values in the HTML with these semantic classes (e.g., `text-search-link`).
- **Acceptance Criteria:** Zero arbitrary hex codes (e.g., `[#...]`) remain in the HTML templates for standard text, borders, or backgrounds.

---

## Milestone 2: Design, UI/UX & Theme Fidelity

**Objective:** Elevate the user experience to be indistinguishable from a real search engine, ensuring responsive design, accessibility, and modern UI practices.

### Task 2.1: Mobile Layout for Knowledge Panel
Currently, the Knowledge Panel is hidden on mobile devices (`hidden xl:block`). On a real search engine, knowledge panels appear at the top or interleaved in results on small screens.
- **Action:** Remove the `hidden xl:block` classes. Instead, use CSS Grid or Flexbox order properties (e.g., `order-first xl:order-last`) to move the `<aside>` to the top of the main column on screens smaller than `xl`, while keeping it on the right for desktop.
- **Acceptance Criteria:** Mobile users can see the Knowledge Panel content natively without horizontal scrolling or broken layouts.

### Task 2.2: Implement Dark Mode
- **Action:**
  1. Configure Tailwind for class-based or media-query-based dark mode in `tailwind.config.js` (`darkMode: 'class'`).
  2. Add `dark:` variants to the semantic colors defined in Task 1.4 (e.g., `dark:bg-[#202124]`, `dark:text-[#8ab4f8]`, `dark:border-[#3c4043]`).
  3. Provide a toggle switch in the `<app-search-header>` (the settings gear icon) to manually switch themes, or rely on system preferences (`prefers-color-scheme`).
- **Acceptance Criteria:** The application successfully renders a dark, low-contrast UI when toggled, matching the official Google Search dark theme.

### Task 2.3: Search Term Highlighting (Angular Pipe)
- **Action:**
  1. Generate a pipe: `ng g p pipes/highlight`.
  2. The pipe should accept text and a search query string. It must use a case-insensitive Regex to find the search query within the text and wrap it in `<strong>` tags.
  3. Use the pipe on the descriptions in the `search-result.html` template (`[innerHTML]="item.description | highlight:currentSearchQuery"`).
- **Acceptance Criteria:** If a user searches for "Java", the word "Java" appears bolded inside the snippet descriptions of the search results.

### Task 2.4: Loading Skeletons
- **Action:** Create an `<app-skeleton-result>` component that mimics the layout of a search result using pulsing gray boxes (`animate-pulse bg-gray-200`). When routing between tabs (e.g., from All to Projects), intentionally delay data rendering by 300-500ms to show the skeletons.
- **Acceptance Criteria:** Users experience a brief "loading" state when navigating, enhancing the psychological illusion of a real database query.

---

## Milestone 3: Content & Copywriting Refinements

**Objective:** Make the static text feel dynamic and interactive.

### Task 3.1: Dynamic Result Metrics
The metric "About X results (0.YZ seconds)" is hardcoded.
- **Action:**
  1. Bind the count metric to `[resultsArray].length`.
  2. Create a small utility function that generates a random float between `0.10` and `0.65` on `ngOnInit`.
  3. Render it dynamically: `About {{ results.length }} results ({{ randomTime }} seconds)`.
- **Acceptance Criteria:** The results count matches the actual data array size, and the query time changes randomly on every page load.

### Task 3.2: Expandable "People also ask" Accordion
Currently, these are simple router links.
- **Action:**
  1. Refactor the UI to use the `<details>` and `<summary>` HTML tags or Angular state variables (`isExpanded: boolean`).
  2. When clicked, instead of navigating, expand the div to show a 2-3 sentence answer snippet, followed by a "Search for: [Link]" button.
- **Acceptance Criteria:** Clicking a question expands an inline answer smoothly without navigating away from the current page.

### Task 3.3: Rotating Knowledge Panel Quotes
- **Action:** 
  1. Create an array of 5-10 famous software engineering quotes in a data file.
  2. In the `KnowledgePanelComponent`'s `ngOnInit`, select a random quote using `Math.random()`.
  3. Bind this random quote to the UI overlay inside the hero image block.
- **Acceptance Criteria:** A different quote appears in the Knowledge Panel upon consecutive page refreshes.

---

## Milestone 4: Feature Expansion & Easter Eggs

**Objective:** Add engaging, interactive features that showcase technical prowess and humor.

### Task 4.1: "Images" Tab implementation
- **Action:**
  1. Add a new route `/images` and a corresponding `ImagesComponent`.
  2. Add the "Images" link to the horizontal scrollbar in `<app-search-header>`.
  3. Implement a CSS Masonry layout (using CSS columns or Flexbox) to display a grid of project screenshots, diagrams, or certificates.
- **Acceptance Criteria:** Clicking "Images" navigates to a new view that displays a dense, responsive grid of visual assets, mirroring Google Images.

### Task 4.2: "Did you mean?" Typo Fallback
- **Action:** 
  1. Integrate a basic Levenshtein distance algorithm or string similarity function.
  2. If a user types a query (e.g., "Jaba") that yields 0 results, compare it against a list of known valid keywords (e.g., "Java", "Python", "DevOps").
  3. Display a red "Did you mean: *Java*?" prompt at the top of the results page.
- **Acceptance Criteria:** Incorrect searches provide a clickable, corrected suggestion that re-triggers the search with the right term.

### Task 4.3: Terminal / CSS Easter Eggs
- **Action:**
  1. Listen to the global search input state.
  2. If the user types exactly `"do a barrel roll"`, inject a CSS class `animate-spin` onto the `<body>` tag for 2 seconds.
  3. If the user types exactly `"sudo rm -rf /"`, trigger a full-screen black overlay with green falling "Matrix" text or a mock kernel panic screen for 3 seconds before "rebooting" back to the portfolio.
- **Acceptance Criteria:** Entering specific secret phrases triggers unique, fun animations without breaking the core application state.