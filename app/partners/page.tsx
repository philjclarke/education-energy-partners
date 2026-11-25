import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { PartnerModel } from "@/components/sections/PartnerModel";
import { IntroSplit } from "@/components/sections/IntroSplit";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { CtaBand } from "@/components/sections/CtaBand";
import { partners } from "@/content/partners";

export const metadata: Metadata = {
  title: partners.seo.title,
  description: partners.seo.description,
};

/**
 * Standalone supplier landing homepage for LinkedIn traffic.
 * UTM attribution is captured on the partner contact form (built with the forms step).
 */
export default function PartnersPage() {
  return (
    <>
      <Hero tone="dark" {...partners.hero} aside={<PartnerModel {...partners.model} />} />
      <IntroSplit id="opportunity" {...partners.opportunity} />
      <FeatureCards {...partners.expertise} />
      <FeatureCards tone="navy" {...partners.funding} />
      <CtaBand {...partners.network} />
    </>
  );
}
