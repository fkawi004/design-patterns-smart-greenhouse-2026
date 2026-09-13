import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="grid items-center gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">Smart growing starts here</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          A healthy foundation for a smarter greenhouse.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Phase 1 connects the dashboard, API, migration tooling, and PostgreSQL so future phases can focus on greenhouse behaviour.
        </p>
        <Link
          to="/dashboard"
          className="mt-8 inline-flex rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
        >
          Open dashboard
        </Link>
      </div>
      <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-8">
        <p className="text-sm font-medium text-emerald-300">Connected foundation</p>
        <dl className="mt-6 space-y-5">
          {[
            ["Frontend", "React + TypeScript + Tailwind"],
            ["API", "FastAPI + Scalar"],
            ["Data", "PostgreSQL + Alembic"],
          ].map(([term, detail]) => (
            <div key={term} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
              <dt className="text-xs uppercase tracking-wider text-slate-500">{term}</dt>
              <dd className="mt-1 text-slate-200">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

