---
title: Haunted Machine Repair
description: Structured repair transitions for Reporter, Technician, and Admin.
---

**Roles:** Reporter, Technician, Admin. The [shared rules](/core/status/) require Reported at creation, workspace-scoped permission, and nonblank Resolution for every closed destination.

![Repair transition permissions: optional transit and storage, required technician custody and processing, and role-specific reopening.](/diagrams/repair-status-transitions.svg)

[Open the full-size diagram](/diagrams/repair-status-transitions.svg).

## Allowed transitions

| Role       | From                              | To                                                                         |
| ---------- | --------------------------------- | -------------------------------------------------------------------------- |
| Reporter   | Completed, Failed, Not Applicable | Reported, only for an issue they reported                                  |
| Technician | Reported                          | In Transit, Acquired — Storage, Acquired — With Technician, Not Applicable |
| Technician | In Transit                        | Acquired — Storage, Acquired — With Technician, Not Applicable             |
| Technician | Acquired — Storage                | Acquired — With Technician, Not Applicable                                 |
| Technician | Acquired — With Technician        | Acquired — Storage, Processing, Not Applicable                             |
| Technician | Processing                        | Acquired — With Technician, Completed, Failed, Not Applicable              |
| Technician | Completed, Failed, Not Applicable | Acquired — With Technician                                                 |
| Admin      | Any existing status               | Any status in this workspace                                               |

In Transit and Storage are optional. With Technician means physical custody before repair begins; Processing means repair is underway. Failed means the repair attempt ended unsuccessfully. Technician cannot skip With Technician or Processing to reach Completed or Failed. Staff permissions apply across the workspace, while Reporter reopening is restricted to their own issues.

## Mermaid source

```mermaid
stateDiagram-v2
    direction LR
    state "In Transit" as InTransit
    state "Acquired — Storage" as Storage
    state "Acquired — With Technician" as WithTechnician
    state "Not Applicable" as NotApplicable
    [*] --> Reported
    Reported --> InTransit: Technician
    Reported --> Storage: Technician
    Reported --> WithTechnician: Technician
    InTransit --> Storage: Technician
    InTransit --> WithTechnician: Technician
    Storage --> WithTechnician: Technician
    WithTechnician --> Storage: Technician
    WithTechnician --> Processing: Technician
    Processing --> WithTechnician: Technician
    Processing --> Completed: Technician
    Processing --> Failed: Technician
    Reported --> NotApplicable: Technician
    InTransit --> NotApplicable: Technician
    Storage --> NotApplicable: Technician
    WithTechnician --> NotApplicable: Technician
    Processing --> NotApplicable: Technician
    Completed --> WithTechnician: Technician
    Failed --> WithTechnician: Technician
    NotApplicable --> WithTechnician: Technician
    Completed --> Reported: Reporter, own issue
    Failed --> Reported: Reporter, own issue
    NotApplicable --> Reported: Reporter, own issue
```

Admin can override to any status for an existing issue; these extra arrows are omitted for readability. Admin must still supply or retain a nonblank Resolution on closure. Reopening retains Resolution.

## Acceptance criteria

- Technician may skip In Transit and Storage by moving Reported directly to With Technician.
- Technician cannot move Reported, In Transit, or Storage directly to Processing, Completed, or Failed.
- Technician can move Storage ↔ With Technician and Processing → With Technician.
- Only Processing may move to Completed or Failed under Technician permissions.
- Technician can close any unfinished issue as Not Applicable, and can reopen any closed outcome to With Technician.
- Reporter can reopen only their own closed issues to Reported, not to With Technician or another status.
- All closed destinations require nonblank Resolution, including Admin overrides.
