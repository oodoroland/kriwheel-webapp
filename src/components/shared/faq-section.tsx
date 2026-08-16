"use client";

import { useState, type ReactNode } from "react";

import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

export type FaqItem = { q: string; a: string };

type FaqSectionProps = {
  /** Small mono kicker above the heading. */
  eyebrow?: string;
  heading: string;
  items: FaqItem[];
  /** Optional conversion nudge rendered below the grid. */
  cta?: ReactNode;
};

/**
 * The single source of truth for FAQs across the site. Two-column, single-open
 * accordion (opening one closes any other) with an optional CTA slot beneath —
 * so every FAQ shares one design and every FAQ can end by moving the reader
 * toward the next action.
 */
export function FaqSection({ eyebrow, heading, items, cta }: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(null);
  const mid = Math.ceil(items.length / 2);

  const renderItem = (faq: FaqItem, i: number) => {
    const isOpen = open === i;
    return (
      <Reveal key={faq.q} delay={(i % mid) * 60}>
        <div className="bg-white rounded-eight border border-outline-variant/30 overflow-hidden hover:shadow-xl transition-all duration-300">
          <button
            type="button"
            onClick={() => setOpen(isOpen ? null : i)}
            aria-expanded={isOpen}
            className="w-full flex justify-between items-center gap-4 p-6 cursor-pointer text-left"
          >
            <span className="font-display font-bold text-lg text-primary">
              {faq.q}
            </span>
            <div
              className={`w-9 h-9 rounded-full bg-background flex items-center justify-center transition-transform shrink-0 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <Icon name="expand_more" />
            </div>
          </button>
          <div
            className={`grid transition-all duration-300 ease-out ${
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-6 text-sm text-on-surface-variant leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    );
  };

  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-surface-container/30">
      <div className="max-w-5xl mx-auto px-gutter">
        <Reveal className="text-center mb-16">
          {eyebrow && (
            <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest">
              {eyebrow}
            </span>
          )}
          <h2
            className={`font-display text-4xl font-bold text-primary${
              eyebrow ? " mt-4" : ""
            }`}
          >
            {heading}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4 items-start">
          <div className="space-y-4">
            {items.slice(0, mid).map((faq, i) => renderItem(faq, i))}
          </div>
          <div className="space-y-4">
            {items.slice(mid).map((faq, i) => renderItem(faq, i + mid))}
          </div>
        </div>

        {cta && <div className="mt-16 text-center">{cta}</div>}
      </div>
    </section>
  );
}
