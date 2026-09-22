---
title: ClientL application structure
description: Proposed responsibilities for React, React Router, Redux, and Tailwind CSS.
---

ClientL has no source structure yet. Its selected technologies need clear responsibilities so that routing, UI state, and backend data remain understandable as the application grows.

## Technology responsibilities

| Technology   | Intended responsibility                                           |
| ------------ | ----------------------------------------------------------------- |
| React        | Build incident views, forms, and reusable interface components.   |
| React Router | Connect URLs and navigation to application views.                 |
| Redux        | Manage application state shared across features where needed.     |
| Tailwind CSS | Style the React interface, following the original demo direction. |

React Router's operating mode and data-loading approach are undecided. The project also needs to decide which state belongs in Redux, in the URL, or in an individual component.

## State ownership

Core remains authoritative for saved incident and operative data. A client's stored copy should not become a competing source of truth. Give fetched data a clear owner and a defined refresh strategy before sharing it across views.

Keep temporary form input close to the form unless another feature needs it. If filters become part of navigation, decide whether their state belongs in the URL so that links and browser history behave predictably.

## Decisions to document

Record the actual routes, source directories, Redux organization, request strategy, styling conventions, and checks once implemented. See [Core integration](/client-l/core-integration/) for the planned request boundary.
