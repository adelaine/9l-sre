---
title: Status
description: Status purpose and relationships in the issue tracker.
---

Describes an issue’s current progress.

## Relationships

- A status can be used by zero or more issues.
- Statuses are fixed globally and shared across workspaces.

## Agreed statuses

| Status         | Meaning                                                        |
| -------------- | -------------------------------------------------------------- |
| Reported       | The issue has been submitted.                                  |
| Investigating  | The cause or required response is being determined.            |
| Processing     | Investigation is complete and the fix or response is underway. |
| Stalled        | Progress is blocked or paused.                                 |
| Completed      | The work is finished.                                          |
| Not Applicable | The report does not require applicable work.                   |

## Initial status

Reported is the only allowed initial status for a new issue. Role permissions cannot override this rule.

## Transitions

The [status-transition diagram](/core/api/status-transitions/) defines all possible moves. Each requires explicit permission from the user’s role in the issue’s workspace. Forward skips, backward moves, entering or leaving Stalled, and reopening Completed or Not Applicable issues all require permission for the exact transition.

## Fields

Fields and database constraints remain to be defined.
