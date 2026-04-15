import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section id="manifesto" className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Manifesto
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl"
        >
          <h2 className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
            Slow is smooth. Smooth is fast.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            We don't ship half-baked features to hit a sprint deadline. We build things properly,
            test them obsessively, and release when they're actually ready. That means fewer
            releases, but each one works.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We're not trying to disrupt anything. We're just tired of tools that get in the way. So
            we're making ones that don't.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-px border border-border">
            {[
              { value: "2", label: "Products in progress" },
              { value: "0", label: "Shipped to production" },
              { value: "∞", label: "Feedback welcome" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card p-6 text-center">
                <p className="font-mono text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
