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
          Daytona, E2B, and Sprites.dev take fundamentally different approaches
          to sandboxing AI agent workloads. Here&rsquo;s how they stack up on
          isolation, persistence, cold starts, and pricing.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#comparison"
            className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition hover:bg-accent-light"
          >
            View Comparison
          </a>
          <a
            href="#use-cases"
            className="rounded-full border border-card-border px-7 py-3 text-sm font-semibold text-foreground transition hover:border-accent"
          >
            Use Cases
          </a>
        </div>
      </div>
    </section>
  );
}
