# Tasks: 组件模板中心

**Input**: Design documents from `/specs/001-component-template-center/`
**Prerequisites**: plan.md (required), spec.md (required for user stories),
research.md, data-model.md, contracts/

**Tests**: Manual validation tasks are REQUIRED. Automated test tasks are
OPTIONAL unless the feature adds reusable logic, shared state, or behavior with
meaningful regression risk.

**Organization**: Tasks are grouped by user story to enable independent
implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Frontend app**: `src/`, `public/`, `tests/`
- Common frontend paths: `src/components/`, `src/views/`, `src/composables/`,
  `src/stores/`, `src/styles/`, `src/types/`, `src/data/`
- Paths shown below assume a Vue frontend project - adjust only if implementation
  discovers an existing concrete structure that must be preserved

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic frontend structure

- [X] T001 Initialize the Vue demo app entry in `src/main.ts`
- [X] T002 [P] Configure global routes and application shell in `src/router/index.ts`
- [X] T003 [P] Add shared type definitions for template entries and Speckit records in `src/types/template.ts` and `src/types/speckit-record.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can
be implemented

**CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Create the template registry source of truth in `src/data/templateRegistry.ts`
- [X] T005 [P] Create the Speckit conversation record data source in `src/data/speckitRecords.ts`
- [X] T006 [P] Add shared page styling and theme tokens in `src/styles/theme.less`
- [X] T007 Create a reusable page header/back navigation component in `src/components/common/PageHeader.vue`
- [X] T008 Configure Vant plugin registration and shared usage setup in `src/main.ts`
- [X] T009 Register the hub, list, interaction, and record routes in `src/router/index.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in
parallel

---

## Phase 3: User Story 1 - 浏览组件模板入口 (Priority: P1) MVP

**Goal**: Deliver a navigable hub page that lists available templates and lets
users enter each demo page.

**Independent Test**: Open the app root and confirm the hub page renders the
template list with titles, summaries, and working navigation actions.

### Tests for User Story 1 (include manual validation; add automated tests when needed)

- [X] T010 [US1] Add hub-page manual validation steps to `specs/001-component-template-center/quickstart.md`

### Implementation for User Story 1

- [X] T011 [P] [US1] Create the hub page view in `src/views/TemplateHubView.vue`
- [X] T012 [P] [US1] Create a reusable template card component in `src/components/templates/TemplateCard.vue`
- [X] T013 [US1] Render registry-driven template cards and navigation actions in `src/views/TemplateHubView.vue`
- [X] T014 [US1] Handle ready and coming-soon template states in `src/components/templates/TemplateCard.vue`
- [X] T015 [US1] Apply hub page layout and responsive styling in `src/views/TemplateHubView.vue` and `src/styles/theme.less`

**Checkpoint**: At this point, User Story 1 should be fully functional and
testable independently

---

## Phase 4: User Story 2 - 查看列表组件模板 (Priority: P1)

**Goal**: Deliver a list template page that demonstrates initial content,
pull-to-refresh, load-more, and list status transitions.

**Independent Test**: Enter the list template page, trigger refresh, scroll to
load more, and confirm the page handles loading, empty, and no-more states.

### Tests for User Story 2 (include manual validation; add automated tests when needed)

- [X] T016 [US2] Add list-template manual validation steps to `specs/001-component-template-center/quickstart.md`
- [X] T017 [P] [US2] Add optional unit coverage for reusable list state transitions in `tests/unit/useListDemo.spec.ts`

### Implementation for User Story 2

- [X] T018 [P] [US2] Create the list demo composable and mock batch logic in `src/composables/useListDemo.ts`
- [X] T019 [P] [US2] Define mock list item data and helpers in `src/data/listDemoData.ts`
- [X] T020 [US2] Create the list template view in `src/views/ListTemplateView.vue`
- [X] T021 [US2] Integrate Vant pull-refresh and list loading behavior in `src/views/ListTemplateView.vue`
- [X] T022 [US2] Add empty, loading, error, and no-more UI states in `src/views/ListTemplateView.vue`
- [X] T023 [US2] Apply list template styling in `src/views/ListTemplateView.vue` and `src/styles/theme.less`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work
independently

---

## Phase 5: User Story 3 - 查看基础交互组件模板 (Priority: P2)

**Goal**: Deliver a template page that showcases button variants and a
button-triggered confirmation dialog flow.

**Independent Test**: Enter the interaction template page, view multiple button
states, open the confirmation dialog, and validate confirm/cancel feedback.

### Tests for User Story 3 (include manual validation; add automated tests when needed)

- [X] T024 [US3] Add interaction-template manual validation steps to `specs/001-component-template-center/quickstart.md`

### Implementation for User Story 3

