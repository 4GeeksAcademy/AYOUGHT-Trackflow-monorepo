# Technical Context

## Repository Structure

This repository is a monorepo scaffold for HealthCore Digital. Its top-level areas separate agents, data, documentation, infrastructure, internal resources, MCPs, packages, scripts, services, shared resources, skills, user interfaces, and workflows.

- `services/` is intended for backend APIs and background workers. Each service should have its own technical and functional documentation.
- `infra/` is intended for infrastructure and deployment configuration.
- `packages/shared/` contains the private `@repo/shared-types` package. Its entry point and type declarations are `types/index.ts`.
- `uis/website/` currently contains static HTML, CSS, and JavaScript files.

## Current Implementation State

The repository does not establish a root-level runtime, build system, or deployment stack. The `services/` and `infra/` areas currently describe their intended purposes but do not define specific service implementations or infrastructure. The shared types package is the only observed package manifest, and it does not declare dependencies or scripts. Do not treat a particular backend framework, database, cloud provider, or frontend framework as an existing project decision.

## Intended System Context

HealthCore Digital's stated direction is to connect data and workflows across two EHR platforms, separate US and UK billing systems, and separate scheduling processes. The planned capabilities include a central API, operational data pipelines and dashboards, online booking and reminders, clinical documentation and claims assistance, compliance tooling, workforce workflows, and centralized telemetry and alerts. These are requirements from the company briefing, not evidence that the components have already been implemented.

## Technical Constraints

- Systems handling patient information must be designed for HealthCore's obligations under HIPAA in the United States and UK GDPR in the United Kingdom.
- Data access, auditability, privacy, and jurisdiction-specific handling must be considered when integrating or sharing information.
- Integrations must account for two separate EHR platforms and existing billing and scheduling processes across 12 clinics in two countries.
- The technology choices and integration interfaces for these existing systems are not specified in the briefing.

## Open Technical Decisions

The project has not yet documented service runtimes, API conventions, data stores, authentication and authorization, messaging, hosting, deployment, observability tooling, or testing strategy. Decide and document these in the relevant service or infrastructure documentation before relying on them as project standards.
