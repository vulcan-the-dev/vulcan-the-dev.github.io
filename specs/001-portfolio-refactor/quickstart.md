# Quickstart: Portfolio Refactor & Enhancement

**Branch**: `001-portfolio-refactor` | **Date**: 2026-02-13

## Prerequisites

- Bun ≥ 1.0 installed
- Git with branch `001-portfolio-refactor` checked out

## Setup

```bash
git checkout 001-portfolio-refactor
bun install
```

## Development

```bash
bun run dev
# Opens at http://localhost:3000
```

## Build & Validate

```bash
# Build static export
bun run build

# Verify output exists
ls out/index.html

# Lint check
bun run lint
```

## Validation Checklist

After implementation, verify these manually:

1. **Hero Section**: Full viewport, "Vulcan" h1, "The Adversary" subtitle, tagline, scroll chevron
2. **About Section**: 3+ paragraphs, tech stack badges, h2 heading
3. **Projects Section**: Responsive grid (1 col mobile, 2 col sm+), hover states, links open in new tab
4. **Header**: Sticky, nav links smooth-scroll, visible at all scroll positions
5. **Footer**: GitHub link, copyright year, brand voice
6. **Responsive**: Test at 320px, 768px, 1024px, 1440px, 2560px
7. **Keyboard**: Tab through all interactive elements, visible focus indicators
8. **Reduced Motion**: Enable `prefers-reduced-motion`, verify no animations
9. **Build**: `bun run build` completes with zero errors
10. **Lighthouse**: Run audit — all scores ≥ 90

## Key Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, metadata, font |
| `app/page.tsx` | Page composition |
| `app/globals.css` | Tailwind + design tokens |
| `components/header.tsx` | Fixed navigation |
| `components/hero.tsx` | Hero section |
| `components/about.tsx` | About + tech stack |
| `components/projects.tsx` | Project grid |
| `components/footer.tsx` | Footer + social |
| `data/projects.ts` | Project data |
| `data/navigation.ts` | Nav items |
| `data/social.ts` | Social links |
| `lib/types.ts` | Shared TypeScript types |
