import { Reveal } from "@/components/shared/reveal";

const steps = [
  { n: "01", title: "Understand", body: "We map how your organization actually operates today." },
  { n: "02", title: "Design", body: "We design systems around your workflows, not the reverse." },
  { n: "03", title: "Build", body: "We engineer software that holds up under real load." },
  { n: "04", title: "Automate", body: "We remove the repetitive work slowing your team down." },
  { n: "05", title: "Integrate", body: "We connect the tools and data you already rely on." },
  { n: "06", title: "Support", body: "We keep systems reliable as your organization grows." },
];

/**
 * The six Kriwheel Method™ step cards (with connector line). Shared so every
 * page presents identical card items - pages supply their own section heading.
 */
export function MethodSteps() {
  return (
    <div className="relative mt-unit-2xl">
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant/30 hidden lg:block" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 100} className="group">
            <div className="bg-white p-unit-md rounded-eight border border-outline-variant/30 flex flex-col items-center text-center hover:border-secondary transition-all group-hover:shadow-xl relative z-10 h-full">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-mono text-sm font-bold mb-4 group-hover:bg-secondary transition-colors">
                {step.n}
              </div>
              <h5 className="font-display font-bold text-primary text-lg mb-2">
                {step.title}
              </h5>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
