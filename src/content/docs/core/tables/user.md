---
title: User
description: User purpose and relationships in the issue tracker.
---

Represents the operative’s login account and profile within the issue tracker. Character backstory is outside this model.

## Relationships

- A User can report and handle zero or more issues.
- A User can author zero or more comments and upload zero or more attachments.
- User identity is shared across workspaces, but membership comes through UserRole assignments to workspace-owned roles.
- A User has zero or more UserRole assignments, with at most one role per workspace.
- Status-transition permissions come from the user’s role in the issue’s workspace.

## Minimum fields

| Field          | Rule                                                               |
| -------------- | ------------------------------------------------------------------ |
| `id`           | Primary key; used by issue and role references.                    |
| `email`        | Required, unique, and verified through the external identity flow. |
| `display_name` | Required reporter display name.                                    |

Physical database types remain to be defined.

There are no password fields. A User has zero or more [UserIdentity](/core/tables/user-identity/) records, with one identity per provider. New reporter accounts are created after successful external sign-in and verified email ownership.
