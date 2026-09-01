# WEP V9 Demo Charter

This file exists because the V8 repo produced AI-satisfaction (tests, routers, honesty ledgers) without founder-satisfaction (a clean 12-minute demo).

**Rule:** nothing lands in a phase unless it appears in that phase’s walkthrough, or is a joint the walkthrough cannot lie without (RLS, hashes, provenance).

**Higher bar than `sanoojcools/work-engineering`:** a stranger, clean volume, no Slack, 12 minutes, two genomes. If that fails, the phase is not done no matter how many tests are green.

**Phase −1:** record this walkthrough against static fixtures *before* routers. If that recording is not a demo you would give a CFO, do not write backend code.

---

## The only demo that counts (Phase 1 + 2)

Length: 12 minutes. Audience: one operator + one sceptical finance lead.
Environment: `docker compose up` on a clean volume. No founder laptop state.

### Cast

| Fixture | Role in the story |
|---|---|
| Tenant **Northwind AR** | The company we are in |
| Pack `invoice-dispute.v1` | Object types, question bank, RR stubs |
| Intent **INT-007** | Dispute cycle ≤ 5 days |
| Scout founder session | Declared intent + coarse map |
| Scout SME session | Lived practice; disagrees on 2 units |
| Time-motion CSV + thinner SOP | Declared documents |
| 90-day synthetic ERP traces | Observed arm |
| Genome **G-DOC** | Document + trace backed; clears persist gate |
| Genome **G-SCOUT** | Scout-only; 100% Genome Strength; **fails persist** and the UI says why |

If G-SCOUT is waved through to make the screen look full, the demo has failed.

### Minute-by-minute

0:00–0:45  Sign in as Northwind AR. Company name visible. No catalog bleed.
0:45–2:30  Scout SME grid. Strength climbs to 100%. Banner: *declared capture — will not clear the observed-weighted gate alone.*
2:30–3:30  Generate from session → gate block. Empty L1 is correct. Read the reason out loud.
3:30–5:00  Import G-DOC (files + traces). Gate passes. L1 business objects → L2 units → L3 contract with field provenance chips.
5:00–6:30  Gap report: discovered / declared / matched / undocumented / phantom / judgment zones / founder-vs-SME. Point at one undocumented unit: “this is the work they actually do.”
6:30–8:00  One unit, four lints green, desired condition checkable. Ratify as named owner.
8:00–10:00 Scenario strip S1 / S2 / S3. CFO moderation to L3 “audit season.” Derived level unchanged. Log visible.
10:00–11:30 Costed case. Gross hours → disciplined hours. Residual-harm and review lines visible. Do not say FTE is payroll.
11:30–12:00 Spec bundle on that unit. A harness call without token is denied. Stop.

That is the product. Everything else waits.

### Recording gate

A phase is not done until:

1. A 12-minute loom (or scripted Playwright tour) exists in `docs/demo/`.
2. `tests/test_demo_walkthrough.py` drives the same path against a clean compose.
3. A stranger can follow `docs/demo/PHASE1.md` without Slack.

Code merged without those three is how V8 happened.

### Explicitly not in the Phase 1 demo

Adaptive interviewer. Simulator. Live ERP. Box 2 internals. Agent executing work. Confetti. A second industry. Catalog tenant.

---

## Clean-view rules

- One tenant on screen. Never Catalog + Client A in the same sentence.
- Every empty state has a sentence that names *why* it is empty.
- Inferred numbers wear an `inferred` chip until confirmed.
- Keys are minted by the demo button, stored by the app, never copy-pasted from a terminal mid-talk.
- The blocked Scout genome is part of the story, not an apology.
- If a chart needs a hidden unit dropped to look good, delete the chart.

---

## Four surfaces (information architecture freeze)

Wedge nav: Overview, Scout, Inventory, Gap, Scenarios, Spec.

| Surface | Job in the 12 minutes | Honesty load-bearing |
|---|---|---|
| Scout | Face of Discovery. Grid, strength, consent, tracks | 100% strength ≠ persist. Banner required |
| Gap | What they pay for before agents | Undocumented / phantom / judgment / founder≠SME all visible |
| Contract + scenarios | The record | Field provenance chips. S1≤S2≤S3≤gate. Moderation does not rewrite derived |
| Portfolio | Where the engagement may stop | Gross → disciplined hours. Residual harm on the sheet |

No eleventh nav item in Phase 1. Simulator is a door labelled optional, not a screen in the walkthrough.

Look-and-feel direction (not a brand lock): Foundry / Linear restraint. Off-white canvas, navy type, one teal accent. Dense, board-ready. No purple “AI” glow. No confetti. Empty states speak in sentences.

---

## Phase −1 fixture pack (build this first)

`samples/demo/northwind-ar/`

- `tenant.json` — Northwind AR
- `pack.invoice-dispute.v1.json`
- `intent.INT-007.json`
- `session.founder.json` / `session.sme.json` — two named contradictions
- `genome.G-SCOUT.json` — 100% strength, persist `accepted: false`, reasons listed
- `genome.G-DOC.json` — clears gate, 18-attr units, field provenance mixed observed/declared/designed
- `traces.90d.invoice-dispute.jsonl`
- `gap.expected.json` — known counts the walkthrough test asserts
- `wu-114.scenarios.json` — S1 L3 / S2 L4 / S3 L4 / moderated L3 CFO audit season
- `wu-114.costed.json` — honesty check shape 95 → 61.8

The walkthrough test compares live output to `gap.expected.json` and refuses silently rounded charts.

---

## Definition of done for a phase

```
[ ] Fixture or live path matches DEMO_CHARTER minutes
[ ] docs/demo/PHASE{n}.md stranger-runnable
[ ] tests/test_demo_walkthrough.py green on empty volume
[ ] 12-minute recording committed or linked
[ ] G-SCOUT still blocked
[ ] G-DOC still ratifiable
[ ] HONESTY specified-not-enforced count in STATUS
[ ] No second function pack
```

Ambition after this path is true: same 12 minutes on a customer’s invoice-dispute traces, still one pack, still two genomes if they arrived through Scout first. Width is not the upgrade. A second tenant on the same path is.
