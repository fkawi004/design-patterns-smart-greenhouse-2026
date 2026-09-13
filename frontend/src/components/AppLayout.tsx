import { NavLink, Outlet } from "react-router-dom";
import HealthStatus from "./HealthStatus";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">Control center</p>
            <h1 className="mt-1 text-xl font-semibold">Smart Greenhouse</h1>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <nav aria-label="Primary navigation" className="flex items-center gap-1">
              <NavLink to="/" className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white">
                Home
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm ${
                    isActive ? "bg-emerald-400/10 text-emerald-300" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </nav>
            <HealthStatus />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}

