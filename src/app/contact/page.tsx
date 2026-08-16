import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import {
  Channels,
  ContactCta,
  ContactFaq,
  ContactHero,
  ContactInfo,
  EnquiryForm,
} from "@/features/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start the right conversation with Kriwheel — general enquiries, partnerships, media & speaking, and existing-client support. To start a software or automation project, book a discovery call.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactHero />
        <Channels />
        <ContactInfo />
        <EnquiryForm />
        <ContactFaq />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
