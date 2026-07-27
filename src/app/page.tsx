// page.tsx — SahayakAI Home v4.2 (Public Beta Transformation)
// NOTE: Navbar and Footer are rendered by layout.tsx — do NOT add them here

import HeroSectionV35 from "./components/HeroSectionV35";
import PublicBetaSection from "./components/PublicBetaSection";
import FoundingMemberSection from "./components/FoundingMemberSection";
import TrustSection from "./components/TrustSection";
import StatsSection from "./components/StatsSection";
import KnowledgeSignals from "./components/KnowledgeSignals";
import FeaturesBento from "./components/FeaturesBento";
import KnowledgeOS from "./components/KnowledgeOS";
import InternalLinkingHub from "./components/InternalLinkingHub";
import AIToolsGrid from "./components/AIToolsGrid";
import FAQAccordion from "./components/FAQAccordion";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSectionV35 />
      <PublicBetaSection />
      <FoundingMemberSection />
      <TrustSection />
      <StatsSection />
      <KnowledgeSignals />
      <FeaturesBento />
      <KnowledgeOS />
      <InternalLinkingHub />
      <AIToolsGrid />
      <FAQAccordion />
      <CTASection />
    </>
  );
}
