# INVARIANTS — Dean bar

| Invariant | Phase −1 | Production |
|---|---|---|
| G-SCOUT cannot persist | Held in fixtures + tests | Held in quality gate service |
| G-DOC can persist | Held | Held |
| Tenant isolation | Not running | HTTP suite cannot skip |
| Spec deny fail-closed if store down | Not running | No cached last-allow |
| Evidence ingest idempotent | Not running | Same trace id twice = one row |
| Unreachable on API + harness + UI | UI copy only | All three |
| Moderation does not rewrite derived | Held in fixtures | Held in VERDICT service |
| Appetite does not lift a gate | Held | Held |
| Blast radius of a bad cut with a token | Not running | Revocation event + pull-next fails |

Why both graphs in Postgres: one operational store for the wedge. Metric that would force a move: Work Graph traversal p95 > 200ms at 100k units per tenant, or representation sync lag > intent version fan-out SLA. Neither is measured yet. Do not invent a graph database in Phase 1.
