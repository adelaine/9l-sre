---
title: Incident Report
description: Incident status transitions for Reporter, Operative, Operative Support, Supervisor, and Admin.
---

**Roles:** Reporter, Operative, Support, Supervisor, Admin. **Support means Operative Support**, including scouting, spotting, equipment, and inventory assistance. It is not a customer-support or triage role.

The [shared rules](/core/status/) require Reported at creation, workspace-scoped permissions, and nonblank Resolution for every closed destination.

![Incident Report transition permissions by role, including Reporter reopening of their own issues.](/diagrams/status-transitions.svg)

[Open the full-size diagram](/diagrams/status-transitions.svg).

## Allowed transitions

Unfinished statuses are **Reported, Investigating, Processing, and Stalled**. Closed statuses are **Completed and Not Applicable**.

| Role                           | From                      | To                           |
| ------------------------------ | ------------------------- | ---------------------------- |
| Reporter                       | Completed, Not Applicable | Reported (own issues only)   |
| Operative, Support, Supervisor | Any unfinished status     | Any other unfinished status  |
| Operative, Supervisor          | Any unfinished status     | Completed                    |
| Supervisor                     | Any unfinished status     | Not Applicable               |
| Operative, Supervisor          | Completed                 | Any unfinished status        |
| Supervisor                     | Not Applicable            | Any unfinished status        |
| Admin                          | Any existing status       | Any status in this workspace |

Operative, Support, and Supervisor may skip stages and move backward among unfinished statuses. Staff permissions apply across the workspace. Support cannot close or reopen an issue. Operative cannot mark an issue Not Applicable or reopen Not Applicable. Reporter may only reopen their own closed issues to Reported; they cannot make other status changes. Only Admin can move directly between closed statuses.

## Mermaid source

```mermaid
stateDiagram-v2
    direction LR
    state "Not Applicable" as NotApplicable
    [*] --> Reported
    Reported --> Investigating: Operative, Support, Supervisor
    Reported --> Processing: Operative, Support, Supervisor
    Reported --> Stalled: Operative, Support, Supervisor
    Reported --> Completed: Operative, Supervisor
    Reported --> NotApplicable: Supervisor
    Investigating --> Reported: Operative, Support, Supervisor
    Investigating --> Processing: Operative, Support, Supervisor
    Investigating --> Stalled: Operative, Support, Supervisor
    Investigating --> Completed: Operative, Supervisor
    Investigating --> NotApplicable: Supervisor
    Processing --> Reported: Operative, Support, Supervisor
    Processing --> Investigating: Operative, Support, Supervisor
    Processing --> Stalled: Operative, Support, Supervisor
    Processing --> Completed: Operative, Supervisor
    Processing --> NotApplicable: Supervisor
    Stalled --> Reported: Operative, Support, Supervisor
    Stalled --> Investigating: Operative, Support, Supervisor
    Stalled --> Processing: Operative, Support, Supervisor
    Stalled --> Completed: Operative, Supervisor
    Stalled --> NotApplicable: Supervisor
    Completed --> Reported: Operative, Supervisor, Reporter (own issue)
    Completed --> Investigating: Operative, Supervisor
    Completed --> Processing: Operative, Supervisor
    Completed --> Stalled: Operative, Supervisor
    NotApplicable --> Reported: Supervisor, Reporter (own issue)
    NotApplicable --> Investigating: Supervisor
    NotApplicable --> Processing: Supervisor
    NotApplicable --> Stalled: Supervisor
```

Admin may set any existing issue status in the workspace; its extra arrows are omitted for readability. Admin cannot bypass the Resolution requirement or create an issue outside Reported.

## Acceptance criteria

- Support can skip Reported → Processing and move Processing → Investigating, but cannot close or reopen.
- Operative can close an unfinished issue as Completed and reopen Completed into an unfinished status, but cannot close as Not Applicable or reopen that outcome.
- Supervisor can close either way and reopen either outcome into any unfinished status.
- Reporter can reopen their own Completed or Not Applicable issue to Reported only. Reject attempts on another reporter’s issue or to another destination.
- Non-Admin moves directly between closed statuses are rejected.
- All roles follow the shared workspace and Resolution rules.
