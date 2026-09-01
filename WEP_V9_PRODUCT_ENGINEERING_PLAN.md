# Work Engineering Platform V9
# Product Engineering Plan — Production System

**Status:** Build specification  
**Audience:** Founders, product engineers, and coding agents (Grok / Claude / Cursor)  
**Sources of truth:**  
- Architecture: *WEP System Architecture and Component Map* (V9)  
- Concept + capture record: *Work Engineering V8 Detailed FULL* (Parts A–J + Part K Scout)  
- Prior implementation: `github.com/sanoojcools/work-engineering` (V8 prototype + Scout)  
**Governing line:** A box is replaceable. A contract is not. Design the joints first.  
**Face of the product:** Scout is how a client meets Discovery. It is not a second product and it does not relax V9 contracts.

---

## 0. How to use this document

This is not a strategy memo. It is the document a coding agent should keep open while writing code.

Read in this order:

1. Section 0.1 — world-class bar vs the V8 repo. If a build cannot clear this table, it is not V9.
2. Section 0.2 — demo operating system. The 12-minute walkthrough is the spec. Code makes it true.
3. Section 1 — product thesis and hard non-goals.
4. Section 2 — what to keep from V8 vs what V9 changes, including Scout as face.
5. Section 3 — principles, including demo-first and eval-as-product.
6. Section 4 — frozen I/O contracts. Do not invent fields that are not here.
7. Section 7 — phased build. Phase −1 is the static prototype. Phase 0 is isolation. Implement only the current phase.
8. Section 10 — agent operating rules. These override local cleverness.
9. `DEMO_CHARTER.md` — minute script, two-genome invariant, recording gate.

If a later section conflicts with a frozen contract, the contract wins. If implementation conflicts with an honesty rule, the honesty rule wins. If a feature is not in the walkthrough and is not a joint the walkthrough cannot lie without, it waits. If a model wants to “just execute the work,” refuse — this platform specifies work; execution systems consume the spec.

Companion files to generate in the new repo on day one:

| File | Purpose |
|---|---|
| `AGENTS.md` | Short agent rules extracted from §10 |
| `DEMO_CHARTER.md` | 12-minute walkthrough. Definition of founder-satisfaction |
| `docs/CONTRACTS.md` | Frozen JSON schemas from §4 |
| `docs/HONESTY.md` | Enforced vs specified-not-enforced. This is *our* rule debt |
| `docs/STATUS.md` | What is true of the running system today |
| `docs/EVAL.md` | Karpathy bar: labelled units, agreement, failure cases |
| `docs/INVARIANTS.md` | Dean bar: isolation, idempotency, unreachability, blast radius |
| `docs/demo/PHASE1.md` | Stranger-runnable script |
| `ui/prototype/` | Static screens + fixture JSON before routers |
| `ARCHITECTURE.md` | How code maps to V9 boxes |

Do not claim a capability in STATUS until `tests/test_demo_walkthrough.py` or a named contract test proves it.

---

## 0.1 World-class bar — higher than `sanoojcools/work-engineering`

The V8 repo cleared a rare bar: honesty. It did not clear production, and it did not clear founder-satisfaction. V9 is not more architecture on the same failure mode. World-class is a property of a **running tenant a stranger can operate**, not of this document.

| Bar | V8 repo (true today) | V9 world-class (must become true) |
|---|---|---|
| Demo | Founder-laptop ritual. Keys, zeros, blocked Scout genome looking broken | 12-minute walkthrough on a **clean compose volume**. Scripted. Recorded. Playwright-backed |
| Isolation | RLS real; some routes soft; skipped tests looked green | Every tenant route fail-closed. HTTP RLS suite cannot skip in CI |
| Persist honesty | Scout 100% strength → GQS ~30 → empty L1 | Same outcome, **designed empty state**, spoken as scene two of the demo |
| Two-genome invariant | One path or the other, mid-talk confusion | **G-SCOUT blocked** and **G-DOC ratified** in one sitting. Waiving either gate fails the demo |
| Deliverable | Inventory + five projections | Scenario portfolio a CFO holds: S1/S2/S3 + moderation log + disciplined hours + residual harm |
| Spec | Check endpoint exists | Deny **stops** a harness. Token only on machine-readable units |
| Evidence | Trajectories ingested | Object condition vs system of record. Self-certification rejected |
| Auth | Spec keys + demo bootstrap | Paying cluster: SSO on, bootstrap **off** |
| Pack | Every demo a snowflake database | `invoice-dispute.v1` Function Pack. Second industry forbidden until Phase 1 is recorded |
| STATUS | Can outrun tests | STATUS ⊆ walkthrough test ∪ contract tests |
| Rule debt | HONESTY rows specified-not-enforced | HONESTY specified-not-enforced count is a published stock, same class as rule-debt ledger |
| Eval | Substring guard + GQS arithmetic | Labelled Work Unit set, inter-rater on VERDICT, published failure cases |
| Look | Eleven equal-weight nav links, inferred numbers looking measured | Four surfaces only in the wedge: Scout, Gap, Contract+scenarios, Portfolio |

**The clone test.** A person who did not write this plan clones the repo, runs compose on an empty volume, and follows `docs/demo/PHASE1.md` without Slack. If they cannot finish in 12 minutes, or must narrate around empty screens, the phase is not done.

**The honesty test.** If the blocked Scout generate is waived so L1 looks full, the build has failed even if every other test is green.

**The production test.** A paying tenant can complete Phase 1+2 on their data, isolated, with audit export, evidence intake available to their executor. Box 2 may be a stub. Box 6 may be unbuilt. Lying about either is the failure.

---

## 0.2 Demo operating system — founder satisfaction over AI satisfaction

V8 produced local completeness (routers, tests, ledgers) and narrative incompleteness (no single clean path). Models and coding agents optimise files-changed. The founder scores minute 0 to minute 12. Those objective functions diverge unless they are bound.

**Law.** The walkthrough is the spec. Code is how the walkthrough becomes true. Recording the walkthrough is the definition of done.

**Phase −1, before routers.** Freeze information architecture as a static prototype (`ui/prototype/`) driven by fixture JSON:

- G-SCOUT session at 100% Genome Strength, persist denied, reason visible.
- G-DOC pack cleared, L1→L2→L3, field provenance chips.
- Gap report with undocumented / phantom / judgment / founder≠SME.
- WU-114 scenario strip with CFO moderation recorded.
- Costed case showing gross → disciplined hours.

Record a click-through on fixtures only. If that recording is not a demo you would give a CFO, **do not generate backend code.** The recording is cheaper than another thousand lines.

**Two-genome invariant.** Every Phase 1+2 demonstration contains both genomes. G-SCOUT is declared, complete-as-a-session, persist-blocked. G-DOC is document- and trace-backed, persist-cleared, ratifiable. One without the other is theatre or an apology.

**Recording gate (non-optional).** A phase is not done until all three exist:

1. A 12-minute recording in `docs/demo/`.
2. `tests/test_demo_walkthrough.py` driving the same path against clean compose.
3. `docs/demo/PHASE1.md` a stranger can follow.

Code merged without those three is how V8 happened.

**Clean-view rules.**

- One tenant on screen. Never Catalog bleed.
- Every empty state names *why* it is empty.
- Inferred numbers wear an `inferred` chip until a human confirms.
- Keys minted by the demo button, held by the app, never pasted from a terminal mid-talk.
- The blocked Scout genome is a scene, not an apology.
- If a chart needs a hidden unit dropped to look good, delete the chart.
- Adaptive interviewer, simulator, live ERP, second industry: not in the Phase 1 recording.

**Ambition that is allowed.** The 12-minute path should feel like Foundry restraint: one pack, one function, object-state checkable, a board-ready gap artefact, a scenario strip a finance lead can sign. Depth on one function beats width across boxes.

---

## 1. Product thesis

### 1.1 What we are building

The Work Engineering Platform turns enterprise intent into work that machines, people and systems can be trusted to do.

The primitive is the **Work Unit**: an independently accountable commitment to change the state of a real business object, with a named owner and evidence of completion that someone other than the executor can check.

Around that primitive the platform:

1. Discovers what the organization's work actually is, including the gap between declared and observed.
2. Cuts that work into contracted units and a Work Graph.
3. Designs how each unit is verified.
4. Derives how much autonomy each unit can safely carry, and who should perform it.
5. Prices the whole honestly.
6. Emits appetite-tiered allocation scenarios the organization can adopt, moderate (with every moderation recorded), or grow into.

The current commercial deliverable is the **scenario portfolio**. The **workforce simulator** is the optional continuation and the recurring-revenue surface.

### 1.2 Design bet

Models, agents and frameworks will keep changing. The work itself — boundaries, accountability, verification — can stay stable. Intelligence is replaceable. The work record is the durable asset.

### 1.3 What this product is not

| Not this | Why |
|---|---|
| An agent runtime / orchestrator / BPMN engine | Execution systems consume the Spec API. Partners live in Box 4. |
| A Palantir / Celonis replacement | Box 1 is a container we consume by reference. Partners own or feed it. |
| A world model learned from data | The representation is governed and versioned. |
| A role-based workforce planner | Simulate actors against units, never roles. |
| A flattering automation ROI calculator | Cost per *verified* unit, with review, exceptions, governance, residual harm and exposure on the sheet. |
| A second product called Scout | Scout is the face of Box 3a. Same tenant, same gate, same Work Unit, same Spec API. |

