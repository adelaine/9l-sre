---
title: API
description: Intended API responsibilities and the contract details that remain to be defined.
---

Core is intended to expose an application programming interface (API) that both clients use. No endpoints or request schemas have been implemented yet, so this page is not an executable API reference.

## Issue tracker model

- [Entity relationship diagram](/core/api/datadiagram/): the agreed entities and relationships.
- [Status transitions](/core/api/status-transitions/): status changes and reopening permitted by workspace roles.
- [Tables](/core/api/schema/): each entity’s purpose and relationships.

## Intended capabilities

The shared contract should cover submitting incidents, retrieving incident information, tracking investigation progress, and retrieving demo agent profiles. Restoration of demo data also needs a defined mechanism, though its availability and access rules are still undecided.

## Contract documentation

For each implemented operation, document its HTTP method and path, required identity or permissions, request fields, response fields, status codes, and validation errors. Include a request example that has been checked against Core.

Collection operations will also need documented filtering, ordering, and pagination behavior if those features are introduced.

## Client consistency

ClientJ and ClientL should interpret identifiers, status values, validation failures, and reset behavior consistently. Their visual layouts can differ without creating different meanings for the same Core response.

Client integration plans are described in [ClientJ integration](/client-j/core-integration/) and [ClientL integration](/client-l/core-integration/).
