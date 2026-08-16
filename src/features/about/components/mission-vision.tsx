import { Reveal } from "@/components/shared/reveal";

const pillars = [
  {
    label: "OUR MISSION",
    title:
      "To help healthcare organizations operate better through thoughtful software, automation, and connected technology.",
    body: "We don't chase trends. We solve concrete operational problems — the repetitive work, the disconnected tools, the gaps your team fills by hand.",
  },
  {
    label: "OUR VISION",
    title:
      "A healthcare ecosystem where technology connects the people, processes, and systems that make care possible.",
    body: "Where staff aren't held back by software, and information moves cleanly between the systems healthcare runs on.",
  },
];

export function MissionVision() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-primary text-white overflow-hidden relative">
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
