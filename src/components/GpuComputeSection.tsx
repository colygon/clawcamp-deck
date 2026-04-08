const platforms = [
  {
    name: "Nebius Serverless",
    tagline: "GPU serverless with cutting-edge B300/H200 access, Jobs, Endpoints, and DevPods",
    color: "border-yellow-500/30",
    highlights: [
      { label: "Compute", value: "Container-over-VM" },
      { label: "GPUs", value: "B300, B200, H200, H100, L40S" },
      { label: "Cold Start", value: "~5 min deploy; improving" },
      { label: "Max Runtime", value: "168h (Jobs)" },
      { label: "Interface", value: "Console / CLI / Docker" },
      { label: "Pricing", value: "Per-second; H100 $2.95/hr" },
    ],
    bestFor: "GPU-heavy AI training, fine-tuning, and inference with cutting-edge NVIDIA hardware",
  },
];

export function GpuComputeSection() {
  return (
    <section id="gpu-compute" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-widest text-yellow-400">
          Category 5
        </p>
        <h2 className="mt-1 text-3xl font-bold">GPU Compute / NeoCloud</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Serverless and on-demand GPU infrastructure for AI training,
          fine-tuning, and inference. These platforms provide raw GPU power
          without cluster management.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {platforms.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl border ${p.color} bg-card p-6`}
          >
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted leading-relaxed">{p.tagline}</p>

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