- [X] T025 [P] [US3] Define button demo and confirmation dialog scenarios in `src/data/interactionDemoData.ts`
- [X] T026 [P] [US3] Create reusable button showcase blocks in `src/components/templates/ButtonShowcase.vue`
- [X] T027 [US3] Create the interaction template view in `src/views/InteractionTemplateView.vue`
- [X] T028 [US3] Implement button variants, disabled states, and scenario descriptions in `src/views/InteractionTemplateView.vue`
- [X] T029 [US3] Implement button-triggered confirmation dialog handling in `src/views/InteractionTemplateView.vue`
- [X] T030 [US3] Apply interaction page styling in `src/views/InteractionTemplateView.vue` and `src/styles/theme.less`

**Checkpoint**: At this point, User Stories 1, 2, AND 3 should work
independently

---

## Phase 6: User Story 4 - 查看 speckit 生成过程记录 (Priority: P2)

**Goal**: Deliver a page that lists the current conversation prompts and
explains how this project was created through the Speckit flow.

**Independent Test**: Enter the record page and confirm the ordered prompts and
their constitution/spec/plan stage summaries are visible and understandable.

### Tests for User Story 4 (include manual validation; add automated tests when needed)

- [X] T031 [US4] Add record-page manual validation steps to `specs/001-component-template-center/quickstart.md`

### Implementation for User Story 4

- [X] T032 [P] [US4] Extend Speckit record data with ordered prompts and stage summaries in `src/data/speckitRecords.ts`
- [X] T033 [P] [US4] Create a reusable record timeline/list component in `src/components/templates/SpeckitRecordList.vue`
- [X] T034 [US4] Create the record page view in `src/views/SpeckitRecordView.vue`
- [X] T035 [US4] Render prompt records and Speckit stage explanations in `src/views/SpeckitRecordView.vue`
- [X] T036 [US4] Apply record page styling in `src/views/SpeckitRecordView.vue` and `src/styles/theme.less`

**Checkpoint**: All user stories should now be independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T037 [P] Document plugin usage rationale and future template extension notes in `specs/001-component-template-center/plan.md` and `specs/001-component-template-center/research.md`
- [X] T038 Refine cross-page navigation, page titles, and return paths in `src/router/index.ts`, `src/components/common/PageHeader.vue`, and route views
- [X] T039 Polish shared responsive styling and visual consistency in `src/styles/theme.less`
- [ ] T040 Run the full manual validation checklist and record any adjustments in `specs/001-component-template-center/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
- User Story 1 should land first because it establishes the demo entry page
- User Story 2 can proceed after the shared shell and routes exist
- User Stories 3 and 4 can proceed in parallel after Phase 2
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Depends only on shared routing and plugin setup
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Independent of US1 and US2 aside from shared shell
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - Independent of US2 and US3 aside from shared shell

### Within Each User Story

- Manual validation steps MUST exist before story completion
- Automated tests, when included, MUST fail before implementation
- Data/types before final view integration when there is a dependency
- Shared logic before final view integration
- Story complete before moving to final polish

### Parallel Opportunities

- T002 and T003 can run in parallel after T001
- T005, T006, and T007 can run in parallel after T004
- T011 and T012 can run in parallel within US1
- T018 and T019 can run in parallel within US2
- T025 and T026 can run in parallel within US3
- T032 and T033 can run in parallel within US4

---

## Parallel Example: User Story 2

```bash
# Launch validation and data/composable setup for User Story 2 together:
Task: "Add list-template manual validation steps to specs/001-component-template-center/quickstart.md"
Task: "Create the list demo composable and mock batch logic in src/composables/useListDemo.ts"
Task: "Define mock list item data and helpers in src/data/listDemoData.ts"

# Then integrate the view:
Task: "Create the list template view in src/views/ListTemplateView.vue"
Task: "Integrate Vant pull-refresh and list loading behavior in src/views/ListTemplateView.vue"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Confirm the hub page can navigate to the planned demos
5. Demo the entry experience

### Incremental Delivery

1. Complete Setup + Foundational -> shared shell ready
2. Add User Story 1 -> validate hub navigation
3. Add User Story 2 -> validate list interactions
4. Add User Story 3 -> validate button and dialog interactions
5. Add User Story 4 -> validate Speckit record page
6. Finish with polish and full manual walkthrough

### Parallel Team Strategy

With multiple developers:

1. One developer completes Setup + Foundational
2. After that:
   Developer A: User Story 1
   Developer B: User Story 2
   Developer C: User Story 3
   Developer D: User Story 4
3. Merge for shared polish and validation

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Vant is a helper library, not a replacement for the primary stack
- Prefer local typed data over introducing a store unless implementation proves it necessary
