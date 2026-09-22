---
title: Core overview
description: The planned shared Java and Spring Boot backend for 9L-SRE.
---

Core is the planned Java and Spring Boot backend for 9L-SRE. Its repository is `9l-sre-core`. Both ClientJ and ClientL are intended to use it for the same incident and agent data.

## Responsibilities

Core should accept incident reports, provide incident details, validate updates, and store the results of investigations. It should also provide the fictional agent profiles used in the demo and support restoration of the seeded demo state.

Business rules belong here so that changing clients does not change what an incident update means. For example, once status transitions are defined, both clients should receive the same acceptance or rejection for the same attempted transition.

## Read next

- [Domain model](/core/domain-model/): the concepts behind incidents and agents.
- [API](/core/api/): the planned contract and the information still needed.
- [Data and reset](/core/data-and-reset/): seeded profiles and expected restoration behavior.

## Implementation status

The repository is currently empty. Java and Spring Boot are the selected direction; versions, dependencies, database, authentication, API endpoints, and deployment remain unspecified.
