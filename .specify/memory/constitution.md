<!--
Sync Impact Report
- Version change: 0.0.0 → 1.0.0
- Modified principles: All (initial creation)
- Added sections: Core Principles (5), Design Standards, Development Workflow, Governance
- Removed sections: None
- Templates requiring updates:
  - .specify/templates/spec-template.md ✅ (no changes needed)
  - .specify/templates/plan-template.md ✅ (no changes needed)
  - .specify/templates/tasks-template.md ✅ (no changes needed)
- Follow-up TODOs: None
-->

# Vulcan Portfolio Constitution

## Core Principles

### I. Dark Mode Only

The site renders exclusively in dark mode. There is no light mode toggle, no system preference detection, no compromise. Background MUST be #0a0a0a, surface MUST be #141414, primary text MUST be #e5e5e5, muted text MUST be #737373, accent MUST be orange #f97316. Any component introducing colours outside this palette MUST justify the addition in a code review comment.

### II. Type Safety Above All

TypeScript strict mode MUST be enabled with no `any` types permitted. All component props MUST have explicit interfaces. All data structures MUST be typed. BiomeJS MUST enforce linting and formatting with zero warnings tolerated. If the compiler cannot prove it, it does not ship.

### III. Static Export First

The site MUST produce a fully static export compatible with GitHub Pages. No server-side rendering, no API routes, no dynamic server features. Every page MUST be statically generated at build time via `next build` with `output: "export"`. Build failures block deployment — no exceptions.

### IV. Spec-Driven Development

No feature begins without a specification. The Spec Kit workflow (specify → clarify → plan → checklist → tasks → analyze → implement) MUST be followed for all non-trivial changes. Specifications MUST be committed before implementation begins. The spec is the source of truth; code is the artefact.

### V. Performance and Accessibility

Lighthouse scores MUST meet or exceed 90 across all four categories (Performance, Accessibility, Best Practices, SEO). The site MUST be fully navigable by keyboard. All images MUST have alt text. Semantic HTML MUST be used over div soup. The site MUST be responsive from 320px to 2560px viewport width. Core Web Vitals MUST pass.

## Design Standards

The visual identity is dark, sharp, and deliberate. Typography MUST use Inter as the primary font. Spacing MUST follow Tailwind's default scale for consistency. Animations MUST be subtle — no gratuitous motion. Transitions MUST respect `prefers-reduced-motion`. The site MUST feel fast, not flashy. Orange (#f97316) is reserved for emphasis and interactive elements only — overuse dilutes impact.

## Development Workflow

All changes MUST be developed on feature branches. Commits MUST use conventional commit format (`type: description`). Bun MUST be the package manager and runtime. Tailwind CSS v4 MUST be used for styling — no CSS modules, no styled-components, no CSS-in-JS. BiomeJS MUST be used for linting and formatting — no ESLint, no Prettier. The `bun run build` command MUST succeed with zero errors before any merge to main.

## Governance

This constitution supersedes all ad-hoc decisions. Amendments require updating this document with a version bump, a rationale for the change, and propagation to all dependent specifications. Principles are ranked by order — in case of conflict, lower-numbered principles take precedence (Dark Mode > Type Safety > Static Export > Spec-Driven > Performance). All pull requests MUST verify compliance with these principles.

**Version**: 1.0.0 | **Ratified**: 2026-02-13 | **Last Amended**: 2026-02-13
