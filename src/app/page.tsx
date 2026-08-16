import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import {
  Capabilities,
  FinalCta,
  Hero,
  HowWeWork,
  Insights,
  Problem,
  Trust,
  WhatWeBuild,
} from "@/features/home";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Capabilities />
        <HowWeWork />
        <WhatWeBuild />
        <Trust />
        <Insights />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
