# Feature Specification: Portfolio Refactor & Enhancement

**Feature Branch**: `001-portfolio-refactor`
**Created**: 2026-02-13
**Status**: Draft
**Input**: User description: "Comprehensive refactor and enhancement of Vulcan's personal portfolio website. Dark mode only, dramatic hero section, detailed about page with personality-driven copy, project showcase grid, tech stack display, contact/social links, SEO optimization, accessibility, performance optimization, responsive design from 320px to 2560px, GitHub Pages static export. The site must reflect Vulcan's identity as The Adversary — sharp, dark, opinionated, slightly dangerous."

## User Scenarios & Testing

### User Story 1 - First Impression: The Hero (Priority: P1)

A visitor lands on the site for the first time. They are immediately confronted with a dramatic, full-viewport hero section that communicates who Vulcan is: name, title ("The Adversary"), and a sharp tagline. The design is dark, commanding, and unmistakably intentional. The visitor knows within 3 seconds that this is not a generic portfolio.

**Why this priority**: The hero is the first thing anyone sees. If it doesn't land, nothing else matters. This is the handshake — firm, memorable, slightly intimidating.

**Independent Test**: Load the homepage at any viewport width (320px–2560px). The hero section fills the viewport, displays the name "Vulcan", the subtitle "The Adversary", a tagline, and a subtle scroll indicator. Text is legible and centred. The accent orange appears deliberately, not gratuitously.

**Acceptance Scenarios**:

1. **Given** a visitor on any device, **When** the homepage loads, **Then** a full-viewport hero section displays with the Vulcan avatar image, the name "Vulcan" in large bold type, "The Adversary" as a subtitle, and a one-line tagline beneath.
2. **Given** a viewport width of 320px, **When** the hero renders, **Then** all text remains legible without horizontal scrolling and no text is clipped.
3. **Given** a viewport width of 2560px, **When** the hero renders, **Then** content is centred and does not stretch awkwardly across the full width — max content width is constrained.
4. **Given** a visitor with `prefers-reduced-motion: reduce`, **When** the page loads, **Then** no entrance animations play; content appears immediately.
5. **Given** a screen reader user, **When** navigating the hero, **Then** the heading hierarchy is correct (h1 for name) and the section has appropriate landmark roles.

---

### User Story 2 - Getting to Know Vulcan: The About Section (Priority: P2)

The visitor scrolls past the hero (or navigates via anchor) and encounters the about section. This section contains personality-driven copy that conveys Vulcan's philosophy, technical expertise, and attitude. It includes a tech stack display showing the tools Vulcan uses, presented as styled pills/badges.

**Why this priority**: After the hook, visitors need substance. The about section establishes credibility and personality — it's where curiosity converts to interest.

**Independent Test**: Navigate to `/#about`. The about section displays multiple paragraphs of personality-driven copy, a visible tech stack display with labelled technology badges, and maintains visual hierarchy. Text is readable at all viewport widths.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to the about section, **When** the section renders, **Then** it displays at least 3 paragraphs of about copy and a tech stack display with technology badges.
2. **Given** the about section is visible, **When** examining tech stack badges, **Then** each badge displays a technology name in a pill-shaped element with dark background and subtle border.
3. **Given** a 320px viewport, **When** the about section renders, **Then** tech stack badges wrap naturally onto multiple lines without overflow.
4. **Given** a screen reader user, **When** navigating the about section, **Then** it has an h2 heading "About" and the tech stack list is semantically marked up.

---

### User Story 3 - Showcasing Work: The Projects Grid (Priority: P3)

The visitor reaches the projects section which displays a grid of project cards. Each card shows the project name, a brief description, and technology tags. Cards link to external project URLs (GitHub repos or live demos). The grid is responsive — 1 column on mobile, 2 columns on tablet and above.

**Why this priority**: Projects prove competence. Without them, the site is just claims. The grid format allows scanning and comparison.

**Independent Test**: Navigate to `/#projects`. At least one project card is visible with name, description, and tags. Clicking a card opens the project URL in a new tab. The grid adapts from 1 column (mobile) to 2 columns (sm+).

**Acceptance Scenarios**:

1. **Given** the projects section, **When** it renders, **Then** project cards are displayed in a responsive grid (1 col < 640px, 2 cols ≥ 640px).
2. **Given** a project card, **When** the visitor hovers, **Then** the card border transitions to include the accent orange colour and the title colour changes.
3. **Given** a project card, **When** clicked or activated via keyboard, **Then** the linked URL opens in a new tab with `rel="noopener noreferrer"`.
4. **Given** project data, **When** each card renders, **Then** it displays: project name (h3), description paragraph, and at least one technology tag.
5. **Given** a screen reader user, **When** navigating projects, **Then** each card is an accessible link with a descriptive label, and the section has an h2 heading.

