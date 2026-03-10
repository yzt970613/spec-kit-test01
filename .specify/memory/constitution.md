<!--
Sync Impact Report
- Version change: template -> 1.0.0
- Modified principles:
  - Principle slot 1 -> I. Primary Frontend Stack
  - Principle slot 2 -> II. Vue 3 Composition Standard
  - Principle slot 3 -> III. Demo-First Scope Control
  - Principle slot 4 -> IV. Plugin and Tooling Discipline
  - Principle slot 5 -> V. Delivery Quality Gates
- Added sections:
  - Technical Standards
  - Workflow and Review
- Removed sections:
  - None
- Templates requiring updates:
  - updated: .specify/templates/plan-template.md
  - updated: .specify/templates/spec-template.md
  - updated: .specify/templates/tasks-template.md
- Follow-up TODOs:
  - None
-->
# Spec Kit Demo Frontend Constitution

## Core Principles

### I. Primary Frontend Stack
All feature delivery MUST remain centered on TypeScript, Vue 3.x,
`<script setup>`, Less, and Tailwind CSS. New application code MUST use
TypeScript rather than plain JavaScript. New UI features MUST be implemented in
Vue 3 components or Vue-native supporting modules, not by introducing another
primary UI framework.

Rationale: This repository is a frontend demo project. The stack boundary keeps
generated specs, plans, and implementation consistent and prevents accidental
drift into unrelated technology choices.

### II. Vue 3 Composition Standard
Vue code MUST follow the Composition API with `<script setup>` as the default
authoring model. Shared behavior MUST be extracted into composables or typed
utility modules when reuse becomes likely. Styling MUST use Less and/or
Tailwind CSS in a way that preserves readable component structure and avoids
inline style sprawl.

Rationale: A single Vue authoring pattern reduces maintenance cost and keeps
the demo approachable for contributors.

### III. Demo-First Scope Control
This project exists as a demo. Feature scope MUST favor clarity, speed of
delivery, and visible frontend value over production-grade platform complexity.
Mock data, local state, and lightweight integration approaches are acceptable
when they communicate the intended product behavior. New backend services,
alternate runtimes, or heavy infrastructure MUST NOT be introduced unless the
feature cannot be demonstrated without them and that exception is documented in
the plan.

Rationale: Demo projects fail when incidental complexity grows faster than the
learning value they provide.

### IV. Plugin and Tooling Discipline
Plugins, build tools, UI libraries, linting tools, and developer utilities MAY
be added when they strengthen delivery inside the approved stack. They MUST NOT
replace Vue 3, TypeScript, Less, or Tailwind CSS as primary choices. Every new
dependency MUST include a short justification in the relevant plan or task
output, including what problem it solves and why the existing stack is
insufficient on its own.

Rationale: Extension is allowed, but the project must remain recognizable as
the chosen frontend stack rather than a moving target.

### V. Delivery Quality Gates
Each feature spec, plan, and task list MUST explicitly reflect the approved
stack, affected Vue modules, styling impact, and plugin impact if any. Every
implementation MUST provide a verification path appropriate to demo scope:
manual validation steps are mandatory, and automated tests SHOULD be added for
shared logic, reusable composables, or behavior with meaningful regression
risk. Work that violates these gates MUST be corrected before completion.

Rationale: Lightweight governance is only useful if it is visible in the
artifacts used to build the project.

## Technical Standards

- Preferred project type: single frontend web application.
- Preferred language level: current TypeScript supported by the repo toolchain.
- Preferred framework pattern: Vue 3 SFCs with `<script setup>`.
- Preferred styling pattern: Tailwind CSS for utility-first layout and Less for
  scoped theme or component styling when utilities alone are not enough.
- State, routing, charts, component libraries, request tools, and similar
  additions are allowed only when they integrate cleanly with Vue 3 and do not
  create a second primary architecture.
- Generated plans and tasks MUST name concrete frontend directories such as
  `src/components`, `src/views`, `src/composables`, `src/styles`, and
  `src/types` when those paths are part of the implementation.

## Workflow and Review

- Specs MUST describe the user-visible demo behavior first and keep
  implementation notes aligned to the approved stack.
- Plans MUST fail constitution review if they propose another primary framework,
  abandon TypeScript, avoid `<script setup>` without reason, or add plugins with
  no justification.
- Tasks MUST remain implementation-ready, include exact file paths, and separate
  shared setup work from user-story work.
- Reviews MUST check stack compliance, simplicity, consistency of styling
  choices, and whether the solution remains appropriate for a demo repository.
- Exceptions are allowed only when documented in the plan with a concrete reason
  and a simpler alternative that was rejected.

## Governance

This constitution overrides conflicting local defaults for specifications,
planning, and task generation in this repository. Amendments MUST update this
document and any affected templates in the same change. Semantic versioning is
used for governance changes: MAJOR for incompatible principle changes, MINOR
for new or materially expanded guidance, and PATCH for clarifications only.
Every plan and review MUST include a constitution compliance check before work
is considered ready.

**Version**: 1.0.0 | **Ratified**: 2026-03-10 | **Last Amended**: 2026-03-10
