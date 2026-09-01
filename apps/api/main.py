"""Phase 0 slice: persist gate only. No runner. No LLM."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from apps.api.persist import PersistRequest, persist

app = FastAPI(title="WEP V9", version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"ok": True, "slice": "persist-gate"}


@app.post("/v1/persist")
def persist_endpoint(req: PersistRequest):
    body, status = persist(req)
    return JSONResponse(body, status_code=status)
