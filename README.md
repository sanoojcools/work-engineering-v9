# Work Engineering Platform V9

Production build of the Work Engineering Platform. Spec-first. Two graphs. Scout is the face of Discovery, not a second product.

**Governing line:** a box is replaceable; a contract is not. The 12-minute walkthrough is the spec.

## What this repo is today

Phase **−1 is real**. You can open the prototype and walk the demo on fixtures. No API required.

| Path | What it is |
|---|---|
| `ui/prototype/` | Four surfaces: Scout, Gap, Contract, Portfolio |
| `samples/demo/northwind-ar/` | Two-genome fixture pack |
| `DEMO_CHARTER.md` | 12-minute script and definition of done |
| `docs/demo/PHASE1.md` | Stranger-runnable walkthrough |
| `schemas/` | Frozen JSON Schema for joints |
| `docs/HONESTY.md` | Enforced vs specified-not-enforced |
| `docs/STATUS.md` | Only what is true |
| `AGENTS.md` | Rules for Grok / Claude / Cursor |

Phase 0+ (Postgres, RLS, FastAPI) is specified, not running.

## Run the prototype

```bash
cd ui/prototype
python3 -m http.server 8765
# open http://127.0.0.1:8765
```

The page loads fixtures from `samples/demo/northwind-ar/` when served from the repo root:

```bash
python3 -m http.server 8765 --directory /path/to/wep-v9
# open http://127.0.0.1:8765/ui/prototype/
```

Or open `ui/prototype/index.html` — fixtures are also inlined as a fallback.

## Two-genome invariant

- **G-SCOUT** — Genome Strength 100%. Persist **denied**. Empty L1 is correct.
- **G-DOC** — document + 90-day traces. Persist **accepted**. Ratifiable.

If a future change lets G-SCOUT persist so L1 looks full, the demo has failed.

## Tests that already run

```bash
cd wep-v9
python3 -m pytest tests -q
```

These assert fixture honesty (two genomes, S1≤S2≤S3, costing 95→61.8 shape, no observed provenance on Scout units). They do not start a server.
