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
  title: "About",
  description:
    "Kriwheel is a healthcare technology company. We build software, automate workflows, and connect the systems healthcare organizations depend on.",
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
