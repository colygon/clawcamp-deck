const sources = [
  {
    label: "Northflank \u2014 E2B vs Sprites.dev",
    href: "https://northflank.com/blog/e2b-vs-sprites-dev",
  },
  {
    label: "Northflank \u2014 Daytona vs E2B",
    href: "https://northflank.com/blog/daytona-vs-e2b-ai-code-execution-sandboxes",
  },
  {
    label: "Simon Willison \u2014 Sprites.dev",
    href: "https://simonwillison.net/2026/Jan/9/sprites-dev/",
  },
  {
    label: "Sprites.dev Docs",
    href: "https://docs.sprites.dev",
  },
  {
    label: "ZenML \u2014 E2B vs Daytona",
    href: "https://www.zenml.io/blog/e2b-vs-daytona",
  },
  {
    label: "Superagent \u2014 Sandbox Benchmark 2026",
    href: "https://www.superagent.sh/blog/ai-code-sandbox-benchmark-2026",
  },
  {
    label: "Better Stack \u2014 Best Sandbox Runners",
    href: "https://betterstack.com/community/comparisons/best-sandbox-runners/",
  },
];

export function Sources() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-muted">
        References
      </h2>
      <p className="mb-10 text-center text-3xl font-bold">Sources</p>

      <div className="rounded-2xl border border-card-border bg-card p-6">
        <ul className="space-y-3">
          {sources.map((s) => (
            <li key={s.href} className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-1.06a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.34 8.006"
                />
              </svg>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-300 transition hover:text-accent-light"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
