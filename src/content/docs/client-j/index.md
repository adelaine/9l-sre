---
title: ClientJ overview
description: The Jira-inspired Angular client for the 9L-SRE demo.
---

ClientJ is the planned Angular frontend in `9l-sre-clientj`. It uses Jira as interface inspiration for structured incident tracking.

## Intended experience

The proposed interface gives reporters and response agents a clear way to browse incidents, inspect their details, and follow work through investigation and resolution. Exact screens, board layouts, filters, and editing patterns remain to be designed.

ClientJ uses the shared Core backend. It should express the same incident rules as ClientL while demonstrating Angular's approach to application structure and interaction.

## Read next

- [User flows](/client-j/user-flows/): the proposed reporting and response experience.
- [Application structure](/client-j/application-structure/): suggested Angular responsibilities.
- [Core integration](/client-j/core-integration/): requests, feedback, and consistency.

## Implementation status

The repository is currently empty. Angular is selected, but its version, supporting libraries, styling approach, and application configuration have not been specified. Jira inspiration does not imply a Jira integration or a complete reproduction of Jira.
