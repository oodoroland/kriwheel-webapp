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
          Let’s build the system your{" "}
          <span className="text-secondary italic">operations</span> need.
        </>
      }
      description="Tell us where the manual work and disconnected tools are slowing you down. We’ll help you map what to build first - no obligation."
      action={
        <Button
          variant="accent"
          size="lg"
          href="/consultation#booking"
          className="w-full sm:w-auto"
        >
          Discuss a Project
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