### 1.4 Current offering vs continuation

```
Spine (one-way):  Intent [2] → Discovery [3a] → Cutting [3b] → Verification [3c] → VERDICT [3d]
                                                                                      ↓
                                                                              Economics [3e]
                                                                                      ↓
                                                              Scenario portfolio  ─── stop here is a complete sale
                                                                                      ↓
                                                              Workforce simulator [6]  optional next step

Container: Enterprise Ecosystem Representation [1]   (not a pipeline step)
Below Spec API: Execution [4] + Evidence Runtime [5]
Dashed return flows: traces, evidence, calibration, cascade, capacity constraints
```

Wedge that pays first: one function, ninety days of traces **and** a Scout capture (founder + SME + files), inventory + conformance gap, no agents required.

Scout sits on the Discovery box as the client-facing instrument. The spine does not run through Scout. Scout writes declared candidates, consent, and source files into [3a]. Traces still enter [3a] on the upward arm. Only [3a] reconciliation produces the gap a customer pays for.

---

## 2. Inheritance from the V8 prototype

The existing repo is a working specification-layer prototype. It is colleague-demo ready. It is not a sold customer product. V9 does not restart from zero. It promotes the joints that already work and replaces the arithmetic and product surface that V9 changed.

### 2.1 Keep — these are load-bearing and already proven

| Asset | Why keep | Where it lives today |
|---|---|---|
| 18-attribute Work Unit as the primitive | V9 still orbits this record | `models/workunit.py` |
| Owner ≠ actor | Accountability vs execution boundary | WorkUnit.owner / actor_type |
| Provenance enum: observed / declared / inferred / designed | Stops invented work acquiring authority | `Provenance` |
| Draft → reconciled → authoritative | Reconciliation is the only merge point | `UnitStatus` |
| Variants as patches, not cloned units | Prevents inventory explosion | `work_unit_variants` |
| Four Work Graph edge types | Sequence, shared_object, shared_resource, reciprocal | `work_edges` |
| Seven verification methods | Independence is the cost justification | `VerificationMethod` |
| Deterministic VERDICT function, never LLM-judged | Auditable allocation | `services/verdict.py` |
| Promotion is human; demotion is automatic | Safety bias | `services/promotion.py` |
| Four costing disciplines as computation | Honest case: 95h → 61.8h | `services/economics.py` |
| Spec API checks: authority, evidence, condition, acceptance | Governance by construction | `services/spec.py` |
| Postgres for both graphs | Deliberate ops choice, not a conceptual divergence | ARCHITECTURE.md |
| Alembic-owned schema + `wep_app` non-superuser + RLS | Tenant isolation that actually fails closed | migrations `9a07306c5434`, `f198c4aadd2c` |
| Per-org `X-Spec-Key`, hashed at rest, shown once | Spec consumers are tenants | `org_api_keys` |
| GQS import gate | Blocks thin / dishonest genomes | `services/gqs.py` |
| LLM output must be a literal substring of source | Models cannot put words in a speaker's mouth | `services/scout_story.py` |
| Tests force `LLM_PROVIDER=none` | CI must never make billed calls | `tests/conftest.py` |
| Inferred vs confirmed scores | Census drafts cannot overwrite a human confirmation | VERDICT / cost `origin` |
| Honesty matrix | Enforced vs specified-not-enforced, updated in the same PR | `docs/HONESTY.md` |
| extra=forbid on Work Unit import | Silent extra fields are how invented work sneaks in | `schemas/genome_import.py` |
| Scout as downward Discovery instrument | Client-facing capture without a second writer | Part K; `routers/scout.py` |
| Founder + SME tracks on one grid | Disagreement is a declared-vs-declared gap signal | K3 |
| Work Capture Grid as partial contract | Nine live fields; missing 18-attrs get honest placeholders, never guesses | K4 |
| Genome Strength ≠ GQS | Session completeness is not gate clearance | K5 |
| Five elevations with named mechanisms | No elevation may claim more than its mechanism | K6 |
| Scout genomes reuse `import_genome` | No relaxed gate for being first-party capture | K7 |
| Scout provenance = `declared` | Interview is declared, never observed, even when accurate | K8 |
| Consent receipts exist and are revocable | Object is real; join to units is the open piece | K9 |
| Literal-substring Story-to-Structure | Models cannot put words in an interviewee's mouth | K6 |

### 2.2 Rewrite — V9 changed the product, not just the labels

| V8 behaviour | V9 requirement | Action |
|---|---|---|
| VERDICT = mean of 7 scores → banded L1–L5 + L6 special case | Readiness / Restraint → banded level; V is derived from verification method cost + objectivity, not opinion-scored | Replace `base_level()`; keep gates as hard caps; version the anchors |
| One recommended level | Appetite scenarios S1 floor / S2 derived / S3 ceiling; appetite never relaxes a gate | New `allocation_scenarios` + moderation log |
| Four hard gates | Five gates in the execution path; gated action is unreachable, not expensive | Extend Spec API; gates execute in Box 4 |
| Economics = do + verify + exceptions + maintenance + attribution | Add residual-harm line, correlated-exposure line + controls, rule-debt ledger, sub-task vs E2E cascade | Extend `services/economics.py`; cascade writes back to [3b] |
| Work Graph edges exist as types | Typed *weighted* edges (frequency + lag-stability), trace-derived. Named largest gap (O1) | New edge-weight job; do not hand-draw weights |
| Intent is an `intent_sources` table of documents | Intent records: outcome + constraints + guardrails + owner + versioning that raises re-derivation tasks | New Box 2 behind a frozen output contract |
| Spec payload is the Work Unit | Spec bundle = contract + actor policy + gates + verification spec | Versioned Spec API 1.0 |
| Completion checked against contract text | Evidence runtime grades object condition in the system of record, never the execution log alone | Box 5 is a first-class service |
| No simulator | Scenario matrix: appetite × demand streams | Box 6 after the portfolio ships |
| Field provenance is unit-level | Provenance per field of the 18-attribute contract | `field_provenance` JSON + lint |
| Auth is a shared spec key on some routes, open on others | Real identity (SSO) + service principals for executors + RLS on every tenant table | Production bar |

### 2.3 Do not carry forward

- Global `dev-spec-key-change-me` anywhere.
- `create_all()` on boot. Schema is Alembic-only.
- Open inventory routes that “ignore a missing key.” Fail closed.
- Caller-supplied `hash_sha256` treated as tamper evidence.
- Confetti, inflated GQS, or demo paths that persist units the quality gate rejected.
- Invented fifth VERDICT gate.
- Treating Scout-declared genomes as observed.
- Point-estimate forecasts.
- Role-level headcount as the planning primitive.
- A Scout-only writer that bypasses GQS / field provenance / ratification.
- Adaptive-AI interviewer claims while the question bank is still static.
- Genome Strength presented as gate clearance.
- Consent theatre: receipts that exist but are never required and never written onto units.
- Confetti / inflated time-saved figures from Future Preview (V8 already refused this).

---

## 2.4 Scout in V9 — the face of Discovery, not a fork

Part K is the honest ledger of what Scout actually is. V9 does not rewind that honesty. It promotes Scout from “appended capture instrument” to **the client-facing surface of Box 3a**, and it extends Scout so the rest of V9 has something real to consume.

### What Scout is, stated once

Scout is how a practitioner meets the platform. Multi-stage interviews (founder why, function-leader declared map, SME lived practice) plus structured and unstructured ingest (SOP, CSV/XLSX time-motion, policy PDFs, later traces). Every path writes into Discovery. None of them is the Work Unit of record until it passes the same contract, provenance, and quality rules as a document-backed import.

```
 Client
   │
   ├─ Scout interviews (founder / function leader / SME)
   ├─ Scout file ingest (CSV, XLSX, SOP, PDF, later traces)
   └─ Partner feeds (Box 1 object state; upward traces)
           │
           v
        [3a] Discovery
           │  declared candidates   observed candidates
           │  coverage map          judgment zones
           v
        conformance gap  →  [3b] cutting  →  rest of V9 spine
```

Scout does **not** sit on the spine. Intent [2], cutting [3b], verification, VERDICT, economics, Spec API, evidence runtime, simulator are unchanged. Scout is a face and a feeder.

### Built (lift into V9, do not rebuild from memory)

| Capability | V9 destination |
|---|---|
| Founder and SME sessions on one Work Capture Grid | Declared-candidate source; two-track gap |
| Live-editable nine-field grid + Genome Strength meter | Capture UX; completeness ≠ machine-readability |
| Time-Travel Replay, Contradiction Resolver, Pain X-Ray, Story to Structure, Future Preview | Analyst views over declared capture — keep mechanisms honest |
| Generate Work Units → existing import + GQS | Only path from session to persisted units |
| `POST /files/upload` + server SHA-256 + classifier | Structured ingest arm |
| L1/L2/L3 playback + BO-level and partial ratification | Cutting / ratification UX, reused |
| Per-org key, RLS, PII scan, consent CRUD + purge | Kernel |
| Story to Structure substring guard | LLM plugin rule for all capture extraction |

### Specified in V8 Scout, still not built — V9 either ships them or keeps them named

