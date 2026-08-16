import { Button } from "@/components/shared/button";
import { FaqSection, type FaqItem } from "@/components/shared/faq-section";

const faqs: FaqItem[] = [
  {
    q: "Which page should I use if I want to start a project?",
    a: "If you're looking to build software, automate a workflow, or connect your systems, we recommend booking a discovery call rather than submitting a general enquiry.",
  },
  {
    q: "How quickly will you respond?",
    a: "We aim to respond to all enquiries within one to two business days.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes. We collaborate with healthcare organisations remotely across Africa and beyond, while remaining available for in-person engagements where appropriate.",
  },
  {
    q: "Can I contact you before booking a consultation?",
    a: "Absolutely. If you have questions about our approach, our methodology, or whether we're the right fit, you're welcome to reach out before scheduling a consultation.",
  },
  {
    q: "Do you accept partnership opportunities?",
    a: "Yes. We welcome conversations with healthcare organisations, technology providers, industry associations, and other partners who share our commitment to improving healthcare through thoughtful digital strategy.",
  },
  {
    q: "Where are you based?",
    a: "We're based in Lagos, Nigeria. Our services are delivered remotely and internationally where appropriate, so distance is never a barrier to working together.",
  },
];

export function ContactFaq() {
  return (
    <FaqSection
      eyebrow="Knowledge Base"
      heading="Questions Healthcare Leaders Often Ask"
      items={faqs}
      cta={
        <div className="flex flex-col items-center gap-4">
          <p className="text-on-surface-variant">
            Have a project in mind rather than a general question?
          </p>
          <Button variant="accent" href="/consultation">
            Discuss a Project
          </Button>
        </div>
      }
    />
  );
}