---

### User Story 4 - Navigation & Contact: Header and Footer (Priority: P4)

The site has a sticky/fixed header with the site name and navigation links (About, Projects, Contact/GitHub). The footer contains social links (GitHub at minimum), a copyright notice, and maintains the brand voice. Navigation enables smooth scrolling to sections.

**Why this priority**: Navigation is infrastructure — important but not the star. The footer closes the experience and provides contact paths.

**Independent Test**: Load the homepage. A header is visible with navigation links. Clicking "About" smooth-scrolls to the about section. The footer displays a GitHub link and copyright. All links work and open correctly.

**Acceptance Scenarios**:

1. **Given** any page scroll position, **When** examining the header, **Then** it remains fixed at the top with the site name and navigation links visible.
2. **Given** a navigation link (About, Projects), **When** clicked, **Then** the page smooth-scrolls to the corresponding section anchor.
3. **Given** the footer, **When** it renders, **Then** it displays at least one social link (GitHub) and a copyright notice with the current year.
4. **Given** a visitor using keyboard navigation, **When** tabbing through the page, **Then** all interactive elements are reachable in logical order and have visible focus indicators.
5. **Given** a mobile viewport, **When** examining the header, **Then** navigation links are displayed as condensed horizontal links (no hamburger menu) without horizontal overflow.

---

### User Story 5 - SEO & Performance: Invisible but Critical (Priority: P5)

The site has comprehensive meta tags (Open Graph, Twitter Card, canonical URL), a structured heading hierarchy, semantic HTML, optimised font loading, and achieves Lighthouse scores ≥ 90 across all categories. The static export deploys correctly to GitHub Pages.

**Why this priority**: SEO and performance are table stakes for a professional portfolio. They don't create delight but their absence creates embarrassment.

**Independent Test**: Run `bun run build` — it completes with zero errors and produces a static `out/` directory. Run Lighthouse on the deployed site — all four scores are ≥ 90. Inspect the HTML — correct meta tags, heading hierarchy, and semantic elements are present.

**Acceptance Scenarios**:

1. **Given** the site source, **When** `bun run build` is executed, **Then** it completes successfully producing a static export in `out/`.
2. **Given** the deployed site, **When** inspecting the `<head>`, **Then** it contains: title, meta description, Open Graph tags (og:title, og:description, og:url, og:type, og:site_name), and Twitter Card tags.
3. **Given** the deployed site, **When** running Lighthouse, **Then** Performance ≥ 90, Accessibility ≥ 90, Best Practices ≥ 90, SEO ≥ 90.
4. **Given** the HTML output, **When** examining heading hierarchy, **Then** there is exactly one h1 on the page, h2s for each section, and no skipped heading levels.
5. **Given** the deployed site, **When** checking Core Web Vitals, **Then** LCP < 2.5s, FID < 100ms, CLS < 0.1.

---

### Edge Cases

- What happens when the projects array is empty? The projects section MUST be hidden entirely. No placeholder, no empty whitespace, no broken grid.
- What happens when a project URL is invalid or unreachable? The card MUST still render; the link simply navigates to the provided URL. Client-side validation of URLs is not required.
- What happens at exactly 320px viewport width? All content MUST be fully visible without horizontal scroll. No text clipping, no element overflow.
- What happens at exactly 2560px viewport width? Content MUST be centred and constrained to a reasonable max-width. The page MUST NOT stretch text across the full width.
- What happens when JavaScript is disabled? The site MUST still display core content (name, about text, project cards) since it's statically exported HTML. Interactive features (smooth scroll, hover effects) degrade gracefully.
- What happens when Inter font fails to load? The site MUST fall back to the system sans-serif font stack without layout shift.
- What happens when `prefers-reduced-motion: reduce` is active? All CSS transitions and animations MUST be disabled or reduced to instant state changes.
- What happens when a user navigates via keyboard only? Every interactive element MUST be reachable via Tab, activatable via Enter/Space, and MUST have a visible focus indicator using the accent colour.

## Requirements

### Functional Requirements

