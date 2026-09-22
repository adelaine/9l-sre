---
title: 9L-SRE
description: One incident-response demo, a shared Spring Boot backend, and two client applications.
---

9L-SRE is an incident reporting and response demo set in a cyberpunk world. Reporters submit sightings of digital ghosts haunting infrastructure. Cat agents investigate the incidents and track their resolution.

The name means **Nine Lives: Spectral Reliability Engineering**, a playful take on Site Reliability Engineering (SRE). The project provides a shared application domain for learning backend development and comparing two frontend implementations.

## Explore the project

| Component             | Repository       | Purpose                                                         |
| --------------------- | ---------------- | --------------------------------------------------------------- |
| Documentation         | `9l-sre`         | Project home and documentation, built with Astro Starlight.     |
| [Core](/core/)        | `9l-sre-core`    | Java and Spring Boot backend for incident and agent data.       |
| [ClientJ](/client-j/) | `9l-sre-clientj` | Jira-inspired Angular application.                              |
| [ClientL](/client-l/) | `9l-sre-clientl` | Linear-inspired React application using React Router and Redux. |

Core is the planned shared backend for both clients. Each client presents the same incident-response domain through its own interface and frontend architecture.

## Start here

- Read the [project overview](/getting-started/overview/) for scope and terminology.
- Follow the [architecture overview](/getting-started/architecture/) to understand component responsibilities.
- Check [local development](/getting-started/local-development/) for the repository layout and setup status.
- Read the [client comparison](/comparisons/clients/) to see the intended differences.
- Use the [glossary](/reference/glossary/) for shared terminology.
- Visit the [world-building appendix](/appendix/) for the setting and Agent Roster.

## Current status

The application repositories are empty at the time of this initial documentation. These pages describe the agreed direction and proposed responsibilities. They do not establish a working API, implemented screens, or a runnable application.

Setup commands, API contracts, and implementation details will be documented against the code as it is added.
