const rows = [
  {
    aspect: "Isolation",
    daytona: "Shared kernel (containers)",
    e2b: "Dedicated kernel (microVM)",
    sprites: "Dedicated kernel (microVM)",
    winner: "tie-e2b-sprites",
  },
  {
    aspect: "Persistence",
    daytona: "Stateful workspaces, unlimited",
    e2b: "Ephemeral; pause/resume in beta",
    sprites: "Indefinite FS, hibernation + checkpoints",
    winner: "sprites",
  },
  {
    aspect: "Cold Start",
    daytona: "~90 ms",
    e2b: "~150 ms",
    sprites: "Instant wake (~ms from sleep)",
    winner: "sprites",
  },
  {
    aspect: "Max Runtime",
    daytona: "Unlimited",
    e2b: "24h (Pro plan)",
    sprites: "Unlimited (per-second billing)",
    winner: "tie-daytona-sprites",
  },
  {
    aspect: "Primary Interface",
    daytona: "SDK (TS/JS+)",
    e2b: "SDK (Python / TS)",
    sprites: "CLI / API",
    winner: null,
  },
  {
    aspect: "GPU Support",
    daytona: "Yes (NVIDIA)",
    e2b: "No",
    sprites: "No (CPU only)",
    winner: "daytona",
  },
  {
    aspect: "Intro Pricing",
    daytona: "$200 free credits",
    e2b: "$100 free credits",
    sprites: "Per-second, no charge while asleep",
    winner: null,
  },
  {
    aspect: "Hibernation",
    daytona: "No",
    e2b: "No",
    sprites: "Auto-sleep after 30s idle, ~300ms checkpoint",
    winner: "sprites",
  },
];

function WinnerDot({ winner, col }: { winner: string | null; col: string }) {
  if (!winner) return null;
  if (winner === col || winner.includes(col))
    return (
      <span className="ml-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400" title="Advantage" />
    );
  return null;
}

export function ComparisonTable() {
  return (
    <section id="comparison" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-muted">
        Head to Head
      </h2>
      <p className="mb-12 text-center text-3xl font-bold">Feature Comparison</p>

      <div className="overflow-x-auto rounded-2xl border border-card-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-card-border bg-card text-left">
              <th className="px-5 py-4 font-semibold text-muted">Aspect</th>
              <th className="px-5 py-4 font-semibold text-blue-400">Daytona</th>
              <th className="px-5 py-4 font-semibold text-amber-400">E2B</th>
              <th className="px-5 py-4 font-semibold text-emerald-400">Sprites.dev</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.aspect}
                className={`table-row-hover border-b border-card-border transition ${
                  i % 2 === 0 ? "bg-transparent" : "bg-card/40"
                }`}
              >
                <td className="px-5 py-4 font-medium text-foreground">{r.aspect}</td>
                <td className="px-5 py-4 text-zinc-300">
                  {r.daytona}
                  <WinnerDot winner={r.winner} col="daytona" />
                </td>
                <td className="px-5 py-4 text-zinc-300">
                  {r.e2b}
                  <WinnerDot winner={r.winner} col="e2b" />
                </td>
                <td className="px-5 py-4 text-zinc-300">
                  {r.sprites}
                  <WinnerDot winner={r.winner} col="sprites" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-center text-xs text-muted">
        <span className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle" />
        Green dot indicates a category advantage
      </p>
    </section>
  );
}
