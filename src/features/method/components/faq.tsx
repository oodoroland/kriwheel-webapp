import { Button } from "@/components/shared/button";
import { FaqSection, type FaqItem } from "@/components/shared/faq-section";

const faqs: FaqItem[] = [
  {
    q: "How is this different from a generic software agency?",
    a: "Generic agencies build features and configure off-the-shelf tools. We start with your workflows and build systems around how you actually operate - with the automation and integrations to match.",
  },
  {
    q: "Does this work for small clinics as well as larger organisations?",
    a: "Yes. The approach scales to your size, goals, and complexity. The principles stay the same; the depth of the build is tailored to the situation.",
  },
  {
    q: "What if we already have systems in place?",
    a: "That's often where we begin. The goal isn't to rip out what works - it's to connect it, automate around it, and fill the gaps that force your team to work by hand.",
  },
  {
    q: "Is this only for building new software?",
    a: "No. The same approach covers automation, integrations, and connecting the tools you already depend on - not just building from scratch.",
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
            The clearest way to see how this applies to your organisation is a
            short discovery call.
          </p>
          <Button variant="accent" href="/consultation#booking">
            Discuss a Project
          </Button>
        </div>
      }
    />
  );
}