| Gap (K11) | V9 decision |
|---|---|
| Function Pack SDK (ontology + question bank + RR stubs + parser hints + VERDICT anchors per function) | **Ship for the wedge function.** This is how invoice-dispute (or HR) becomes repeatable. Packs are Box 1 + [3a] configuration, not a new product. |
| Adaptive AI follow-up questions | **Not phase 1.** Static bank remains. If a model is added later, every suggested question is inferred, shown as such, and cannot write observed fields. |
| Live “words become structure” across the whole interview | **Story to Structure only**, plus an unstructured-doc extractor that emits inferred/declared fields with span citations. Grid remains typed capture. |
| F1 split (one incoming unit, more than one object / owner / verification method → split) | **Ship in [3b] lints**, not inside Scout. Scout captures; cutting splits. Same arithmetic as V8 F1 / V9 granularity lints. |
| Dedup engine across files and sessions | **Ship in [3a] reconciliation.** Hash key = object type + desired condition + variant key. Collisions become variants or review-queue items, never silent merges. |
| Consent required and written onto units | **Ship.** Session cannot close without a receipt. Import writes `consent_receipt_id`. Observed-from-interview is illegal; interview stays declared. |
| DFS cycle detection on the Work Graph | **Ship in [3b]** when edges are written. |
| Dedicated pain-signals table | **Do not create.** Pain stays derived on read (K6). |

### What V9 adds on top of Scout — without compromising V9

1. **Three declared tracks, one observed arm.**  
   Founder track may draft Box 2 intent records (outcome + constraints + owner) as *declared intent*, versioned. Function-leader track drafts the declared inventory. SME track drafts lived practice. Upward traces (still not Scout’s job in V8) become a first-class ingest in V9 Discovery so the gap is declared-vs-observed, not only founder-vs-SME.

2. **Unstructured ingest with the same honesty rules as Story to Structure.**  
   SOP / policy / transcript / PDF → extractor → candidates. Every quoted span is a literal substring or it is discarded. Fields the source does not cover come back `not stated`. Provenance is `declared` for documents, `inferred` for model structure, `observed` only for traces and system records.

3. **Coverage map and judgment zones are visible in Scout UI.**  
   Under-sampled and trace-blind zones are a Discovery output. Scout must render them, not hide them behind a 100% Genome Strength meter.

4. **Field-level provenance on generate.**  
   Grid fields the human typed = `declared`. Placeholders for unasked 18-attrs stay placeholders and cannot be ratified as complete. Extracted structure = `inferred` until a human confirms. Trace-backed fields = `observed`.

5. **Scout session becomes a source on the candidate, not a parallel genome.**  
   V9 primary record is the Work Unit after cutting. A session id, file ids, and consent id hang off candidates and field provenance. Do not keep “Scout genome” as a competing system of record once ratified.

6. **Contradiction Resolver feeds the conformance gap, not a toy elevation.**  
   Founder≠SME on systems / frequency / inputs is a declared-vs-declared gap row. When traces exist, a third column (observed) makes D3 complete.

### Non-negotiables (these are how we do not compromise V9)

- Scout-only output cannot clear an observed-weighted quality gate by construction. That is a feature (K8). V9 keeps it.
- Genome Strength is session completeness. GQS / contract completeness is gate clearance. The UI must keep saying so.
- No Scout-specific writer. Generate calls the same import / candidate pipeline.
- An interview is never `observed`. Accuracy of the speaker does not change provenance.
- Elevations may not grow secret inference. If Future Preview starts inventing units, it has left V9.
- Consent is load-bearing in V9, not an unused table.
- Function packs configure Discovery. They do not skip ratification or gates.

---

## 3. System principles

These are implementation constraints, not slogans.

**P1. Contracts over components.**  
A component may be rewritten. A joint may not silently change. Every joint has a versioned schema, a compatibility window, and a contract test.

**P2. Specification ≠ execution.**  
This platform produces the Spec bundle. Box 4 executors (human apps, agent platforms, RPA, BPO) consume it. Evidence still flows through *our* runtime, or the autonomy they run at is unearned.

**P3. Two graphs, never merged.**  
Enterprise Graph nodes are objects, actors, policies, states. Work Graph nodes are Work Units. Reference joins only.

**P4. Provenance is a field, not a footnote.**  
Every contract attribute carries `observed | declared | inferred | designed`. Inferred fields cannot become authoritative without a human confirmation event.

**P5. Autonomy is earned and revocable.**  
Promotion: human + evidence (pass rate, run-to-run consistency, calibration). Demotion: automatic on lagging (pass rate) and leading (recovery slowdown) triggers. Appetite moves placement inside the gate-permitted range. Appetite never lifts a gate.

**P6. Hard limits are architectural.**  
A gated action is unreachable. Returning `denied` and then executing is rule debt.

**P7. Honesty over theatre.**  
If a number is assumed, label it. If a zone is under-sampled, declare it. If a genome is declared-only, GQS must cap it. STATUS.md may not outrun the tests.

**P8. Intelligence is a plugin.**  
LLM calls sit behind `services/llm.py`. Deterministic fallbacks exist for every model path. Model-binding change raises re-validation tasks on affected units. The work record does not embed a model name as authority.

**P9. Events, not nightly fiction.**  
Intent change → re-derivation tasks. Model-binding change → re-validation. Promotion / demotion / moderation → recorded events. Forecast-vs-actual variance → economics recalibration.

**P10. One function first.**  
Production-ready means the wedge can be run on a real tenant, with real isolation, real keys, real audit, and a scenario portfolio a CFO can hold. It does not mean every box is deep.

**P11. Scout is a face, not a fork.**  
Capture UX may be opinionated. Contracts, gates, provenance, and the Spec API may not be. If Scout and the spine disagree, the spine wins.

**P12. Walkthrough over coverage.**  
A feature that does not appear in the current phase walkthrough, and is not a joint the walkthrough cannot lie without, does not merge. Local test-green is AI-satisfaction. Recorded walkthrough is founder-satisfaction.

**P13. Two genomes or it is not a demo.**  
G-SCOUT blocked and G-DOC ratified in one sitting. Waiving the persist gate to fill a screen is a product defect.

**P14. Checkable objects first.**  
The wedge function must have an authoritative system of record and a desired condition a non-executor can check. Invoice-dispute qualifies. Strategy, relationship-dense work, and “judgment only” functions do not qualify as Phase 1.

**P15. Packs beat snowflakes.**  
`invoice-dispute.v1` is how the demo stops being a founder performance. No second pack until Phase 1 is recorded.

**P16. HONESTY is our rule-debt ledger.**  
Every specified-not-enforced row is undeclared work in our own inventory. Publish the count. Do not add rows faster than you retire them.

**P17. Eval is part of the product.**  
VERDICT is a hypothesis. Ship the labelled set, the agreement number, and the failure cases, or stop calling derivation an engine.

**P18. Unreachable means all three surfaces.**  
A gated action is unreachable in the API, in the reference executor harness, and in the human UI. Unreachable in one and clickable in another is documentation.

---

## 4. Frozen I/O contracts

Freeze these before writing features. Coding agents implement to these schemas. Box 2 may be undesigned internally; its *output* is already consumed.

Convention: all records include `id`, `tenant_id`, `schema_version`, `created_at`, `updated_at`. Identifiers are stable strings (`WU-114`, `INT-007`, `INV-2214`), not only surrogate keys.

### 4.1 Joint 1 — Box 1 produces vocabulary + current state

Consumed by [2] and [3]. Partners may own the store. We persist references, not a second ontology of record.

```json
{
  "object_id": "INV-2214",
  "object_type": "invoice",
  "state": "disputed",
  "links": [
    {"rel": "order", "object_id": "SO-1189"},
    {"rel": "customer", "object_id": "ACME-CORP"},
    {"rel": "dispute_case", "object_id": "DC-77"}
  ],
  "policies": ["credit-policy@v4", "revenue-recognition@v2"],
  "source_systems": ["erp", "crm"],
  "as_of": "2026-08-28T14:02:00Z",
  "representation_version": 118,
  "governed": true
}
```

Contract rules:

- Never learn a new object type silently. New types enter via a governed registry change.
- State values come from the type's state machine, not free text at write time.
- External context (customer, regulation, market) is in the same representation.

### 4.2 Joint 2 — Intent record (Box 2 output; freeze first)

This is the design target Box 2 must emit. Downstream already depends on it. Designing Box 2 internally is a later phase; shipping a stub that can be hand-authored is phase 1.

```json
{
  "intent_id": "INT-007",
  "owner": "COO",
  "horizon": "FY27",
  "outcome": {
    "metric": "dispute_resolution_cycle_days",
    "comparator": "<=",
    "target": 5,
    "holding_constraint": "recovery_rate >= baseline"
  },
  "constraints": [
    "no_automated_customer_commitments",
    "audit_trail_complete"
  ],
  "guardrails": [
    {"layer": "L1_compliance", "ref": "constitution.compliance"},
    {"layer": "L2_audit", "ref": "constitution.audit"},
    {"layer": "L3_data_security", "ref": "constitution.data_security"}
  ],
  "precedence": [{"over": "INT-004", "rule": "more_specific_wins"}],
  "version": 3,
  "change_effect": {
    "raises_rederivation_on": ["WU-114", "WU-115"]
  }
}
```

Minimum fields Discovery [3a] needs to derive declared candidates: `intent_id`, `outcome`, `constraints`, `owner`, `guardrails`, `version`.

