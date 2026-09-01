# API slice — persist gate

```
pip install -r requirements.txt
python -m pytest tests/test_persist_gate.py -q
uvicorn apps.api.main:app --reload --port 8000
```

`POST /v1/persist` `{ "source": "talk-only" }` must stay 403.
Sheet path is declared inventory, not ratification.
