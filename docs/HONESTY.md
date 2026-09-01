# HONESTY — enforced vs specified-not-enforced

This is the platform’s own rule-debt ledger. Specified-not-enforced rows are undeclared work.

| Rule | Status | Where |
|---|---|---|
| Scout provenance is declared | **enforced in fixtures + tests** | sessions, G-SCOUT |
| Genome Strength ≠ persist gate | **enforced in fixtures + tests** | G-SCOUT accepted=false |
| Consent receipt required to treat a session as closed | **enforced in fixtures + tests** | CR-440, CR-441 |
| Two-genome invariant | **enforced in fixtures + tests** | test_two_genome_invariant |
| S1 ≤ S2 ≤ S3 ≤ gate | **enforced in fixtures + tests** | wu-114.scenarios |
| Appetite never lifts a gate | **enforced in fixtures + tests** | moderation.appetite_lifted_gate=false |
| Derived level unchanged by moderation | **enforced in fixtures + tests** | derived_unchanged |
| FTE is not payroll | **declared in fixture** | costed.fte_is_not_payroll |
| Tenant RLS fail-closed | specified-not-enforced | Phase 0 |
| Spec deny stops harness | specified-not-enforced | Phase 2 |
| Substring guard on unstructured extract | specified-not-enforced | Phase 1 backend |
| No LLM in tests | specified-not-enforced | Phase 0 conftest |
| Object-condition evidence, not logs | specified-not-enforced | Phase 3 |
| Unreachable on API + harness + UI | specified-not-enforced | Phase 2–3 |
| Promotion requires human id | specified-not-enforced | Phase 2 |
| Hashed executor keys | specified-not-enforced | Phase 0 |
| Audit on contract writes | specified-not-enforced | Phase 0 |
| VERDICT computed server-side | specified-not-enforced | Phase 2 (fixture scores are authored) |
| Recovery multiples | specified assumption | pack stub |
| Dual-rater kappa | specified-not-enforced | EVAL |
| Token revocation / blast radius | specified-not-enforced | Phase 3 |
| SSO on paying cluster | specified-not-enforced | production bar |
| Walkthrough Playwright against live compose | specified-not-enforced | Phase 1 backend |

Specified-not-enforced count: **18**.
Enforced in Phase −1: **7**.
