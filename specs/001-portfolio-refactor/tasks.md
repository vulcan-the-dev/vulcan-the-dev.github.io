# Tasks: Portfolio Refactor & Enhancement

**Input**: Design documents from `/specs/001-portfolio-refactor/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialisation, design tokens, shared types

- [X] T001 Create shared type definitions (Project, SocialLink, NavigationItem interfaces) in lib/types.ts
- [X] T002 [P] Define CSS custom properties for design tokens (colours, spacing) using Tailwind v4 @theme in app/globals.css
- [X] T003 [P] Add smooth scroll behaviour and prefers-reduced-motion override in app/globals.css
- [X] T004 [P] Create navigation data file with section anchors in data/navigation.ts
- [X] T005 [P] Create social links data file with GitHub link in data/social.ts
- [X] T006 Refactor data/projects.ts to import Project type from lib/types.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Update root layout and page composition to support new component structure

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T007 Update app/layout.tsx with comprehensive metadata (Open Graph, Twitter Card, canonical URL, keywords)
- [X] T008 Update app/page.tsx to import and compose Header component alongside existing sections
- [X] T009 Add focus-visible utility styles and selection styling to app/globals.css

**Checkpoint**: Foundation ready — user story implementation can now begin

---

## Phase 3: User Story 1 — The Hero (Priority: P1) 🎯 MVP

**Goal**: Dramatic full-viewport hero section that communicates identity in 3 seconds

**Independent Test**: Load homepage at 320px and 2560px. Hero fills viewport with "Vulcan" h1, "The Adversary" subtitle, tagline, and animated scroll chevron. All text legible, centred, accent orange used deliberately.

### Implementation for User Story 1

- [X] T010 [US1] Refactor components/hero.tsx — semantic HTML (section with aria-label), h1 for name, proper heading hierarchy
- [X] T010a [US1] Add Vulcan avatar image to hero section using next/image — source: /images/vulcan-avatar.jpg, circular crop with subtle orange glow/border effect (#f97316), proper alt text ("Vulcan — The Adversary"), responsive sizing (clamp between 160px–280px), in components/hero.tsx
- [X] T010b [US1] [P] Optimise avatar image — create WebP version at 1x and 2x sizes in public/images/, ensure next/image handles format selection and lazy loading
- [X] T011 [US1] Add scroll indicator chevron with CSS bounce animation to components/hero.tsx
- [X] T012 [US1] Add responsive typography (text-4xl to text-8xl scale) and max-width constraint to hero in components/hero.tsx
- [X] T013 [US1] Add prefers-reduced-motion support — disable chevron animation, remove entrance transitions in components/hero.tsx

**Checkpoint**: Hero section fully functional and testable independently

---

## Phase 4: User Story 2 — The About Section (Priority: P2)

**Goal**: Personality-driven about section with tech stack badges establishing credibility

**Independent Test**: Navigate to /#about. Section displays 3+ paragraphs of opinionated copy, tech stack badges wrap correctly, h2 heading present, readable at all widths.

### Implementation for User Story 2

- [X] T014 [US2] Refactor components/about.tsx — semantic section element, h2 heading, aria-label
- [X] T015 [US2] Write personality-driven about copy (3+ paragraphs) reflecting Vulcan's voice in components/about.tsx
- [X] T016 [US2] Refactor tech stack display to use design tokens and ensure badge wrapping at 320px in components/about.tsx
- [X] T017 [US2] Add semantic list markup for tech stack badges (ul/li) for screen reader accessibility in components/about.tsx

**Checkpoint**: About section fully functional and testable independently

---

## Phase 5: User Story 3 — The Projects Grid (Priority: P3)

**Goal**: Responsive project card grid with hover states and empty-state handling

**Independent Test**: Navigate to /#projects. Cards display in responsive grid, hover states work, links open in new tab. Empty array hides section entirely.

### Implementation for User Story 3

- [X] T018 [US3] Refactor components/projects.tsx — conditional render (hide when empty), semantic section with h2
- [X] T019 [US3] Implement responsive grid layout (1 col < 640px, 2 cols ≥ 640px) with max-width constraint in components/projects.tsx
- [X] T020 [US3] Add hover state transitions (border accent, title colour change) using design tokens in components/projects.tsx
- [X] T021 [US3] Add keyboard focus styles and accessible link labels to project cards in components/projects.tsx
- [X] T022 [US3] Update data/projects.ts to use imported Project type from lib/types.ts

**Checkpoint**: Projects section fully functional, handles empty state, testable independently

---

## Phase 6: User Story 4 — Header & Footer (Priority: P4)

**Goal**: Sticky header with smooth-scroll nav and branded footer with social links

**Independent Test**: Header sticks on scroll, nav links smooth-scroll to sections, footer shows GitHub link and copyright. All keyboard-accessible.

### Implementation for User Story 4

- [X] T023 [US4] Create components/header.tsx — sticky position, backdrop-blur, semi-transparent background, site name, nav links
- [X] T024 [US4] Implement condensed horizontal nav links for mobile (no hamburger) with responsive sizing in components/header.tsx
- [X] T025 [US4] Add smooth-scroll navigation using anchor hrefs linked to section IDs in components/header.tsx
- [X] T026 [US4] Add keyboard focus indicators (accent orange outline) to all header nav links in components/header.tsx
- [X] T027 [US4] Refactor components/footer.tsx — use SocialLink type, import from data/social.ts, dynamic copyright year
- [X] T028 [US4] Add hover states and focus indicators to footer links using design tokens in components/footer.tsx

**Checkpoint**: Header and footer fully functional, navigation works, testable independently

---

## Phase 7: User Story 5 — SEO & Performance (Priority: P5)

**Goal**: Comprehensive meta tags, semantic HTML, Lighthouse ≥ 90 across all categories

**Independent Test**: `bun run build` succeeds. Inspect HTML for correct meta tags, heading hierarchy, semantic elements. Run Lighthouse.

### Implementation for User Story 5

- [X] T029 [US5] Add Twitter Card meta tags (summary_large_image) to app/layout.tsx metadata
- [X] T030 [US5] Verify single h1 on page and correct heading hierarchy (h1 → h2 → h3) across all components
- [X] T031 [US5] Add semantic landmarks (main, nav, section, footer) across all components
- [X] T032 [US5] Optimise font loading — verify next/font/google self-hosting and display:swap in app/layout.tsx
- [X] T033 [US5] Run `bun run build` and verify zero-error static export to out/ directory

**Checkpoint**: SEO and performance requirements met, build passes

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final quality pass across all user stories

- [X] T034 [P] Run BiomeJS lint check — resolve all warnings and errors across all source files
- [X] T035 [P] Verify TypeScript strict mode — zero `any` types across all source files
- [X] T036 Test responsive design at 320px, 640px, 768px, 1024px, 1440px, 2560px
- [X] T037 Test keyboard navigation end-to-end — tab order, focus indicators, enter/space activation
- [X] T038 Test prefers-reduced-motion — verify all animations disabled/static
- [X] T039 Run Lighthouse audit — verify ≥ 90 all four categories
- [X] T040 Run quickstart.md validation checklist

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 (types and tokens must exist)
- **User Stories (Phases 3–7)**: All depend on Phase 2 completion
  - US1 (Hero) can start immediately after Phase 2
  - US2 (About) can start immediately after Phase 2 — independent of US1
  - US3 (Projects) can start immediately after Phase 2 — independent of US1/US2
  - US4 (Header/Footer) can start immediately after Phase 2 — independent of US1-US3
  - US5 (SEO) should run last as it validates the complete page
- **Polish (Phase 8)**: Depends on all user stories being complete

### Within Each User Story

- Semantic refactor before visual refinement
- Accessibility before polish
- Each story complete before moving to next priority (recommended) or parallel if capacity allows

### Parallel Opportunities

- T002, T003, T004, T005 can all run in parallel (different files)
- US1–US4 can theoretically run in parallel after Phase 2
- T034, T035 can run in parallel (different tools)

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (types, tokens, data)
2. Complete Phase 2: Foundational (layout, composition)
3. Complete Phase 3: User Story 1 (Hero)
4. **STOP and VALIDATE**: Test hero independently
5. Proceed to remaining stories

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. US1 (Hero) → MVP — site has a dramatic landing
3. US2 (About) → Identity established
4. US3 (Projects) → Credibility added
5. US4 (Header/Footer) → Navigation complete
6. US5 (SEO) → Production ready
7. Polish → Ship-quality

---

## Notes

- Total tasks: 42
- Tasks per story: US1=6, US2=4, US3=5, US4=6, US5=5, Setup=6, Foundation=3, Polish=7
- No test tasks generated (not explicitly requested in spec)
- All paths are relative to repository root
