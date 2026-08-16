import { Reveal } from "@/components/shared/reveal";

const metrics = [
  {
    value: "-42%",
    label: "Conversion Attrition",
    body: "Lost revenue from high-intent patients who abandoned the booking flow.",
    delay: 0,
  },
  {
    value: "3.2x",
    label: "CAC Inflation",
    body: "Increase in acquisition costs due to inefficient digital conversion paths.",
    delay: 200,
  },
  {
    value: "$2.4M",
    label: "Opportunity Gap",
    body: "Average annual unrealized revenue for specialized mid-market clinics.",
    delay: 400,
  },
];

export function Impact() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-primary text-on-primary relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="max-w-container-max mx-auto px-gutter relative">
        <div className="text-center mb-unit-2xl md:mb-unit-3xl">
          <span className="text-secondary font-mono text-xs tracking-widest uppercase font-bold mb-4 block">
            The Business Case
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The Cost of Digital Friction
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-xl text-center">
          {metrics.map((metric) => (
            <Reveal key={metric.label} delay={metric.delay}>
              <div className="font-display text-6xl sm:text-7xl md:text-8xl font-bold text-secondary mb-4 tracking-tighter">
                {metric.value}
              </div>
              <h4 className="font-display text-xl font-bold mb-2 uppercase tracking-widest">
                {metric.label}
              </h4>
              <p className="text-white/50 max-w-[280px] mx-auto">{metric.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
