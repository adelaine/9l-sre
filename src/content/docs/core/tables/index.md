---
title: Tables overview
description: The eleven entities in the issue-tracking schema.
---

The [ERD](/core/datadiagram/) defines the agreed relationships. **★ Minimum** marks the tables needed for external sign-in, issue creation, and display. Field definitions cover this first milestone; physical database types remain to be defined.

| Table                                       | Purpose                                                  | Initial population                | Minimum |
| ------------------------------------------- | -------------------------------------------------------- | --------------------------------- | ------- |
| [Workspace](/core/tables/workspace/)        | Groups issues and owns roles.                            | Seeded                            | ★       |
| [User](/core/tables/user/)                  | Account with required, unique, verified email.           | First verified sign-in            | ★       |
| [Provider](/core/tables/provider/)          | External sign-in provider catalogue.                     | Seeded                            | ★       |
| [UserIdentity](/core/tables/user-identity/) | Links User and Provider with a composite primary key.    | Verified sign-in                  | ★       |
| [Role](/core/tables/role/)                  | Workspace-owned role.                                    | Seeded                            | ★       |
| [UserRole](/core/tables/user-role/)         | Assigns a user to a workspace through Role.              | Assignment after account creation | ★       |
| [Status](/core/tables/status/)              | Workspace-owned issue status and closure classification. | Seeded                            | ★       |
| [Issue](/core/tables/issue/)                | Report and its current state.                            | Issue creation API                | ★       |
| [Comment](/core/tables/comment/)            | Discussion on an issue.                                  | Deferred                          |         |
| [Interval](/core/tables/interval/)          | Workspace planning cycle.                                | Deferred                          |         |
| [Attachment](/core/tables/attachment/)      | File attached to an issue.                               | Deferred                          |         |

UserIdentity has the composite primary key **(user_id, provider_id)**. The other minimum tables use **id** as their primary key. New users and their identities are not seeded. The [initial API flow](/core/#minimum-issue-flow) records the outstanding workspace-role assignment decision.
