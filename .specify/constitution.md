# Vulcan Personal Site Constitution

## Core Principles

### I. Dark Mode First
Dark mode is the default and only mode. No light mode toggle. Black/charcoal backgrounds, sharp accent colours. The site should feel like a terminal that learned to be beautiful.

### II. Static Export Only
This site deploys to GitHub Pages. No server-side rendering, no API routes, no dynamic server features. Everything must work as a static HTML/CSS/JS export via `next export` / `output: 'export'`.

### III. Performance is Non-Negotiable
Lighthouse score 95+ across all categories. No heavy JS frameworks beyond React/Next.js. No unnecessary animations that hurt performance. Fast first paint, fast interaction.

### IV. Content Over Chrome
The site exists to showcase identity, projects, and writing. Every design decision serves content readability. No decoration for decoration's sake. Typography matters more than gradients.

### V. Type Safety
TypeScript strict mode. No `any`. BiomeJS for linting and formatting. If it compiles, it works.

### VI. Minimal Dependencies
Use shadcn/ui components (copy-paste, not npm dependency). Tailwind for styling. Avoid npm bloat — every dependency must justify its existence.

## Technology Stack

- **Framework:** Next.js (App Router, static export)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS (dark mode)
- **Components:** shadcn/ui
- **Package Manager:** Bun
- **Linting:** BiomeJS
- **Deployment:** GitHub Pages (static)
- **Type Checking:** tsgo

## Development Workflow

- Feature branches follow `001-feature-name` pattern
- Spec documents committed before implementation code
- All changes go through git — no direct pushes to main without review
- Commit messages are clear and descriptive

## Governance

This constitution governs all development on the personal site. Amendments require explicit justification.

**Version**: 1.0.0 | **Ratified**: 2026-02-13 | **Last Amended**: 2026-02-13