An intent version bump **must** enqueue re-derivation tasks. Same class of event as a model-binding change.

### 4.3 Joint 3 — Candidate Work Unit (Discovery → Cutting)

```json
{
  "candidate_id": "CAND-441",
  "proposed_name": "Assess dispute validity",
  "object_type": "invoice",
  "current_condition": "disputed",
  "desired_condition": "assessed",
  "provenance": "observed",
  "evidence_refs": ["trace:erp:INV-2214:2026-08-01"],
  "source": "upward_traces",
  "confidence": 0.71,
  "coverage_flags": [],
  "linked_intent_id": null
}
```

`source` is `upward_traces | downward_intent | declared_documentation | scout_founder | scout_function_leader | scout_sme | file_ingest`.

Scout sources are always `provenance: declared` unless a field was filled from a trace or system record. Documentation is declared input, never truth. Add `session_id`, `track`, `consent_receipt_id`, `file_ids` when the candidate came through Scout.

### 4.3b Joint 3b — Scout session (face of Discovery)

Scout writes this. Discovery consumes it. Cutting does not read the session directly.

```json
{
  "session_id": "SES-019",
  "track": "sme",
  "function": "invoice-dispute-resolution",
  "consent_receipt_id": "CR-441",
  "pack_id": "pack.invoice-dispute.v1",
  "completeness": {
    "genome_strength_pct": 100,
    "expected_units": 8,
    "computed_dimensions": 7,
    "knowledge_artifacts_computed": false
  },
  "units": [
    {
      "name": "Assess dispute validity",
      "inputs": ["invoice", "dispute_case"],
      "outputs": ["assessment_record"],
      "systems": ["ERP", "CRM"],
      "frequency": "daily",
      "time_minutes": 18,
      "pain": "evidence scattered across mail",
      "handoffs": ["AR lead"],
      "decision_rule": "materiality threshold"
    }
  ],
  "elevations_ran": ["contradiction", "story_to_structure"],
  "schema_version": "scout.session.v2"
}
```

Rules:

- `track` is `founder | function_leader | sme`.
- Grid remains nine fields. Unasked 18-attribute fields are not invented here.
- `consent_receipt_id` is required to close a session in V9.
- `genome_strength_pct == 100` does not authorize persist. Persist goes through the candidate → quality-gate → cutting path.
- Founder-track sessions may also draft an intent record (Joint 2) with `provenance: declared`.

### 4.4 Joint 4 — Work Unit contract (18 attributes + field provenance)

A unit may not leave [3b] unless the desired condition is checkable. An uncheckable condition is a cut in the wrong place.

```json
{
  "code": "WU-114",
  "name": "Assess dispute validity",
  "object_type": "invoice",
  "current_condition": "disputed",
  "desired_condition": "assessed",
  "context": {"variant_keys": ["standard", "high-value"]},
  "trigger": "dispute_case_opened",
  "inputs": ["invoice", "dispute_case", "order"],
  "authority": "AR-team-lead",
  "actor_constraints": "agent-class-A or AR-analyst",
  "acceptance_criteria": [
    "assessment_record_exists",
    "evidence_refs_present",
    "checkable_by_non_executor"
  ],
  "evidence_required": ["assessment_record", "object_condition:invoice.assessed"],
  "verification_method": "cross_system_reconciliation",
  "sla": {"hours": 8, "volume_per_month": 400},
  "dependencies": ["WU-108"],
  "failure_semantics": "hold_invoice_in_disputed; escalate_to_owner",
  "regulatory_register": ["RR-revrec-v2"],
  "provenance_unit": "observed",
  "field_provenance": {
    "name": "declared",
    "acceptance_criteria": "designed",
    "volume_per_month": "observed"
  },
  "owner": "AR team lead",
  "actor_type": "agent",
  "status": "ratified",
  "variant": "standard"
}
```

Four granularity lints (must fail a unit out of [3b] if triggered):

1. More than one owner can credibly be blamed.
2. Desired condition cannot be checked by a non-executor.
3. More than one business object changes condition.
4. Scope exceeds the executor's horizon H(e).

Variant keys are ordered coarse → fine. Most restrictive published level wins across variants.

### 4.5 Joint 5 — Work Graph edge

```json
{
  "from": "WU-114",
  "to": "WU-115",
  "type": "sequence",
  "weight": {
    "frequency_per_month": 380,
    "lag_days_p50": 0.6,
    "lag_stability": 0.82
  },
  "derived_from": "traces",
  "schema_version": "edge.v1"
}
```

Types: `sequence | shared_object | shared_resource | reciprocal`.  
Org-chart edges are suspect by default. Real couplings show as stable-delay edges in traces.  
O1 (named largest gap): this layer is specified; V8 only auto-derived sequence. Build weights from traces, not from the org chart.

### 4.6 Joint 6 — Verification spec ([3c] → Spec API and [3d])

```json
{
  "work_unit": "WU-114",
  "variant": "standard",
  "method": "cross_system_reconciliation",
  "checker": {
    "kind": "deterministic_ruleset",
    "version": "v3",
    "separate_credentials": true,
    "independent_lineage": true
  },
  "level": 4,
  "sampling": {"rate": 0.05, "strategy": "stratified"},
  "held_out_grading_set": true,
  "demotion": {
    "lagging": "pass_rate < 0.97",
    "leading": "recovery_slowdown"
  },
  "intervention_rate_telemetry": true,
  "silent_promotion_flag": true,
  "cost": {"expected_minutes": 4.2},
  "objectivity": 0.86,
  "v_score": 4
}
```

V in VERDICT is derived from this spec's cost and objectivity. [3c] measures. [3d] prices. Do not let a human type a V-score that contradicts the method.

Checker independence rule: different lineage **or** deterministic, plus separate credentials. Correlated failure does not count.

Five gaming-mode checks are built in, not optional: versioned acceptance criteria, stratified sampling, held-out grading set, object-condition evidence, reclassification-rate publishing.

### 4.7 Joint 7 — VERDICT scorecard + scenario strip

```json
{
  "work_unit": "WU-114",
  "variant": "standard",
  "scores": {"V": 4, "E": 3, "R": 2, "D": 4, "I": 4, "C": 2, "T": 4},
  "readiness": 4.00,
  "restraint": 2.33,
  "composite": 5.67,
  "derived_level": 4,
  "gates_tripped": [],
  "scenarios": {
    "S1_conservative": 3,
    "S2_derived": 4,
    "S3_ceiling": 4
  },
  "moderation": {
    "held_at": 3,
    "owner": "CFO",
    "reason": "audit season",
    "recorded": true
  },
  "actor_policy": {
    "preferred": "agent-class-A",
    "fallback": "human",
    "escalation": "AR-team-lead",
    "p_star": {"armed": true, "requires_calibration": true}
  }
}
```

Derivation is deterministic and server-side. Anchors are versioned. Inter-rater reliability of the seven properties is untested — flagged, do not market as measured.

Scenario rule: S1 = band floor, S2 = derived, S3 = ceiling inside gate-permitted range. Org moderation is allowed and recorded as an override event with owner and reason. Derived vs moderated is a tracked gap, same class as declared vs effective.

`p*` (confidence-gated escalation) is legal only at L4–L5 and only above measured calibration. Below calibration, sampled audit dominates.

Model-binding change raises re-validation tasks. Placements flip across model families, so policies re-validate per binding.

### 4.8 Joint 8 — Spec API bundle ([3d] → [4])

An executor never receives work without its controls.

```json
{
  "spec_version": "1.0",
  "work_unit": { "...contract...": true },
  "verification_spec": { "...": true },
  "actor_policy": { "...": true },
  "gates": [
    {"id": "G1_regulatory", "effect": "unreachable_if_tripped"},
    {"id": "G2_reversibility", "effect": "cap_L3"},
    {"id": "G3_impact", "effect": "cap_L3"},
    {"id": "G4_evidence", "effect": "cap_L2"},
    {"id": "G5_calibration", "effect": "p_star_disarmed"}
  ],
  "escalation": {"p_star": 0.82, "requires_calibration": true},
  "token": "spec.tenant.wu114.standard.v18"
}
```

`POST /api/spec/check` remains the enforcement surface. Denied checks are stored. The executor must actually stop. A partner agent platform that ignores a deny has unearned autonomy — record that as rule debt.

### 4.9 Joint 9 — Evidence record ([5] → [3c], [3d], [3e], [2], [3a], [1])

```json
{
  "instance_id": "8812",
  "work_unit": "WU-114",
  "variant": "standard",
  "executor": "agent-class-A",
  "result": "pass",
  "object_condition": {
    "object_id": "INV-2214",
    "verified_state": "assessed",
    "against": "erp",
    "self_certified": false
  },
  "grade_vs_intent": {"intent_id": "INT-007", "contribution": "contributing"},
  "intervention": {"occurred": false, "logged": true},
  "calibration_sample": true,
  "recovery_time_seconds": null,
  "duration_seconds": 212,
  "exception_type": null
}
```

Streams: traces → [3a]/[1]; evidence → [3c] promotion/demotion; calibration → [3d]; durations/exceptions → [3e]; outcome grades → [2].

### 4.10 Joint 10 — Costed case ([3e] → customer and [6])

Per 1,000 instances, per unit × scenario.

