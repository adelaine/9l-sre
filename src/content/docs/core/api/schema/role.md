---
title: Role
description: A workspace-owned role and its permitted status transitions.
---

Defines a role owned by one workspace. Users join that workspace through assignments to its roles.

## Relationships

- A Role belongs to exactly one Workspace.
- A Role has zero or more UserRole assignments, each connecting one User to that Role.
- A user can have different roles in different workspaces, but only one role per workspace.

## Status permissions

Each role specifies the individual [status transitions](/core/api/status-transitions/) it permits within its workspace. Permission for one transition does not imply permission for its reverse or any other transition. Forward skips, backward moves, entering or leaving Stalled, and reopening each require explicit permission.

## Fields

Role names, permission-storage fields, and API implementation remain to be defined.
