# Research: Portfolio Refactor & Enhancement

**Branch**: `001-portfolio-refactor` | **Date**: 2026-02-13

## Decisions

### 1. Smooth Scroll Implementation

- **Decision**: Use CSS `scroll-behavior: smooth` on `<html>` element combined with anchor `href="#section-id"` on nav links.
- **Rationale**: Pure CSS solution, no JavaScript required, works with static export, respects `prefers-reduced-motion` when paired with a media query override.
- **Alternatives considered**:
  - JavaScript `scrollIntoView({ behavior: 'smooth' })` — adds complexity, requires client-side JS for basic navigation.
  - Third-party smooth scroll library — unnecessary dependency for a simple use case.

### 2. Scroll Indicator (Hero Chevron)

- **Decision**: CSS-only animated chevron using `@keyframes` bounce animation. Uses `opacity` transition tied to scroll position via CSS `animation` (not JS intersection observer). Static fallback for `prefers-reduced-motion`.
- **Rationale**: Zero JavaScript overhead, purely decorative element, degrades gracefully.
- **Alternatives considered**:
  - Intersection Observer API to fade on scroll — overengineered for a decorative element.
  - Lottie animation — massive dependency for a bouncing arrow.

### 3. Fixed Header Behaviour

- **Decision**: CSS `position: sticky; top: 0` with `backdrop-blur` and semi-transparent background (`bg-[#0a0a0a]/80`). No background change on scroll — keeps it simple.
- **Rationale**: Sticky is simpler than fixed (doesn't remove from flow), backdrop-blur provides visual separation without a hard border. Tailwind makes this trivial.
- **Alternatives considered**:
  - `position: fixed` — requires padding-top on body to prevent content overlap.
  - Scroll-aware header with background transition — unnecessary complexity for 2-3 nav items.

### 4. Font Loading Strategy

- **Decision**: Use Next.js `next/font/google` for Inter with `display: swap` and `subsets: ["latin"]`. This automatically handles font optimisation, preloading, and self-hosting.
- **Rationale**: Next.js built-in font optimisation eliminates layout shift and external requests to Google Fonts CDN.
- **Alternatives considered**:
  - Manual `@font-face` declarations — reinventing what Next.js already does.
  - System font stack only — loses brand consistency.

### 5. Tailwind CSS v4 Design Tokens

- **Decision**: Define colour tokens as CSS custom properties in `globals.css` using Tailwind v4's `@theme` directive. Reference via `var(--color-*)` in components.
- **Rationale**: Centralises the colour palette, makes constitution compliance auditable, allows Tailwind utilities to reference custom colours.
- **Alternatives considered**:
  - Hardcoded hex values in every component — already the current approach; fragile and hard to audit.
  - Tailwind config `extend.colors` — Tailwind v4 prefers CSS-native `@theme`.

### 6. Mobile Navigation

- **Decision**: Condensed horizontal links with reduced font size on mobile. No hamburger menu.
- **Rationale**: Only 2-3 nav items (About, Projects, GitHub). A hamburger menu hides content behind an interaction for no benefit. Horizontal links fit even on 320px.
- **Alternatives considered**:
  - Hamburger menu — overkill for 3 links, adds JS complexity, hides navigation.
  - Bottom navigation bar — non-standard for portfolio sites.

### 7. Empty Projects Handling

- **Decision**: Conditionally render the projects section only when `projects.length > 0`. No placeholder, no skeleton.
- **Rationale**: If you have nothing to show, showing nothing is the honest choice. A "coming soon" placeholder looks amateur.
- **Alternatives considered**:
  - Placeholder message ("Projects coming soon") — feels unfinished, invites judgement.
  - Always render with minimum one project — too restrictive.
