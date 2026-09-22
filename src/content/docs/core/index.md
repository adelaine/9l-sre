---
title: Core overview
description: The shared Java and Spring Boot API service for 9L-SRE.
---

Core is the shared Java and Spring Boot application programming interface (API) service for 9L-SRE. Both ClientJ and ClientL use the same service for issue tracking. Its repository is `9l-sre-core`.

## Responsibilities

Core owns issue-tracking data and shared business rules: workspaces, issues, comments, statuses, planning intervals, users, attachments, and workspace-specific role assignments. A User represents the agent’s account and profile in the issue tracker; character backstory is outside this model.

Both clients should apply the same rules and interpret the same data consistently. The agreed relationships are documented before table fields and API contracts are defined.

## Read next

- [API overview](/core/api/): intended capabilities and contract documentation.
- [Entity relationship diagram](/core/api/datadiagram/): the agreed issue-tracking model.
- [Tables](/core/api/schema/): entity descriptions and relationships.
- [Data and reset](/core/data-and-reset/): demo restoration planning.
