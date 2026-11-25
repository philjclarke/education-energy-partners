import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { EnergyDayChart } from "@/components/sections/EnergyDayChart";
import { IntroSplit } from "@/components/sections/IntroSplit";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { FundingMatrix } from "@/components/sections/FundingMatrix";
import { TrustPortfolio } from "@/components/sections/TrustPortfolio";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ExpertiseEvidence } from "@/components/sections/ExpertiseEvidence";
import { CtaBand } from "@/components/sections/CtaBand";
import { home } from "@/content/home";

export const metadata: Metadata = {
  title: { absolute: `Education Energy Partners | ${home.seo.title}` },
  description: home.seo.description,
};

export default function HomePage() {
  return (
    <>
      <Hero {...home.hero} overlay={<EnergyDayChart />} />
      <IntroSplit {...home.intro} />
      <FeatureCards {...home.solutions} />
      <FundingMatrix {...home.funding} />
      <TrustPortfolio {...home.trusts} />
      <ProcessSteps {...home.process} />
      <ExpertiseEvidence {...home.expertise} />
      <CtaBand {...home.start} lookupTeaser />
    </>
  );
}
