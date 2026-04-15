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
      {
        name: "description",
        content:
          "SlothForge — the first tool that reads both your ticket system and version control to tell you at merge time whether what you shipped matches what you said you'd build.",
      },
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
