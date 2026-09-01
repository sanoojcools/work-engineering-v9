"""Walkthrough presence test. Phase −1: the prototype and charter exist.
Live compose coverage lands in Phase 1 backend."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_prototype_surfaces_exist():
    html = (ROOT / "ui" / "prototype" / "index.html").read_text()
    js = (ROOT / "ui" / "prototype" / "app.js").read_text()
    for token in ("#scout", "#gap", "#contract", "#portfolio", "#blocked"):
        assert token in html or token in js
    assert "Will not clear the observed-weighted persist gate" in js
    assert "61.8" in js
    assert "denied" in js.lower()


def test_charter_and_stranger_script_exist():
    assert (ROOT / "DEMO_CHARTER.md").exists()
    script = (ROOT / "docs" / "demo" / "PHASE1.md").read_text()
    assert "G-SCOUT" in script
    assert "G-DOC" in script
    assert "12" in (ROOT / "DEMO_CHARTER.md").read_text() or "minute" in script.lower()


def test_agents_forbids_waiving_gate():
    text = (ROOT / "AGENTS.md").read_text()
    assert "G-SCOUT" in text
    assert "do not build" in text.lower() or "walkthrough" in text.lower()
