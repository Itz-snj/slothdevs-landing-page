import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function VisionSection() {
  return (
    <section id="vision" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium tracking-widest uppercase text-primary">
            Vision
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Slow is smooth. Smooth is fast.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We reject the move-fast-break-things mentality. SlothDevs is built on the
            belief that deliberate, well-crafted tools compound into extraordinary
            developer experiences. We&rsquo;re taking our time — so you don&rsquo;t have to waste yours.
          </p>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { value: "2", label: "Core Products" },
              { value: "∞", label: "Feedback Loops" },
              { value: "0", label: "Compromises" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card/40 px-6 py-8">
                <p className="text-gradient-hero text-4xl font-bold">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
