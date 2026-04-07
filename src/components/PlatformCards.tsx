const platforms = [
  {
    name: "Daytona",
    tech: "Docker Containers",
    tagline: "Stateful workspaces for complex dev pipelines",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30",
    badge: "bg-blue-500/15 text-blue-400",
    highlights: [
      "Shared kernel, container isolation",
      "GPU support (NVIDIA)",
      "Unlimited runtime",
      "SDK-first (TS/JS+)",
      "~90ms cold start",
    ],
  },
  {
    name: "E2B",
    tech: "Firecracker microVMs",
    tagline: "Fast ephemeral sandboxes for untrusted code",
    color: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/30",
    badge: "bg-amber-500/15 text-amber-400",
    highlights: [
      "Dedicated kernel isolation",
      "Ephemeral / pause-resume (beta)",
      "24h max on Pro plan",
      "SDK-first (Python/TS)",
      "~150ms cold start",
    ],
  },
  {
    name: "Sprites.dev",
    tech: "Firecracker microVMs",
    tagline: "Persistent, hibernating Linux environments",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/30",
    badge: "bg-emerald-500/15 text-emerald-400",
    highlights: [
      "Dedicated kernel isolation",
      "Indefinite filesystem persistence",
      "Checkpoint/hibernate (~300ms)",
      "CLI/API-first interface",
      "Instant wake from sleep",
    ],
  },
];

export function PlatformCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-muted">
        The Platforms
      </h2>
      <p className="mb-12 text-center text-3xl font-bold">
        Three Architectures, One Goal
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {platforms.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl border ${p.border} bg-gradient-to-b ${p.color} p-6 transition hover:scale-[1.02]`}
          >
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${p.badge}`}>
              {p.tech}
            </span>
            <h3 className="mt-4 text-2xl font-bold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted">{p.tagline}</p>
            <ul className="mt-5 space-y-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
