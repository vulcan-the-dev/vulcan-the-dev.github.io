# Implementation Plan: Portfolio Refactor & Enhancement

**Branch**: `001-portfolio-refactor` | **Date**: 2026-02-13 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-portfolio-refactor/spec.md`

## Summary

Comprehensive refactor of Vulcan's portfolio site to establish proper component architecture, semantic HTML, accessibility, SEO, responsive design (320px–2560px), and a fixed header with smooth-scroll navigation. The existing codebase has the right stack but lacks structure, a header component, proper semantic markup, and scroll-indicator UX. This plan restructures the codebase into well-typed, isolated components with a consistent design token system.

## Technical Context

**Language/Version**: TypeScript 5.7+ with strict mode enabled
**Primary Dependencies**: Next.js 15 (App Router, static export), React 19, Tailwind CSS v4, BiomeJS
**Storage**: N/A — all data is hardcoded TypeScript files
**Testing**: Manual Lighthouse audits; BiomeJS for static analysis; `bun run build` as CI gate
**Target Platform**: GitHub Pages (static HTML/CSS/JS export)
**Project Type**: Web (single-page, static export)
**Performance Goals**: Lighthouse ≥ 90 all categories, LCP < 2.5s, CLS < 0.1
**Constraints**: No server-side features, no API routes, no dynamic rendering, dark mode only
**Scale/Scope**: Single page, ~6 components, ~10 source files, 1 developer

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Dark Mode Only | ✅ PASS | Colour palette hardcoded, no theme toggle |
| II. Type Safety Above All | ✅ PASS | Strict mode, explicit interfaces, no `any` |
| III. Static Export First | ✅ PASS | `output: "export"` in next.config.ts |
| IV. Spec-Driven Development | ✅ PASS | This spec/plan exists before implementation |
| V. Performance and Accessibility | ✅ PASS | Lighthouse ≥ 90 target, semantic HTML, keyboard nav |

**Gate Result**: PASS — all principles satisfied.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-refactor/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (N/A — no API)
├── checklists/          # Quality checklists
│   └── requirements.md
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
app/
├── layout.tsx           # Root layout: html, body, font, metadata
├── page.tsx             # Home page: composes all sections
└── globals.css          # Tailwind import + custom properties

components/
├── header.tsx           # NEW: Fixed header with nav links
├── hero.tsx             # Refactored: dramatic hero with scroll indicator
├── about.tsx            # Refactored: personality copy + tech stack
├── projects.tsx         # Refactored: responsive grid, empty state handling
└── footer.tsx           # Refactored: social links, copyright

data/
├── projects.ts          # Project data with typed interface
├── navigation.ts        # NEW: Navigation items data
└── social.ts            # NEW: Social links data

lib/
└── types.ts             # NEW: Shared type definitions (Project, SocialLink, NavigationItem)
```

**Structure Decision**: Single web application with flat component structure. No nested routing needed — single page with section anchors. Shared types extracted to `lib/types.ts`. Data files in `data/` provide typed content. New `components/header.tsx` added for fixed navigation.

## Complexity Tracking

No constitution violations to justify.
