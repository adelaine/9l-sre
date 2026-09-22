---
title: ClientL user flows
description: Proposed reporting and investigation flows for the React client.
---

ClientL is intended to cover the same basic incident-response scenario as ClientJ through a Linear-inspired interface. The following flows are proposed; no screens or shortcuts have been implemented.

## Report an incident

1. Start a report from the incident collection.
2. Enter the required details about the sighting.
3. Submit the report and review the saved result.

The interface should keep the reporting task focused and explain any validation failures without discarding the user's input.

## Investigate an incident

1. Open an incident and review its context.
2. Record an allowed update as the investigation proceeds.
3. Record the resolution and return to the collection.

The exact editing pattern is undecided. Inline editing, keyboard shortcuts, and optimistic updates are possible design choices, not committed features.

## Follow progress

A reporter should be able to revisit an incident and understand its current state. Updates should remain consistent between collection and detail views.

Loading, empty results, missing incidents, and failed requests need clear feedback. Core will determine allowed updates regardless of how quickly the interface lets a user initiate them.
