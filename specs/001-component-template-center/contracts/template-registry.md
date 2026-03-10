# UI Contract: Template Registry

## Registry Responsibility

The template registry is the single source of truth for what the hub page
renders and which templates are available for browsing.

## Required Fields Per Entry

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | Stable unique identifier |
| `title` | string | Visible name on the hub |
| `summary` | string | Short description for scanning |
| `routePath` | string | Navigation target |
| `category` | string | Used for organization or future filters |
| `status` | string | At minimum `ready` or `coming-soon` |
| `tags` | string[] | Optional scan labels |
| `sortOrder` | number | Determines display sequence |

## Behavioral Rules

- The hub page must iterate from this registry rather than hardcoding cards.
- `coming-soon` entries may be displayed, but must not route to a broken page.
- Adding a new template requires:
  1. A new route-level page
  2. A matching registry entry
  3. A short summary and category for hub display