- **FR-001**: Site MUST render a full-viewport hero section containing the name "Vulcan", subtitle "The Adversary", a tagline, and the Vulcan avatar image (`/images/vulcan-avatar.jpg`) — all centred vertically and horizontally. The avatar MUST be displayed as a prominent visual element (recommended: circular or rounded crop with a subtle orange glow/border effect matching the accent colour).
- **FR-002**: Site MUST render an about section with at minimum 3 paragraphs of personality-driven copy that conveys technical philosophy and attitude.
- **FR-003**: Site MUST render a tech stack display as styled pill/badge elements listing technologies used.
- **FR-004**: Site MUST render a projects section with a responsive card grid (1 column < 640px, 2 columns ≥ 640px).
- **FR-005**: Each project card MUST display: project name, description, technology tags, and link to an external URL opening in a new tab.
- **FR-006**: Site MUST have a fixed/sticky header with site name/logo and navigation links to page sections.
- **FR-007**: Navigation links MUST smooth-scroll to their target sections.
- **FR-008**: Site MUST have a footer with at least one social link (GitHub) and a dynamic copyright year.
- **FR-009**: Site MUST use the colour palette: background #0a0a0a, surface #141414, text #e5e5e5, muted #737373, accent #f97316.
- **FR-010**: Site MUST use Inter as the primary font with system sans-serif fallback.
- **FR-011**: Site MUST be responsive from 320px to 2560px viewport width without horizontal scroll or content clipping.
- **FR-012**: Text content sections MUST be constrained to 768px max-width. The overall page container MUST be constrained to 1280px max-width.
- **FR-013**: All interactive elements MUST have visible focus indicators for keyboard navigation.
- **FR-014**: All animations and transitions MUST respect `prefers-reduced-motion: reduce`.
- **FR-015**: Project cards MUST display hover states with accent colour border transition on pointer devices.
- **FR-016**: The projects section MUST be hidden entirely when the projects array is empty.
- **FR-017**: Site MUST include a subtle animated chevron scroll indicator in the hero section that fades out on scroll and appears static when `prefers-reduced-motion: reduce` is active.
- **FR-018**: The header MUST display condensed horizontal navigation links on mobile viewports (no hamburger menu) without horizontal overflow.

### Key Entities

- **Project**: Represents a portfolio project. Attributes: name (string, required), description (string, required), url (string, required, valid URL), tags (string array, at least one required). Displayed as cards in the projects grid.
- **SocialLink**: Represents an external profile link. Attributes: platform (string, required), url (string, required), icon (optional). Displayed in the footer.
- **NavigationItem**: Represents a navigation link. Attributes: label (string, required), href (string, required, anchor reference). Used in the header.

## Success Criteria

### Measurable Outcomes

- **SC-001**: A first-time visitor can identify who Vulcan is and what they do within 5 seconds of page load.
- **SC-002**: The site loads and displays meaningful content (hero section) within 1.5 seconds on a 4G connection.
- **SC-003**: All four Lighthouse scores (Performance, Accessibility, Best Practices, SEO) are ≥ 90 on the deployed site.
- **SC-004**: The site is fully functional and visually correct at every viewport width from 320px to 2560px.
- **SC-005**: Every interactive element is reachable and activatable via keyboard alone with visible focus indicators.
- **SC-006**: `bun run build` completes with zero errors and produces a deployable static export.
- **SC-007**: The site contains zero `any` types in TypeScript source code.
- **SC-008**: BiomeJS reports zero warnings and zero errors across all source files.
- **SC-009**: Core Web Vitals pass: LCP < 2.5s, FID < 100ms, CLS < 0.1.
- **SC-010**: The site renders core content (text, structure) even with JavaScript disabled.

## Clarifications

### Session 2026-02-13

- Q: Mobile header — hamburger menu or condensed horizontal links? → A: Condensed horizontal links. No hamburger menu — the site has only 2-3 nav items; a hamburger is overkill for a single-page portfolio.
- Q: Scroll indicator style in hero — animated chevron, text hint, or gradient fade? → A: Subtle animated chevron (CSS only) that fades out on scroll. Respects prefers-reduced-motion by appearing static.
- Q: Empty projects array — hide section entirely or show placeholder? → A: Hide the entire projects section. If there's nothing to show, show nothing. No placeholder text.
- Q: Social links — GitHub only or include others (Twitter/X, LinkedIn, etc.)? → A: GitHub only for initial release. The data structure supports adding more platforms later.
- Q: Max content width — what specific constraint? → A: Text sections (about, projects) constrained to max-w-3xl (768px). Overall page container constrained to max-w-7xl (1280px).
- Q: Avatar image placement? → A: Vulcan avatar image (`/images/vulcan-avatar.jpg`) featured prominently in the hero section. Obsidian/molten metal aesthetic matches the dark theme perfectly.

## Assumptions

- The site is a single-page application with section-based navigation (no multi-page routing required).
- GitHub Pages is the only deployment target; no server-side capabilities are available.
- The project data is hardcoded in a TypeScript data file, not fetched from an API.
- Social links are limited to GitHub initially; more may be added later but the structure supports extensibility.
- No analytics, contact forms, or third-party scripts are included in the initial scope.
- No blog or content management system is in scope.
- The site targets modern evergreen browsers (Chrome, Firefox, Safari, Edge — latest 2 versions).
