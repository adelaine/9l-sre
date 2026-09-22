---
title: Workflow
description: Issue status-transition endpoints under /workflow.
---

The `/workflow` resource exposes allowed status transitions and applies them to an issue. These are proposed endpoints. **None are required for the initial creation-and-display milestone.**

| Method and endpoint                    | Purpose                                                              | Minimum |
| -------------------------------------- | -------------------------------------------------------------------- | ------- |
| `GET /workflow/{issueId}/transitions`  | List transitions available to the signed-in user for this issue      |         |
| `POST /workflow/{issueId}/transitions` | Apply a permitted status transition, optionally supplying resolution |         |

## Transition behavior

Resolve the workspace and current status from the stored issue. Determine allowed moves using the user’s role in that workspace and the applicable [Incident Report](/core/status/incident/) or [Haunted Machine Repair](/core/status/repair/) flow. Reporter reopening also requires that the user reported the issue.

A transition request identifies the destination status and may supply resolution. Recheck permissions and the issue’s current state when applying the transition; a previously retrieved list is not authorization to perform a move later.

The destination status must belong to the issue’s workspace. Any closed destination requires nonblank resolution, either already stored or supplied with the transition. Validate and save status and resolution atomically. Reopening retains resolution. Admin override follows the same workspace and Resolution rules.

Creation always starts in Reported through [POST /issues](/core/api/issues/). General issue updates cannot bypass this transition API. See the [shared workflow rules](/core/status/) for the complete constraints. Exact payload fields, response shapes, and error contracts remain to be defined.
