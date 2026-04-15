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
      { title: "SlothDevs — The Next Era of Developer Tooling" },
      { name: "description", content: "SlothDevs builds an ecosystem of developer-friendly tools. Pre-production access available — book a live demo with the team." },
      { property: "og:title", content: "SlothDevs — The Next Era of Developer Tooling" },
      { property: "og:description", content: "Unhurried, Unmatched. Explore SlothOps and SlothForge before anyone else." },
    ],
  }),
});

function Index() {
  return (
    <div className="grain-overlay relative min-h-screen bg-background text-foreground">
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
