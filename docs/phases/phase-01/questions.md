Phase 1 answers

1. A design pattern is a common solution or idea that can help solve a problem in software design. It is not ready-made code that can just be copied into every project. It should only be used when it actually fits the problem.

2. The three GoF pattern families are creational, structural and behavioural. Creational patterns are about how objects are created. Structural patterns are about how different parts of a program are connected. Behavioural patterns are about how objects communicate and share responsibilities. Factory Method is a creational pattern and Strategy is a behavioural pattern.

3. A pattern should be skipped when the feature is simple and probably will not need different versions later. Adding a pattern too early can make the code harder to understand because it creates extra classes and files without giving a real benefit.

4. Phase 1 has very little greenhouse logic because its purpose is to make sure the basic parts of the project work together. It proves that the database starts, migrations work, the backend can connect to the database and the frontend can call the backend. Empty classes and folders would not prove that the whole application can actually run.

5. The domain layer will contain greenhouse business rules and objects. The application layer will contain the use cases of the program. The infrastructure layer handles technical things such as settings and database connections. The interfaces/api layer contains the FastAPI routes and HTTP responses. The domain layer should not contain FastAPI routes, database connection code or HTTP response models.

6. GET /health returns the status of the API and database. When everything works, it returns status ok and db ok. If the database connection fails, it returns status degraded and db fail. The database is checked because the backend is not fully useful if the process is running but cannot reach its data. Scalar is used at /scalar as the API documentation page. Swagger at /docs is disabled because Scalar is the documentation tool selected for this course.

7. Alembic is added before any business tables so that database changes are managed correctly from the beginning. The empty baseline proves that the migration system can connect to PostgreSQL and keep track of database versions. If tables were created manually first, different developers could have different database structures and later migrations might fail because they would not know what had already been created.

8. Dependencies should point toward the inner layers. The domain should not depend on the other layers. The application layer can use the domain, while the API and infrastructure layers can use the inner layers. The domain should not import FastAPI, SQLAlchemy or HTTP Pydantic models because business rules should still work without a web framework or database library.

9. First I would check that PostgreSQL is running and healthy. Then I would open /health and check that it returns the expected status and db fields. After that I would check the frontend API URL, the browser request and the CORS settings. This is a Phase 1 problem because it is about getting the three parts of the application connected, not about design patterns.

10. After Phase 1, the project still does not have devices, sensors, greenhouse data, controls, automation, events or the later design patterns. Future phases can add these features to the existing layers and dashboard sections. The basic database, backend, frontend and migration setup should not need to be rebuilt.
