# Tonight’s split — Grok vs Cursor

Ambition: a **production slice**, not the whole platform. A few hours cannot ship two graphs, RLS, VERDICT, and a runner. It can ship a gate that is real, a demo that stays honest, and an API Cursor can grow.

If a change does not serve the Offer Desk walk or lock persist-deny, do not build it.

## What “production-ready” means at 06:00

1. Same demo path, formal names in brackets + i-buttons.
2. An API that **refuses** talk-only persist (HTTP 403) for a reason a founder can read.
3. An API that accepts the spreadsheet as **declared**, never as Zwayam.
4. Pytest green without a live model.
5. Prototype still runs with no API (fallback). When API is up, Save talk-only hits the API and still shows 0 items.

Not in scope tonight: Postgres, RLS, Darwinbox, job runner, Finance/Legal, SME track screens, real Zwayam ingest.

## Grok (this chat)

Owns judgment, copy, contracts, review.

| ID | Work | Done when |
|---|---|---|
| G1 | Formal names in brackets + i-buttons on the live demo | You can hover every jargon word |
| G2 | This split + Cursor prompt | Cursor can start without asking us |
| G3 | Persist contract: talk-only deny body | Schema + example 403 JSON |
| G4 | Review every Cursor PR against AGENTS.md | Persist still unliftable |
| G5 | Keep the 12-minute script true | `docs/demo/OFFER_DESK_WALK.md` |

Grok does **not** generate 40 routers. Grok stops Cursor if L1 fills from talk-only.

## Cursor

Owns code velocity on a frozen contract.

Open the repo `sanoojcools/work-engineering-v9`. Read `AGENTS.md` and `docs/CURSOR_TONIGHT.md` first.

| ID | Work | Files | Done when |
|---|---|---|---|
| C1 | FastAPI persist gate | `apps/api/main.py` | `POST /v1/persist` with `source=talk-only` returns 403 |
| C2 | Sheet ingest as declared | `apps/api/offer_desk.py` | `POST /v1/persist` with `source=sheet` returns 200 and every field `provenance: declared` |
| C3 | Tests | `tests/test_persist_gate.py` | pytest fails if 403 is waived |
| C4 | Optional UI hook | `ui/prototype/app.js` | If `http://127.0.0.1:8000/health` is up, blocked screen calls persist; still 0 items |
| C5 | Do not | anything else | No runner. No LLM. No second function |

## Order

1. Grok pushes G1–G3 (this commit).
2. You `git pull` and confirm the demo still opens.
3. Cursor takes C1–C3 on a branch `feat/persist-gate`.
4. Grok reviews. Merge only if talk-only stays empty.
5. C4 last, 20 minutes, after C1 is green.

## Cursor one-liner to paste

```
You are implementing C1–C3 only in sanoojcools/work-engineering-v9.
Read AGENTS.md and docs/CURSOR_TONIGHT.md.
Do not waive persist for talk-only. Do not invent Zwayam events.
PR must name walkthrough minute: “Save talk-only”.
```
