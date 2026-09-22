---
title: Client comparison
description: Intended similarities and differences between ClientJ and ClientL.
---

ClientJ and ClientL are two planned interfaces for the same incident-response domain. Their shared Core backend makes it possible to compare frontend choices without changing the underlying business rules.

| Aspect                | ClientJ                                       | ClientL                                           |
| --------------------- | --------------------------------------------- | ------------------------------------------------- |
| Repository            | `9l-sre-clientj`                              | `9l-sre-clientl`                                  |
| Main technology       | Angular                                       | React                                             |
| Interface inspiration | Jira                                          | Linear                                            |
| Intended emphasis     | Structured work tracking and detailed records | Focused navigation and efficient incident updates |
| Routing               | Angular routing approach to be defined        | React Router; mode to be defined                  |
| State management      | To be selected                                | Redux; state boundaries to be defined             |
| Styling               | To be selected                                | Tailwind CSS in the original React direction      |
| Backend               | Core                                          | Core                                              |

## What should stay consistent

The meaning of an incident, agent identity, accepted updates, validation rules, and reset behavior should come from Core. Interface choices should not create incompatible interpretations of the same data.

## What can differ

Navigation, layout, editing patterns, component structure, and state management can reflect each client's goals. A structured interface is not inherently slower, and a streamlined interface is not inherently less capable; actual behavior needs implementation and evaluation.

## Current limits

Neither client has been implemented. There are no measured performance results, accessibility findings, or verified feature comparisons yet. Record those against working versions when they become available.
