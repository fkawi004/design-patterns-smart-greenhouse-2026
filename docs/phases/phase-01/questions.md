# Phase 1 — Skeleton answers

## A. Pattern

### 1. What is a design pattern, and what is it not?

A design pattern is a reusable way of thinking about a recurring software-design problem. It describes roles, relationships, and trade-offs that can be adapted to a particular application. It is not finished code, a library, or a rule that must be used whenever its name appears in a course plan.

### 2. GoF pattern families

- **Creational patterns** address how objects are created while keeping callers independent of concrete construction details. Factory Method belongs here.
- **Structural patterns** address how classes and objects are combined into larger structures without making those structures rigid.
- **Behavioural patterns** address how objects divide responsibilities and communicate while carrying out behaviour. Strategy belongs here.

### 3. When should a pattern be skipped?

I should skip a pattern when there is no recurring design pressure for it: for example, when a feature is small, stable, and has only one straightforward implementation. Applying a pattern too early creates extra abstractions, files, and indirection whose cost is real while the predicted flexibility may never be needed. It can also make later changes harder because the code is shaped around a guessed requirement.

## B. This phase of the application

### 4. Why ship an almost empty vertical slice?

The slice proves that the actual boundaries connect end to end: PostgreSQL starts, Alembic reaches it, FastAPI checks it, CORS lets the React client call the API, and the UI renders the result. Empty classes would only prove that names and folders exist. “Empty but running” exposes configuration, dependency, networking, and startup mistakes before business logic hides them.

### 5. Backend layers

- `domain` will contain greenhouse business concepts and rules, with no framework dependencies.
- `application` will coordinate use cases and work through domain-facing abstractions.
- `infrastructure` owns technical adapters such as settings, the SQLAlchemy engine, database sessions, and persistence implementations.
- `interfaces/api` translates HTTP requests and responses and defines FastAPI routes.

The domain must not contain FastAPI routes, SQLAlchemy engine/session setup, environment-variable parsing, or HTTP response schemas. In this phase it intentionally contains no entities at all.

### 6. Health endpoint and API documentation

`GET /health` returns `{ "status": "ok", "db": "ok" }` when the API can execute `SELECT 1`; if that check fails it returns `status: "degraded"` and `db: "fail"`. Checking only the process could report a healthy service that cannot perform database-backed work. Scalar is the course-standard human-readable view of the generated OpenAPI contract at `/scalar`; `/docs` is disabled so there is one intentional documentation UI rather than both Scalar and Swagger.

### 7. Why start with an empty Alembic baseline?

The baseline proves that every environment can reach the same database and advance schema state in a repeatable, versioned way before product tables exist. If tables were created manually first, their history would not be reproducible: developers and deployments could have different shapes, migrations might collide with existing objects, and nobody could reliably rebuild or roll forward a clean database.

## C. Compare, contrast, and scenarios

### 8. Dependency direction

Dependencies point inward. `domain` depends on ordinary Python only; `application` may depend on domain concepts; infrastructure and API adapters may depend on the inner layers and on their own frameworks; the composition root wires the adapters together. Domain code must not import FastAPI, SQLAlchemy, or HTTP Pydantic schemas because business rules should remain usable and testable without a web server, database library, or transport format.

### 9. Diagnosing a missing healthy badge

First I would verify the stack from the bottom up: the PostgreSQL container is healthy, `/health` returns the exact expected JSON, the browser is calling the correct API base URL, and the backend allows the Vite origin through CORS. I would then inspect the browser request and frontend parsing. These are Phase 1 integration concerns because they test whether the three tiers communicate at all; no design pattern can repair a stopped service, wrong URL, blocked cross-origin request, or mismatched contract.

### 10. What remains after Phase 1?

The skeleton has no greenhouse business entities, product tables, sensor endpoints, device creation, control behaviour, automation rules, events, or the later course patterns. Later phases add those pieces inside the existing seams: migrations extend PostgreSQL, domain and application packages gain rules and use cases, infrastructure implements persistence, API routes expose them, and the stable dashboard sections are filled in. The startup, configuration, migration, documentation, and client foundations do not need to be rewritten.

