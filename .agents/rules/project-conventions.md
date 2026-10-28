---
description: Repository-wide development conventions
alwaysApply: true
---

# Project Development Conventions

## Scope

Application: Entire repository

Activation: Always active

## Rule 1: Respect Company Context

All development must align with BRIEFING.md.

Do not invent business requirements.

## Rule 2: Preserve Architecture

Use the established application locations:

- uis/website
- uis/backoffice for the internal application when that application is created
- services

Do not create duplicate application directories.

## Rule 3: Read Existing Documentation

Before modifying a directory:

1. Read its README.md, if present.
2. Review existing files.
3. Identify established conventions.
4. Follow the existing architecture.

## Rule 4: Make Controlled Changes

- Prefer small, focused changes.
- Avoid unrelated refactoring.
- Avoid unnecessary dependencies.
- Preserve existing functionality.
- Do not modify protected files without approval.

## Rule 5: Validate Before Committing

Before requesting a commit:

1. Review git diff.
2. Check changed files.
3. Run applicable tests.
4. Confirm the task's acceptance criteria.
5. Update memory-bank/progress.md.

## Rule 6: Report Results

Explain:

- What changed
- Why it changed
- Which tests were run
- Which tests passed or failed
- Any unresolved problems
