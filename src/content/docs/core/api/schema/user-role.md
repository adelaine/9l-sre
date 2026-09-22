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

## Fields

Fields and enforcement details remain to be defined. The one-role-per-user-per-workspace rule must account for the workspace reached through Role; uniqueness of the user–role pair alone is insufficient.
