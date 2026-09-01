# AGENTS.md — Work Engineering Platform V9

You are building the Work Engineering Platform V9.

Governing line: a box is replaceable; a contract is not. Design the joints first.
Secondary line: the 12-minute walkthrough is the spec. Code makes it true.

Read before writing code:

1. `WEP_V9_PRODUCT_ENGINEERING_PLAN.md` — full build spec
2. `DEMO_CHARTER.md` — founder-satisfaction definition
3. `docs/CONTRACTS.md` — frozen JSON schemas
4. `docs/HONESTY.md` — enforced vs specified-not-enforced (our rule debt)
5. `docs/STATUS.md` — only what tests prove
6. `docs/EVAL.md` / `docs/INVARIANTS.md` — Karpathy / Dean bars

Prior implementation to lift from, not copy blindly: `github.com/sanoojcools/work-engineering` (including Scout / Part K).
Scout is the client-facing surface of Discovery. It is not a second product.

V8 failure mode to refuse: thousands of correct lines, no clean demo. If your change does not serve a walkthrough minute or lock an invariant, stop.

## Hard rules

1. Spec, do not execute. No job runner that performs business work.
2. Do not invent contract fields. If a field is missing, stop and name it.
3. Do not merge the Enterprise Graph with the Work Graph.
4. Do not let an LLM write observed provenance. Models emit inferred. Quoted text must be a literal substring of source or it is discarded.
5. VERDICT is deterministic and server-side. Do not ask a model for a level.
6. Appetite never relaxes a gate. If a UI wants that, refuse.
7. Promotion requires a human id. Demotion does not.
8. Tests never call a live model. Force `LLM_PROVIDER=none` in conftest.
9. Every tenant query goes through RLS-bound sessions. No table-owner role in request paths.
10. Update `docs/HONESTY.md` in the same PR when a specified rule becomes enforced. STATUS must show specified-not-enforced count.
11. Update `docs/STATUS.md` only with things a walkthrough or contract test proves.
12. Prefer lifting a V8 function (gates, spec checks, costing disciplines, substring guard, RLS pattern) over rewriting it from memory.
13. Box 2 internals are TO BE DESIGNED. Implement only the frozen output contract.
14. If you must assume (recovery multiple, V-score curve, concurrency model), label the assumption and add it to HONESTY.md.
15. Do not hardcode customer names, real PII, or a global spec key.
16. Scout is the face of Discovery, not a fork. No Scout-specific writer. Interview provenance is always `declared`. Genome Strength is session completeness, not gate clearance. A session cannot close without a consent receipt written onto the candidates it emits. Elevations may not invent Work Units. Founder-vs-SME disagreement is a gap signal, not a merge.
17. Demo charter wins over extra features. If it is not in the 12-minute walkthrough and not a joint the walkthrough cannot lie without, do not build it.
18. Two genomes: G-SCOUT persist-blocked, G-DOC persist-cleared. Never waive the gate to fill L1.
19. Do not start a second function pack until Phase 1 is recorded.
20. Wedge work must have a checkable object condition in a system of record.
21. A phase is not done without `docs/demo` recording + `test_demo_walkthrough` + stranger-runnable `PHASE1.md`.
22. Every PR names the walkthrough minute it serves, or the invariant it locks.
23. Phase −1 exists. Do not generate routers if the fixture click-through is not a demo the founder would give.
24. Unreachable means API + harness + UI.

## PR template

- Walkthrough minute served (or joint / invariant)
- Joint(s) touched
- Schema version change? (yes → contract test updated)
- Honesty row moved? Specified-not-enforced count up or down?
- Gate still unliftable? G-SCOUT still blocked?
- Test that would have failed before this PR
- Does STATUS still match the walkthrough test?
