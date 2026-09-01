# Cursor — tonight only

Repo: https://github.com/sanoojcools/work-engineering-v9  
Branch: `feat/persist-gate` from `main`.

## Contract

```
POST /v1/persist
{
  "source": "talk-only" | "sheet",
  "function": "hr.operations.offer_desk"
}

talk-only → HTTP 403
{
  "accepted": false,
  "saved_count": 0,
  "genome": "G-SCOUT",
  "reasons": [
    "interviews_only",
    "no_system_trace",
    "completeness_is_not_clearance"
  ]
}

sheet → HTTP 200
{
  "accepted": false,
  "status": "declared_inventory",
  "saved_count": 7,
  "genome": "G-SHEET",
  "provenance": "declared",
  "reasons": [
    "workbook_is_interview_writeup",
    "zero_zwayam_events"
  ]
}
```

`accepted: false` on the sheet path is deliberate. We store declared candidates. We do not ratify. Do not change that to true.

## Implement

- `apps/api/main.py` — FastAPI, `/health`, `/v1/persist`
- `apps/api/persist.py` — the if/else above. No LLM.
- `tests/test_persist_gate.py` — 403 / 200 / saved_count 0 on talk-only
- `requirements.txt` — add `fastapi`, `uvicorn`, `httpx`

Run:

```
pip install -r requirements.txt
python -m pytest tests/test_persist_gate.py -q
uvicorn apps.api.main:app --reload --port 8000
```

## Refuse

- Postgres
- merging talk-only into L1
- generating Zwayam traces
- Talent acquisition screens
- a job runner
- renaming G-SCOUT persist to allowed

## PR body (required)

- Walkthrough minute served: Save talk-only
- Gate still unliftable? yes
- Test that would have failed: persist talk-only == 200