Must include: execution hours, review hours, exceptions (routed / recovery / anchored), governance hours, residual-harm line, exposure line + architectural controls, cost per verified unit vs human baseline, honesty check (gross vs disciplined), cascade (sub-task success rate vs end-to-end).

Persistent sub-task / E2E gap is not an execution problem. It is feedback that [3b] cut in the wrong place.

Working assumptions, labelled as such until replaced by measurement:

- Recovery ≈ 2.5 × first-pass effort (O2).
- P(systemic) is not estimable ex ante; contain exposure, do not predict it.
- Rule debt is a stock; incident risk tracks the level, not the rate.

### 4.11 Joint 11 — Scenario-matrix cell ([6])

```json
{
  "cell": "S2-derived x growth-in-existing",
  "period": "FY28-Q2",
  "demand_instances": 12400,
  "unit_count": 41,
  "peak_concurrency": 17,
  "capacity": {
    "human_fte": 3.1,
    "agent_class_A": 2,
    "governance_fte": 0.4
  },
  "budget": {"point": null, "range": {"low": 0, "high": 0}, "currency": "INR"},
  "time_to_capacity": [],
  "variance_vs_last": 0.06,
  "recalibration_event": true
}
```

Never emit a point estimate without a sensitivity range. Actor supply is a concurrency problem, not an hours problem. Capacity constraints return into [3d]. Forecast-vs-actual variance recalibrates [3e].

Demand streams, projected separately: existing execution, growth in existing units, new work areas. New-area projection is the weakest estimate and must say so.

---

## 5. Component build notes

For each box: problem, what “done” means in production, what the V8 repo already gives you, and the first slice.

### 5.1 Box 1 — Enterprise Ecosystem Representation (container)

**Done when:** a tenant can register object types, ingest current-state cards from a partner feed or CSV, and Work Units can reference objects by id without copying them into the Work Graph.

**First slice:** governed type registry + object-state card store + version + as-of. No learned embeddings. Partner conversation is an I/O contract, not a feature negotiation.

**Reuse:** `entity_types`, `entities`, `entity_edges`.

**Do not:** merge these tables with `work_edges`.

### 5.2 Box 2 — Intent Modelling (TO BE DESIGNED)

**Done when (interface):** an intent record can be authored, versioned, and consumed by Discovery; a version bump enqueues re-derivation tasks; outcome grades from [5] can attach to an intent.

**Not done when:** we have a beautiful strategy-deck parser and an unstable schema.

**First slice:** hand-authored intent records + constitution layers as tagged guardrail sets. Freeze the schema in `docs/CONTRACTS.md`. Put a `TO_BE_DESIGNED.md` behind the interface so agents do not invent a world-model here.

**Research still open:** can intent be expressed machine-checkably as outcome + constraints? Can a constitution inherit to units without losing accountability for the whole? Do not pretend these are settled.

### 5.3 Box 3a — Discovery (wedge), faced by Scout

**Done when:** for one function and ~90 days of traces + a Scout capture (founder + function-leader + SME + files) + intent records, the system emits candidate units with provenance, a conformance gap report (discovered / declared / matched / undocumented / phantom / judgment zones / founder-vs-SME), and a coverage map of what discovery cannot see.

**Reuse:** Scout sessions, Work Capture Grid, five elevations (honest mechanisms only), file upload + SHA-256, GQS philosophy, census, `discovery.py`.

**Upgrade:**

- Scout is the default client path into this box, not a side demo.
- Three declared tracks + one observed arm. Founder-vs-SME is necessary and not sufficient for D3.
- Upward pipeline tags every candidate `observed | reconstructed`.
- Downward pipeline derives declared candidates from intent records, Scout sessions, and documents.
- Unstructured docs use the substring guard. Empty beats guessed.
- Under-sampled zones are declared, never hidden. Genome Strength must not hide them.
- Dedup across sessions and files. F1 split belongs in [3b], triggered from here.
- Consent is required and written onto candidates.
- One Function Pack for the wedge function (question bank, object types, RR stubs, parser hints, VERDICT anchors).

**Wedge commercial output:** the gap report, produced from a Scout engagement plus traces. Inventory + gap on one function, ninety days, no agents.

### 5.4 Box 3b — Work Cutting and Work Graph

**Done when:** a candidate cannot leave this box without a checkable desired condition; the 18 attributes exist with field-level provenance; four granularity lints run; the ratification queue has a named owner; edges are typed and, where traces exist, weighted.

**Reuse:** Work Unit model, variants, sequence-edge derivation, ratification table, Genome L1/L2/L3 playback.

**Upgrade:** field provenance, granularity lints, weighted edges, co-change persistence test, executor-horizon constraint (scope ≤ H(e)).

**Return flow from [3e]:** persistent sub-task / E2E gap re-opens the cut.

### 5.5 Box 3c — Verification Design

**Done when:** every ratified unit × variant has a priced method, an independent checker, a sampling plan, demotion triggers (lagging + leading), and intervention-rate telemetry with silent-promotion detection.

**Reuse:** verification method enum, verification runs, promotion service.

**Upgrade:** seven methods priced; six-level ladder wired to [3d]; leading indicator = recovery slowdown from paired signals (false-positive cautions documented); V-score emitted to [3d]; gaming-mode checks on by default.

### 5.6 Box 3d — VERDICT and Allocation

**Done when:** server-side derivation produces S1/S2/S3 for every ratified variant; gates are applied; actor policy has preferred / fallback / escalation; moderations are events with owner and reason; model-binding changes enqueue re-validation; most restrictive variant level is the published one.

**Reuse:** `verdict.py` gates 1–4, inferred vs confirmed origin, allocation projection.

**Replace:** mean-to-level function with versioned Readiness/Restraint anchors. Publish the arithmetic in `docs/VERDICT_ANCHORS.md` so it is replaceable on purpose.

**New:** scenario strip, moderation log, `p*`, fifth gate (calibration), Spec bundle assembly.

### 5.7 Box 3e — Economics Engine

**Done when:** a costed case per unit × scenario includes the four original disciplines plus residual harm, correlated exposure + controls, rule-debt stock, and cascade metrics — and the honesty check still moves a flattering number down.

**Reuse:** `economics.py` monthly_hours.

**Upgrade:** residual-harm = error × undetected-in-time × unrecovered × consequence; exposure line with attached controls; rule-debt ledger (declared-but-unenforced, unratified, candidate-register entries); sub-task vs E2E pair on every chain.

Label recovery 2.5× as a working assumption until O2 is measured.

### 5.8 Boxes 4 + 5 — Execution and Evidence Runtime

**Done when (for *our* production bar, not a full orchestrator):**

- Spec bundle can be fetched by an executor with a service principal.
- `POST /spec/check` can deny, and denials are queryable.
- Evidence records can be posted and are rejected if they self-certify the object condition.
- Intervention events, recovery-time series, and calibration samples stream back.

We still do not run the work. We run the evidence grade and the gate.

Partners: third-party agent platforms are Box 4 citizens. If their evidence does not pass through our runtime, publish their autonomy as unearned.

### 5.9 Box 6 — Workforce Simulator (after the portfolio)

**Done when:** a tenant can open a matrix of (S1 / S2 / S3 / org-moderated) × (existing / growth-in-existing / new-areas) and see demand, peak concurrency, capacity by actor class, budget range, time-to-capacity, and variance vs actuals.

Do not start this box until S1/S2/S3 and costed cases exist. The map is the prerequisite.

---

## 6. Target architecture

### 6.1 Shape

Modular monolith in V9.1. Extract services only when a joint is stable and a scaling or isolation reason exists.

```
                    ┌─ Partner / tenant systems ─┐
                    │ ERP, CRM, ITSM, lakehouse  │
                    └────────────┬───────────────┘
                                 │ object-state + traces
                                 v
┌─────────────────────────────────────────────────────────────┐
│  WEP API  (FastAPI)                                         │
│  routers thin · services own rules · schemas are contracts  │
│                                                             │
│  [1] representation   [2] intent (stub then design)         │
│  [3a] discovery       [3b] cutting + graph                  │
│  [3c] verification    [3d] verdict + scenarios              │
│  [3e] economics       spec gateway                          │
│  [5] evidence intake  [6] simulator (phase 4)               │
└───────────────┬───────────────────────────┬─────────────────┘
                │                           │
                v                           v
     Postgres 16 + RLS              Object store (files)
     (system of record              sha256 computed server-side
      for work, graphs,             never caller-supplied
      events, keys)
                │
                v
     Outbox → queue (re-derivation, demotion,
               re-validation, purge, sim recompute)
                │
                v
     React app  (Scout engagement face + ratification +
                 scenario portfolio + later simulator)
```

### 6.2 Stack decisions (inherit unless a production requirement forces a change)

| Layer | Choice | Why |
|---|---|---|
| API | FastAPI, Python 3.12, sync-to-async only where I/O bound | Existing codebase, OpenAPI as the contract surface |
| DB | PostgreSQL 16 | RLS, pgcrypto, graph-as-tables is enough |
| Migrations | Alembic only | V8 already paid this cost |
| AuthN | SSO (OIDC) for humans; hashed service keys for executors | Prototype keys are not production |
| AuthZ | RLS + application roles (owner, ratifier, viewer, executor, admin) | Fail closed |
| UI | React + Vite | Keep; restyle, do not rewrite |
| Jobs | Start with a single worker + outbox table; add Redis/Rabbit when a job can outlive a request | Avoid infra theatre in phase 1 |
| LLM | Provider plugin, default off, substring guard, tests force off | Proven |
| Graphs | Postgres tables, not Neo4j, until edge analytics needs it | Documented V8 decision, still right |
| Observability | Structured logs + audit table + traces of spec checks | The product *is* an audit trail |
| Hosting | Single-tenant first (one VPC / one schema-per-tenant or RLS-per-tenant), then pooled multi-tenant | STATUS already told the truth: not SaaS yet |

