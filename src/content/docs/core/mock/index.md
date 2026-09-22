---
title: Mock overview
description: Fixed example data and contract rules for the proposed mock API.
sidebar:
    order: 10
---

Mock responses let both clients work with realistic issue data before the production API is complete. The [API namespace](/core/api/mock/) prefixes supported routes with `/mock`; [Mock issues](/core/mock/issues/) defines the initial read endpoints and examples.

## Contract and fixture rules

- Mock and corresponding API reads share the [proposed fuller issue response](/core/api/issues/#proposed-fuller-read-response). The existing minimum production milestone remains unchanged.
- Use fixed data and stable string identifiers. Repeated requests return identical data in a fixed list order.
- Represent timestamps as UTC strings ending in `Z`. Include nullable fields explicitly and use empty arrays for absent collections.
- Keep status and interval relationships within the issue’s workspace. Comments and attachments reference the containing issue.
- Closed issues have a nonblank resolution. Reported issues may have null resolution, assignee, and interval.
- Use fictional display data. Do not include authentication identities, credentials, or role assignments in issue responses.

These pages specify future behavior and required HTTP tests. No mock endpoints or executable endpoint tests are implemented by this documentation update. Writes and other mock resources remain deferred.
