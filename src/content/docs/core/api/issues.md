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
