---
title: UserRole
description: Assigns a user to a workspace through one of its roles.
---

Connects a User to a Role. The Role determines the workspace; UserRole has no direct relationship to Workspace.

## Relationships

- Each UserRole belongs to exactly one User and one Role.
- A user joins a workspace through this role assignment.
- A user can have only one role per workspace, but different roles in different workspaces.
- A role from another workspace grants no permission to move an issue’s status in this workspace.

## Minimum fields

| Field     | Rule                                                     |
| --------- | -------------------------------------------------------- |
| `id`      | Primary key.                                             |
| `user_id` | Required reference to User.id.                           |
| `role_id` | Required reference to Role.id; determines the workspace. |

Physical database types remain to be defined.

Enforce one role per user per workspace through the referenced Role. Uniqueness of the user–role pair alone is insufficient. The initial role-assignment flow for new reporters remains an open decision.
