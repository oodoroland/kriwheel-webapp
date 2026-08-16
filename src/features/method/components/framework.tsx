"use client";

import { useState } from "react";

import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const stages = [
  {
    n: "01",
    title: "Understand",
    purpose: "We map how your organization actually operates - the people, steps, and handoffs.",
    deliverable: "Workflow Map",
    impact: "Shared clarity",
  },
  {
    n: "02",
    title: "Design",
    purpose: "We design systems around your workflows, not the other way round.",
    deliverable: "System Blueprint",
    impact: "Aligned scope",
  },
  {
    n: "03",
    title: "Build",
    purpose: "We engineer software that holds up under real operational load.",
    deliverable: "Working software",
    impact: "Fit for reality",
  },
  {
    n: "04",
    title: "Automate",
    purpose: "We replace the repetitive manual work slowing your team down.",
    deliverable: "Automated workflows",
    impact: "Time returned",
  },
  {
    n: "05",
    title: "Integrate",
    purpose: "We connect the tools and data you already depend on.",
    deliverable: "Connected systems",
    impact: "No re-entry",
  },
  {
    n: "06",
    title: "Support",
    purpose: "We keep systems reliable and evolving as your organization grows.",
    deliverable: "Ongoing support",
    impact: "Built to last",
  },
];

export function Framework() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="methodology" className="py-unit-2xl md:py-unit-4xl bg-white method-grid">
      <div className="max-w-container-max mx-auto px-gutter">
        <Reveal className="max-w-3xl mb-20">
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest">
            The Framework
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
            Six stages, from problem to working system.
          </h2>
          <p className="text-on-surface-variant">
            Tap any stage. Each one turns an operational problem into something
            your team can rely on.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, i) => {
            const isActive = active === i;
            return (
              <Reveal key={stage.n} delay={i * 100} className="group">
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : i)}
                  aria-expanded={isActive}
                  className={`w-full text-left glass-light p-8 rounded-eight border transition-all duration-500 h-full overflow-hidden cursor-pointer ${
                    isActive
                      ? "border-secondary"
                      : "border-outline-variant/30 hover:border-secondary"
                  }`}
                >
                  <div className="flex justify-between items-start mb-12">
                    <span
                      className={`font-mono text-3xl font-bold transition-colors ${
                        isActive
                          ? "text-secondary"
                          : "text-primary/10 group-hover:text-secondary"
                      }`}
                    >
                      {stage.n}
                    </span>
                    <Icon
                      name="north_east"
                      className={`text-on-surface-variant transition-transform ${
                        isActive ? "rotate-45" : "group-hover:rotate-45"
                      }`}
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-4">
                    {stage.title}
                  </h3>
                  <div
                    className={`space-y-6 overflow-hidden transition-all duration-500 ${
                      isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div>
                      <p className="text-xs font-bold text-secondary uppercase mb-2">
                        Purpose
                      </p>
                      <p className="text-sm text-on-surface-variant">
                        {stage.purpose}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-background rounded-eight">
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">
                          Deliverable
                        </p>
                        <p className="text-xs font-bold">{stage.deliverable}</p>
                      </div>
                      <div className="p-4 bg-background rounded-eight">
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">
                          Outcome
                        </p>
                        <p className="text-xs font-bold">{stage.impact}</p>
                      </div>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
