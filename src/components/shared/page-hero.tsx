import type { ReactNode } from "react";

type PageHeroProps = {
  /** Background image URL (local /images/… or remote). */
  image: string;
  /** Small mono eyebrow label above the headline. */
  eyebrow: string;
  /** Headline - accepts accent <span>s. */
  title: ReactNode;
  /** Optional supporting paragraph. */
  description?: string;
  /** Call-to-action buttons. */
  actions: ReactNode;
  /** Label for the bottom-left scroll indicator. */
  scrollLabel?: string;
};

/**
 * The single source of truth for page heroes. Every route's hero renders from
 * this so they share one design: dark `bg-primary` section, one background
 * image (grayscale + screen blend), left-aligned content on a 12-col grid,
 * line+mono eyebrow, and a bottom-left vertical scroll indicator.
 */
export function PageHero({
  image,
  eyebrow,
  title,
  description,
  actions,
  scrollLabel = "Scroll to Explore",
}: PageHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-24 overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src={image}
          className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
        />
      </div>

      <div className="relative max-w-container-max mx-auto px-gutter z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-10 lg:col-span-8 flex flex-col gap-unit-md">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-secondary" />
            <span className="font-mono text-xs text-secondary tracking-[0.3em] uppercase font-bold">
              {eyebrow}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1.08] text-on-primary font-bold tracking-tight text-balance">
            {title}
          </h1>

          {description && (
            <p className="font-body text-lg md:text-2xl text-on-primary/70 max-w-2xl leading-relaxed mt-2 md:mt-4">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-unit-lg md:mt-unit-xl">
            {actions}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-gutter hidden md:block">
        <div className="flex flex-col items-center gap-4">
          <span className="text-white/20 text-xs font-mono uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
            {scrollLabel}
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-secondary to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
}
