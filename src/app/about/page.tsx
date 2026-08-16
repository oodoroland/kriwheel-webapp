import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import {
  AboutCta,
  AboutHero,
  AboutMethod,
  Audiences,
  Axioms,
  Commitment,
  Founder,
  MissionVision,
  ProblemStatement,
} from "@/features/about";

export const metadata: Metadata = {
  title: "About Rocodeify",
  description:
    "We bridge the gap between world-class medical expertise and fragmented digital experiences — intelligence before creativity.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <ProblemStatement />
        <MissionVision />
        <Axioms />
        <AboutMethod />
        <Audiences />
        <Founder />
        <Commitment />
        <AboutCta />
      </main>
      <SiteFooter />
    </>
  );
}
