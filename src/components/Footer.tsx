export function Footer() {
  return (
    <footer className="border-t border-card-border py-10 text-center text-xs text-muted">
      <p>
        Agent Hosting Compared &mdash; Daytona vs E2B vs Sprites.dev &mdash;{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
