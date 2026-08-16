import { Reveal } from "@/components/shared/reveal";

const pillars = [
  {
    label: "OUR MISSION",
    title:
      "To architect digital systems that reflect the precision of modern medicine.",
    body: "We don't just build websites; we design clinical-grade digital environments where every interaction is calculated for impact and empathy.",
  },
  {
    label: "OUR VISION",
    title: "To become the global standard for strategic digital healthcare.",
    body: "Where 'Digital' is no longer a department, but a foundational pillar of the patient outcome strategy.",
  },
];

export function MissionVision() {
  return (
    <section className="py-unit-4xl bg-primary text-white overflow-hidden relative">
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-3xl">
          {pillars.map((pillar) => (
            <Reveal
              key={pillar.label}
              className="border-l border-white/20 pl-unit-lg py-unit-md"
            >
              <span className="font-label-caps text-label-caps text-secondary mb-6 block">
                {pillar.label}
              </span>
              <h3 className="font-headline-md text-headline-md mb-6">
                {pillar.title}
              </h3>
              <p className="font-body-md text-white/70 max-w-md">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