### 6.3 Suggested repo layout (new repo or `v9/` major branch)

Do not keep Scout, census, genome, and V9 scenario code as one ball of routers. Group by box, keep shared kernel thin.

```
wep/
  AGENTS.md
  ARCHITECTURE.md
  docs/
    CONTRACTS.md          # frozen schemas
    HONESTY.md
    STATUS.md
    VERDICT_ANCHORS.md
    INTENT_TBD.md
  kernel/                 # tenant, auth, audit, outbox, llm plugin
  boxes/
    representation/
    intent/
    discovery/            # includes Scout face: sessions, grid, elevations, ingest
    cutting/
    verification/
    verdict/
    economics/
    spec/
    evidence/
    simulator/
  ui/
  alembic/
  tests/
    contracts/            # schema + joint tests, run on every PR
    boxes/
    http_rls/
  samples/                # invoice-dispute 90-day wedge pack
```

Lift, don't copy-paste blindly: `verdict.py` gates, `economics.py` disciplines, `spec.py` checks, RLS pattern, GQS philosophy, substring LLM guard, honesty file discipline.

### 6.4 Data stores

| Store | Contents |
|---|---|
| Postgres | tenants, users, keys, object types, object-state cards, intents, candidates, work units, field provenance, variants, edges + weights, verification specs, verdict scores, scenarios, moderations, costed cases, rule-debt ledger, spec checks, evidence records, calibration series, audit log, outbox |
| Object store | uploaded traces, SOPs, packs; server-hashed |
| Secrets | SSO client, LLM keys, encryption keys — never in git, never in STATUS screenshots |

Every tenant table has `tenant_id` and an RLS policy. The app role is not the table owner. Maintenance uses a system session that tests prove cannot leak through request paths.

---

## 7. Phased build

Each phase has a user-visible artefact, a contract freeze, and a kill criterion. Do not start the next phase because the calendar moved.

### Phase −1 — See it before you build it (days 1–4)

**Artefact:** a static prototype plus fixture JSON that already is the 12-minute demo. No API required.

Ship:

- `ui/prototype/` of the four surfaces: Scout, Gap, Contract+scenarios, Portfolio.
- Fixtures: G-SCOUT (100% strength, persist denied, reason copy frozen), G-DOC (cleared, L1–L3), INT-007, founder≠SME on two units, 90-day trace summary, WU-114 moderation, costed case 95→61.8 shape.
- Information-architecture freeze: nav is Overview / Scout / Inventory / Gap / Scenarios / Spec. No eleventh link.
- Honesty copy freeze: banners, empty-state sentences, `inferred` chips, “engagement can stop here.”
- Click-through recording on fixtures. Founder sign-off that this recording is a demo they would give.

**Kill if:** the founder does not want to show that recording. Do not open Phase 0 code to “make it feel more real.” Fix the story first.

**Acceptance:** `docs/demo/PHASE1.md` can be narrated against the prototype alone. G-SCOUT empty L1 is designed, not accidental.

### Phase 0 — Foundation that will not rot (week 1)

**Artefact:** empty product that cannot lie about tenants or schema.

Ship:

