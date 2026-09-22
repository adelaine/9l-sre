---
title: Issues
description: Top-level issue endpoints under /issues.
---

The `/issues` resource handles issues. Each issue still belongs to one workspace. Workspace records are seeded for the initial milestone; workspace-management endpoints are deferred.

**★ Minimum** marks the endpoints needed to create and display one issue.

| Method and endpoint       | Purpose                                     | Minimum |
| ------------------------- | ------------------------------------------- | ------- |
| `POST /issues`            | Create an issue in Reported status          | ★       |
| `GET /issues/{issueId}`   | Retrieve an issue with display details      | ★       |
| `GET /issues`             | List and filter issues                      |         |
| `PATCH /issues/{issueId}` | Update issue details, assignee, or interval |         |

## Issue creation and display

Create an issue with a required `workspaceId` and title, plus optional description and resolution. The server supplies the ID, authenticated reporter, creation timestamp, and its workspace’s Reported status. Omitted resolution is returned as null. Creation and retrieval return the same [issue display response](/core/tables/issue/#display-response).

For retrieval and updates, resolve the workspace from the stored issue and check the caller’s access to that workspace. Listing may filter by `workspaceId`; a filter does not replace access checks. Workspace reassignment is outside this API’s scope.

A newly authenticated reporter needs a role in the workspace before creating an issue. The [Core milestone](/core/#minimum-issue-flow) records the outstanding assignment decision.

[Comments](/core/api/comments/) and [Workflow](/core/api/workflow/), along with attachment, interval, and assignment APIs, are deferred from the first milestone. [Incident Report](/core/status/incident/) and [Haunted Machine Repair](/core/status/repair/) define the subsequent role-controlled workflows; status changes are not part of the general issue-details update.

## Proposed fuller read response

The fuller response below is proposed for `GET /issues` and `GET /issues/{issueId}` and their [mock counterparts](/core/api/mock/). It does not change the initial milestone: creation and retrieval still use the [minimum display response](/core/tables/issue/#display-response) until the fuller contract is adopted.

A fuller issue includes every minimum display field plus the following fields. All fields are present; only fields explicitly marked nullable may be null.

| Field                | Proposed shape                                                                                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assignee`           | Nullable object with string `id` and `displayName`.                                                                                                                      |
| `interval`           | Nullable object with string `id`, `name`, and `workspaceId`.                                                                                                             |
| `status.isClosed`    | Boolean added to the existing status object.                                                                                                                             |
| `status.workspaceId` | String identifying the status’s workspace; must equal `workspace.id`.                                                                                                    |
| `comments`           | Array of objects with string `id`, `issueId`, `body`, UTC `createdAt`, and `author: { id, displayName }`.                                                                |
| `attachments`        | Array of metadata objects with string `id`, `issueId`, `filename`, `contentType`, UTC `createdAt`, nonnegative integer `sizeBytes`, and `uploader: { id, displayName }`. |

All identifiers and display names are strings. `description` and `resolution` are nullable strings; `createdAt` is a UTC timestamp ending in `Z`. Empty comments and attachments are `[]`. User display objects contain only `id` and `displayName`. `interval.workspaceId`, when present, equals `workspace.id`. Each comment and attachment has the containing issue’s ID. Attachments belong to issues, not comments; file download routes are outside this proposal.

Collection reads return a JSON array of these full objects; detail reads return one object without an envelope. Pagination and filtering contracts remain deferred. A closed status requires a nonblank resolution, as defined by the [shared status rules](/core/status/).

See [Mock issues](/core/mock/issues/) for complete reported, assigned, and closed examples and the required response tests.
