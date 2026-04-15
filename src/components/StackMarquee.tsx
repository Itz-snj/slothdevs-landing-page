const stacks = [
  ["React", "TypeScript", "Python", "Docker"],
  ["GitHub Actions", "Kubernetes", "Terraform", "Rust"],
  ["Go", "PostgreSQL", "Redis", "GraphQL"],
  ["Node.js", "AWS", "Cloudflare", "gRPC"],
];

export default function StackMarquee() {
  return (
    <section className="border-b border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Integrates with
        </p>
        <div className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-4">
          {stacks.map((col, ci) => (
            <div key={ci} className="space-y-3">
              {col.map((name) => (
                <p key={name} className="font-mono text-sm text-foreground/60">
                  {name}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
