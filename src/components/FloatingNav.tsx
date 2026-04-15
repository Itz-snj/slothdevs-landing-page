export default function FloatingNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
        <span className="font-mono text-sm font-medium text-foreground tracking-tight">
          SlothDevs <span className="text-muted-foreground">[Pre-Prod v0.1]</span>
        </span>

        <div className="flex items-center gap-6">
          <a href="#ecosystem" className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground">
            Ecosystem
          </a>
          <a href="#manifesto" className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground">
            Manifesto
          </a>
          <a
            href="#book"
            className="bg-primary text-primary-foreground px-4 py-1.5 font-mono text-xs font-medium transition-colors hover:bg-foreground"
          >
            Book Demo
          </a>
        </div>
      </div>
    </header>
  );
}
