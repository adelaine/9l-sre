---
title: Domain model
description: Shared incident-response concepts before the data schema is implemented.
---

Both clients should use the same domain vocabulary. This page describes concepts, not implemented database tables or API fields.

## Incident

An incident is a report of suspected digital ghost activity affecting infrastructure. It provides the context for investigation and progress tracking.

The eventual model needs to represent what was reported, its progress, and its resolution. Identifiers, required fields, timestamps, and allowed status values have not been defined.

## Reporter

A reporter submits a sighting and follows its resolution. The project has not yet established whether reporters have accounts, use a shared demo identity, or submit through another mechanism.

## Agent

An agent is a fictional member of the response team. Agents have stored profiles and backstories. Moxie “Hotfix” Mallow is the selected first playable demo agent.

Character roles such as field responder or supervisor are story details. They do not establish application permissions. The identity and authorization model still needs to be designed.

## Assignment and progress

The proposed workflow associates an incident with the agent handling it and records progress toward resolution. Assignment rules, status transitions, and any history or diagnostic notes remain design decisions.

Core should enforce the agreed rules, while each client presents them in its own interface. See the [Core overview](/core/#minimum-issue-flow) for the initial milestone and in-memory H2 data lifecycle.
