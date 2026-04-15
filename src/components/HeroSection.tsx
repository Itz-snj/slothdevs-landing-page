import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-24">
      {/* Radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(ellipse, oklch(0.78 0.18 200), oklch(0.55 0.25 290), transparent)" }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Pre-Production · Building in Public
        </div>

        <h1 className="text-gradient-hero text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
          The Next Era of Developer&nbsp;Tooling.
          <br />
          Unhurried, Unmatched.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          SlothDevs is in active pre-production. We&rsquo;re building an ecosystem of
          developer-first tools — and we want you to peek behind the curtain before
          anyone else.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#early-access"
            className="btn-glow inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-background transition-all"
          >
            Book a Live Demo
            <ArrowRight size={16} />
          </a>
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Play size={14} />
            Explore Ecosystem
          </a>
        </div>
      </motion.div>

      {/* Floating IDE/Terminal mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="relative z-10 mx-auto mt-20 w-full max-w-5xl"
      >
        <div className="rounded-2xl border border-border bg-card/60 p-1 backdrop-blur-sm" style={{ boxShadow: "0 0 40px rgba(120,119,198,0.3)" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden bg-border">
            {/* SlothForge side */}
            <div className="bg-card p-6">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">SlothForge — IDE</span>
              </div>
              <div className="space-y-2 font-mono text-xs text-muted-foreground">
                <p><span className="text-primary">import</span> {"{"} pipeline {"}"} <span className="text-primary">from</span> <span className="text-neon-purple">'@sloth/ops'</span>;</p>
                <p><span className="text-primary">import</span> {"{"} deploy {"}"} <span className="text-primary">from</span> <span className="text-neon-purple">'@sloth/forge'</span>;</p>
                <p className="opacity-40">{"// "} AI-powered build orchestration</p>
                <p><span className="text-primary">const</span> app = pipeline.<span className="text-neon-cyan">create</span>({"{"}</p>
                <p className="pl-4">target: <span className="text-neon-purple">'production'</span>,</p>
                <p className="pl-4">ai: <span className="text-primary">true</span>,</p>
                <p>{"}"});</p>
                <p className="mt-2"><span className="text-primary">await</span> deploy(app);</p>
              </div>
            </div>
            {/* SlothOps side */}
            <div className="bg-background p-6">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">SlothOps — Pipeline</span>
              </div>
              <div className="space-y-2 font-mono text-xs text-muted-foreground">
                <p><span className="text-primary">▸</span> Initializing AI pipeline...</p>
                <p><span className="text-primary">▸</span> Scanning dependencies <span className="text-neon-cyan">✓</span></p>
                <p><span className="text-primary">▸</span> Running security audit <span className="text-neon-cyan">✓</span></p>
                <p><span className="text-primary">▸</span> Building containers <span className="text-neon-cyan">✓</span></p>
                <p><span className="text-primary">▸</span> Deploying to edge <span className="animate-pulse text-chart-4">...</span></p>
                <p className="mt-2 text-primary">→ Deploy ETA: 12s · 3 regions</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
