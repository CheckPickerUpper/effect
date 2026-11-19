---
"@effect/openapi-generator": minor
"effect": patch
---

Use `openapigen --string-formats decoded` to generate UTC dates and bigint values while preserving OpenAPI string constraints. Recursive schemas keep their wire types, and dictionaries with literal property names expose those names as optional keys.
