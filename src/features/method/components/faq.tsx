import { Button } from "@/components/shared/button";
import { FaqSection, type FaqItem } from "@/components/shared/faq-section";

const faqs: FaqItem[] = [
  {
    q: "How is this different from hiring a traditional web agency?",
    a: "Traditional agencies often begin with the website. We begin with research, diagnosis, and strategy to understand the business problem before deciding what should be built, improved, or transformed.",
  },
  {
    q: "Does the Method work for small clinics as well as larger organisations?",
    a: "Yes. The methodology scales to the organisation's size, goals, and complexity. The principles stay the same; the depth of research and implementation is tailored to the situation.",
  },
  {
    q: "What if we already have a website?",
    a: "That's often where we begin. The goal isn't automatically to replace what exists, but to identify where digital friction, trust gaps, or missed opportunities are affecting patient experience and performance.",
  },
  {
    q: "Is this methodology only for website projects?",
    a: "No. The Method can guide broader digital initiatives — patient communication, automation, digital transformation, and long-term strategic planning.",
  },
];

export function Faq() {
  return (
    <FaqSection
      eyebrow="Knowledge Base"
      heading="Questions Healthcare Leaders Often Ask"
      items={faqs}
      cta={
        <div className="flex flex-col items-center gap-4">
          <p className="text-on-surface-variant">
            The clearest way to see how the Method applies to your organisation
            is a short strategy session.
          </p>
          <Button variant="accent" href="/consultation#booking">
            Book a Strategy Session
          </Button>
        </div>
      }
    />
  );
}
