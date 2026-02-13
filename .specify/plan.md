# Implementation Plan: Personal Website

**Feature Branch**: `001-personal-site`
**Created**: 2026-02-13
**Spec**: spec.md

## Architecture

Single-page Next.js app with static export. No routing needed for MVP — everything lives on the index page as scroll sections.

### Stack
- **Next.js 15** (App Router, `output: 'export'`)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (dark mode only — `darkMode: 'class'` not needed, just style dark)
- **Bun** (package manager + runtime)
- **BiomeJS** (lint + format)
- **shadcn/ui** (selective components only — Button, Card if needed)
- **GitHub Pages** (deployment via GitHub Actions)

### Project Structure
```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, metadata
│   │   └── page.tsx          # Single page with all sections
│   ├── components/
│   │   ├── hero.tsx          # Hero section
│   │   ├── about.tsx         # About section
│   │   ├── projects.tsx      # Projects grid
│   │   └── footer.tsx        # Footer
│   └── data/
│       └── projects.ts       # Project data (typed array)
├── public/
│   └── (static assets)
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment
├── next.config.ts
├── tailwind.config.ts
├── biome.json
├── tsconfig.json
└── package.json
```

### Design System
- **Background**: `#0a0a0a` (near-black)
- **Surface**: `#141414` (card backgrounds)
- **Text primary**: `#e5e5e5`
- **Text muted**: `#737373`
- **Accent**: `#f97316` (orange-500 — fire/forge theme)
- **Accent hover**: `#ea580c` (orange-600)
- **Font**: Inter or Geist (system-like, clean)
- **Code font**: JetBrains Mono or Geist Mono

### Deployment
GitHub Actions workflow triggers on push to `main`. Runs `bun run build`, exports static, deploys to GitHub Pages via `actions/deploy-pages`.

## Implementation Order

1. Project scaffolding (Next.js + Bun + Tailwind + BiomeJS)
2. Root layout with dark theme, fonts, metadata
3. Hero component
4. About component
5. Projects component + data
6. Footer component
7. GitHub Actions deploy workflow
8. Push to main, verify deployment

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Next.js static export limitations | No API routes, no `getServerSideProps`, no dynamic routes |
| GitHub Pages CNAME/404 handling | Add `next.config.ts` with `basePath` if needed |
| Font loading performance | Use `next/font` for zero-layout-shift font loading |
