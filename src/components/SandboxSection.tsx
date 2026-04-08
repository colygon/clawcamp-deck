const platforms = [
  {
    name: "Daytona",
    tech: "Docker Containers",
    tagline: "Stateful workspaces for complex dev pipelines",
    color: "border-blue-500/30",
    badge: "bg-blue-500/15 text-blue-400",
    highlights: [
      { label: "Isolation", value: "Shared kernel (containers)" },
      { label: "Persistence", value: "Stateful, unlimited" },
      { label: "Cold Start", value: "~90ms" },
      { label: "GPU", value: "Yes (NVIDIA)" },
      { label: "Interface", value: "SDK (TS/JS+)" },
      { label: "Pricing", value: "$200 free credits" },
    ],
    bestFor: "GPU-heavy, multi-step agent pipelines with background processes",
  },
  {
    name: "E2B",
    tech: "Firecracker microVMs",
    tagline: "Fast ephemeral sandboxes for untrusted code",
    color: "border-amber-500/30",
    badge: "bg-amber-500/15 text-amber-400",
    highlights: [
      { label: "Isolation", value: "Dedicated kernel (microVM)" },
      { label: "Persistence", value: "Ephemeral / pause-resume (beta)" },
      { label: "Cold Start", value: "~150ms" },
      { label: "GPU", value: "No" },
      { label: "Interface", value: "SDK (Python/TS)" },
      { label: "Pricing", value: "$100 free credits" },
    ],
    bestFor: "High-volume, untrusted code execution from LLMs",
  },
  {
    name: "Sprites.dev",
    tech: "Firecracker microVMs",
    tagline: "Persistent, hibernating Linux environments by Fly.io",
    color: "border-emerald-500/30",
    badge: "bg-emerald-500/15 text-emerald-400",
    highlights: [
      { label: "Isolation", value: "Dedicated kernel (microVM)" },
      { label: "Persistence", value: "Indefinite FS + hibernation" },
      { label: "Cold Start", value: "Instant wake (~ms)" },
      { label: "GPU", value: "No (CPU only)" },
      { label: "Interface", value: "CLI / API" },
      { label: "Pricing", value: "Per-second, free while asleep" },
    ],
    bestFor: "Interactive, persistent agent environments with checkpoint/restore",
  },
  {
    name: "Modal",
    tech: "gVisor Sandboxes",
    tagline: "Serverless GPU compute with 50k+ concurrent sandboxes",
    color: "border-purple-500/30",
    badge: "bg-purple-500/15 text-purple-400",
    highlights: [
      { label: "Isolation", value: "gVisor (user-space kernel)" },
      { label: "Persistence", value: "Snapshots / checkpoint-restore" },
      { label: "Cold Start", value: "Sub-second" },
      { label: "GPU", value: "Yes (T4 through B200)" },
      { label: "Interface", value: "Python SDK" },
      { label: "Pricing", value: "$30/mo credits; per-second" },
    ],
    bestFor: "Massive-scale code execution with GPU access for ML workloads",
  },
  {
    name: "Nebius Serverless",
    tech: "Container-over-VM",
    tagline: "GPU serverless with B300/H200 access, Jobs, Endpoints, and DevPods",
    color: "border-sky-500/30",
    badge: "bg-sky-500/15 text-sky-400",
    highlights: [
      { label: "Isolation", value: "Container-over-VM" },
      { label: "Persistence", value: "Mounted volumes + S3" },
      { label: "Cold Start", value: "~5 min (deploy); improving" },
      { label: "GPU", value: "Yes (B300, B200, H200, H100)" },
      { label: "Interface", value: "Console / CLI / Docker" },
      { label: "Pricing", value: "Per-second; H100 $2.95/hr" },
    ],
    bestFor: "GPU-heavy AI training, fine-tuning, and inference with cutting-edge NVIDIA hardware",
  },
  {
    name: "AgentComputer.ai",
    tech: "Persistent VMs",
    tagline: "Sub-second cloud VMs for Claude, Codex, and CUA agents with persistent storage",
    color: "border-orange-500/30",
    badge: "bg-orange-500/15 text-orange-400",
    highlights: [
      { label: "Isolation", value: "Ubuntu 24.04 VMs" },
      { label: "Persistence", value: "25 GB persistent disk" },
      { label: "Cold Start", value: "Sub-second" },
      { label: "GPU", value: "No" },
      { label: "Interface", value: "Agent CLI / SSH" },
      { label: "Pricing", value: "$20/mo (25 machines)" },
    ],
    bestFor: "Remote AI coding agent workflows with persistent, always-available sandboxes",
  },
];

export function SandboxSection() {
  return (
    <section id="sandboxes" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
          Category 1
        </p>
        <h2 className="mt-1 text-3xl font-bold">Code Execution Sandboxes</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Isolated environments purpose-built for running AI-generated code safely.
          These platforms handle the hard problems of isolation, cold starts, and
          state management.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {platforms.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl border ${p.color} bg-card p-6`}
          >
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold">{p.name}</h3>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${p.badge}`}>
                {p.tech}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{p.tagline}</p>

            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {p.highlights.map((h) => (
                <div key={h.label}>
                  <p className="text-xs text-muted">{h.label}</p>
                  <p className="text-sm font-medium text-zinc-200">{h.value}</p>
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
