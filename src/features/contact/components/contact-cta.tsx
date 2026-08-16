import Link from "next/link";

import { Button } from "@/components/shared/button";
import { CtaSection } from "@/components/shared/cta-section";
import { Icon } from "@/components/shared/icon";

export function ContactCta() {
  return (
    <CtaSection
      title={
        <>
          Looking for{" "}
          <span className="text-secondary italic">Strategic Guidance</span>?
        </>
      }
      description="If your goal is to improve patient experience, strengthen digital trust, or plan a healthcare digital transformation, the best place to begin is with a Strategy Consultation."
      action={
        <Button variant="accent" size="lg" href="/consultation" className="w-full sm:w-auto">
          Book Strategy Consultation
        </Button>
      }
      secondary={
        <Link
          href="/method"
          className="text-white/50 hover:text-white font-mono text-sm tracking-widest transition-colors flex items-center gap-2"
        >
          EXPLORE THE ROCODEIFY METHOD™{" "}
          <Icon name="arrow_forward" className="text-sm" />
        </Link>
      }
    />
  );
}
