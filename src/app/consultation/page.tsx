import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import {
  BookingForm,
  Challenge,
  ConsultationFaq,
  ConsultationHero,
  Fit,
  Journey,
  Outcomes,
} from "@/features/consultation";

export const metadata: Metadata = {
  title: "Discuss a Project",
  description:
    "Book a discovery call with Kriwheel. In one focused session we map where manual work and disconnected systems are slowing your healthcare operations — and what to build, automate, or connect first.",
};

export default function ConsultationPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ConsultationHero />
        <Journey />
        <Fit />
        <Challenge />
        <Outcomes />
        <BookingForm />
        <ConsultationFaq />
      </main>
      <SiteFooter />
    </>
  );
}
