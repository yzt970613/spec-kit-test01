# Data Model: 组件模板中心

## 1. TemplateEntry

**Purpose**: Represents one navigable item in the component template hub.

**Fields**:
- `id`: unique stable identifier
- `title`: display name shown on the hub page
- `summary`: short explanation of what the template demonstrates
- `routePath`: route used to enter the template page
- `category`: grouping such as `list`, `interaction`, or `record`
- `status`: `ready` or `coming-soon`
- `tags`: short labels used for scanning or later filtering
- `sortOrder`: numeric display order

**Validation Rules**:
- `id` must be unique across all template entries
- `routePath` must map to a registered route when `status` is `ready`
- `title` and `summary` must be non-empty

**Relationships**:
- One `TemplateEntry` maps to one route-level page

## 2. ListDemoItem

**Purpose**: Represents one row in the list component demo.

**Fields**:
- `id`: unique stable identifier
- `title`: primary list text
- `description`: supporting text
- `statusLabel`: optional badge text
- `createdAtLabel`: display-friendly timestamp or ordering label

**Validation Rules**:
- `id` must be unique within the dataset
- `title` must be non-empty

**State Usage**:
- Items are loaded in batches for initial render, refresh, and load-more flows

## 3. ListDemoState

**Purpose**: Captures the current UI state of the list template page.

**Fields**:
- `items`: currently rendered `ListDemoItem[]`
- `page`: current batch index
- `pageSize`: items requested per load cycle
- `isRefreshing`: whether pull-to-refresh is active
- `isLoadingMore`: whether bottom loading is active
- `hasMore`: whether more data is available
- `isEmpty`: whether the current dataset is empty
- `errorMessage`: optional failure feedback

**State Transitions**:
- `initial` -> `loading`
- `loading` -> `ready`
- `ready` -> `refreshing`
- `ready` -> `loadingMore`
- `loadingMore` -> `ready` or `completed`
- any active state -> `error` when mock loading fails

## 4. ButtonDemoItem

**Purpose**: Represents one button example on the interaction template page.

**Fields**:
- `id`: unique stable identifier
- `label`: button text
- `variant`: visual style classification
- `description`: explanation of when the button is used
- `disabled`: whether the button is interactive
- `actionType`: action linked to the button, including dialog trigger when relevant

**Validation Rules**:
- `label` must be non-empty
- `variant` must map to a supported visual treatment

## 5. ConfirmDialogScenario

**Purpose**: Represents one confirmation flow example initiated from a button.

**Fields**:
- `id`: unique stable identifier
- `triggerButtonId`: originating button
- `title`: dialog heading
- `message`: dialog body text
- `confirmText`: confirm action label
- `cancelText`: cancel action label
- `resultFeedback`: messages shown for confirm and cancel outcomes

**Validation Rules**:
- `triggerButtonId` must map to an existing `ButtonDemoItem`
- `title` and `message` must be non-empty

## 6. SpeckitQuestionRecord

**Purpose**: Represents one user prompt from the current conversation for the
record page.

**Fields**:
- `id`: unique stable identifier
- `sequence`: display order
- `questionText`: original user request text
- `stage`: related Speckit stage such as `constitution`, `spec`, or `plan`
- `summary`: concise explanation of what that prompt caused in the project

**Validation Rules**:
- `sequence` must be unique and ascending in the rendered list
- `questionText` must be non-empty
- `stage` must match a known record category
