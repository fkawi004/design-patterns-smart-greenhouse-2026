# Smart Greenhouse — Design Patterns 2026

A runnable three-tier course project with a FastAPI backend, PostgreSQL migrations, and a React + TypeScript dashboard shell.

## Prerequisites

- Python 3.11 or newer
- Node.js 20 or newer and npm
- Docker Desktop with Docker Compose
- Git

## First-time setup

From the repository root:

```powershell
Copy-Item .env.example .env
docker compose up -d postgres

cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -e ".[dev]"
alembic upgrade head

cd ..\frontend
npm install
```

The baseline migration creates only Alembic's version table. Phase 1 intentionally has no business tables.

## Daily start

Use three terminals from the repository root:

```powershell
# Terminal 1: database
docker compose up -d postgres

# Terminal 2: API
cd backend
.\.venv\Scripts\Activate.ps1
uvicorn src.main:app --reload --host 0.0.0.0 --port 8000

# Terminal 3: UI
cd frontend
npm run dev
```

Apply any new database revisions from `backend` with `alembic upgrade head`.

## Development URLs

- Dashboard: http://localhost:5173/dashboard
- API discovery: http://localhost:8000/
- Health: http://localhost:8000/health
- Scalar API reference: http://localhost:8000/scalar
- OpenAPI JSON: http://localhost:8000/openapi.json

Swagger at `/docs` and ReDoc at `/redoc` are intentionally disabled.

## Checks

```powershell
cd backend
ruff check .
pytest
alembic current

cd ..\frontend
npm run build
```

See [the phase order](docs/phases/README.md) and [Phase 1 answers](docs/phases/phase-01/questions.md).

