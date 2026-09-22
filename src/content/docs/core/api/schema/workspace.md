---
title: Workspace
description: Workspace purpose and relationships in the issue tracker.
---

Organizes issues and planning intervals.

## Relationships

- A workspace has zero or more issues.
- A workspace has zero or more intervals.
- A workspace defines zero or more Roles, each owned by that workspace.
- Users join the workspace through UserRole assignments to its roles, with one role per user per workspace.

## Minimum fields

| Field  | Rule                    |
| ------ | ----------------------- |
| `id`   | Primary key.            |
| `name` | Workspace display name. |

Physical database types remain to be defined.
