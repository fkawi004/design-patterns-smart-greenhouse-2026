from typing import Literal

from fastapi import APIRouter
from pydantic import BaseModel

from src.infrastructure.db import database_is_available

router = APIRouter(tags=["system"])


class HealthResponse(BaseModel):
    status: Literal["ok", "degraded"]
    db: Literal["ok", "fail"]


@router.get("/health", response_model=HealthResponse)
def health() -> HealthResponse:
    database_ok = database_is_available()
    return HealthResponse(
        status="ok" if database_ok else "degraded",
        db="ok" if database_ok else "fail",
    )

