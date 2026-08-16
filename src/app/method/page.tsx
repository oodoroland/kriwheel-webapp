import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import {
  Contrast,
  Evidence,
  Faq,
  Framework,
  MethodCta,
  MethodHero,
} from "@/features/method";

export const metadata: Metadata = {
  title: "The Rocodeify Method™",
  description:
    "A precision-engineered consulting framework designed to eliminate clinical friction and accelerate digital patient adoption.",
};

export default function MethodPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <MethodHero />
        <Contrast />
        <Framework />
        <Evidence />
        <Faq />
        {/* <MethodCta /> */}
      </main>
      <SiteFooter />
    </>
  );
}
