// page.tsx — SahayakAI Home v4.1
// NOTE: Navbar and Footer are rendered by layout.tsx — do NOT add them here

import HeroSectionV35 from "./components/HeroSectionV35";
import StatsSection from "./components/StatsSection";
import KnowledgeSignals from "./components/KnowledgeSignals";
import FeaturesBento from "./components/FeaturesBento";
import InteractiveDemo from "./components/InteractiveDemo";
import KnowledgeOS from "./components/KnowledgeOS";
import InternalLinkingHub from "./components/InternalLinkingHub";
import AIToolsGrid from "./components/AIToolsGrid";
import FAQAccordion from "./components/FAQAccordion";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSectionV35 />
      <StatsSection />
      <KnowledgeSignals />
      <FeaturesBento />
      <InteractiveDemo />
      <KnowledgeOS />
      <InternalLinkingHub />
      <AIToolsGrid />
      <FAQAccordion />
      <CTASection />
    </>
  );
}
