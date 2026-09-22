---
title: ClientJ and Core
description: Proposed request handling and shared behavior for the Angular client.
---

ClientJ is intended to use Core for incident and agent data. Endpoint paths, configuration keys, and authentication are not defined yet.

## Request handling

Angular services should provide a clear boundary for API calls. Views should use the returned data to explain what is loading, what succeeded, and what needs attention.

A failed update should not appear as saved. Validation errors should help the user correct input, while connection failures should provide a way to retry without losing entered information where practical.

## Shared behavior

ClientJ should follow Core's identifiers, allowed status transitions, and validation rules. After an accepted change, the affected views need to reflect the saved result. Reset behavior will also need to refresh any cached or displayed demo data.

## Verification to add

Once connected, verify that a submitted incident can be retrieved from Core, rejected updates receive useful feedback, and refreshes do not show stale results after a successful change. Add actual configuration and request examples alongside the [Core API resources](/core/#api-resources).
