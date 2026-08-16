import Link from "next/link";

import { Button } from "@/components/shared/button";
import { CtaSection } from "@/components/shared/cta-section";
import { Icon } from "@/components/shared/icon";

export function ContactCta() {
  return (
    <CtaSection
      title={
        <>
          Have a{" "}
          <span className="text-secondary italic">project</span> in mind?
        </>
      }
      description="If you’re looking to build software, automate a workflow, or connect your systems, the best place to begin is a short discovery call."
      action={
        <Button variant="accent" size="lg" href="/consultation" className="w-full sm:w-auto">
          Discuss a Project
        </Button>
      }
      secondary={
        <Link
          href="/method"
          className="text-white/50 hover:text-white font-mono text-sm tracking-widest transition-colors flex items-center gap-2"
        >
          SEE HOW WE WORK <Icon name="arrow_forward" className="text-sm" />
        </Link>
      }
    />
  );
}
