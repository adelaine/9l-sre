---
title: Implementation notes
description: Agreed project choices and decisions that remain open.
---

This page records the current project direction. Update it when an implementation decision changes the architecture or how readers should work with the demo.

## Agreed direction

| Choice                                 | Purpose                                                    |
| -------------------------------------- | ---------------------------------------------------------- |
| Basic Astro Starlight site in `9l-sre` | Provide one documentation home for the project.            |
| Java and Spring Boot in Core           | Provide the backend portfolio demo and tutorial.           |
| Angular in ClientJ                     | Explore a Jira-inspired frontend.                          |
| React Router and Redux in ClientL      | Explore a Linear-inspired React frontend.                  |
| Shared Core backend                    | Give both clients the same incident-response domain.       |
| World-building appendix                | Keep the setting and cast available as supporting context. |

The original project note also names Tailwind CSS for the React application. Package versions and implementation details are still open.

## Open decisions

The project needs decisions on persistence, authentication and permissions, incident fields and transitions, API contracts, reset scope, client data loading, testing, and deployment. Do not treat a proposed responsibility in these docs as a completed feature.

## Recording a decision

For a substantial choice, record the problem, the chosen approach, the reason it fits this demo, and any tradeoffs. Link to the relevant implementation and verification when they exist. Keep statements about observed behavior separate from future plans.
