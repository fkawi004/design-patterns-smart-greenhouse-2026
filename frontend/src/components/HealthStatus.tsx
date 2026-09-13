import { useEffect, useState } from "react";
import { fetchHealth, type HealthResponse } from "../services/api";

type State =
  | { kind: "loading" }
  | { kind: "ready"; health: HealthResponse }
  | { kind: "error" };

export default function HealthStatus() {
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    const controller = new AbortController();
    fetchHealth(controller.signal)
      .then((health) => setState({ kind: "ready", health }))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setState({ kind: "error" });
      });
    return () => controller.abort();
  }, []);

  const healthy = state.kind === "ready" && state.health.status === "ok" && state.health.db === "ok";
  const label =
    state.kind === "loading" ? "Checking system" : healthy ? "API + DB healthy" : "System degraded";

  return (
    <div
      aria-live="polite"
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium ${
        healthy
          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
          : "border-amber-400/30 bg-amber-400/10 text-amber-200"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${healthy ? "bg-emerald-400" : "bg-amber-400"}`} />
      {label}
    </div>
  );
}

