import type { ReactNode } from "react";

import { Reveal } from "@/components/shared/reveal";

type CtaSectionProps = {
  /** Optional anchor id (e.g. "consultation"). */
  id?: string;
  /** Headline - accepts accent <span>s to highlight key words. */
  title: ReactNode;
  /** Supporting paragraph. */
  description: string;
  /** Primary call-to-action button. */
  action: ReactNode;
  /** Optional secondary link beside the button. */
  secondary?: ReactNode;
};

/**
 * The single source of truth for the closing call-to-action. Every page's CTA
 * renders from this so they share one design: a contained dark `bg-primary`
 * card (blueprint grid + teal radial glow) centered on the section, with a
 * highlighted headline, primary button (+ optional secondary link).
 */
export function CtaSection({
  id,
  title,
  description,
  action,
  secondary,
}: CtaSectionProps) {
  return (
    <section id={id} className="py-unit-2xl md:py-unit-4xl relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter">
        <Reveal>
          <div className="bg-primary rounded-eight p-8 sm:p-16 md:p-32 text-center relative overflow-hidden">
            <div className="absolute inset-0 method-grid opacity-5" />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(15,118,110,0.10), transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">
                {title}
              </h2>
              <p className="text-white/60 max-w-xl mx-auto mb-12 text-lg">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {action}
                {secondary}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
