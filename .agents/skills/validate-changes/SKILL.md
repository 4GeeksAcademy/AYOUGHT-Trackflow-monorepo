---
name: validate-changes
description: Review repository changes and verify readiness for a Git commit.
---

# Validate Changes Skill

## Objective

Review the current repository changes and
determine whether they are ready for
developer approval and commit.

This skill performs validation only.
It must not commit, push, merge, or deploy.

## Inputs

Required inputs:

1. The current Git working tree.
2. BRIEFING.md.
3. AGENTS.md.
4. memory-bank/projectbrief.md.
5. memory-bank/techContext.md.
6. memory-bank/progress.md.
7. Applicable rules in .agents/rules/.
8. The developer's task requirements.

## Procedure

### Step 1: Read Context

Read the required files.

Confirm that the proposed changes align
with the company's business requirements.

### Step 2: Inspect Changes

Run:

git status --short

git diff --check

git diff

git diff --cached

Review all modified and newly created files.
Use git status to identify untracked files,
because git diff does not show their contents.

### Step 3: Check Repository Structure

Confirm that:

- Public website code belongs in uis/website.
- Internal application code belongs in uis/backoffice when that application is created.
- Backend code belongs in services.
- Memory files belong in memory-bank.
- Agent rules belong in .agents/rules.
- Agent skills belong in .agents/skills.
- No unnecessary parallel directories exist.

### Step 4: Run Appropriate Validation

Inspect the project's available test commands.

Run relevant tests when possible.

Do not invent test results.

Record tests that cannot be executed.

### Step 5: Review Acceptance Criteria

Verify that:

- Business and technical context are documented.
- AGENTS.md defines the delivery workflow.
- Agent rules have explicit scope.
- The skill has a single objective.
- The skill's inputs are documented.
- Validation results are verifiable.
- Protected files were not modified without approval.

### Step 6: Produce a Report

Provide a report containing:

1. Files reviewed.
2. Checks performed.
3. Passed checks.
4. Failed checks.
5. Warnings.
6. Required corrections.
7. Final readiness assessment.

## Expected Output

A Markdown validation report.

## Acceptance Criteria

The skill is successful when:

- It reads the required project context.
- It inspects relevant repository changes.
- It checks the applicable requirements.
- It reports actual validation results.
- It identifies any unresolved issues.
- It does not perform unauthorized Git actions.

## Restrictions

Do not commit changes automatically.

Do not push changes automatically.

Do not modify protected files.

Do not report tests as passed unless
they were actually executed successfully.
