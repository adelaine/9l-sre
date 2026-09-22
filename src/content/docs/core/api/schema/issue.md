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

## Fields

Fields and database constraints remain to be defined.
