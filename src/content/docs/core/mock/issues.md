---
title: Issues
description: Proposed mock issue responses and required HTTP contract tests.
sidebar:
    order: 20
---

These planned endpoints mirror the [Issues API’s proposed fuller read response](/core/api/issues/#proposed-fuller-read-response). They return fixed fictional data according to the [Mock rules](/core/mock/); they are not implemented endpoints.

## Endpoints

| Request                          | Expected response                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------ |
| `GET /mock/issues`               | HTTP 200 with an `application/json` array containing the three examples below in ID order. |
| `GET /mock/issues/{issueId}`     | HTTP 200 with `application/json` and the matching example object.                          |
| `GET /mock/issues/unknown-issue` | HTTP 404. An error-body contract is deferred; clients must not depend on its shape.        |

List and detail responses contain the same complete issue objects. No authentication simulation, writes, filtering, pagination, or attachment downloads are included in this scope.

## Fixed examples

### Reported

`GET /mock/issues/issue-001` returns:

```json
{
    "id": "issue-001",
    "title": "Server is unreachable",
    "description": null,
    "resolution": null,
    "workspace": {
        "id": "workspace-incidents",
        "name": "Incident Report"
    },
    "reporter": {
        "id": "user-reporter",
        "displayName": "Alex Example"
    },
    "status": {
        "id": "status-reported",
        "code": "REPORTED",
        "name": "Reported",
        "isClosed": false,
        "workspaceId": "workspace-incidents"
    },
    "createdAt": "2026-09-22T08:00:00Z",
    "assignee": null,
    "interval": null,
    "comments": [],
    "attachments": []
}
```

### Assigned and investigating

`GET /mock/issues/issue-002` returns:

```json
{
    "id": "issue-002",
    "title": "Intermittent request timeouts",
    "description": "Requests time out during the morning batch.",
    "resolution": null,
    "workspace": {
        "id": "workspace-incidents",
        "name": "Incident Report"
    },
    "reporter": {
        "id": "user-reporter",
        "displayName": "Alex Example"
    },
    "status": {
        "id": "status-investigating",
        "code": "INVESTIGATING",
        "name": "Investigating",
        "isClosed": false,
        "workspaceId": "workspace-incidents"
    },
    "createdAt": "2026-09-22T09:00:00Z",
    "assignee": {
        "id": "user-agent",
        "displayName": "Sam Example"
    },
    "interval": {
        "id": "interval-001",
        "name": "September maintenance",
        "workspaceId": "workspace-incidents"
    },
    "comments": [
        {
            "id": "comment-001",
            "issueId": "issue-002",
            "author": {
                "id": "user-agent",
                "displayName": "Sam Example"
            },
            "body": "Reviewing timeout-log.txt for the affected requests.",
            "createdAt": "2026-09-22T09:15:00Z"
        }
    ],
    "attachments": [
        {
            "id": "attachment-001",
            "issueId": "issue-002",
            "uploader": {
                "id": "user-agent",
                "displayName": "Sam Example"
            },
            "filename": "timeout-log.txt",
            "contentType": "text/plain",
            "sizeBytes": 256,
            "createdAt": "2026-09-22T09:10:00Z"
        }
    ]
}
```

### Closed

`GET /mock/issues/issue-003` returns:

```json
{
    "id": "issue-003",
    "title": "Service restart completed",
    "description": "The service stopped accepting requests.",
    "resolution": "Restarted the service and verified successful requests.",
    "workspace": {
        "id": "workspace-incidents",
        "name": "Incident Report"
    },
    "reporter": {
        "id": "user-reporter",
        "displayName": "Alex Example"
    },
    "status": {
        "id": "status-completed",
        "code": "COMPLETED",
        "name": "Completed",
        "isClosed": true,
        "workspaceId": "workspace-incidents"
    },
    "createdAt": "2026-09-22T07:00:00Z",
    "assignee": {
        "id": "user-agent",
        "displayName": "Sam Example"
    },
    "interval": null,
    "comments": [],
    "attachments": []
}
```

## Required HTTP tests

When the endpoints are implemented, tests must send HTTP requests to the running application and validate the returned responses, rather than only inspecting fixture objects or calling controller methods directly.

| Scenario                      | Required assertion                                                                                                                                                                        |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| List issues                   | HTTP 200, JSON content type, and an array with the three documented IDs in order.                                                                                                         |
| Retrieve each issue           | HTTP 200, JSON content type, and the complete documented object.                                                                                                                          |
| Validate the contract         | Required fields, string identifiers, nested display objects, booleans, nonnegative integer file sizes, valid UTC timestamps, explicit nulls, and arrays match the shared fuller contract. |
| Compare list and detail       | Every listed object equals the detail response for its ID.                                                                                                                                |
| Repeat requests               | List order, identifiers, timestamps, and all response values remain unchanged.                                                                                                            |
| Retrieve an unknown ID        | HTTP 404; do not assert an unspecified error-body shape.                                                                                                                                  |
| Check workspace relationships | Each status and nonnull interval has the same workspace ID as the issue.                                                                                                                  |
| Check child relationships     | Each returned comment and attachment references its containing issue.                                                                                                                     |
| Check fixture coverage        | Reported example has null optional fields and empty collections; assigned example has related data; closed example has `isClosed: true` and nonblank resolution.                          |
| Check display boundaries      | User display objects contain only ID and display name; authentication identities, credentials, and role assignments are absent.                                                           |

These are future endpoint acceptance criteria. The documentation build does not replace those HTTP tests or demonstrate backend implementation.
