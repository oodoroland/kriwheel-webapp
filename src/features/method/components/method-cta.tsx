import Link from "next/link";

import { Button } from "@/components/shared/button";
import { CtaSection } from "@/components/shared/cta-section";
import { Icon } from "@/components/shared/icon";

export function MethodCta() {
  return (
    <CtaSection
      title={
        <>
          Ready to Audit Your
          <br />
          <span className="text-secondary italic">Patient Journey</span>?
        </>
      }
      description="Schedule a consultation with a senior strategist to identify the friction points in your current digital infrastructure."
      action={
        <Button
          variant="accent"
          size="lg"
          href="/consultation#booking"
          className="w-full sm:w-auto"
        >
          Book Strategy Session
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
