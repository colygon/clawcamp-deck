const platforms = [
  {
    name: "LangGraph Cloud",
    org: "LangChain",
    tagline: "Deploy, manage, and monitor production AI agents with durable runtime and built-in observability",
    color: "border-cyan-500/30",
    badge: "bg-cyan-500/15 text-cyan-400",
    highlights: [
      { label: "Type", value: "Managed agent hosting" },
      { label: "Open Source", value: "Yes (LangGraph framework)" },
      { label: "Self-Hosted", value: "Enterprise only" },
      { label: "Protocols", value: "MCP, A2A, Agent Protocol" },
      { label: "Human-in-Loop", value: "Yes (approval workflows)" },
      { label: "Pricing", value: "Free / $39/user/mo / $150K+/yr" },
    ],
    bestFor: "Teams building custom agents who need production-grade hosting with full observability",
  },
  {
    name: "Temporal.io",
    org: "Temporal Technologies",
    tagline: "Battle-tested durable execution platform ensuring code runs to completion despite failures",
    color: "border-cyan-500/30",
    badge: "bg-cyan-500/15 text-cyan-400",
    highlights: [
      { label: "Type", value: "Durable execution engine" },
      { label: "Open Source", value: "Yes (MIT license)" },
      { label: "Self-Hosted", value: "Yes (free)" },
      { label: "Languages", value: "Python, Go, TS, Java, C#+" },
      { label: "Recovery", value: "Automatic resume on crash" },
      { label: "Pricing", value: "$1K credits / $100/mo+" },
    ],
    bestFor: "Long-running agent workflows that need fault tolerance, replay, and state persistence",
  },
  {
    name: "Kagent",
    org: "Solo.io / CNCF",
    tagline: "Kubernetes-native framework for AI agents that automate cluster operations",
    color: "border-cyan-500/30",
    badge: "bg-cyan-500/15 text-cyan-400",
    highlights: [
      { label: "Type", value: "K8s agent framework" },
      { label: "Open Source", value: "Yes (Apache 2.0, CNCF)" },
      { label: "Self-Hosted", value: "Yes (your K8s cluster)" },
      { label: "Frameworks", value: "AutoGen, LangChain, CrewAI" },
      { label: "Built-in Tools", value: "K8s, Istio, Helm, Prometheus" },
      { label: "Pricing", value: "Free OSS / Enterprise TBD" },
    ],
    bestFor: "DevOps teams wanting AI agents for Kubernetes operations and troubleshooting",
  },
];

export function OrchestrationSection() {
  return (
    <section id="orchestration" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
          Category 2
        </p>
        <h2 className="mt-1 text-3xl font-bold">Agent Orchestration</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Developer infrastructure for building durable, fault-tolerant agent
          workflows. These handle scheduling, state persistence, retry logic,
          and observability.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {platforms.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl border ${p.color} bg-card p-6`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-xs text-muted">{p.org}</p>
              </div>
              <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${p.badge}`}>
                OSS
              </span>
            </div>
            <p className="mt-2 text-sm text-muted leading-relaxed">{p.tagline}</p>

            <div className="mt-4 space-y-2">
              {p.highlights.map((h) => (
                <div key={h.label} className="flex items-baseline justify-between gap-2">
                  <span className="text-xs text-muted">{h.label}</span>
                  <span className="text-right text-sm font-medium text-zinc-200">{h.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg bg-zinc-800/50 px-3 py-2">
              <p className="text-xs text-muted">Best for</p>
              <p className="text-sm text-zinc-300">{p.bestFor}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
