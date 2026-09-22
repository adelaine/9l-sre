---
title: /mock
description: Proposed mock namespace for issue reads.
---

The `/mock` namespace provides fixed example data using the same proposed response contract as the corresponding API resource. These routes are planned, not implemented.

| API read                | Mock read                    |
| ----------------------- | ---------------------------- |
| `GET /issues`           | `GET /mock/issues`           |
| `GET /issues/{issueId}` | `GET /mock/issues/{issueId}` |

The prefix selects mock data; it does not introduce a different issue schema. See the [Issues API](/core/api/issues/) for the shared proposed fuller response and [Mock issues](/core/mock/issues/) for fixtures and HTTP test requirements.

The first mock scope covers issue reads only. Writes, authentication simulation, workflow operations, other mock resources, filtering, and pagination are deferred. `/mock` is a namespace, not a standalone data endpoint. Mock availability does not imply that the corresponding production endpoint is implemented.

See the [Mock overview](/core/mock/) for fixture rules.
