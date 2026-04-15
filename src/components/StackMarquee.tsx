const stacks = [
  "React", "TypeScript", "Python", "Docker", "GitHub", "Kubernetes",
  "Terraform", "Rust", "Go", "PostgreSQL", "Redis", "GraphQL",
  "Node.js", "AWS", "Vercel", "Cloudflare",
];

export default function StackMarquee() {
  const items = [...stacks, ...stacks];

  return (
    <section className="relative overflow-hidden border-y border-border py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

      <div className="marquee-track">
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="mx-8 shrink-0 whitespace-nowrap text-sm font-medium tracking-wide text-foreground opacity-50"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
