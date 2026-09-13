from fastapi.testclient import TestClient

from src.main import app


def test_health_returns_contract() -> None:
    response = TestClient(app).get("/health")

    assert response.status_code == 200
    assert response.json()["status"] in {"ok", "degraded"}
    assert response.json()["db"] in {"ok", "fail"}


def test_swagger_is_disabled_and_scalar_is_available() -> None:
    client = TestClient(app)

    assert client.get("/docs").status_code == 404
    assert client.get("/scalar").status_code == 200

