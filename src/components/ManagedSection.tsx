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
  {
    name: "ZenClaw AI",
    tagline: "Turnkey AI employee platform on NVIDIA NemoClaw with zero-config deployment in 9 seconds",
    color: "border-rose-500/30",
    badge: "bg-rose-500/15 text-rose-400",
    audience: "SMBs wanting premium turnkey",
    highlights: [
      { label: "Code Required", value: "No" },
      { label: "Setup", value: "~9 seconds" },
      { label: "Models", value: "Claude, GPT-4, Gemini, Llama" },
      { label: "Isolation", value: "NVIDIA NemoClaw OpenShell" },
      { label: "Pricing", value: "$400/mo+" },
    ],
    bestFor: "SMBs wanting fully managed AI employees with NVIDIA-backed infrastructure",
  },
  {
    name: "KlausAI",
    tagline: "Managed OpenClaw hosting with 40+ SaaS integrations, pre-configured tools, and agent templates",
    color: "border-rose-500/30",
    badge: "bg-rose-500/15 text-rose-400",
    audience: "Teams & businesses",
    highlights: [
      { label: "Code Required", value: "No" },
      { label: "Integrations", value: "40+ (Salesforce, HubSpot, Slack)" },
      { label: "Templates", value: "Exec Asst, Sales, Research" },
      { label: "Monitoring", value: "Automated SRE" },
      { label: "Pricing", value: "$19/mo+" },
    ],
    bestFor: "Teams wanting plug-and-play SaaS agent integrations at low entry cost",
  },
  {
    name: "Coral",
    tagline: "Security-first OpenClaw hosting with dedicated VMs, auto cost optimization, and 500+ integrations",
    color: "border-rose-500/30",
    badge: "bg-rose-500/15 text-rose-400",
    audience: "Security-conscious orgs",
    highlights: [
      { label: "Code Required", value: "No" },
      { label: "Isolation", value: "Dedicated VM per user" },
      { label: "Integrations", value: "500+" },
      { label: "Cost Savings", value: "Auto model routing (~10x)" },
      { label: "Pricing", value: "$50/mo+" },
    ],
    bestFor: "Security-conscious teams needing strong isolation and automatic cost optimization",
  },
  {
    name: "ClawHost",
    tagline: "Open-source one-click OpenClaw deployment on Hetzner VPS with agent playground and ClawHub",
    color: "border-rose-500/30",
    badge: "bg-rose-500/15 text-rose-400",
    audience: "OpenClaw deployers",
    highlights: [
      { label: "Code Required", value: "No" },
      { label: "Open Source", value: "Yes (MIT)" },
      { label: "Agent Tooling", value: "Playground + ClawHub" },
      { label: "Integrations", value: "Telegram, Discord, Slack" },
      { label: "Pricing", value: "$25/mo+" },
    ],
    bestFor: "Self-hosted OpenClaw deployment with built-in agent playground and skills marketplace",
  },
  {
    name: "Claw Cloud",
    tagline: "Developer cloud with ClawCloud Run containers, free tier, and OpenClaw-optimized hosting",
    color: "border-rose-500/30",
    badge: "bg-rose-500/15 text-rose-400",
    audience: "Developers & OpenClaw users",
    highlights: [
      { label: "Code Required", value: "No (Run platform)" },
      { label: "Free Tier", value: "Yes ($5 credit)" },
      { label: "Container Platform", value: "ClawCloud Run" },
      { label: "Max Resources", value: "128 vCPU / 256 GB RAM" },
      { label: "Pricing", value: "Free / $1.50/mo+" },
    ],
    bestFor: "Budget-friendly OpenClaw hosting with container platform and generous free tier",
  },
  {
    name: "Zo Computer",
    tagline: "Always-on personal AI cloud computer with integrated models, storage, and hosted services",
    color: "border-rose-500/30",
    badge: "bg-rose-500/15 text-rose-400",
    audience: "Individuals & creators",
    highlights: [
      { label: "Code Required", value: "No" },
      { label: "Always On", value: "24/7 (paid plans)" },
      { label: "Storage", value: "100 GB + Drive/Dropbox" },
      { label: "Models", value: "Multi-model + BYO keys" },
      { label: "Pricing", value: "Free / $18/mo+" },
    ],
    bestFor: "Personal AI cloud computer for autonomous tasks, hosting, and creative work",
  },
  {
    name: "Dialog Tools",
    tagline: "AI agent platform for product teams with 74+ integrations and autonomous scheduled research",
    color: "border-rose-500/30",
    badge: "bg-rose-500/15 text-rose-400",
    audience: "Product teams",
    highlights: [
      { label: "Code Required", value: "No" },
      { label: "Integrations", value: "74+ (Reddit, Jira, Slack)" },
      { label: "Memory", value: "Persistent across sessions" },
      { label: "Distribution", value: "Telegram, Slack, Discord" },
      { label: "Pricing", value: "Free to start" },
    ],
    bestFor: "Product teams automating competitive research and intelligence gathering",
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
