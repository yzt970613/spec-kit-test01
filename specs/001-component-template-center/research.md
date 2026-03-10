# Research: 组件模板中心

## Decision 1: Use Vant 4.x for interaction primitives

**Decision**: Adopt `Vant 4.x` as the UI helper library for pull-to-refresh,
list loading, buttons, and confirmation dialog behavior.

**Rationale**:
- It is a common Vue 3 ecosystem choice with ready-made mobile interaction
  patterns.
- It directly supports the requested list demo behavior and dialog interaction
  without forcing a second application architecture.
- It keeps implementation effort focused on template composition and demo
  explanation rather than rebuilding low-level interaction mechanics.

**Alternatives considered**:
- `Element Plus`: common for desktop admin UIs, but a weaker fit for mobile-like
  pull-to-refresh interaction demos.
- Fully custom implementation: reduces dependencies, but adds avoidable work and
  increases behavioral risk for the list and dialog interactions.

## Decision 2: Use route-driven pages with a typed template registry

**Decision**: Implement the demo center as route-level pages fed by a typed
template registry module.

**Rationale**:
- The feature explicitly needs an entry page and multiple independently
  navigable template pages.
- A typed registry makes future template additions predictable: add metadata,
  route, and page implementation without redesigning the hub.
- This approach stays simple and avoids introducing a store or backend.

**Alternatives considered**:
- Hardcode all cards directly in the hub page: faster initially, but creates
  duplication and makes future template growth harder.
- Use a global store: unnecessary for a small static demo and adds governance
  complexity with little benefit.

## Decision 3: Keep demo data and Speckit records local to the frontend

**Decision**: Store list mock data, template metadata, and Speckit conversation
record content in local TypeScript modules.

**Rationale**:
- The constitution requires demo-first scope control and discourages backend
  complexity.
- The record page only needs to explain the current conversation and generation
  flow, not sync with a live chat service.
- Local typed data is easy to review, extend, and demo.

**Alternatives considered**:
- Remote API or CMS: unjustified for a static demo and adds deployment
  dependencies.
- Browser persistence: not required because the feature is explanatory, not
  user-authored content.

## Decision 4: Combine Tailwind CSS and Less by responsibility

**Decision**: Use Tailwind CSS for layout, spacing, and common utility styling;
use Less for theme tokens, page-level polish, and component-specific overrides
where utilities become noisy.

**Rationale**:
- This matches the project constitution and keeps the codebase readable.
- Tailwind makes demo layout iteration fast.
- Less remains available for cohesive visual treatment and reusable variables.

**Alternatives considered**:
- Tailwind only: possible, but less suitable when page-specific theming or
  repeated style patterns become verbose.
- Less only: workable, but slower for demo layout iteration and inconsistent
  with the selected stack direction.
