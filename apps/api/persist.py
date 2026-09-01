from typing import Literal

from pydantic import BaseModel, Field


class PersistRequest(BaseModel):
    source: Literal["talk-only", "sheet"]
    function: str = Field(default="hr.operations.offer_desk")


def persist(req: PersistRequest) -> tuple[dict, int]:
    if req.source == "talk-only":
        return (
            {
                "accepted": False,
                "saved_count": 0,
                "genome": "G-SCOUT",
                "function": req.function,
                "reasons": [
                    "interviews_only",
                    "no_system_trace",
                    "completeness_is_not_clearance",
                ],
            },
            403,
        )
    return (
        {
            "accepted": False,
            "status": "declared_inventory",
            "saved_count": 7,
            "genome": "G-SHEET",
            "function": req.function,
            "provenance": "declared",
            "reasons": [
                "workbook_is_interview_writeup",
                "zero_zwayam_events",
            ],
        },
        200,
    )
