import { Button } from "@/components/shared/button";
import { FaqSection, type FaqItem } from "@/components/shared/faq-section";

const faqs: FaqItem[] = [
  {
    q: "Is this a sales call or an actual working session?",
    a: "It's a genuine strategy session. We spend the time diagnosing the friction in your digital patient journey - you leave with specific findings whether or not we work together afterward.",
  },
  {
    q: "How long does it take, and who should attend?",
    a: "Plan for 45 to 60 minutes. It's most valuable with a decision-maker and someone close to your digital operations in the room, but we adapt to whoever is available.",
  },
  {
    q: "What will we walk away with?",
    a: "A clear read on where patients are dropping off, the highest-impact opportunities, and a prioritised set of next steps - practical enough to act on immediately.",
  },
  {
    q: "Do we need to prepare anything?",
    a: "No preparation is required. If you have analytics or specific concerns, bring them; if not, we'll work from your current digital presence.",
  },
  {
    q: "Is there any cost or commitment?",
    a: "The consultation is the start of a conversation, not a contract. We're transparent about scope and investment only if and when a full engagement makes sense.",
  },
  {
    q: "What happens after the consultation?",
    a: "There's no obligation. If it makes sense to continue, we'll outline how an engagement would work. If not, the findings are yours to keep.",
  },
];

export function ConsultationFaq() {
  return (
    <FaqSection
      eyebrow="Before You Book"
      heading="Questions Healthcare Leaders Often Ask"
      items={faqs}
      cta={
        <div className="flex flex-col items-center gap-4">
          <p className="text-on-surface-variant">
            No preparation needed - most leaders book first and bring their
            questions to the session.
          </p>
          <Button variant="accent" href="#booking">
            Book Your Session
          </Button>
        </div>
      }
    />
  );
}
