---
title: Status
description: Workspace-owned issue statuses and their closure classification.
---

Describes an issue’s current progress within its workspace.

## Relationships

- Each Status belongs to exactly one Workspace and can classify zero or more issues.
- An issue’s Status must belong to the same workspace as the issue.
- Status codes are unique within a workspace, not globally.

## Workspace examples

| Workspace              | Unfinished statuses                                                              | Closed statuses                   |
| ---------------------- | -------------------------------------------------------------------------------- | --------------------------------- |
| Incident Report        | Reported, Investigating, Processing, Stalled                                     | Completed, Not Applicable         |
| Haunted Machine Repair | Reported, In Transit, Acquired — Storage, Acquired — With Technician, Processing | Completed, Failed, Not Applicable |

In repair, In Transit and Storage are optional. With Technician indicates physical custody before work starts; Processing means repair is underway. Incident and repair transitions are defined on their [separate flow pages](/core/status/).

## Initial status and transitions

Reported is the only allowed initial status in every workspace, including for Admin. Each workspace must seed its Reported status as unfinished.

The [workflow diagrams](/core/status/) define possible role-permitted moves and the Admin override. Closed issues may reopen. Any closed destination requires a nonblank Issue resolution, including Admin moves between closed statuses. A closed issue’s resolution cannot be cleared.

## Minimum fields

| Field          | Rule                                                                            |
| -------------- | ------------------------------------------------------------------------------- |
| `id`           | Primary key.                                                                    |
| `workspace_id` | Required reference to Workspace.id.                                             |
| `code`         | Required stable code; (workspace_id, code) is unique.                           |
| `name`         | Status display name.                                                            |
| `is_closed`    | Required boolean indicating whether this status requires a nonblank resolution. |

Seed `is_closed` according to the workspace examples above. Physical database types remain to be defined.
