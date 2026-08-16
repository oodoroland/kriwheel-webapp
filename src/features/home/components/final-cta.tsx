import Link from "next/link";

import { Button } from "@/components/shared/button";
import { CtaSection } from "@/components/shared/cta-section";
import { Icon } from "@/components/shared/icon";

export function FinalCta() {
  return (
    <CtaSection
      id="consultation"
      title={
        <>
          Let’s Explore What’s{" "}
          <span className="text-secondary italic">Possible</span> Together.
        </>
      }
      description="Take the first step toward clinical clarity. Schedule a 45-minute diagnostic session with our strategy team."
      action={
        <Button
          variant="accent"
          size="lg"
          href="/consultation#booking"
          className="w-full sm:w-auto"
        >
          Request Strategy Call
        </Button>
      }
      secondary={
        <Link
          href="/contact"
          className="text-white/50 hover:text-white font-mono text-sm tracking-widest transition-colors flex items-center gap-2"
        >
          OR SEND US A MESSAGE <Icon name="arrow_forward" className="text-sm" />
        </Link>
      }
    />
  );
}
