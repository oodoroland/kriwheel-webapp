import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const pillars = [
  {
    icon: "shield",
    title: "Security",
    body: "Access controls and data protection built in from the first line of code.",
  },
  {
    icon: "monitoring",
    title: "Reliability",
    body: "Systems designed to keep running under real operational load.",
  },
  {
    icon: "database",
    title: "Data integrity",
    body: "Accurate, consistent data you can actually make decisions on.",
  },
  {
    icon: "tune",
    title: "Maintainability",
    body: "Software built to evolve with your organization, not lock you in.",
  },
];

export function Trust() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-primary text-on-primary relative overflow-hidden">
      <div className="absolute inset-0 method-grid opacity-5" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(15,118,110,0.10), transparent 70%)",
        }}
      />
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <Reveal className="max-w-2xl mb-unit-2xl md:mb-unit-3xl">
          <span className="text-secondary font-mono text-xs tracking-widest uppercase font-bold mb-4 block">
            Thoughtful Engineering
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Built to be trusted with healthcare data.
          </h2>
          <p className="text-white/60 mt-4 text-body-lg leading-relaxed">
            Healthcare software needs more than ordinary development. We earn
            trust through engineering — not marketing claims.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 100}
              className="bg-white/5 border border-white/10 rounded-eight p-unit-lg hover:bg-white/[0.07] transition-colors"
            >
              <div className="w-12 h-12 rounded-eight bg-secondary/15 flex items-center justify-center mb-unit-md">
                <Icon name={pillar.icon} className="text-secondary text-2xl" />
              </div>
              <h4 className="font-display text-lg font-bold mb-2">
                {pillar.title}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
