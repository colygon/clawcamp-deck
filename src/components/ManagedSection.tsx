const platforms = [
  {
    name: "Lindy AI",
    tagline: "No-code AI agent builder with 6,000+ integrations and cloud-based computer use",
    color: "border-rose-500/30",
    badge: "bg-rose-500/15 text-rose-400",
    audience: "Business users & ops teams",
    highlights: [
      { label: "Code Required", value: "No" },
      { label: "Computer Use", value: "Yes (Autopilot)" },
      { label: "Integrations", value: "6,000+" },
      { label: "Compliance", value: "HIPAA, SOC 2, GDPR" },
      { label: "Pricing", value: "Free / $49.99/mo+" },
    ],
    bestFor: "Non-technical teams automating business workflows without code",
  },
  {
    name: "Relevance AI",
    tagline: "AI workforce platform for sales, marketing, and customer success automation",
    color: "border-rose-500/30",
    badge: "bg-rose-500/15 text-rose-400",
    audience: "Sales & revenue ops teams",
    highlights: [
      { label: "Code Required", value: "No" },
      { label: "Focus", value: "GTM / Sales automation" },
      { label: "Integrations", value: "1,000+ (CRM, LinkedIn)" },
      { label: "Compliance", value: "SOC 2 Type II, GDPR" },
      { label: "Pricing", value: "Free / $19/mo+" },
    ],
    bestFor: "Revenue teams building multi-agent workflows for prospecting and CRM",
  },
  {
    name: "Cognition (Devin)",
    tagline: "Autonomous AI software engineer with its own cloud IDE, terminal, and browser",
    color: "border-rose-500/30",
    badge: "bg-rose-500/15 text-rose-400",
    audience: "Engineering teams",
    highlights: [
      { label: "Code Required", value: "No (but technical)" },
      { label: "Capability", value: "Full SDLC (plan to deploy)" },
      { label: "Parallelism", value: "Multiple Devin instances" },
      { label: "Environment", value: "Cloud IDE sandbox" },
      { label: "Pricing", value: "$20/mo + ACUs" },
    ],
    bestFor: "Dev teams augmenting capacity with autonomous coding agents",
  },
];

export function ManagedSection() {
  return (
    <section id="managed" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-widest text-rose-400">
          Category 3
        </p>
        <h2 className="mt-1 text-3xl font-bold">Managed Agent Platforms</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          End-to-end SaaS platforms where agents are built, hosted, and managed
          for you. Less control, less infrastructure work.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {platforms.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl border ${p.color} bg-card p-6`}
          >
            <h3 className="text-xl font-bold">{p.name}</h3>
            <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${p.badge}`}>
              {p.audience}
            </span>
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
