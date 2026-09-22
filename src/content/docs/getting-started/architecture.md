---
title: Architecture
description: Proposed boundaries between Core, ClientJ, ClientL, and the documentation site.
---

The planned architecture has one shared backend and two client applications. The documentation site explains the project independently of the application runtime.

```text
ClientJ — Angular, Jira-inspired ─────────────┐
                                            ├── Core — Java / Spring Boot
ClientL — React Router / Redux,              │       └── Data storage: undecided
          Linear-inspired ──────────────────┘

9l-sre — Astro Starlight documentation
```

## Responsibilities

Core should own authoritative incident and operative data, validation, and the rules that determine which updates are allowed. Keeping these rules in the backend gives both clients a consistent result.

ClientJ and ClientL should own presentation, navigation, forms, and feedback for loading, empty, success, and error states. A client can validate input for usability, but Core still needs to validate requests.

The documentation repository contains explanations and reference material. It is not a third incident-response client.

## Example interaction

The proposed interaction for reporting an incident is:

1. A reporter enters incident details in either client.
2. The client sends the request to Core.
3. Core validates the request and stores the accepted incident.
4. The client displays the saved result or explains the error.

This is a conceptual flow. Request paths, payloads, authentication, and storage have not been implemented.

## Decisions still needed

The project still needs an API contract, persistence choice, identity model, local configuration, and deployment arrangement. These decisions should be recorded in [implementation notes](/comparisons/implementation-notes/) when they are made.
