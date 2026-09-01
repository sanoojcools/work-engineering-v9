# Work Engineering Platform V9

Spec-first. Two graphs. Scout is the face of Discovery, not a second product.

**Governing line:** a box is replaceable; a contract is not. The 12-minute walkthrough is the spec.

## Live demo today

Enterprise → HR → HR operations → **Offer Desk** (Rashmi’s pre-onboarding desk).

```powershell
cd "C:\Users\dell\Documents\Work Engg WEP V9\wep-v9"
python -m http.server 8765
```

Open http://127.0.0.1:8765/ui/prototype/ and hard-refresh.

Walk: Home → Enterprise → HR → HR operations → Offer Desk → three interviews → Playback → Spreadsheet → Save talk-only (must stay empty) → How we cut it → Gap → Document check → Hours (95 stated / 61.8 defended) → Helper rules.

Script: `docs/demo/OFFER_DESK_WALK.md`

Talk-only is declared. The spreadsheet is still declared. Dual employment is a stop. A helper may not release an offer.

## Also in this repo

| Path | What it is |
|---|---|
| `ui/prototype/` | Clickable Phase −1 demo |
| `samples/demo/offer-desk/` | Source card for Rashmi’s workbook |
| `AGENTS.md` | Rules for coding agents |
| `docs/HONESTY.md` | Enforced vs specified-not-enforced |

Phase 0+ (Postgres, RLS, FastAPI) is specified, not running.
