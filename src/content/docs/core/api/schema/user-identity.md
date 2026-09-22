---
title: UserIdentity
description: A verified external identity linked to a User and Provider.
---

Links a User to an external Provider. Its composite primary key is **(user_id, provider_id)**; there is no separate identity ID.

## Relationships

- Each UserIdentity belongs to exactly one User and one Provider.
- A User can link one identity per provider.
- A Provider can authenticate many users.

## Minimum fields

| Field              | Rule                                                                  |
| ------------------ | --------------------------------------------------------------------- |
| `user_id`          | References User.id; part of the composite primary key.                |
| `provider_id`      | References Provider.id; part of the composite primary key.            |
| `provider_subject` | Required stable external account identifier supplied by the provider. |

The pair **(provider_id, provider_subject)** is also unique, so an external account cannot belong to multiple users. Use the provider’s stable account identifier rather than email as the external identity key.

## Verification

User email is required, unique, and verified through the external identity flow. Create or link an identity only after proving ownership of the User’s email. Matching email text alone is insufficient. If a provider does not supply trusted verification, a separate email-verification step is required before access.

The authentication library, verification/linking flow, and physical database types remain to be defined. Issue and role references continue to use the internal User.id.
