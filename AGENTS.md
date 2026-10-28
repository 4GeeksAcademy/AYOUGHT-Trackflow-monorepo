# AI Agent Development Instructions

## 1. Purpose

This file defines the mandatory workflow
for AI coding agents operating in this monorepo.

All agent changes must align with the company's
BRIEFING.md and established project architecture.

## 2. Required Reading

At the beginning of every development session,
read these files in order:

1. BRIEFING.md
2. memory-bank/projectbrief.md
3. memory-bank/techContext.md
4. memory-bank/progress.md
5. Relevant README.md files
6. Applicable repository-specific instructions and any scoped rules that exist
7. Relevant SKILL.md files under skills/ or .agents/skills/ when using a repository skill

If required context is missing or contradictory,
stop and ask the developer for clarification.

## 3. Mandatory Workflow Before Every Commit

### Step 1: Understand

- Read the required project context.
- Identify the task and acceptance criteria.
- Review the affected folders and files.
- Confirm that the task matches the briefing.

### Step 2: Plan

- Identify the smallest safe change.
- Check existing code and conventions.
- Identify potential risks and dependencies.
- Ask for approval if the scope is unclear.

### Step 3: Implement

- Modify only files necessary for the task.
- Preserve the existing architecture.
- Avoid unnecessary dependencies.
- Do not introduce unrelated features.
- Do not expose secrets or credentials.

### Step 4: Validate

- Review the changes using git diff.
- Run relevant tests or validation commands.
- Check that requirements are satisfied.
- Check that protected files were not changed.
- Record any validation limitations.

### Step 5: Document and Request Review

- Update memory-bank/progress.md.
- Update technical context if needed.
- Summarize changes and test results.
- Request developer review before committing.

The agent must not commit or push changes
without explicit developer authorization.

## 4. Protected Files and Directories

Do not modify these without explicit approval:

- BRIEFING.md
- .env files
- Secrets and credential files
- Authentication and authorization configuration
- Production deployment configuration
- Database migrations or destructive scripts
- CI/CD workflows
- Dependency lockfiles
- Existing business-critical configuration

If a protected file must change,
explain why and request approval first.

## 5. Monorepo Conventions

Use the established repository directories:

- uis/website for the public website
- uis/backoffice for the internal application when that application is created
- agents for agent templates and tools
- services for backend APIs
- skills for reusable agent skills
- memory-bank for persistent project context

Read the relevant README before modifying
or creating application code.

Do not create duplicate application trees.

## 6. Branch and Delivery Process

- Work on a dedicated feature branch.
- Review the diff before each commit.
- Run appropriate validation.
- Update project documentation.
- Obtain developer authorization to commit.
- Push the feature branch.
- Open a pull request targeting main.
- Merge only after review and approval.

## 7. When the Agent Must Stop

Stop and ask the developer when:

- Business requirements conflict.
- Required documentation is missing.
- A protected file needs modification.
- A destructive operation is requested.
- Security implications are unclear.
- The change exceeds the approved scope.

## 8. Definition of Done

A task is complete only when:

- The requested change is implemented.
- Acceptance criteria are satisfied.
- Applicable validation has passed.
- Documentation is updated.
- Changes are ready for developer review.
