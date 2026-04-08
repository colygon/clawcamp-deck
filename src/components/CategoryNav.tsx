const categories = [
  {
    label: "Code Execution Sandboxes",
    anchor: "#sandboxes",
    count: 5,
    description: "Isolated environments for running AI-generated code safely",
    color: "text-indigo-400",
  },
  {
    label: "Agent Orchestration",
    anchor: "#orchestration",
    count: 3,
    description: "Frameworks and infrastructure for durable agent workflows",
    color: "text-cyan-400",
  },
  {
    label: "Managed Agent Platforms",
    anchor: "#managed",
    count: 10,
    description: "End-to-end SaaS platforms for building and running agents",
    color: "text-rose-400",
  },
  {
    label: "Cloud Hosting & VPS",
    anchor: "#cloud",
    count: 12,
    description: "General-purpose compute for self-hosted agent stacks",
    color: "text-emerald-400",
  },
  {
    label: "NeoCloud",
    anchor: "#gpu-compute",
    count: 1,
    description: "Serverless GPU infrastructure for AI training and inference",
    color: "text-yellow-400",
  },
];

export function CategoryNav() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((c) => (
          <a
            key={c.anchor}
            href={c.anchor}
            className="group rounded-xl border border-card-border bg-card p-5 transition hover:border-accent/50"
          >
            <div className="flex items-center justify-between">
              <span className={`text-2xl font-bold ${c.color}`}>{c.count}</span>
              <span className="text-xs text-muted">platforms</span>
            </div>
            <h3 className="mt-2 text-sm font-semibold text-foreground group-hover:text-accent-light transition">
              {c.label}
            </h3>
            <p className="mt-1 text-xs text-muted leading-relaxed">{c.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
