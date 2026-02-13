# Data Model: Portfolio Refactor & Enhancement

**Branch**: `001-portfolio-refactor` | **Date**: 2026-02-13

## Entities

### Project

Represents a portfolio project displayed in the projects grid.

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| name | string | Yes | Non-empty, unique within projects array |
| description | string | Yes | Non-empty, recommended ≤ 200 chars for card layout |
| url | string | Yes | Valid URL format (https://) |
| tags | string[] | Yes | At least one tag required, each tag non-empty |

**Relationships**: None — standalone entity.
**State transitions**: None — static data, no lifecycle.
**Source file**: `data/projects.ts`

### SocialLink

Represents an external profile/contact link displayed in the footer.

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| platform | string | Yes | Non-empty, used as display label |
| url | string | Yes | Valid URL format (https://) |
| label | string | No | Accessible label for screen readers; defaults to platform name |

**Relationships**: None — standalone entity.
**State transitions**: None — static data.
**Source file**: `data/social.ts`

### NavigationItem

Represents an internal navigation link in the header.

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| label | string | Yes | Non-empty, display text |
| href | string | Yes | Must start with `#` (anchor link) |

**Relationships**: `href` MUST correspond to an existing section `id` in the page.
**State transitions**: None — static data.
**Source file**: `data/navigation.ts`

## Validation Rules

- All entities are defined at compile time as TypeScript constants with `as const` or explicit type annotations.
- No runtime validation needed — TypeScript compiler enforces types at build time.
- Empty arrays are valid for Projects (section hidden) but NavigationItems and SocialLinks MUST have at least one entry.

## Data Volume

- Projects: 1–20 items (currently 1)
- SocialLinks: 1–5 items (currently 1 — GitHub)
- NavigationItems: 2–4 items (About, Projects, optionally GitHub)

No pagination, filtering, or search needed at this scale.
