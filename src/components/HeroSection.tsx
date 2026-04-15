import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            We are building tools that don't suck.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Currently building SlothForge (IDE) and SlothOps (Pipelines). We're in
            pre-prod. Hop on a call with the engineers and tell us what you actually need.
          </p>

          <a
            href="#book"
            className="mt-8 inline-block border border-border bg-primary text-primary-foreground px-6 py-3 font-mono text-sm font-medium transition-colors hover:bg-foreground"
          >
            Schedule a Developer Chat →
          </a>
        </motion.div>

        {/* Terminal mock */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="border border-border bg-card"
        >
          <div className="flex items-center border-b border-border px-4 py-2">
            <span className="font-mono text-[10px] text-muted-foreground">
              ~/slothdevs — bash — 80×24
            </span>
          </div>
          <div className="p-5 font-mono text-xs leading-relaxed text-muted-foreground">
            <p><span className="text-foreground">$</span> sloth init --project acme-api</p>
            <p className="text-muted-foreground">→ scaffolding project...</p>
            <p className="text-muted-foreground">→ installing deps (47 packages)</p>
            <p className="text-muted-foreground">→ configuring pipeline</p>
            <p className="mt-3"><span className="text-foreground">$</span> sloth ops deploy --env staging</p>
            <p className="text-muted-foreground">→ building container  <span className="text-foreground">done</span>  1.2s</p>
            <p className="text-muted-foreground">→ security scan       <span className="text-foreground">pass</span>  0.8s</p>
            <p className="text-muted-foreground">→ deploying to edge   <span className="text-foreground">done</span>  3.1s</p>
            <p className="text-muted-foreground">→ health check        <span className="text-foreground">pass</span></p>
            <p className="mt-3"><span className="text-foreground">$</span> <span className="animate-pulse">_</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
