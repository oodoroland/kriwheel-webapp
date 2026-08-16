import { Reveal } from "@/components/shared/reveal";

const steps = [
  { n: "01", title: "Understand", body: "We map how your organization actually works — the people, steps, and handoffs." },
  { n: "02", title: "Design", body: "We design systems around your workflows, not the other way round." },
  { n: "03", title: "Build", body: "We engineer software that holds up under real operational load." },
  { n: "04", title: "Automate", body: "We remove the repetitive work that slows your team down." },
  { n: "05", title: "Integrate", body: "We connect the tools and data you already rely on." },
  { n: "06", title: "Support", body: "We stay after launch as your operations grow and change." },
];

export function HowWeWork() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-surface-container-low overflow-hidden relative">
      <div className="max-w-container-max mx-auto px-gutter relative">
        <Reveal className="text-center mb-unit-2xl md:mb-unit-3xl">
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">
            How We Work
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-primary font-bold tracking-tight">
            From workflow to working system.
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mt-4 text-body-lg">
            A practical process that starts with your problem and ends with
            software your team relies on.
          </p>
        </Reveal>

        <div className="relative mt-unit-2xl">
          <div className="absolute top-12 left-0 w-full h-[2px] bg-outline-variant/30 hidden lg:block" />
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
      </div>
    </section>
  );
}
