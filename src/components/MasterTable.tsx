const rows = [
  {
    category: "Sandbox",
    name: "Daytona",
    isolation: "Containers (shared kernel)",
    persistence: "Stateful, unlimited",
    gpu: "Yes",
    coldStart: "~90ms",
    openSource: "Yes",
    selfHosted: "No",
    pricing: "$200 credits; usage-based",
  },
  {
    category: "Sandbox",
    name: "E2B",
    isolation: "Firecracker microVM",
    persistence: "Ephemeral (pause beta)",
    gpu: "No",
    coldStart: "~150ms",
    openSource: "Yes",
    selfHosted: "Enterprise",
    pricing: "$100 credits; ~$0.05/hr",
  },
  {
    category: "Sandbox",
    name: "Sprites.dev",
    isolation: "Firecracker microVM",
    persistence: "Indefinite + hibernate",
    gpu: "No",
    coldStart: "~ms wake",
    openSource: "No",
    selfHosted: "No",
    pricing: "Per-second; free asleep",
  },
  {
    category: "Sandbox",
    name: "Modal",
    isolation: "gVisor sandbox",
    persistence: "Snapshots",
    gpu: "Yes (T4\u2013B200)",
    coldStart: "Sub-second",
    openSource: "No",
    selfHosted: "No",
    pricing: "$30/mo credits; per-sec",
  },
  {
    category: "Orchestration",
    name: "LangGraph Cloud",
    isolation: "Managed runtime",
    persistence: "Durable checkpoints",
    gpu: "\u2014",
    coldStart: "\u2014",
    openSource: "Yes (framework)",
    selfHosted: "Enterprise",
    pricing: "Free / $39/user/mo",
  },
  {
    category: "Orchestration",
    name: "Temporal.io",
    isolation: "\u2014",
    persistence: "Durable execution",
    gpu: "\u2014",
    coldStart: "\u2014",
    openSource: "Yes (MIT)",
    selfHosted: "Yes (free)",
    pricing: "$100/mo+ (managed)",
  },
  {
    category: "Orchestration",
    name: "Kagent",
    isolation: "K8s namespaces/RBAC",
    persistence: "K8s CRDs/etcd",
    gpu: "Via K8s cluster",
    coldStart: "\u2014",
    openSource: "Yes (Apache 2.0)",
    selfHosted: "Yes (free)",
    pricing: "Free OSS",
  },
  {
    category: "Managed",
    name: "Lindy AI",
    isolation: "Managed cloud",
    persistence: "Platform-managed",
    gpu: "\u2014",
    coldStart: "\u2014",
    openSource: "No",
    selfHosted: "No",
    pricing: "Free / $49.99/mo",
  },
  {
    category: "Managed",
    name: "Relevance AI",
    isolation: "Managed cloud",
    persistence: "Platform-managed",
    gpu: "\u2014",
    coldStart: "\u2014",
    openSource: "No",
    selfHosted: "No",
    pricing: "Free / $19/mo",
  },
  {
    category: "Managed",
    name: "Devin (Cognition)",
    isolation: "Cloud IDE sandbox",
    persistence: "Session-based",
    gpu: "\u2014",
    coldStart: "\u2014",
    openSource: "No",
    selfHosted: "Enterprise",
    pricing: "$20/mo + ACUs",
  },
  {
    category: "Managed",
    name: "ZenClaw AI",
    isolation: "NVIDIA NemoClaw OpenShell",
    persistence: "Platform-managed",
    gpu: "\u2014",
    coldStart: "~9s deploy",
    openSource: "No",
    selfHosted: "No",
    pricing: "$400/mo+",
  },
  {
    category: "Managed",
    name: "KlausAI",
    isolation: "Isolated cloud instance",
    persistence: "Platform-managed",
    gpu: "\u2014",
    coldStart: "~5 min setup",
    openSource: "No",
    selfHosted: "No",
    pricing: "$19/mo+",
  },
  {
    category: "Managed",
    name: "Coral",
    isolation: "Dedicated VM per user",
    persistence: "Platform-managed",
    gpu: "\u2014",
    coldStart: "\u2014",
    openSource: "No",
    selfHosted: "No",
    pricing: "$50/mo+",
  },
  {
    category: "Cloud",
    name: "AWS Lambda",
    isolation: "Serverless (Firecracker)",
    persistence: "Stateless (15-min max)",
    gpu: "No",
    coldStart: "~100ms warm",
    openSource: "No",
    selfHosted: "\u2014",
    pricing: "$0.20/1M req; free tier",
  },
  {
    category: "Cloud",
    name: "AWS EC2",
    isolation: "Virtual machines",
    persistence: "Full control (EBS)",
    gpu: "Yes (P/G/Inf)",
    coldStart: "Minutes",
    openSource: "No",
    selfHosted: "\u2014",
    pricing: "On-demand / spot",
  },
  {
    category: "Cloud",
    name: "DigitalOcean",
    isolation: "Droplets (VMs)",
    persistence: "Persistent volumes",
    gpu: "Yes (H100)",
    coldStart: "~55s",
    openSource: "No",
    selfHosted: "\u2014",
    pricing: "$4/mo+",
  },
  {
    category: "Cloud",
    name: "Fly.io",
    isolation: "Firecracker VMs",
    persistence: "Persistent volumes",
    gpu: "Limited",
    coldStart: "~300ms",
    openSource: "No",
    selfHosted: "\u2014",
    pricing: "Per-second",
  },
  {
    category: "Cloud",
    name: "Render",
    isolation: "Containers",
    persistence: "Persistent services",
    gpu: "No",
    coldStart: "\u2014",
    openSource: "No",
    selfHosted: "\u2014",
    pricing: "Free tier / $25/mo+",
  },
  {
    category: "Cloud",
    name: "Railway",
    isolation: "Containers",
    persistence: "Persistent volumes",
    gpu: "No",
    coldStart: "\u2014",
    openSource: "No",
    selfHosted: "\u2014",
    pricing: "$5/mo min; per-second",
  },
  {
    category: "Cloud",
    name: "Heroku",
    isolation: "Dynos (containers)",
    persistence: "Ephemeral FS + add-ons",
    gpu: "No",
    coldStart: "~5s (Eco sleep)",
    openSource: "No",
    selfHosted: "\u2014",
    pricing: "$5/mo+ (Eco)",
  },
  {
    category: "VPS",
    name: "Hetzner",
    isolation: "Bare metal / VPS",
    persistence: "Full control",
    gpu: "Yes (dedicated)",
    coldStart: "\u2014",
    openSource: "\u2014",
    selfHosted: "Yes",
    pricing: "\u20ac3.79/mo+",
  },
  {
    category: "VPS",
    name: "OVHcloud",
    isolation: "Bare metal / VPS",
    persistence: "Full control",
    gpu: "Yes (NVIDIA)",
    coldStart: "\u2014",
    openSource: "\u2014",
    selfHosted: "Yes",
    pricing: "\u20ac3.50/mo+",
  },
  {
    category: "VPS",
    name: "Hostinger",
    isolation: "VPS",
    persistence: "Full control",
    gpu: "No",
    coldStart: "\u2014",
    openSource: "\u2014",
    selfHosted: "Yes",
    pricing: "$4.99/mo+",
  },
  {
    category: "VPS",
    name: "GTHost",
    isolation: "Dedicated / GPU",
    persistence: "Full control",
    gpu: "Yes (A100, H100)",
    coldStart: "\u2014",
    openSource: "\u2014",
    selfHosted: "Yes",
    pricing: "Custom",
  },
  {
    category: "VPS",
    name: "Contabo",
    isolation: "VPS / Bare Metal / GPU",
    persistence: "Full control",
    gpu: "Yes (L40S, H200)",
    coldStart: "\u2014",
    openSource: "\u2014",
    selfHosted: "Yes",
    pricing: "\u20ac3.60/mo+",
  },
  {
    category: "Cloud",
    name: "Claw Cloud",
    isolation: "VPS + Containers (Run)",
    persistence: "Persistent volumes",
    gpu: "No",
    coldStart: "\u2014",
    openSource: "No",
    selfHosted: "\u2014",
    pricing: "Free tier / $1.50/mo",
  },
  {
    category: "Cloud",
    name: "ClawHost",
    isolation: "Managed VPS",
    persistence: "Full control",
    gpu: "No",
    coldStart: "\u2014",
    openSource: "Yes (MIT)",
    selfHosted: "Yes",
    pricing: "$25/mo+",
  },
];

