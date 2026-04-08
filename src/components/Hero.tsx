export function Hero() {
  return (
    <section className="relative hero-glow">
      <div className="mx-auto max-w-5xl px-6 pt-28 pb-20 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-light">
          2026 Platform Guide
        </p>
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          <span className="gradient-text">Agent Hosting</span>
          <br />
          Compared
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
          From code-execution sandboxes to orchestration frameworks, managed
          agent platforms, and bare-metal VPS &mdash; every option for running AI
          agents in production, compared side by side.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#sandboxes" className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-light">
            Sandboxes
          </a>
          <a href="#orchestration" className="rounded-full border border-card-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent">
            Orchestration
          </a>
          <a href="#managed" className="rounded-full border border-card-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent">
            Managed Agents
          </a>
          <a href="#cloud" className="rounded-full border border-card-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent">
            Cloud &amp; VPS
          </a>
          <a href="#gpu-compute" className="rounded-full border border-card-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent">
            GPU Compute
          </a>
          <a href="#master-table" className="rounded-full border border-card-border px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent">
            Full Table
          </a>
        </div>
      </div>
    </section>
  );
}
