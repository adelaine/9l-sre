---
title: Data and reset
description: Intended seeded profiles and restoration behavior for the demo.
---

The demo is intended to start with fictional agent profiles and incidents. **Seed data** is the initial set of records used to create that repeatable starting point.

## Expected behavior

A reset should restore the original seeded profiles and incidents. It should preserve the fictional cast by restoring their baseline records rather than leaving the demo without its characters.

The [Agent Roster](/appendix/agent-roster/) is the reference for the characters' names, roles, appearances, and backstories. Moxie “Hotfix” Mallow is the selected first playable demo agent. The full incident seed set has not been supplied.

## Open decisions

The implementation still needs to define who can trigger a reset, which records it affects, what happens to newly created incidents, and how clients refresh afterward. A shared demo will also need a clear rule for resets while other visitors are using it.

The storage engine, seed format, and reset command or endpoint are not selected. Add verified instructions here once those choices are implemented.
