import { motion } from "framer-motion";

const navLinks = [
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Vision", href: "#vision" },
  { label: "Early Access", href: "#early-access" },
];

export default function FloatingNav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-6 left-1/2 z-40 -translate-x-1/2"
    >
      <div className="glass-nav flex items-center gap-1 rounded-full px-2 py-2">
        <span className="px-3 text-sm font-semibold tracking-tight text-foreground">
          🦥 SlothDevs
        </span>
        <div className="mx-2 h-4 w-px bg-border" />
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#early-access"
          className="btn-glow ml-1 rounded-full px-4 py-1.5 text-sm font-medium text-background transition-all"
        >
          Chat with Devs
        </a>
      </div>
    </motion.nav>
  );
}
