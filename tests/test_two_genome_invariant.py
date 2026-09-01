"""Phase −1 honesty: fixtures must encode the two-genome invariant."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FIX = ROOT / "samples" / "demo" / "northwind-ar"


def load(name: str):
    return json.loads((FIX / name).read_text())


def test_g_scout_blocked_at_full_strength():
    g = load("genome.G-SCOUT.json")
    assert g["genome_strength"] == 1.0
    assert g["quality_gate"]["accepted"] is False
    assert g["gqs"]["score"] < 60
    assert g["inventory"]["L1"] == []
    assert all("declared" in r.lower() or "observed" in r.lower() or "gqs" in r.lower() or "strength" in r.lower()
               for r in g["quality_gate"]["reasons"])


def test_g_doc_accepted():
    g = load("genome.G-DOC.json")
    assert g["quality_gate"]["accepted"] is True
    assert g["gqs"]["score"] >= 60
    assert "WU-114" in g["inventory"]["L3_ratified"]


def test_scout_sessions_are_declared_and_consented():
    for name in ("session.founder.json", "session.sme.json"):
        s = load(name)
        assert s["provenance"] == "declared"
        assert s["consent_receipt_id"]
        assert s["status"] == "closed"


def test_sme_has_founder_contradictions():
    s = load("session.sme.json")
    assert "SES-018" in s["contradictions_with"]
    flags = [u for u in s["units_declared"] if u.get("contradicts_founder")]
    assert len(flags) == 2


def test_scenario_ordering_and_moderation():
    sc = load("wu-114.scenarios.json")
    order = {"L1": 1, "L2": 2, "L3": 3, "L4": 4, "L5": 5}
    s1, s2, s3, gate = sc["scenarios"]["S1_floor"], sc["scenarios"]["S2_derived"], sc["scenarios"]["S3_ceiling"], sc["gate"]
    assert order[s1] <= order[s2] <= order[s3] <= order[gate]
    assert sc["moderation"]["recorded"] is True
    assert sc["moderation"]["derived_unchanged"] is True
    assert sc["moderation"]["appetite_lifted_gate"] is False
    assert sc["derived_level"] == "L4"
    assert sc["moderation"]["held_at"] == "L3"


def test_costed_honesty_shape():
    c = load("wu-114.costed.json")
    assert c["gross_saving_hours"] == 95
    assert c["disciplined_saving_hours"] == 61.8
    assert c["disciplined_saving_hours"] < c["gross_saving_hours"]
    assert c["fte_is_not_payroll"] is True
    assert c["engagement_may_stop_here"] is True
    hours = c["hours"]
    assert hours["review"] > 0 and hours["governance"] > 0


def test_gap_counts_lock():
    g = load("gap.expected.json")
    assert g["discovered"] == 41
    assert g["declared"] == 28
    assert g["matched"] == 24
    assert g["undocumented"] == 9
    assert g["founder_vs_sme"] == 2
    assert g["matched"] <= min(g["discovered"], g["declared"])


def test_intent_is_declared_not_observed():
    i = load("intent.INT-007.json")
    assert i["provenance"] == "declared"
    assert i["intent_id"] == "INT-007"


def test_no_observed_provenance_on_scout_only_genome_units():
    # G-SCOUT has no persisted units. Sessions must not claim observed.
    for name in ("session.founder.json", "session.sme.json"):
        s = load(name)
        assert s.get("provenance") != "observed"
