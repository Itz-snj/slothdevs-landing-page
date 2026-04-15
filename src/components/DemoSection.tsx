import { motion } from "framer-motion";

export default function DemoSection() {
  return (
    <section id="book" className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border border-border p-10 sm:p-16"
        >
          <h2 className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
            Let's screen-share.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            We're a small team. We want to show you what we have and hear what
            you think. No sales pitch, just a dev walking you through the code.
          </p>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end">
            <div className="flex-1 max-w-md">
              <label className="block font-mono text-xs text-muted-foreground mb-2">
                Your email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
              />
            </div>
            <button className="bg-primary text-primary-foreground px-6 py-3 font-mono text-sm font-medium transition-colors hover:bg-foreground whitespace-nowrap">
              Ping Us →
            </button>
          </div>

          <p className="mt-6 font-mono text-xs text-muted-foreground">
            Or email directly:{" "}
            <a href="mailto:devs@slothdevs.com" className="text-foreground underline">
              devs@slothdevs.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
