export default function FooterSection() {
  return (
    <footer className="px-6 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-3 items-center">
        <div>
          <span className="font-mono text-sm text-foreground">SlothDevs</span>
          <p className="mt-1 text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 sm:justify-center">
          <a href="https://github.com" className="font-mono text-xs text-muted-foreground hover:text-foreground">
            GitHub
          </a>
          <a href="https://discord.com" className="font-mono text-xs text-muted-foreground hover:text-foreground">
            Discord
          </a>
          <a href="https://twitter.com" className="font-mono text-xs text-muted-foreground hover:text-foreground">
            Twitter
          </a>
        </div>

        <div className="flex items-center gap-2 sm:justify-end">
          <span className="inline-block h-2 w-2 rounded-full bg-[--status-green] animate-pulse" />
          <span className="font-mono text-xs text-muted-foreground">
            System Status: Pre-Alpha
          </span>
        </div>
      </div>
    </footer>
  );
}
