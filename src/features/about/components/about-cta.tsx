import Link from "next/link";

import { Button } from "@/components/shared/button";
import { CtaSection } from "@/components/shared/cta-section";
import { Icon } from "@/components/shared/icon";

export function AboutCta() {
  return (
    <CtaSection
      title={
        <>
          Ready to evolve your digital{" "}
          <span className="text-secondary italic">patient journey</span>?
        </>
      }
      description="Join the cohort of strategic healthcare leaders shaping the future of patient care."
      action={
        <Button
          variant="accent"
          size="lg"
          href="/consultation#booking"
          className="w-full sm:w-auto"
        >
          Book a Strategy Consultation
        </Button>
      }
      secondary={
        <Link
          href="/contact"
          className="text-white/50 hover:text-white font-mono text-sm tracking-widest transition-colors flex items-center gap-2"
        >
          OR START A CONVERSATION <Icon name="arrow_forward" className="text-sm" />
        </Link>
      }
    />
  );
}
