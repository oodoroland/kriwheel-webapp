import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const commitments = [
  {
    icon: "verified_user",
    title: "Data Protection",
    body: "Access control and privacy built into every system, not bolted on later.",
  },
  {
    icon: "database",
    title: "Data Integrity",
    body: "Accurate, consistent data moving cleanly between the systems you rely on.",
  },
  {
    icon: "monitoring",
    title: "Reliability",
    body: "Systems built to keep running under real operational load.",
  },
  {
    icon: "settings_suggest",
    title: "Maintainability",
    body: "Software built to evolve with your organization, not lock you in.",
  },
];

export function Commitment() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-primary text-white">
      <div className="max-w-container-max mx-auto px-gutter">
        <Reveal className="max-w-3xl mx-auto text-center mb-unit-3xl">
          <h2 className="font-headline-lg text-headline-lg mb-6">
            The Kriwheel Commitment
          </h2>
          <p className="text-white/70">
            Healthcare software has to be trusted with real operations and real
            data. These standards aren’t optional for us.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="border-t border-white/20 pt-6">
              <Icon name={item.icon} className="text-secondary mb-4" />
              <h4 className="font-headline-md text-headline-md mb-2">
                {item.title}
              </h4>
              <p className="text-stats-md text-white/70">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
