# Implementation Plan: 组件模板中心

**Branch**: `001-component-template-center` | **Date**: 2026-03-10 | **Spec**: [spec.md](/e:/test-project/spec-kit-test01/specs/001-component-template-center/spec.md)
**Input**: Feature specification from `/specs/001-component-template-center/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See
`.specify/templates/plan-template.md` for the execution workflow.

## Summary

Build a demo-oriented Vue frontend that exposes a component template center with
an entry page, a list template page, a basic interaction template page, and a
Speckit conversation record page. The implementation will stay inside the
approved stack and use a lightweight template registry plus route-driven pages
so additional demo templates can be appended later without reworking the
navigation model.

## Technical Context

**Language/Version**: TypeScript 5.x
**Primary Dependencies**: Vue 3.x, Vue Router 4.x, Less, Tailwind CSS 3.x, Vant 4.x
**Storage**: N/A for persistent storage; mock data in frontend modules
**Testing**: Manual validation required; add unit tests for shared registry or list state logic if extracted into reusable composables
**Target Platform**: Modern mobile and desktop browsers
**Project Type**: Frontend web app demo
**Performance Goals**: First meaningful screen within 2 seconds in local dev, smooth scrolling for the list demo, no visible UI jank during refresh/load-more interactions
**Constraints**: Must remain within TypeScript + Vue 3 `<script setup>` + Less + Tailwind CSS; no backend dependency; plugin choices must remain replaceable
**Scale/Scope**: 4 navigable demo views, static registry-driven navigation, mock interaction data, room to add more templates without restructuring the shell

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Uses TypeScript, Vue 3.x, and `<script setup>` for new frontend code
- [x] Styling approach stays within Less and Tailwind CSS
- [x] Any new plugin/tool is justified and does not replace the primary stack
- [x] Scope remains demo-appropriate and avoids unjustified platform complexity
- [x] Verification includes manual validation steps and any needed automated coverage

Post-design review:
- [x] Vant is limited to common mobile-friendly interaction primitives and does not replace Vue
- [x] Navigation remains registry-driven, so future templates can be added by configuration plus page implementation
- [x] Conversation record content is maintained as frontend data, avoiding backend or runtime chat integration

## Project Structure

### Documentation (this feature)

```text
specs/001-component-template-center/
|-- plan.md
|-- research.md
|-- data-model.md
|-- quickstart.md
|-- contracts/
|   |-- routes.md
|   `-- template-registry.md
`-- tasks.md
```

### Source Code (repository root)

```text
src/
|-- components/
|   |-- common/
|   `-- templates/
|-- views/
|   |-- TemplateHubView.vue
|   |-- ListTemplateView.vue
|   |-- InteractionTemplateView.vue
|   `-- SpeckitRecordView.vue
|-- composables/
|   `-- useListDemo.ts
|-- router/
|   `-- index.ts
|-- styles/
|   |-- tailwind.css
|   `-- theme.less
|-- types/
|   |-- template.ts
|   `-- speckit-record.ts
|-- data/
|   |-- templateRegistry.ts
|   `-- speckitRecords.ts
`-- main.ts

public/

tests/
|-- unit/
`-- e2e/
```

**Structure Decision**: Use a single Vue app with route-level views and a typed
template registry in `src/data/templateRegistry.ts`. Shared list state lives in
`src/composables/useListDemo.ts` only if reuse justifies extraction; otherwise
keep logic local to the list view. This keeps the demo extensible without
introducing a global store prematurely.

## Phase 0: Research Summary

- Select `Vant 4.x` as the auxiliary UI plugin because it provides a mature
  pull-to-refresh interaction, mobile-friendly list patterns, buttons, and
  dialog primitives that match the requested demo scope.
- Use `Vue Router 4.x` for the entry page and template page navigation because
  multiple independent demo pages are required.
- Keep template metadata and Speckit conversation records in typed local data
  modules rather than a backend or CMS because the repository is explicitly a
  pure frontend demo.

## Phase 1: Design Decisions

- Entry page will render template cards from a typed registry with fields for
  title, summary, route, status, and tags.
- List template page will demonstrate initial list rendering, pull-to-refresh,
  infinite loading, empty state, no-more state, and transient loading feedback
  using mock data batches.
- Interaction template page will show several button variants and use a button
  trigger to open a confirmation dialog with confirm/cancel feedback.
- Speckit record page will render ordered user questions plus a summarized
  description of constitution, spec, and plan generation steps from local data.
- Shared shell navigation will provide a reliable return path to the hub page.

## Project Structure Notes

- `src/data/templateRegistry.ts` is the single source of truth for hub page
  listing and future template expansion.
- `src/data/speckitRecords.ts` stores the current conversation prompts and
  generation-stage descriptions for the record page.
- `src/components/templates/` can hold reusable demo blocks if later templates
  need composition beyond route-level pages.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Introduce Vant | Needed for polished pull-to-refresh, list, button, and dialog interactions within demo scope | Pure custom Vue + CSS would recreate solved interaction patterns and slow template delivery |
