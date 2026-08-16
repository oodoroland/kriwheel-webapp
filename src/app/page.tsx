import { MethodSection } from "@/components/shared/method-section";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import {
  CaseStudies,
  FinalCta,
  Hero,
  Impact,
  Insights,
  Opportunities,
  PatientJourney,
} from "@/features/home";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PatientJourney />
        <Opportunities />
        <Impact />
        <MethodSection />
        <CaseStudies />
        <Insights />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
