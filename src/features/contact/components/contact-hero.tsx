import { Button } from "@/components/shared/button";
import { PageHero } from "@/components/shared/page-hero";

export function ContactHero() {
  return (
    <PageHero
      image="/images/screen1.png"
      eyebrow="Contact"
      scrollLabel="Scroll to Connect"
      title={
        <>
          Let’s Start the{" "}
          <span className="text-secondary italic">Right Conversation</span>
        </>
      }
      description="Every conversation begins differently. Whether you have a question, a partnership opportunity, a media enquiry, or wish to discuss healthcare digital strategy, we’re glad to hear from you."
      actions={
        <>
          <Button variant="accent" href="/consultation">
            Book Strategy Consultation
          </Button>
          <Button variant="ghost" href="#enquiry">
            Send a General Enquiry
          </Button>
        </>
      }
    />
  );
}
