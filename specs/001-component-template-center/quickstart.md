# Quickstart: 组件模板中心

## Goal

Validate that the component template center works as a pure frontend demo and
covers the requested interaction templates.

## Preconditions

- Install project dependencies after implementation
- Run the local dev server
- Open the app in a modern browser

## Validation Flow

### 1. Hub page

1. Open the application root.
2. Confirm the page presents a clear component template hub.
3. Confirm at least these entries are visible:
   - List template
   - Interaction template
   - Speckit record page
4. Confirm each entry shows a title, summary, and navigation action.

### 2. List template page

1. Enter the list template page from the hub.
2. Confirm initial list content renders without blank layout gaps.
3. Trigger pull-to-refresh.
4. Confirm the UI shows refresh feedback and the list resets correctly.
5. Scroll to the bottom to trigger load-more.
6. Confirm new items append below existing items.
7. Continue until the no-more state appears.
8. Confirm empty, loading, and no-more states are understandable if exposed by the demo controls.

### 3. Interaction template page

1. Return to the hub and enter the interaction template page.
2. Confirm multiple button examples are visible.
3. Confirm at least one button is disabled and clearly styled as unavailable.
4. Click the button that opens the confirmation dialog.
5. Confirm the dialog displays title, message, confirm action, and cancel action.
6. Confirm both confirm and cancel paths close the dialog and show result feedback.

### 4. Speckit record page

1. Return to the hub and enter the Speckit record page.
2. Confirm the page lists the user prompts from the current conversation in order.
3. Confirm each record explains which Speckit stage it relates to.
4. Confirm the page explains how constitution, specification, and planning were generated.

### 5. Navigation checks

1. From every page, confirm there is a clear route back to the hub.
2. Confirm switching between pages does not break layout or lose navigation clarity.

## Optional Automated Coverage

- Add unit tests for template registry integrity if registry-driven rendering is extracted.
- Add unit tests for list state transitions if refresh/load-more behavior is implemented in a reusable composable.

## Latest Verification

- `2026-03-10`: `pnpm build` passed.
- `2026-03-10`: `pnpm test` passed with 2 unit tests in `tests/unit/useListDemo.spec.ts`.
- Browser-based manual walkthrough is still recommended to visually confirm route transitions,
  list gestures, and confirmation dialog behavior.