- Repo skeleton, AGENTS.md, CONTRACTS.md, HONESTY.md, STATUS.md.
- Alembic from a clean baseline (do not replay V8's entire snowflake history; migrate *concepts*, not every Scout table).
- Tenant + RLS + `wep_app` role + HTTP RLS tests that fail closed.
- OIDC login *or* a real local identity provider in docker-compose. No open inventory routes.
- Executor service keys, hashed, shown once, rotatable.
- Audit log on every write of a contract object.
- File upload with server-side sha256.
- Outbox table.
- CI: pytest + contract tests + `alembic check` + lint. LLM forced off.
- Walkthrough test skeleton that fails until Phase 1 fixtures load on clean compose.

**Kill if:** RLS can be bypassed on any tenant table from the app role. CI green with skipped RLS tests.

**Acceptance tests:**

- Tenant B cannot read Tenant A's Work Units, intents, evidence, or keys.
- Missing key → 401 on every tenant route.
- Wrong key → 404 (no existence leak) or 401, chosen once and tested.
- Upload hash is computed, not trusted.
- `create_all` does not exist in the app.

### Phase 1 — Wedge: Scout engagement + inventory + gap (weeks 2–5)

**Artefact:** a client can be walked through Scout (founder → function leader → SME → files) and leave with a conformance gap report plus candidate inventory for one function over 90 days.

Ship:

- Function Pack v0 for the wedge function (object types, static question bank per track, RR stubs, parser hints). No adaptive interviewer.
- Scout sessions: three tracks, one grid, Genome Strength as session completeness only.
- Consent required to close a session; receipt id written onto every candidate the session emits.
- File ingest: CSV/XLSX structured + SOP/PDF unstructured with substring guard.
- Box 1 type registry + object-state cards (manual + CSV + one webhook stub).
- Box 2 stub: hand-authored **or founder-track-drafted** intent records, versioning, re-derivation outbox events.
- Box 3a upward: ingest trace events, emit observed / reconstructed candidates.
- Box 3a downward: declared candidates from intent + Scout sessions + documents.
- Dedup across sessions/files. Review queue for collisions.
- Reconciliation: discovered / declared / matched / undocumented / phantom / judgment zones / founder-vs-SME + coverage map, rendered inside Scout.
- Generate-from-session uses the same import path. Scout-only genomes remain below the observed-weighted bar.
- Box 3b minimum: contract editor, 18 attributes, field provenance, four lints (F1 split lives here), ratification by named owner.
- Sequence edges from dependencies; shared-object edges from same `object_type`; cycle reject.
- L1/L2/L3 playback so a human can ratify objects, not JSON.

**Kill if:** the gap report can be produced without provenance; undocumented work is dropped to prettify a chart; a Scout session writes `observed`; generate bypasses the quality gate; a session closes without consent.

**Acceptance:**

- Sample pack: 90 days of synthetic invoice-dispute traces + thinner SOP + one founder session + one SME session that disagree on at least two units + one time-motion CSV.
- Report shape: discovered N, declared M, matched, undocumented, phantom, judgment zones, founder-vs-SME rows.
- 100% Genome Strength session that is Scout-only fails the persist gate and the UI says why.
- A unit with an uncheckable desired condition cannot be ratified.
- Closing a session without `consent_receipt_id` is 400.
- `tests/test_demo_walkthrough.py` passes on a clean volume and a 12-minute recording exists in `docs/demo/`.
- A stranger can finish `docs/demo/PHASE1.md` without Slack.

This phase *is* the commercial wedge. Stop and sell it if needed. Width across boxes is not ambition. Depth on this path is.

### Phase 2 — Verification, VERDICT scenarios, honest economics (weeks 6–9)

**Artefact:** scenario portfolio — S1 / S2 / S3 + moderation log + costed case per unit.

Ship:

- [3c] verification spec per unit/variant; method pricing; independence flags; sampling; held-out set flag; demotion predicates.
- V-score derived from method cost + objectivity.
- [3d] versioned anchors document; Readiness / Restraint derivation; five gates; actor policy; S1/S2/S3 emission.
- Moderation endpoint: owner, reason, recorded; derived vs moderated gap visible.
- Promotion endpoint: human, one level, evidence thresholds, cannot exceed recommendation, cannot exceed a tripped gate.
- Demotion job: pass-rate lagging + recovery-slowdown leading (leading may be stubbed with a documented synthetic until [5] exists).
- [3e] four disciplines + residual-harm line + exposure line + rule-debt ledger + cascade pair.
- Honesty check rendered: gross hours vs disciplined hours.
- Spec API 1.0 bundle fetch + check (authority, evidence, condition, acceptance, gate unreachable).

**Kill if:** a UI control can raise S3 above a tripped gate, or V can be typed in contradiction to the verification method.

**Acceptance:**

- Same unit emits S1 ≤ S2 ≤ S3, all ≤ gate cap.
- Moderation to L3 on an L4-derived unit records owner + reason and does not rewrite derived_level.
- Economics on the sample pack reproduces the *shape* of 95 → 61.8 (include verify, exceptions, governance). Exact 61.8 is not a sacred number; the disciplines are.
- `POST /spec/check` deny is stored and the allowed=false path has a test that the reference executor harness stops.

### Phase 3 — Evidence runtime and earned autonomy (weeks 10–13)

**Artefact:** instances that produce independent evidence, and autonomy that moves.

Ship:

- Evidence intake API. Reject self-certified object condition when a system-of-record check is specified.
- Intervention logging, including “passed unchanged.”
- Calibration sample stream. `p*` remains disarmed until calibration clears the documented bar.
- Recovery-time series. Leading demotion trigger becomes real.
- Silent-promotion detector (intervention rate collapsing while level rises without a promotion event).
- Re-validation tasks on model-binding change.
- Rule-debt detector: declared authority not enforced at runtime.
- Reference executor harness (not a product): pulls spec, attempts illegal action, is denied, posts evidence.

**Kill if:** an executor can post a pass that only quotes its own log.

**Acceptance:**

- Pass requires object condition verified against the named store (or an explicit, recorded exception).
- Demotion fires without a human on lagging threshold.
- Promotion refuses without evidence + human.
- Partner-shaped executor that skips evidence intake is marked unearned on the scorecard.

### Phase 4 — Workforce simulator (weeks 14–18, only if phase 2 is sold)

**Artefact:** scenario matrix a finance lead can budget from.

Ship:

- Demand = Σ units volume × frequency, by variant and season.
- Capacity = actor classes sized on peak concurrency, not average hours.
- Cells: appetite (S1/S2/S3/moderated) × demand streams.
- Budget and time-to-capacity curves with sensitivity ranges.
- Governance-work forecast that grows with automation.
- Variance vs actuals → recalibration event into [3e].
- Capacity constraints return into [3d] (a unit scored automatable is not allocatable without exception-handling capacity).

**Kill if:** the simulator emits a single FTE number with no range and no residual-harm line.

### Phase 5 — Production hardening (runs beside 2–4)

Not a feature phase. A bar.

- SSO in the customer's IdP.
- Backup, PITR, encryption at rest, key rotation.
- PII scanner on every ingest; consent receipts actually written by interview / file flows; purge job that purges something real.
- Audit export for the customer's compliance team.
- SLOs on Spec check and evidence intake (these are the runtime joints).
- Load test the wedge tenant at 10× sample volume.
- Threat model: tenant leak, spec-token theft, evidence spoofing, gate bypass, model prompt injection into contract fields.
- On-call runbook. STATUS.md lists known holes.

Production-ready for V9 means: a paying tenant can complete phase 1+2 on their data, with phase 3 evidence intake available to their executor, isolated from every other tenant, with an audit trail a third party can read. It does not mean Box 2 is fully designed or Box 6 is live.

---

## 8. Work breakdown the agent can ticket

Each item is one PR-sized unit. Implement in order inside a phase. Every PR updates HONESTY.md if a row moves from specified to enforced.

### Phase −1

−1.1 Four-surface static prototype (Scout, Gap, Contract, Portfolio).  
−1.2 Fixture pack: G-SCOUT blocked + G-DOC cleared + INT-007 + two contradictions.  
−1.3 Honesty copy freeze (banners, empty states, inferred chips).  
−1.4 Fixture click-through recording + founder sign-off.  
−1.5 `docs/demo/PHASE1.md` written against the prototype.

### Phase 0

0.1 Repo skeleton + agent files + contract schemas as JSON Schema files.  
0.0 DEMO_CHARTER.md and EVAL.md / INVARIANTS.md stubs.  
0.2 Alembic baseline: tenants, users, roles, keys, audit, outbox.  
0.3 RLS policies + app role + HTTP isolation suite.  
0.4 File upload + server sha256.  
0.5 Identity: OIDC or dex-in-compose + session.  
0.6 CI workflow.

### Phase 1

1.1 Object type registry + state machines + object-state cards.  
1.2 Function Pack v0 for the wedge function (static banks, RR stubs, parser hints).  
1.3 Scout sessions: founder / function_leader / sme + Work Capture Grid + Genome Strength.  
1.4 Consent required to close; receipt written onto emitted candidates.  
1.5 File ingest: structured CSV/XLSX + unstructured SOP/PDF with substring guard.  
1.6 Intent stub CRUD + founder-track draft + version bump → outbox `rederive`.  
1.7 Trace ingest + observed/reconstructed candidate emitter (upward).  
1.8 Declared candidate emitter from intent + Scout + documents.  
1.9 Dedup + review queue.  
1.10 Conformance gap + coverage map + founder-vs-SME rows, rendered in Scout.  
1.11 Generate-from-session through the shared import path + observed-weighted gate.  
1.12 Work Unit contract + field provenance + four lints (F1 split).  
1.13 Ratification queue + named owner + partial / BO-level ratify.  
1.14 Work Graph: sequence + shared_object + cycle reject.  
1.15 L1/L2/L3 playback UI.  
1.16 Sample invoice-dispute pack + gap report export.

### Phase 2

2.1 Verification spec model + method pricing table.  
2.2 V-score derivation from spec.  
2.3 VERDICT anchors file + Readiness/Restraint function + golden tests.  
2.4 Gates 1–5 + most-restrictive-variant publish.  
2.5 S1/S2/S3 emission.  
2.6 Moderation events.  
2.7 Actor policy + `p*` disarmed-by-default.  
2.8 Promotion / demotion.  
2.9 Economics disciplines + residual harm + exposure + rule debt + cascade.  
2.10 Spec bundle 1.0 + check + deny audit.  
2.11 Scenario portfolio UI + pack download.

### Phase 3

3.1 Evidence intake + anti-self-certification.  
3.2 Intervention + calibration + recovery series.  
3.3 Silent-promotion detector.  
3.4 Model-binding re-validation events.  
3.5 Reference executor harness.  
3.6 Rule-debt detector (declared but unenforced).

### Phase 4

4.1 Demand engine from Work Graph.  
4.2 Concurrency capacity model.  
4.3 Scenario matrix + ranges.  
4.4 Variance / recalibration loop.  
4.5 Constraint feedback into allocation.

---

## 9. Quality, safety, and honesty bar

### 9.1 Tests that are not optional

| Suite | Locks |
|---|---|
| `tests/contracts/` | Schema snapshots of every joint in §4 |
| `tests/test_rls_http.py` | Tenant A invisible to B |
| `tests/test_verdict_anchors.py` | Golden scorecards → levels and gates |
| `tests/test_scenarios_cannot_lift_gates.py` | S3 ≤ gate cap |
| `tests/test_spec_deny_stops.py` | Harness does not proceed on deny |
| `tests/test_evidence_not_self_certified.py` | Object condition required |
| `tests/test_promotion_human_demotion_auto.py` | Directionality |
| `tests/test_llm_substring.py` | Paraphrase discarded |
| `tests/test_no_pii_or_org_hardcode.py` | Carry forward |
| `tests/test_honesty_gate_declared_not_observed.py` | Declared genomes cannot pose as observed |
| `tests/test_scout_provenance_declared.py` | Interview units never write `observed` |
| `tests/test_scout_consent_required.py` | Session close without receipt is 400 |
| `tests/test_scout_generate_uses_shared_import.py` | No second writer |
| `tests/test_genome_strength_is_not_gqs.py` | 100% strength can still fail the persist gate |
| `tests/test_unstructured_substring.py` | SOP/PDF extractor discards paraphrase |
| `tests/test_demo_walkthrough.py` | Clean-volume 12-minute path. G-SCOUT blocked, G-DOC ratified |
| `tests/test_two_genome_invariant.py` | Waiving Scout persist is a failed test |
| `tests/test_gate_unreachable_on_three_surfaces.py` | API + harness + UI |

CI green with skipped RLS tests is a failed CI. V8 taught this.

### 9.2 Definition of machine-readable

A Work Unit is machine-enforceable only when all 18 attributes are present, acceptance is checkable, evidence names an object condition or an independent artefact, and field provenance exists. Incomplete units may be shown to humans. They must not be issued a Spec token.

### 9.3 Gaming modes (always on)

1. Versioned acceptance criteria — quiet edits cannot raise pass rate.  
2. Stratified sampling — the easy variant cannot carry the hard one.  
3. Held-out grading set — the checker has not trained on the exam.  
4. Object-condition evidence — logs are not the object.  
5. Reclassification-rate publishing — dumping hard cases into “exception” is visible.

### 9.4 Threats worth designing for on day one

- Tenant isolation failure.  
- Spec token reuse across units or tenants.  
- Evidence spoofing (executor certifies itself).  
- Gate bypass by “just this once” UI.  
- Prompt injection that writes inferred text into an `observed` field.  
- Scout UI labelling declared capture as observed, or Genome Strength as gate pass.  
- Consent receipts that exist but never attach to units.  
- Rule debt: contract says CFO, runtime never asks.  
- Silent promotion.  
- Cost model that drops residual harm to close a deal.
- Walkthrough test absent while feature tests pass (AI-satisfaction trap).
- Second industry pack before Phase 1 is recorded.

### 9.5 Questions this system must keep answering

These are not a thought-leadership appendix. They are the eval and invariants program. `docs/EVAL.md` and `docs/INVARIANTS.md` exist to stay current.

**Eval (Karpathy bar).** If we cannot answer these with data, VERDICT is a questionnaire.

- What is the labelled set? How many units have an independent human level?
- What is inter-rater agreement on the seven properties? (Today: untested. Dual-score kappa remains caller-supplied until a real dual path exists.)
- Where is VERDICT wrong, in public, inside the repo?
- What is the eval for a *cut*, not just a score? Granularity lints are the start, not the end.
- What is the eval for the gap report? A held-out SOP + trace pack with known undocumented / phantom counts.
- Will we keep the Scout-only persist block when a customer hates the empty L1?
- What data from this week makes next week’s derivation better?

Minimum ship in Phase 2: a 40-unit labelled fixture (invoice-dispute), two raters on a 15-unit slice, published disagreements, VERDICT vs human table in `docs/EVAL.md`. Ambition in Phase 3: failure-by-band logging from the evidence runtime, so proposition J2.1 starts accumulating data instead of remaining a slogan.

**Systems (Dean bar).** If we cannot answer these with tests, “unreachable” is a caption.

- What remains invariant when the actor changes? Test: same Spec bundle, human then harness, same deny/allow.
- Where does correctness live if Postgres is down? Spec checks fail closed. No cached “last allow.”
- Tenant isolation: last failure, threat model, HTTP proof that cannot skip.
- Spec check idempotency and double-posted evidence.
- Why both graphs in Postgres — and the metric that would force a move.
- Unreachable on API + harness + UI, or it is documentation.
- Blast radius of a bad cut that already has a Spec token: revocation event, re-derivation, executor pull-next fails.
- Our own rule debt: count of HONESTY specified-not-enforced rows.

Minimum ship in Phase 0–1: isolation proof, fail-closed spec deny, idempotent evidence ingest stub, HONESTY count in STATUS. Ambition in Phase 3: token revocation and blast-radius test as a first-class job.

---

## 10. Operating rules for Grok / Claude / Cursor

Copy this section into `AGENTS.md`.

```
You are building the Work Engineering Platform V9.

1. Spec, do not execute. No job runner that performs business work.
2. Do not invent contract fields. If a field is missing, stop and name it.
3. Do not merge the Enterprise Graph with the Work Graph.
4. Do not let an LLM write observed provenance. Models emit inferred.
   Quoted text must be a literal substring of source or it is discarded.
5. VERDICT is deterministic and server-side. Do not ask a model for a level.
6. Appetite never relaxes a gate. If a UI wants that, refuse.
7. Promotion requires a human id. Demotion does not.
8. Tests never call a live model. Force LLM_PROVIDER=none in conftest.
9. Every tenant query goes through RLS-bound sessions. No table-owner role in request paths.
10. Update docs/HONESTY.md in the same PR when a specified rule becomes enforced.
11. Update docs/STATUS.md only with things a test proves.
12. Prefer lifting a V8 function (gates, spec checks, costing disciplines,
    substring guard, RLS pattern) over rewriting it from memory.
13. Box 2 internals are TO BE DESIGNED. Implement only the frozen output contract.
14. If you must assume (recovery multiple, V-score curve, concurrency model),
    label the assumption and add it to HONESTY.md.
15. Do not hardcode customer names, real PII, or a global spec key.
16. Scout is the face of Discovery, not a fork. No Scout-specific writer.
    Interview provenance is declared. Genome Strength is not GQS.
    Consent is required to close a session. Elevations may not invent units.
17. Demo charter wins over extra features. If it is not in the 12-minute
    walkthrough and not a joint the walkthrough cannot lie without, do not build it.
18. Two genomes: G-SCOUT persist-blocked, G-DOC persist-cleared. Never waive
    the gate to fill L1.
19. Do not start a second function pack until Phase 1 is recorded.
20. Wedge work must have a checkable object condition in a system of record.
21. A phase is not done without docs/demo recording + test_demo_walkthrough
    + a stranger-runnable PHASE1.md.
22. Every PR names the walkthrough minute it serves, or the invariant it locks.
```

PR template, required:

- Walkthrough minute served (or joint / invariant name)
- Joint(s) touched
- Schema version change? (yes → contract test updated)
- Honesty row moved? Specified-not-enforced count up or down?
- Gate still unliftable? G-SCOUT still blocked?
- Test that would have failed before this PR
- Does STATUS still match the walkthrough test?  

---

## 11. Open design and research (do not silently close)

| ID | Item | Status | Engineering implication |
|---|---|---|---|
| Box 2 | Intent schema internals, constitution inheritance, decomposition without losing whole-accountability | TO BE DESIGNED | Freeze output only. Founder-track may draft the frozen record. |
| Scout packs | Function Pack SDK | Specified, not built in V8 | Ship v0 for the wedge function only |
| Scout adaptive Q | AI follow-ups | Specified, not built | Not phase 1. Static bank. |
| Scout consent join | Receipts exist, not load-bearing | K9 | Required + written on candidates in phase 1 |
| O1 | Weighted Work Graph from traces | Specified, unbuilt | Phase 1 ships types; weights in phase 3 when traces are real |
| O2 | Recovery ≈ 2.5× | Working assumption | Label; replace with measured recovery-time series |
| G1 | Autonomy bounded by verification cost/objectivity, not capability | Central hypothesis | Product may use it; marketing may not call it proven |
| IRR | Seven-property inter-rater reliability | Untested | Dual-score kappa is caller-supplied until a real dual path exists |
| p* | Confidence-gated escalation | Established form, calibration-gated | Disarmed by default |
| New areas | Simulator new-work-area demand | Weakest estimate | Always flagged |
| Relational work | Dense relational work resists executor swap | Boundary condition | Do not allocate L5 on relationship-dense units without a human hold |

Twelve V8 research propositions still stand. The platform should log the data they need (failure by VERDICT band, demotion time-to-contain, provenance adoption, cascade gaps) rather than claiming them settled.

---

## 12. Production-ready checklist

A system is production-ready for the V9 offering when all of the following are true:

1. One real tenant, real IdP, no demo-bootstrap on that cluster.  
2. RLS HTTP suite green against that database.  
3. Intent stub + discovery + cutting + ratification usable by a non-founder.  
4. Conformance gap report exportable and provenance-complete.  
5. Every ratified unit has a verification spec and a derived S1/S2/S3 strip.  
6. Moderations recorded. Gates unliftable.  
7. Costed cases include verify, exceptions, governance, residual harm, exposure.  
8. Spec bundle 1.0 issued only for machine-readable units.  
9. Evidence intake rejects self-certification where the spec forbids it.  
10. Audit log can reconstruct who changed a contract field and why.  
11. File hashes are server-computed.  
12. Consent and purge run on real interview/file paths if those paths exist; otherwise the paths do not claim DPDP completeness.  
13. STATUS.md and HONESTY.md match the running tests.  
14. On-call can rotate a spec key and revoke a compromised executor.  
15. The engagement can stop at the scenario portfolio without the simulator.
16. Two-genome demo recorded on a clean volume. G-SCOUT blocked, G-DOC ratified.
17. `docs/EVAL.md` has a labelled slice and at least one published VERDICT disagreement.
18. `docs/INVARIANTS.md` names isolation, idempotency, unreachability-on-three-surfaces, blast radius.
19. HONESTY specified-not-enforced count is in STATUS and not rising in silence.
20. Function Pack `invoice-dispute.v1` is the only pack in the paying-tenant demo.

If item 5 is missing, you have a census tool. If item 8 is missing, you have documentation. If item 9 is missing, autonomy is unearned. If item 13 is missing, you have V8’s original failure mode. If item 16 is missing, you have AI-satisfaction without a demo.

---

## 13. First engagement path (what “world class” looks like in the room)

Day −4 to 0 — Static prototype signed off. Fixtures include the blocked Scout generate. No routers yet if the recording is not something you would show.

Day 0 — Tenant provisioned. Function Pack v0 loaded. Intent INT-007 authored by the owner or drafted in the founder-track session.

Days 1–15 — Scout: founder why, function-leader declared map, SME lived practice, files in, traces in. Discovery emits declared and observed candidates. Coverage map and founder-vs-SME rows show in Scout. Judgment zones are visible even if Genome Strength is 100%.

Days 16–45 — Cutting, lints, F1 split, ratification by named owners. Sequence + shared-object graph visible. Undocumented work is the meeting. Scout-only units that failed the persist gate stay drafts until document- or trace-backed.

Days 46–70 — Verification specs. VERDICT scenarios. CFO moderates two units for audit season; the log shows it. Economics moves the first flattering number down.

Day 90 — Scenario portfolio delivered. No agents required to have been valuable. Simulator scoped only if they want to budget the next year on the same record.

That is the product. Everything else is a component you can replace.

---

## 14. Mapping V9 boxes to first code modules

| Box | Package | First public API |
|---|---|---|
| 1 | `boxes/representation` | `PUT /objects/{id}/state`, `GET /types` |
| 2 | `boxes/intent` | `PUT /intents/{id}`, `POST /intents/{id}/versions` |
| 3a + Scout | `boxes/discovery` | `POST /scout/sessions`, `POST /files`, `POST /traces`, `POST /gaps/scan`, `GET /candidates` |
| 3b | `boxes/cutting` | `POST /work-units`, `POST /work-units/{code}/ratify`, `GET /graph` |
| 3c | `boxes/verification` | `PUT /work-units/{code}/verification-spec` |
| 3d | `boxes/verdict` | `POST /work-units/{code}/derive`, `GET /scenarios`, `POST /scenarios/{id}/moderate` |
| 3e | `boxes/economics` | `GET /work-units/{code}/costed-case?scenario=S2` |
| Spec | `boxes/spec` | `GET /spec/work-units/{code}`, `POST /spec/check` |
| 5 | `boxes/evidence` | `POST /evidence`, `GET /calibration` |
| 6 | `boxes/simulator` | `GET /simulator/cells` |
| Kernel | `kernel` | `/auth`, `/keys`, `/audit`, `/files` |

OpenAPI is generated from these routers. Contract tests compare OpenAPI + JSON Schema to `docs/CONTRACTS.md`. Drift is a failed build.

---

*End of plan. Implement joints first. Replace boxes later.*
