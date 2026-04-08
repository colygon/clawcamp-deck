const hyperscalers = [
  {
    name: "AWS Lambda",
    tagline: "Serverless functions with automatic scaling, pay-per-invocation, and 15-min max runtime",
    highlights: [
      { label: "Compute", value: "Serverless functions" },
      { label: "GPU", value: "No" },
      { label: "Max Runtime", value: "15 minutes per invocation" },
      { label: "Pricing", value: "Free tier; $0.20/1M requests" },
    ],
  },
  {
    name: "AWS EC2",
    tagline: "Full virtual machines with any OS, GPU instances, and unlimited runtime for total control",
    highlights: [
      { label: "Compute", value: "Virtual machines" },
      { label: "GPU", value: "Yes (P/G/Inf instances)" },
      { label: "Max Runtime", value: "Unlimited" },
      { label: "Pricing", value: "On-demand / spot / reserved" },
    ],
  },
  {
    name: "DigitalOcean",
    tagline: "Developer-friendly cloud with Droplets, managed Kubernetes, and GPU instances",
    highlights: [
      { label: "Compute", value: "Droplets (VMs)" },
      { label: "GPU", value: "Yes (H100)" },
      { label: "Managed K8s", value: "Yes" },
      { label: "Pricing", value: "$4/mo+ (Droplets)" },
    ],
  },
];

const appPlatforms = [
  {
    name: "Fly.io",
    tagline: "Global app hosting on Firecracker VMs with instant boot across 30+ regions",
    highlights: [
      { label: "Compute", value: "Firecracker VMs (Fly Machines)" },
      { label: "GPU", value: "Limited availability" },
      { label: "Regions", value: "30+" },
      { label: "Pricing", value: "Per-second, usage-based" },
    ],
  },
  {
    name: "Render",
    tagline: "Full-stack cloud with managed Postgres, Redis, and upcoming Workflows for agent orchestration",
    highlights: [
      { label: "Compute", value: "Persistent containers" },
      { label: "GPU", value: "No" },
      { label: "Compliance", value: "SOC 2, HIPAA, ISO 27001" },
      { label: "Pricing", value: "Free tier / $25/mo+" },
    ],
  },
  {
    name: "Railway",
    tagline: "Visual infrastructure canvas with hard spending limits and MCP server integration",
    highlights: [
      { label: "Compute", value: "Containers, per-second" },
      { label: "GPU", value: "No" },
      { label: "Unique", value: "Hard spending caps" },
      { label: "Pricing", value: "$5/mo minimum" },
    ],
  },
  {
    name: "Heroku",
    tagline: "Pioneer PaaS with managed runtimes, add-ons marketplace, and simple git-push deploys",
    highlights: [
      { label: "Compute", value: "Dynos (containers)" },
      { label: "GPU", value: "No" },
      { label: "Add-ons", value: "200+ marketplace" },
      { label: "Pricing", value: "$5/mo+ (Eco dynos)" },
    ],
  },
];

const vpsProviders = [
  {
    name: "Hetzner",
    tagline: "German hosting with exceptional price-to-performance on dedicated and cloud servers",
    highlights: [
      { label: "Type", value: "Cloud VPS + Dedicated" },
      { label: "GPU", value: "Yes (dedicated)" },
      { label: "Regions", value: "EU + US" },
      { label: "Starting", value: "\u20ac3.79/mo (VPS)" },
    ],
  },
  {
    name: "OVHcloud",
    tagline: "European cloud giant with bare metal, VPS, and GPU servers across 40+ data centers",
    highlights: [
      { label: "Type", value: "VPS + Bare Metal + Cloud" },
      { label: "GPU", value: "Yes (NVIDIA)" },
      { label: "Regions", value: "EU, NA, APAC" },
      { label: "Starting", value: "\u20ac3.50/mo (VPS)" },
    ],
  },
  {
    name: "Hostinger",
    tagline: "Budget-friendly VPS with global reach and AI-assisted website tools",
    highlights: [
      { label: "Type", value: "VPS + Shared hosting" },
      { label: "GPU", value: "No" },
      { label: "Regions", value: "Global (8+ DCs)" },
      { label: "Starting", value: "$4.99/mo (VPS)" },
    ],
  },
  {
    name: "GTHost",
    tagline: "High-performance dedicated servers and GPU hosting optimized for AI/ML workloads",
    highlights: [
      { label: "Type", value: "Dedicated + GPU servers" },
      { label: "GPU", value: "Yes (A100, H100)" },
      { label: "Regions", value: "US, EU" },
      { label: "Starting", value: "Custom (dedicated)" },
    ],
  },
  {
    name: "Contabo",
    tagline: "German provider with aggressive pricing on VPS, bare metal, and GPU cloud (L40S, H200)",
    highlights: [
      { label: "Type", value: "VPS + Bare Metal + GPU" },
      { label: "GPU", value: "Yes (L40S, H200)" },
      { label: "Regions", value: "EU, US, APAC (11 DCs)" },
      { label: "Starting", value: "\u20ac3.60/mo (VPS)" },
    ],
  },
  {
    name: "Claw Cloud",
    tagline: "Developer cloud with VPS, VDS, and ClawCloud Run container platform with free tier",
    highlights: [
      { label: "Type", value: "VPS + Containers (Run)" },
      { label: "GPU", value: "No" },
      { label: "Regions", value: "Singapore + multi-AZ" },
      { label: "Starting", value: "Free tier / $1.50/mo" },
    ],
  },
  {
    name: "ClawHost",
    tagline: "Open-source one-click deployment platform purpose-built for OpenClaw AI agents",
    highlights: [
      { label: "Type", value: "Managed VPS (via Hetzner)" },
      { label: "GPU", value: "No" },
      { label: "Agent Tooling", value: "Built-in (OpenClaw)" },
      { label: "Starting", value: "$25/mo" },
    ],
  },
];

function PlatformCard({
  name,
  tagline,
  highlights,
}: {
  name: string;
  tagline: string;
  highlights: { label: string; value: string }[];
}) {
  return (
    <div className="rounded-xl border border-card-border bg-card p-5">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="mt-1 text-sm text-muted leading-relaxed">{tagline}</p>
      <div className="mt-3 space-y-1.5">
        {highlights.map((h) => (
          <div key={h.label} className="flex items-baseline justify-between gap-2">
            <span className="text-xs text-muted">{h.label}</span>
            <span className="text-right text-sm font-medium text-zinc-300">{h.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CloudHostingSection() {
  return (
    <section id="cloud" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
          Category 4
        </p>
        <h2 className="mt-1 text-3xl font-bold">Cloud Hosting &amp; VPS</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          General-purpose compute for self-hosting agent stacks. These
          platforms host the services around your agents &mdash; APIs, databases,
          queues, and background workers.
        </p>
      </div>

      <h3 className="mb-4 text-lg font-semibold text-emerald-400">Major Cloud</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {hyperscalers.map((p) => (
          <PlatformCard key={p.name} {...p} />
        ))}
      </div>

      <h3 className="mb-4 mt-10 text-lg font-semibold text-emerald-400">App Platforms</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {appPlatforms.map((p) => (
          <PlatformCard key={p.name} {...p} />
        ))}
      </div>

      <h3 className="mb-4 mt-10 text-lg font-semibold text-emerald-400">VPS &amp; Bare Metal</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {vpsProviders.map((p) => (
          <PlatformCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
