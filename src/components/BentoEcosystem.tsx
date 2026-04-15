import { motion } from "framer-motion";
import { Cpu, Layers, Zap, Eye, Rocket, Users } from "lucide-react";

const cards = [
  {
    icon: Cpu,
    title: "SlothOps",
    description: "AI-driven pipeline automation. From build to deploy, every step is intelligent and self-healing.",
    span: "md:col-span-2",
    glow: "cyan",
  },
  {
    icon: Layers,
    title: "SlothForge",
    description: "A next-gen developer environment built for speed, collaboration, and deep AI integration.",
    span: "md:col-span-1",
    glow: "purple",
  },
  {
    icon: Zap,
    title: "DX First",
    description: "Every API, every CLI, every interface — designed to feel invisible. Tools that just work.",
    span: "md:col-span-1",
    glow: "cyan",
  },
  {
    icon: Eye,
    title: "Built in Public",
    description: "We share our roadmap, our mistakes, and our progress. Full transparency, zero gatekeeping.",
    span: "md:col-span-1",
    glow: "purple",
  },
  {
    icon: Rocket,
    title: "Pre-Production Access",
    description: "Get early access to prototypes, give direct feedback, and shape the tools before launch.",
    span: "md:col-span-1",
    glow: "cyan",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function BentoEcosystem() {
  return (
    <section id="ecosystem" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-widest uppercase text-primary">
            Ecosystem
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Two products. One vision.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Everything we&rsquo;re building is designed to work together — a unified
            developer experience from code to cloud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`bento-card group rounded-2xl p-8 transition-all duration-300 ${card.span}`}
            >
              <div className={`mb-5 inline-flex rounded-xl bg-accent p-3 ${card.glow === "cyan" ? "glow-cyan" : "glow-purple"}`}>
                <card.icon size={22} className={card.glow === "cyan" ? "text-primary" : "text-neon-purple"} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{card.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
