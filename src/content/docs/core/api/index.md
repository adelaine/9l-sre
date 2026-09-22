---
title: API
description: Intended API responsibilities and the contract details that remain to be defined.
---

Core is intended to expose an application programming interface (API) that both clients use. No endpoints or request schemas have been implemented yet, so this page is not an executable API reference.

## Issue tracker model

- [Entity relationship diagram](/core/api/datadiagram/): the agreed entities and relationships.
- [Status transitions](/core/status/): status changes and reopening permitted by workspace roles.
- [Tables](/core/tables/): each entity’s purpose and relationships.

## Initial API inventory

**★ Minimum** marks the endpoints needed to sign in, create one issue, and retrieve it for display. Routes are proposed contracts, not implemented endpoints. The authentication library may supply its own routes and callback methods.

| API set        | Method and endpoint                                | Purpose                                                    | Minimum |
| -------------- | -------------------------------------------------- | ---------------------------------------------------------- | ------- |
| Authentication | `GET /auth/login/{provider}`                       | Start external sign-in                                     | ★       |
| Authentication | `GET /auth/callback/{provider}`                    | Complete sign-in; create or retrieve User and UserIdentity | ★       |
| Authentication | `GET /auth/csrf`                                   | Obtain a CSRF token for state-changing session requests    | ★       |
| Authentication | `POST /auth/logout`                                | End the session                                            | ★       |
| Authentication | `GET /auth/me`                                     | Retrieve the signed-in user                                |         |
| Issue          | `POST /workspaces/{workspaceId}/issues`            | Create an issue in Reported status                         | ★       |
| Issue          | `GET /workspaces/{workspaceId}/issues/{issueId}`   | Retrieve an issue with display details                     | ★       |
| Issue          | `GET /workspaces/{workspaceId}/issues`             | List and filter issues                                     |         |
| Issue          | `PATCH /workspaces/{workspaceId}/issues/{issueId}` | Update issue details, assignee, or interval                |         |

Other resource API sets are deferred; supporting data is seeded. The initial demo uses in-memory storage, so restarting clears created issues and users and restores the seeds.

## External sign-in

Google is the first enabled provider. Microsoft, GitHub, Apple, and Facebook are planned, disabled providers until configured. Use an authentication library; its selection and exact callback handling remain to be defined. There is no password login or password storage.

After successful external authentication and email verification, create the User and UserIdentity on first sign-in or retrieve the existing account. There is no separate `POST /users`. Email is required and unique on User; the internal User ID remains its primary key. An unverified provider email cannot establish or link an account. If trusted verification is unavailable from the provider, email verification must complete before access is granted. Matching email text alone does not authorize account linking; the proof and linking flow remain to be specified.

[Provider](/core/tables/provider/) stores the provider catalogue. [UserIdentity](/core/tables/user-identity/) links User and Provider using their IDs as its composite primary key.

## Minimum issue flow

1. Authenticate externally and establish a verified User and UserIdentity.
2. Assign the new reporter a role in the seeded workspace.
3. Create an issue with a title and optional description and resolution. The server supplies the ID, authenticated reporter, creation timestamp, and its workspace’s Reported status. Omitted resolution is returned as null.
4. Retrieve the issue by ID. Both creation and retrieval return the [issue display response](/core/tables/issue/#display-response).

**Open decision:** how the new reporter receives a workspace role. Automatic assignment to a seeded Reporter role has been proposed but not agreed. UserRole cannot be seeded ahead of a newly created User; this decision must be resolved before the end-to-end flow can be implemented.

The [Tables overview](/core/tables/) marks the minimum tables. Comments, attachments, intervals, assignment, and status-transition APIs are deferred from the first milestone.

## Workflow examples

[Incident Report](/core/status/incident/) and [Haunted Machine Repair](/core/status/repair/) use separate workspace-owned statuses and roles. Each flow defines role-specific transitions, with Admin override and a nonblank Resolution required for any closed status. Transition APIs remain outside the first creation-and-display milestone.

## Contract documentation

For each implemented operation, document its HTTP method and path, required identity or permissions, request fields, response fields, status codes, and validation errors. Include a request example that has been checked against Core.

Collection operations will also need documented filtering, ordering, and pagination behavior if those features are introduced.

## Client consistency

ClientJ and ClientL should interpret identifiers, status values, validation failures, and reset behavior consistently. Their visual layouts can differ without creating different meanings for the same Core response.

Client integration plans are described in [ClientJ integration](/client-j/core-integration/) and [ClientL integration](/client-l/core-integration/).
