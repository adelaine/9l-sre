---
title: Tables overview
description: The nine entities in the issue-tracking schema.
---

The [ERD](/core/api/datadiagram/) defines the agreed relationships. These pages describe each entity; table fields and database constraints remain to be defined.

| Table                                      | Purpose                                                                                                               |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| [Workspace](/core/api/schema/workspace/)   | Organizes issues and planning intervals.                                                                              |
| [Issue](/core/api/schema/issue/)           | Represents a report and the work needed to handle it.                                                                 |
| [Comment](/core/api/schema/comment/)       | Records a user’s discussion or update on an issue.                                                                    |
| [Status](/core/api/schema/status/)         | Describes an issue’s current progress.                                                                                |
| [Interval](/core/api/schema/interval/)     | Represents a planning cycle that groups issues within a workspace.                                                    |
| [User](/core/api/schema/user/)             | Represents the agent’s login account and profile within the issue tracker. Character backstory is outside this model. |
| [Attachment](/core/api/schema/attachment/) | Represents a file attached to an issue.                                                                               |
| [Role](/core/api/schema/role/)             | Defines a workspace-owned role and its permitted status transitions.                                                  |
| [UserRole](/core/api/schema/user-role/)    | Connects a user to a workspace through one of its roles.                                                              |
