---
title: Comments
description: Issue comment endpoints under /comments.
---

The `/comments` resource handles discussion and updates on an issue. These are proposed endpoints. **None are required for the initial creation-and-display milestone.**

| Method and endpoint               | Purpose                    | Minimum |
| --------------------------------- | -------------------------- | ------- |
| `POST /comments`                  | Add a comment to an issue  |         |
| `GET /comments?issueId={issueId}` | List comments for an issue |         |
| `GET /comments/{commentId}`       | Retrieve a comment         |         |
| `PATCH /comments/{commentId}`     | Edit a comment’s body      |         |
| `DELETE /comments/{commentId}`    | Remove a comment           |         |

## Comment behavior

Creation identifies the issue and supplies the comment body. The server derives the author from the authenticated user. Each comment belongs to exactly one issue and has one author; editing does not reassign either relationship.

Resolve the workspace through the comment’s issue and check the caller’s access for every operation. The exact rules for who may add, edit, or remove comments remain to be defined. An issue filter does not replace access checks.

Attachment filenames may be mentioned as ordinary text. Comments do not have a separate attachment relationship. See [Comment](/core/tables/comment/) for the entity model. Request and response fields, validation limits, pagination, and error contracts remain to be defined.
