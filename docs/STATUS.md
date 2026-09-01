# STATUS — what is true today

Last updated: 2026-09-01

This file may only claim what a test or a committed fixture walkthrough proves.

## Running

| Claim | Evidence |
|---|---|
| Phase −1 fixture pack exists for Northwind AR | `samples/demo/northwind-ar/` |
| G-SCOUT persist is denied at 100% Genome Strength | `genome.G-SCOUT.json` + `tests/test_two_genome_invariant.py` |
| G-DOC persist is accepted | `genome.G-DOC.json` |
| S1 ≤ S2 ≤ S3 and moderation does not rewrite derived | `wu-114.scenarios.json` + tests |
| Costed case publishes 95 → 61.8 | `wu-114.costed.json` + tests |
| Scout sessions carry consent receipts and declared provenance | session fixtures + tests |
| Four-surface prototype renders the 12-minute story | `ui/prototype/` |

## Not running

- Postgres, RLS, FastAPI, Spec API
- Live identity / SSO
- Evidence runtime
- VERDICT engine (scores in fixtures are authored, not computed)
- Adaptive interviewer
- Simulator
- Second function pack

## HONESTY specified-not-enforced count

See `docs/HONESTY.md`. Current specified-not-enforced stock: **18** (Phase 0+ work). Must not rise in silence.
