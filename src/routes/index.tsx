import { createFileRoute } from "@tanstack/react-router";
import FloatingNav from "../components/FloatingNav";
import HeroSection from "../components/HeroSection";
import StackMarquee from "../components/StackMarquee";
import BentoEcosystem from "../components/BentoEcosystem";
import VisionSection from "../components/VisionSection";
import DemoSection from "../components/DemoSection";
import FooterSection from "../components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SlothDevs — Developer tools that don't suck" },
      { name: "description", content: "SlothDevs builds SlothForge and SlothOps. Pre-production — book a call with the engineers." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNav />
      <HeroSection />
      <StackMarquee />
      <BentoEcosystem />
      <VisionSection />
      <DemoSection />
      <FooterSection />
    </div>
  );
}
