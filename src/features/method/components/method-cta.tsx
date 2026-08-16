import Link from "next/link";

import { Button } from "@/components/shared/button";
import { CtaSection } from "@/components/shared/cta-section";
import { Icon } from "@/components/shared/icon";

export function MethodCta() {
  return (
    <CtaSection
      title={
        <>
          Ready to build the system your
          <br />
          <span className="text-secondary italic">operations</span> need?
        </>
      }
      description="Book a discovery call to map where manual work and disconnected tools are slowing you down — and what to build first."
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
          QUESTIONS ABOUT THE METHOD?{" "}
          <Icon name="arrow_forward" className="text-sm" />
        </Link>
      }
    />
  );
}
