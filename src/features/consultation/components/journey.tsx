import { Reveal } from "@/components/shared/reveal";

const stages = [
  { n: "01", title: "Understand", body: "Defining current roadblocks and patient drop-off points." },
  { n: "02", title: "Experience", body: "Live walkthrough of your current digital entry points." },
  { n: "03", title: "Opportunities", body: "Mapping the 'Low Hanging Fruit' vs Strategic Shifts." },
  { n: "04", title: "Proposals", body: "Tailored recommendations for immediate trust building." },
  { n: "05", title: "Next Steps", body: "Resource allocation and implementation roadmap." },
];

/**
 * The five-stage consultation flow. Same numbered-card DNA as MethodSteps,
 * with a connector line, so it reads as part of the same system.
 */
export function Journey() {
  return (
    <section className="py-unit-4xl bg-background">
      <div className="max-w-container-max mx-auto px-gutter">
        <Reveal className="mb-unit-2xl">
          <h2 className="font-display text-4xl font-bold text-primary">
            The Consultation Journey
          </h2>
          <p className="font-body text-on-surface-variant mt-4 max-w-2xl">
            A structured 5-stage discovery process designed for healthcare
            leadership.
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
