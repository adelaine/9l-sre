---
title: Project overview
description: The purpose, scope, and shared domain of the 9L-SRE demo.
sidebar:
    order: 10
---

9L-SRE is a portfolio demo and tutorial built around incident reporting and response. Its fictional setting gives the demo recognizable characters and incidents, while its technical structure supports a Spring Boot backend and two alternative frontend applications.

## The demo scenario

A reporter notices unusual behavior in a server, network, or device and submits an incident. A response agent investigates the report and records its resolution. The reporter can follow the incident's progress.

Moxie “Hotfix” Mallow is the selected first playable demo agent. Chief Maxwell “Watchdog” Blackwell is her supervisor. Their biographies and the wider cast live in the [Agent Roster](/appendix/agent-roster/).

## Components

- **Core:** the Java and Spring Boot backend, intended to own shared data and business rules.
- **ClientJ:** the Jira-inspired Angular client, intended to explore structured work tracking.
- **ClientL:** the Linear-inspired React Router and Redux client, intended to explore a streamlined incident workflow.

The Jira and Linear references describe interface inspiration. They do not imply integration with those products or feature parity.

## Scope and open decisions

Incident reporting, investigation, progress tracking, and demo profile restoration form the initial product direction. Detailed status transitions, permissions, authentication, database selection, and deployment have not been specified.

The two clients are intended as alternative interfaces to Core. Their exact feature coverage will be documented as implementation progresses.

Continue with the [architecture overview](/getting-started/architecture/) for the proposed boundaries between components.
