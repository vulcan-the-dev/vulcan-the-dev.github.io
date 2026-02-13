# Tasks: Personal Website

**Feature Branch**: `001-personal-site`
**Created**: 2026-02-13

## Tasks

### Task 1: Project Scaffolding
- [ ] Initialize Next.js with Bun (`bun create next-app`)
- [ ] Configure TypeScript strict mode
- [ ] Set up Tailwind CSS with dark theme colours
- [ ] Configure BiomeJS (biome.json)
- [ ] Configure `next.config.ts` with `output: 'export'`
- [ ] Set up project structure (components/, data/ directories)

**Dependencies**: None
**Acceptance**: `bun run build` succeeds with static export

### Task 2: Root Layout & Metadata
- [ ] Create root layout with dark background (`#0a0a0a`)
- [ ] Load fonts via `next/font` (Geist + Geist Mono)
- [ ] Set metadata: title, description, Open Graph tags
- [ ] Add favicon

**Dependencies**: Task 1
**Acceptance**: Layout renders with correct fonts and dark background

### Task 3: Hero Component
- [ ] Create `hero.tsx` with name "Vulcan", tagline "The Adversary"
- [ ] Add subtitle/identity line
- [ ] Style: large typography, centred, dramatic spacing
- [ ] Responsive: works at 320px+
- [ ] Optional: subtle accent colour on key words

**Dependencies**: Task 2
**Acceptance**: Hero renders, responsive, visually striking

### Task 4: About Component
- [ ] Create `about.tsx` with identity text
- [ ] Include tech stack badges/list (TypeScript, Next.js, Bun, etc.)
- [ ] Write personality-driven copy (sharp, opinionated, Vulcan voice)
- [ ] Responsive layout

**Dependencies**: Task 2
**Acceptance**: About section readable, personality comes through

### Task 5: Projects Component
- [ ] Create `data/projects.ts` with typed project data
- [ ] Create `projects.tsx` with card grid layout
- [ ] Cards: project name, description, GitHub link, optional tags
- [ ] Links open in new tab
- [ ] Start with 1 project (this site itself)

**Dependencies**: Task 2
**Acceptance**: Project cards render with working links

### Task 6: Footer Component
- [ ] Create `footer.tsx`
- [ ] GitHub profile link
- [ ] Copyright line
- [ ] Minimal, dark, clean

**Dependencies**: Task 2
**Acceptance**: Footer renders at page bottom

### Task 7: Page Assembly
- [ ] Compose all sections in `page.tsx`: Hero → About → Projects → Footer
- [ ] Ensure smooth scroll flow
- [ ] Final responsive check across breakpoints

**Dependencies**: Tasks 3-6
**Acceptance**: Full page renders correctly at all breakpoints

### Task 8: GitHub Actions Deployment
- [ ] Create `.github/workflows/deploy.yml`
- [ ] Workflow: checkout → setup Bun → install → build → deploy to Pages
- [ ] Enable GitHub Pages in repo settings (source: GitHub Actions)

**Dependencies**: Task 7
**Acceptance**: Push to main triggers build and deploy to vulcan-the-dev.github.io

### Task 9: Final QA
- [ ] Run Lighthouse audit (target 95+ all categories)
- [ ] Test on mobile viewport
- [ ] Verify all links work
- [ ] Check meta tags / Open Graph

**Dependencies**: Task 8
**Acceptance**: All criteria from spec.md Success Criteria met
