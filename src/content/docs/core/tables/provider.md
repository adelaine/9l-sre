---
title: Provider
description: Seeded external sign-in providers.
---

Represents an external sign-in provider. Provider configuration is handled by the authentication library; credentials do not belong in this catalogue.

## Relationships

- A Provider has zero or more UserIdentity records.
- Each UserIdentity references exactly one Provider.

## Minimum fields

| Field     | Rule                                                           |
| --------- | -------------------------------------------------------------- |
| `id`      | Primary key.                                                   |
| `code`    | Required unique provider code.                                 |
| `name`    | Provider display name.                                         |
| `enabled` | Whether this provider is configured and available for sign-in. |

## Seeded providers

| Code        | Name      | Initial state                             |
| ----------- | --------- | ----------------------------------------- |
| `google`    | Google    | Enabled once configured; first milestone. |
| `microsoft` | Microsoft | Disabled; planned.                        |
| `github`    | GitHub    | Disabled; planned.                        |
| `apple`     | Apple     | Disabled; planned.                        |
| `facebook`  | Facebook  | Disabled; planned.                        |

Only enabled, configured providers may initiate or complete sign-in. The initial library selection and provider-specific setup remain to be defined.
