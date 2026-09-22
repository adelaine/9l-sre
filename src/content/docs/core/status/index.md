---
title: Status overview
description: Workspace-specific workflow examples with role permissions, Admin override, and required resolution on closure.
sidebar:
    order: 10
---

Each workspace owns its statuses and roles. The flow pages define exactly which roles can make each move. Incident staff may skip stages; repair technicians follow a structured intake and repair flow.

## Shared rules

- Every new issue starts in its workspace’s **Reported** status, including issues created by Admin. Creation is not a configurable transition.
- Each status change must be listed for the user’s role on the applicable flow page. Unlisted moves are denied unless covered by Admin override.
- Reporter may reopen only their own closed issues, and only to Reported. Staff reopening destinations are defined per flow. Reopening retains Resolution.
- **Admin may set an existing issue to any status in the same workspace**, including another closed status. Admin cannot bypass the initial-status rule, workspace boundary, or Resolution requirement.
- In repair, **In Transit and Acquired — Storage are skippable**. Technician must reach With Technician and then Processing before Completed or Failed.

## Resolution on closure

`resolution` is optional plain text while an issue is unfinished. Any move into a closed status requires a resolution containing non-whitespace text, including Admin overrides and moves between closed statuses.

A transition may supply the resolution and destination status together. Validate the resulting issue and save both atomically: if closure is rejected, neither field changes. An existing nonblank resolution satisfies the requirement. A closed issue cannot have its resolution cleared.

On reopening, retain the resolution. It may subsequently be edited or cleared while the issue is unfinished. An initial issue response includes `resolution: null` when none was supplied. See [Issue](/core/tables/issue/) for its fields and display response.

## Workspace flows

- [Incident Report](/core/status/incident/): Reporter, Agent, Support, Supervisor, and Admin.
- [Haunted Machine Repair](/core/status/repair/): Reporter, Technician, and Admin.

## Acceptance criteria

| Scenario                                                                                     | Expected behavior                                                                       |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Create an issue, including as Admin                                                          | Status is Reported in the issue’s workspace; omitted resolution is null.                |
| Select a status from another workspace                                                       | Reject, including for Admin.                                                            |
| Close with missing, empty, or whitespace-only resolution and no existing nonblank resolution | Reject; neither status nor resolution changes.                                          |
| Close with a supplied nonblank resolution                                                    | Save destination status and resolution together.                                        |
| Close with an existing nonblank resolution                                                   | Accept if the role permits the move.                                                    |
| Admin moves into or between closed statuses                                                  | Require nonblank resolution; the override does not waive validation.                    |
| Clear resolution while the issue remains closed                                              | Reject, including for Admin.                                                            |
| Reopen a closed issue                                                                        | Retain resolution; permit a later edit or clear while unfinished.                       |
| Skip In Transit or Storage during repair                                                     | Allow when the role permits the exact move.                                             |
| Non-Admin attempts a move between closed statuses                                            | Reject in these examples.                                                               |
| Admin selects any destination in the same workspace for an existing issue                    | Allow subject to the Resolution rule; selecting the current status leaves it unchanged. |

These are documentation acceptance criteria, not implemented backend tests. Permission-storage fields and API implementation remain to be defined. See the [ERD](/core/datadiagram/) for entity relationships.
