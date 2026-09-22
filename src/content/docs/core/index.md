---
title: Core overview
description: The shared Java and Spring Boot API service for 9L-SRE.
---

Core is the shared Java and Spring Boot application programming interface (API) service for 9L-SRE. Both ClientJ and ClientL use the same service for issue tracking. Its repository is `9l-sre-core`.

## Responsibilities

Core owns issue-tracking data and shared business rules: workspaces, issues, comments, statuses, planning intervals, users, attachments, and workspace-specific role assignments. A User represents the operative’s account and profile in the issue tracker; character backstory is outside this model.

Both clients should interpret identifiers, status values, validation failures, and data lifecycle consistently. Their interfaces can differ without changing the meaning of a Core response. Integration plans are documented for [ClientJ](/client-j/core-integration/) and [ClientL](/client-l/core-integration/).

## API resources

The API pages describe proposed contracts, not verified implemented endpoints. **★ Minimum** identifies endpoints for the first milestone.

- [Mock](/core/api/mock/): proposed fixed issue reads under `/mock`, with [fixtures and test requirements](/core/mock/issues/).
- [Auth](/core/api/auth/): external sign-in and sessions under `/auth`.
- [Issues](/core/api/issues/): issue creation, retrieval, listing, and updates under `/issues`.
- [Workflow](/core/api/workflow/): role-controlled status transitions under `/workflow`; deferred from the first milestone.
- [Comments](/core/api/comments/): issue discussion under `/comments`; deferred from the first milestone.

## Minimum issue flow

1. Authenticate externally and establish a verified User and UserIdentity.
2. Assign the new reporter a role in the seeded workspace.
3. Create an issue in Reported status.
4. Retrieve it by ID for display.

**Open decision:** how the new reporter receives a workspace role. Automatic assignment to a seeded Reporter role has been proposed but not agreed. UserRole cannot be seeded ahead of a newly created User; this decision must be resolved before the end-to-end flow can be implemented.

Supporting resources are seeded; their management APIs are deferred. The initial demo uses an in-memory H2 database, so restarting clears created issues and users and restores the seeds. The [Tables overview](/core/tables/) marks the minimum tables.

## Contract documentation

For each implemented operation, document its HTTP method and path, required identity or permissions, request fields, response fields, status codes, and validation errors. Include a request example checked against Core. Document filtering, ordering, and pagination when collection operations introduce those behaviors.

## Read next

- [Infrastructure](/core/infrastructure/): runtime and development containers, Podman, and H2 storage.

- [Entity relationship diagram](/core/datadiagram/): the agreed issue-tracking model.
- [Tables](/core/tables/): entity descriptions and fields.
- [Status](/core/status/): shared rules and role-specific incident and repair workflows.
