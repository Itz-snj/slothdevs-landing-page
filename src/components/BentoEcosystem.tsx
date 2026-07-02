import { motion } from "framer-motion";

export default function BentoEcosystem() {
  return (
    <section id="ecosystem" className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-16 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Ecosystem
        </p>

        <div className="grid grid-cols-1 gap-px border border-border lg:grid-cols-2">
          {/* SlothOps */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border-b border-border p-8 lg:border-r lg:border-b-0"
          >
            <p className="font-mono text-xs text-muted-foreground mb-4">01</p>
            <h3 className="font-mono text-xl font-bold text-foreground mb-4">SlothOps</h3>
            <p className="text-sm leading-relaxed text-muted-foreground mb-8">
              A closed-loop, production-aware pipeline that converts live application crashes into
              reviewed code fixes — automatically. Listens for real-time error events via Sentry,
              fetches source from GitHub, generates validated fixes using LLM, runs a full QA suite,
              and opens a governed Pull Request — all before a developer even looks at the alert.
            </p>
            <div className="border border-border bg-background p-4 font-mono text-xs text-muted-foreground">
              <p>
                <span className="text-foreground">pipeline:</span>
              </p>
              <p className="pl-4">source: github/acme/api</p>
              <p className="pl-4">steps:</p>
              <p className="pl-6">- lint</p>
              <p className="pl-6">- test --parallel</p>
              <p className="pl-6">- security-audit</p>
              <p className="pl-6">- deploy --edge --regions us,eu</p>
              <p className="pl-4">notify: slack #deploys</p>
            </div>
            <a
              href="https://github.com/Itz-snj/binary"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-xs text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Track SlothOps on GitHub →
            </a>
          </motion.div>

          {/* SlothForge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-8"
          >
            <p className="font-mono text-xs text-muted-foreground mb-4">02</p>
            <h3 className="font-mono text-xl font-bold text-foreground mb-4">SlothForge</h3>
            <p className="text-sm leading-relaxed text-muted-foreground mb-8">
              SlothForge is a{" "}
              <span className="text-foreground font-medium">living software factory</span>. A
              product idea enters as a conversation and exits as a deployed MVP — with the entire
              pipeline staying in sync even when requirements change mid-build. It is the first tool
              that simultaneously reads your{" "}
              <span className="text-foreground font-medium">ticket system</span> and your{" "}
              <span className="text-foreground font-medium">version control system</span> at the
              moment a PR merges, and flags the gap between what was promised and what was actually
              shipped.
            </p>
            {/* Wireframe IDE mock */}
            <div className="border border-border bg-background">
              <div className="flex border-b border-border">
                <div className="w-48 border-r border-border p-3">
                  <p className="font-mono text-[10px] text-muted-foreground mb-2">EXPLORER</p>
                  <p className="font-mono text-xs text-foreground/50">├── src/</p>
                  <p className="font-mono text-xs text-foreground/50">│ ├── index.ts</p>
                  <p className="font-mono text-xs text-foreground/50">│ └── lib/</p>
                  <p className="font-mono text-xs text-foreground/50">├── tests/</p>
                  <p className="font-mono text-xs text-foreground/50">└── package.json</p>
                </div>
                <div className="flex-1 p-3">
                  <p className="font-mono text-[10px] text-muted-foreground mb-2">index.ts</p>
                  <p className="font-mono text-xs text-foreground/40">
                    <span className="text-muted-foreground">1</span> import {"{"} serve {"}"} from
                    './lib/server'
                  </p>
                  <p className="font-mono text-xs text-foreground/40">
                    <span className="text-muted-foreground">2</span>
                  </p>
                  <p className="font-mono text-xs text-foreground/40">
                    <span className="text-muted-foreground">3</span> serve({"{"} port: 3000 {"}"})
                  </p>
                </div>
              </div>
              <div className="p-3 font-mono text-[10px] text-muted-foreground">
                TERMINAL — Ready
              </div>
            </div>
            <a
              href="https://github.com/Itz-snj/hacktropica"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-xs text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Track SlothForge on GitHub →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
