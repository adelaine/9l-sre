---
title: ClientL and Core
description: Proposed API access and state synchronization for the React client.
---

ClientL is intended to use Core for incident and operative data. Its request implementation, API configuration, and authentication remain undecided.

## Data flow

The proposed flow starts with a user action, sends a request to Core, and updates the relevant view from the result. Collection and detail views should agree after a successful change.

Choose one clear approach for owning fetched data and refreshing it. React Router and Redux have different responsibilities in the planned stack; their presence alone does not establish where requests or cached responses belong.

## Errors and pending changes

Show pending requests clearly and explain rejected updates. If the implementation later displays a change before Core confirms it, document how failures restore a consistent state. This behavior is commonly called an optimistic update; it has not been selected for the demo.

## Verification to add

Once connected, verify incident creation and retrieval, validation failures, navigation between updated views, and refresh behavior after a reset. Add configuration and checked request examples alongside the [Core API resources](/core/#api-resources).
