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
              Pipeline automation that handles build, test, security scan, and
              deploy. Point it at a repo and it figures out the rest. No YAML
              marathons. Config is code, and the defaults are sane.
            </p>
            <div className="border border-border bg-background p-4 font-mono text-xs text-muted-foreground">
              <p><span className="text-foreground">pipeline:</span></p>
              <p className="pl-4">source: github/acme/api</p>
              <p className="pl-4">steps:</p>
              <p className="pl-6">- lint</p>
              <p className="pl-6">- test --parallel</p>
              <p className="pl-6">- security-audit</p>
              <p className="pl-6">- deploy --edge --regions us,eu</p>
              <p className="pl-4">notify: slack #deploys</p>
            </div>
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
              A local-first developer workspace. Fast indexing, built-in
              terminal multiplexer, and AI that actually reads your codebase
              instead of guessing. Still early — we're dogfooding it ourselves.
            </p>
            {/* Wireframe IDE mock */}
            <div className="border border-border bg-background">
              <div className="flex border-b border-border">
                <div className="w-48 border-r border-border p-3">
                  <p className="font-mono text-[10px] text-muted-foreground mb-2">EXPLORER</p>
                  <p className="font-mono text-xs text-foreground/50">├── src/</p>
                  <p className="font-mono text-xs text-foreground/50">│   ├── index.ts</p>
                  <p className="font-mono text-xs text-foreground/50">│   └── lib/</p>
                  <p className="font-mono text-xs text-foreground/50">├── tests/</p>
                  <p className="font-mono text-xs text-foreground/50">└── package.json</p>
                </div>
                <div className="flex-1 p-3">
                  <p className="font-mono text-[10px] text-muted-foreground mb-2">index.ts</p>
                  <p className="font-mono text-xs text-foreground/40">
                    <span className="text-muted-foreground">1</span>  import {"{"} serve {"}"} from './lib/server'
                  </p>
                  <p className="font-mono text-xs text-foreground/40">
                    <span className="text-muted-foreground">2</span>  
                  </p>
                  <p className="font-mono text-xs text-foreground/40">
                    <span className="text-muted-foreground">3</span>  serve({"{"} port: 3000 {"}"})
                  </p>
                </div>
              </div>
              <div className="p-3 font-mono text-[10px] text-muted-foreground">
                TERMINAL — Ready
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
