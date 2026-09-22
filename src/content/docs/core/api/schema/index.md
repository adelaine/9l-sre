---
title: Tables overview
description: The eleven entities in the issue-tracking schema.
---

The [ERD](/core/api/datadiagram/) defines the agreed relationships. **★ Minimum** marks the tables needed for external sign-in, issue creation, and display. Field definitions cover this first milestone; physical database types remain to be defined.

| Table                                           | Purpose                                               | Initial population                | Minimum |
| ----------------------------------------------- | ----------------------------------------------------- | --------------------------------- | ------- |
| [Workspace](/core/api/schema/workspace/)        | Groups issues and owns roles.                         | Seeded                            | ★       |
| [User](/core/api/schema/user/)                  | Account with required, unique, verified email.        | First verified sign-in            | ★       |
| [Provider](/core/api/schema/provider/)          | External sign-in provider catalogue.                  | Seeded                            | ★       |
| [UserIdentity](/core/api/schema/user-identity/) | Links User and Provider with a composite primary key. | Verified sign-in                  | ★       |
| [Role](/core/api/schema/role/)                  | Workspace-owned role.                                 | Seeded                            | ★       |
| [UserRole](/core/api/schema/user-role/)         | Assigns a user to a workspace through Role.           | Assignment after account creation | ★       |
| [Status](/core/api/schema/status/)              | Fixed global issue status.                            | Seeded                            | ★       |
| [Issue](/core/api/schema/issue/)                | Report and its current state.                         | Issue creation API                | ★       |
| [Comment](/core/api/schema/comment/)            | Discussion on an issue.                               | Deferred                          |         |
| [Interval](/core/api/schema/interval/)          | Workspace planning cycle.                             | Deferred                          |         |
| [Attachment](/core/api/schema/attachment/)      | File attached to an issue.                            | Deferred                          |         |

UserIdentity has the composite primary key **(user_id, provider_id)**. The other minimum tables use **id** as their primary key. New users and their identities are not seeded. The [initial API flow](/core/api/#minimum-issue-flow) records the outstanding workspace-role assignment decision.
