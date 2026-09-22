---
title: ClientJ application structure
description: Proposed Angular boundaries for routing, views, forms, and API access.
---

ClientJ has no source structure yet. The following responsibilities provide a starting point for its Angular implementation.

## Proposed responsibilities

| Area               | Responsibility                                                           |
| ------------------ | ------------------------------------------------------------------------ |
| Routing            | Connect navigation and incident URLs to the appropriate views.           |
| Feature components | Present incident collections, details, forms, and operative information. |
| Forms              | Collect input and show validation feedback.                              |
| Services           | Encapsulate communication with Core.                                     |
| Shared UI          | Provide reusable controls and consistent request feedback.               |

Keep API access separate from presentation so that request handling can be reused across incident views. Choose a state management approach after the interaction requirements are clear; no additional state library has been selected.

## Decisions to document

Record the actual source directories, route definitions, form approach, state ownership, styling system, and checks once the application exists. Include how a developer follows a change from a component through a service to Core.

See [Core integration](/client-j/core-integration/) for the proposed API boundary.
