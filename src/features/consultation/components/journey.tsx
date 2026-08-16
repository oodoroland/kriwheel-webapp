import { Reveal } from "@/components/shared/reveal";

const stages = [
  { n: "01", title: "Understand", body: "We learn how your organization actually operates today." },
  { n: "02", title: "Map", body: "We trace the workflows, tools, and manual steps in play." },
  { n: "03", title: "Opportunities", body: "We spot what's worth building, automating, or connecting." },
  { n: "04", title: "Proposal", body: "A clear recommendation on what to build first, and why." },
  { n: "05", title: "Next Steps", body: "Scope, sequence, and a realistic path to implementation." },
];

/**
 * The five-stage consultation flow. Same numbered-card DNA as MethodSteps,
 * with a connector line, so it reads as part of the same system.
 */
export function Journey() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-background">
      <div className="max-w-container-max mx-auto px-gutter">
        <Reveal className="mb-unit-2xl">
          <h2 className="font-display text-4xl font-bold text-primary">
            The Discovery Process
          </h2>
          <p className="font-body text-on-surface-variant mt-4 max-w-2xl">
            A structured session that turns operational problems into a concrete
            plan for what to build.
          </p>
        </Reveal>

        <div className="relative mt-unit-2xl">
          <div className="absolute top-12 left-0 w-full h-[2px] bg-outline-variant/30 hidden lg:block" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {stages.map((stage, i) => (
              <Reveal key={stage.n} delay={i * 100} className="group">
                <div className="bg-white p-unit-md rounded-eight border border-outline-variant/30 hover:border-secondary transition-all group-hover:shadow-xl relative z-10 h-full">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-mono text-sm font-bold mb-6 group-hover:bg-secondary transition-colors">
                    {stage.n}
                  </div>
                  <h5 className="font-display font-bold text-primary text-lg mb-2">
                    {stage.title}
                  </h5>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {stage.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
