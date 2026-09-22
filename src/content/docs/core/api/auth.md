---
title: Auth
description: External sign-in and session endpoints under /auth.
---

Endpoints under `/auth` handle external sign-in and sessions. **★ Minimum** marks the first creation-and-display milestone. These are proposed routes; the selected authentication library may supply different routes or callback methods.

| Method and endpoint             | Purpose                                                    | Minimum |
| ------------------------------- | ---------------------------------------------------------- | ------- |
| `GET /auth/login/{provider}`    | Start external sign-in                                     | ★       |
| `GET /auth/callback/{provider}` | Complete sign-in; create or retrieve User and UserIdentity | ★       |
| `GET /auth/csrf`                | Obtain a CSRF token for state-changing session requests    | ★       |
| `POST /auth/logout`             | End the session                                            | ★       |
| `GET /auth/me`                  | Retrieve the signed-in user                                |         |

## External sign-in

Google is the first enabled provider. Microsoft, GitHub, Apple, and Facebook are planned, disabled providers until configured. Use an authentication library; its selection and exact callback handling remain to be defined. There is no password login or password storage.

After successful external authentication and email verification, create the User and UserIdentity on first sign-in or retrieve the existing account. There is no separate `POST /users`. Email is required and unique on User; the internal User ID remains its primary key. An unverified provider email cannot establish or link an account. If trusted verification is unavailable from the provider, email verification must complete before access is granted. Matching email text alone does not authorize account linking; the proof and linking flow remain to be specified.

[Provider](/core/tables/provider/) stores the provider catalogue. [UserIdentity](/core/tables/user-identity/) links User and Provider using their IDs as its composite primary key.

See the [Core milestone](/core/#minimum-issue-flow) for how sign-in leads to workspace access and issue creation.
