const cases = [
  {
    platform: "Daytona",
    color: "border-blue-500/40",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    icon: (
      <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "GPU-Heavy Agent Pipelines",
    description:
      "Multi-step AI workflows that need background processes, long-lived state, and GPU access for model inference or training steps.",
    examples: ["ML training orchestration", "Multi-model agent chains", "Heavyweight dev environments"],
  },
  {
    platform: "E2B",
    color: "border-amber-500/40",
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
    icon: (
      <svg className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "High-Volume Code Execution",
    description:
      "Rapid, isolated execution of untrusted LLM-generated code with real-time streaming output. Built for programmatic SDK integration.",
    examples: ["LLM code sandboxing", "Automated test runners", "AI coding assistants"],
  },
  {
    platform: "Sprites.dev",
    color: "border-emerald-500/40",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    icon: (
      <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Persistent Dev Shells",
    description:
      "Interactive, long-lived environments with checkpoint/restore. Perfect for developers returning to the same workspace with full state preserved.",
    examples: ["AI-powered dev shells", "Stateful debugging sessions", "Environment snapshotting"],
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-muted">
        When to Use What
      </h2>
      <p className="mb-12 text-center text-3xl font-bold">Best-Fit Use Cases</p>

      <div className="grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <div
            key={c.platform}
            className={`rounded-2xl border ${c.color} bg-card p-6 transition hover:scale-[1.02]`}
          >
            <div className={`mb-4 inline-flex rounded-xl ${c.bg} p-3`}>{c.icon}</div>
            <h3 className={`text-xl font-bold ${c.accent}`}>{c.platform}</h3>
            <p className="mt-1 text-lg font-semibold text-foreground">{c.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{c.description}</p>
            <ul className="mt-4 space-y-1.5">
              {c.examples.map((ex) => (
                <li key={ex} className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className={`block h-1 w-1 rounded-full ${c.accent.replace("text-", "bg-")}`} />
                  {ex}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
