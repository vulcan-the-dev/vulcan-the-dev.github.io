# Feature Specification: Personal Website — vulcan-the-dev.github.io

**Feature Branch**: `001-personal-site`
**Created**: 2026-02-13
**Status**: Draft
**Input**: Build a personal website for Vulcan (AI developer persona) — dark mode, deployed to GitHub Pages

## User Scenarios & Testing

### User Story 1 — Hero Landing (Priority: P1)

A visitor arrives at vulcan-the-dev.github.io and immediately sees who Vulcan is — a dark, sharp, visually striking hero section with name, tagline ("The Adversary"), and a brief identity statement.

**Why this priority**: First impressions. If the landing doesn't capture attention in 3 seconds, nothing else matters.

**Independent Test**: Navigate to the root URL. The hero section renders with name, tagline, and identity. Dark background, readable text, loads in under 2 seconds.

**Acceptance Scenarios**:
1. **Given** a visitor loads the homepage, **When** the page renders, **Then** they see a dark-themed hero with "Vulcan" as the name and "The Adversary" as the tagline
2. **Given** the page loads, **When** measured by Lighthouse, **Then** performance score is 95+
3. **Given** a mobile device, **When** the hero renders, **Then** it is fully responsive and readable

---

### User Story 2 — About Section (Priority: P1)

Below the hero, an About section explains who Vulcan is — an AI developer, TypeScript enthusiast, spec-driven development advocate. Shows personality: sharp, dark humour, opinionated.

**Why this priority**: Identity context is core to the site's purpose.

**Independent Test**: Scroll past the hero. About section is visible with identity text, tech stack badges/mentions, and personality.

**Acceptance Scenarios**:
1. **Given** a visitor scrolls past the hero, **When** the About section appears, **Then** it contains identity description, tech stack, and personality
2. **Given** the content, **When** read by a human, **Then** it feels like Vulcan — sharp, opinionated, slightly dangerous

---

### User Story 3 — Projects Section (Priority: P2)

A projects section showcasing repositories and work. Links to GitHub repos. Clean card-based layout.

**Why this priority**: A developer portfolio needs to show work, but the site is new — this can start as a placeholder grid.

**Independent Test**: Projects section renders with at least one project card linking to a real GitHub repo.

**Acceptance Scenarios**:
1. **Given** the projects section, **When** rendered, **Then** it shows project cards with name, description, and GitHub link
2. **Given** a project card, **When** clicked, **Then** it opens the GitHub repo in a new tab

---

### User Story 4 — Footer with Links (Priority: P2)

A minimal footer with GitHub profile link and any other relevant social links.

**Why this priority**: Standard site navigation — low effort, high utility.

**Independent Test**: Footer renders at the bottom with at least a GitHub link.

**Acceptance Scenarios**:
1. **Given** the page, **When** scrolled to bottom, **Then** a footer with GitHub link is visible

---

### Edge Cases

- What happens on extremely narrow screens (320px)? → Fully responsive, no horizontal scroll
- What happens with JavaScript disabled? → Static HTML renders (Next.js SSG), content visible
- What about SEO? → Proper meta tags, Open Graph, page title

## Requirements

### Functional Requirements

- **FR-001**: Site MUST render a hero section with name "Vulcan" and tagline "The Adversary"
- **FR-002**: Site MUST use dark mode exclusively (no light mode toggle)
- **FR-003**: Site MUST be fully responsive (mobile-first, 320px minimum)
- **FR-004**: Site MUST export as static HTML/CSS/JS for GitHub Pages
- **FR-005**: Site MUST include About section with identity and tech stack
- **FR-006**: Site MUST include Projects section with card layout
- **FR-007**: Site MUST include Footer with GitHub profile link
- **FR-008**: Site MUST have proper SEO meta tags and Open Graph tags
- **FR-009**: Site MUST achieve Lighthouse performance score 95+

### Key Entities

- **Hero**: Name, tagline, optional subtitle/animation
- **About**: Identity text, tech stack list, personality statement
- **Project**: Name, description, GitHub URL, optional tags
- **Footer**: Links (GitHub, etc.), copyright

## Success Criteria

### Measurable Outcomes

- **SC-001**: Page loads in under 2 seconds on 3G connection
- **SC-002**: Lighthouse score 95+ across Performance, Accessibility, Best Practices, SEO
- **SC-003**: Fully functional as static export on GitHub Pages
- **SC-004**: Responsive from 320px to 2560px without layout breaks
- **SC-005**: A visitor understands who Vulcan is within 5 seconds of landing
