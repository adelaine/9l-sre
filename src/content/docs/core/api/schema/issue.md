---
title: Issue
description: Issue purpose and relationships in the issue tracker.
---

Represents a report and the work needed to handle it.

## Relationships

- An issue belongs to exactly one workspace.
- An issue has exactly one status and one User as its reporter.
- An issue may have one User as its assignee.
- An issue may belong to one interval in its workspace.
- An issue has zero or more comments and attachments.
- Attachment filenames can be mentioned as ordinary text.

## Initial status

Every new issue must start in **Reported**, regardless of the user’s role. No other initial status is allowed. Subsequent changes follow the [role-controlled status transitions](/core/api/status-transitions/).

## Minimum fields

| Field          | Rule                                                           |
| -------------- | -------------------------------------------------------------- |
| `id`           | Server-generated primary key.                                  |
| `workspace_id` | Required reference to Workspace.id, from the request path.     |
| `reporter_id`  | Required reference to User.id, from the authenticated session. |
| `status_id`    | Required reference to Status.id; always Reported at creation.  |
| `title`        | Required issue title.                                          |
| `description`  | Optional plain-text description.                               |
| `created_at`   | Server-generated creation timestamp in UTC.                    |

Physical database types remain to be defined.

## Display response

Creation and retrieval return the same issue shape, including related display names so the client does not need lookup APIs. Example identifiers below are illustrative, not selected database types.

```json
{
    "id": "issue-id",
    "title": "Server is unreachable",
    "description": "Requests have been timing out since this morning.",
    "workspace": { "id": "workspace-id", "name": "Operations" },
    "reporter": { "id": "user-id", "displayName": "Diane" },
    "status": { "id": "status-id", "code": "REPORTED", "name": "Reported" },
    "createdAt": "2026-09-22T13:00:00Z"
}
```

Authentication identities and role assignments are not included in this response. Assignee, interval, comments, and attachments remain outside the minimum display schema.
