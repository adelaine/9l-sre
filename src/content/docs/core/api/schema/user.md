---
title: User
description: User purpose and relationships in the issue tracker.
---

Represents the agent’s login account and profile within the issue tracker. Character backstory is outside this model.

## Relationships

- A User can report and handle zero or more issues.
- A User can author zero or more comments and upload zero or more attachments.
- User identity is shared across workspaces, but membership comes through UserRole assignments to workspace-owned roles.
- A User has zero or more UserRole assignments, with at most one role per workspace.
- Status-transition permissions come from the user’s role in the issue’s workspace.

## Fields

Fields and database constraints remain to be defined.