const categoryColors: Record<string, string> = {
  Sandbox: "text-indigo-400",
  Orchestration: "text-cyan-400",
  Managed: "text-rose-400",
  Cloud: "text-emerald-400",
  VPS: "text-emerald-400",
};

export function MasterTable() {
  return (
    <section id="master-table" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted">
          All Platforms
        </p>
        <h2 className="mt-1 text-3xl font-bold">Master Comparison</h2>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-card-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-card-border bg-card text-left">
              <th className="px-4 py-3 font-semibold text-muted">Category</th>
              <th className="px-4 py-3 font-semibold text-muted">Platform</th>
              <th className="px-4 py-3 font-semibold text-muted">Isolation</th>
              <th className="px-4 py-3 font-semibold text-muted">Persistence</th>
              <th className="px-4 py-3 font-semibold text-muted">GPU</th>
              <th className="px-4 py-3 font-semibold text-muted">Cold Start</th>
              <th className="px-4 py-3 font-semibold text-muted">OSS</th>
              <th className="px-4 py-3 font-semibold text-muted">Self-Host</th>
              <th className="px-4 py-3 font-semibold text-muted">Pricing</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.name}
                className={`border-b border-card-border transition hover:bg-accent/5 ${
                  i % 2 === 0 ? "bg-transparent" : "bg-card/40"
                }`}
              >
                <td className={`px-4 py-3 font-medium ${categoryColors[r.category] || "text-muted"}`}>
                  {r.category}
                </td>
                <td className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">{r.name}</td>
                <td className="px-4 py-3 text-zinc-300">{r.isolation}</td>
                <td className="px-4 py-3 text-zinc-300">{r.persistence}</td>
                <td className="px-4 py-3 text-zinc-300">{r.gpu}</td>
                <td className="px-4 py-3 text-zinc-300">{r.coldStart}</td>
                <td className="px-4 py-3 text-zinc-300">{r.openSource}</td>
                <td className="px-4 py-3 text-zinc-300">{r.selfHosted}</td>
                <td className="px-4 py-3 text-zinc-300 whitespace-nowrap">{r.pricing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
