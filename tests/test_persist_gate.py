from apps.api.persist import PersistRequest, persist


def test_talk_only_is_forbidden_and_empty():
    body, status = persist(PersistRequest(source="talk-only"))
    assert status == 403
    assert body["accepted"] is False
    assert body["saved_count"] == 0
    assert body["genome"] == "G-SCOUT"
    assert "completeness_is_not_clearance" in body["reasons"]


def test_sheet_is_declared_not_ratified():
    body, status = persist(PersistRequest(source="sheet"))
    assert status == 200
    assert body["accepted"] is False
    assert body["provenance"] == "declared"
    assert body["genome"] == "G-SHEET"
    assert body["saved_count"] == 7
    assert "zero_zwayam_events" in body["reasons"]


def test_waiving_talk_only_must_never_pass():
    body, status = persist(PersistRequest(source="talk-only"))
    assert status != 200
    assert body.get("saved_count") == 0
