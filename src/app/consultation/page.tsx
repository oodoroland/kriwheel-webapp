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
  title: "Book Strategy Consultation",
  description:
    "Request your Digital Patient Journey™ Audit. A structured strategy session for healthcare leaders — diagnose the digital friction costing you patient trust.",
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
