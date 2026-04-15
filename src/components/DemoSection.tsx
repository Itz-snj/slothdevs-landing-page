import { motion } from "framer-motion";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";

export default function DemoSection() {
  return (
    <section id="early-access" className="relative px-6 py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[700px] rounded-full opacity-15 blur-[100px]" style={{ background: "radial-gradient(ellipse, oklch(0.78 0.18 200), oklch(0.55 0.25 290), transparent)" }} />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1.0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glow-border-card rounded-3xl p-1"
          style={{ background: "linear-gradient(135deg, oklch(0.14 0.01 260 / 80%), oklch(0.18 0.02 280 / 60%))" }}
        >
          <div className="rounded-[1.35rem] bg-card/90 p-10 text-center backdrop-blur-sm sm:p-14">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Calendar size={13} />
              Limited Slots Available
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Join the Journey
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Talk directly to the devs building SlothDevs. Book a live demo, share
              your ideas, and help shape the tools before they launch.
            </p>

            {/* Mock chat interface */}
            <div className="mx-auto mt-10 max-w-md rounded-xl border border-border bg-background/60 p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                  <MessageCircle size={14} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-foreground">SlothDevs Team</p>
                  <p className="text-[10px] text-muted-foreground">Usually responds within minutes</p>
                </div>
                <span className="ml-auto inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
              </div>

              <div className="space-y-3 text-left">
                <div className="rounded-lg rounded-tl-none bg-accent px-4 py-2.5 text-sm text-foreground">
                  Hey! 👋 We&rsquo;d love to show you what we&rsquo;re building. Pick a time that works for you.
                </div>
                <div className="ml-auto max-w-[70%] rounded-lg rounded-tr-none bg-primary/20 px-4 py-2.5 text-sm text-foreground">
                  Sounds great — what about this week?
                </div>
                <div className="rounded-lg rounded-tl-none bg-accent px-4 py-2.5 text-sm text-muted-foreground">
                  <span className="animate-pulse">typing...</span>
                </div>
              </div>
            </div>

            <a
              href="mailto:hello@slothdevs.dev"
              className="btn-glow mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-background transition-all"
            >
              Book a Demo Call
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
