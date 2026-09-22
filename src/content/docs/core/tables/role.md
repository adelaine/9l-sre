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

Each role specifies the individual [status transitions](/core/status/) it permits within its workspace. Permission for one transition does not imply permission for its reverse or any other transition. Forward skips, backward moves, entering or leaving Stalled, and reopening each require explicit permission.

## Workspace examples

| Workspace              | Roles                                           |
| ---------------------- | ----------------------------------------------- |
| Incident Report        | Reporter, Operative, Support, Supervisor, Admin |
| Haunted Machine Repair | Reporter, Technician, Admin                     |

These are separate workspace-owned roles, even when names match. The [Incident Report](/core/status/incident/) and [repair](/core/status/repair/) pages define their transition permissions. Support means Operative Support: scouting, spotting, equipment, and inventory assistance.

Admin can set an existing issue to any status in its own workspace, including moving between closed statuses. It cannot create an issue outside Reported, use another workspace’s status, or bypass the nonblank Resolution requirement for a closed destination.

## Minimum fields

| Field          | Rule                                                                    |
| -------------- | ----------------------------------------------------------------------- |
| `id`           | Primary key.                                                            |
| `workspace_id` | Required reference to Workspace.id; each role belongs to one workspace. |
| `name`         | Role display name.                                                      |

Physical database types remain to be defined.

Permission-storage fields and API implementation remain to be defined. Roles are seeded for the first milestone.
