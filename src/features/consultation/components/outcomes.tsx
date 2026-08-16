import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const outcomes = [
  {
    icon: "analytics",
    title: "Positioning Clarity",
    body: "Understanding how you rank against the modern digital patient expectation.",
  },
  {
    icon: "map",
    title: "Strategic Direction",
    body: "A clear priority list of where to invest your next digital dollar.",
  },
  {
    icon: "diversity_1",
    title: "Patient Empathy Map",
    body: "A breakdown of the friction points causing patient drop-off.",
  },
  {
    icon: "bolt",
    title: "Immediate Wins",
    body: "3 tactical changes you can implement immediately to improve trust.",
  },
];

export function Outcomes() {
  return (
    <section className="py-unit-4xl bg-background">
      <div className="max-w-container-max mx-auto px-gutter">
        <Reveal>
          <div className="bg-surface-container/30 rounded-eight p-unit-xl md:p-unit-3xl border border-outline-variant/30">
            <h2 className="font-display text-4xl font-bold text-primary mb-12 max-w-xl">
              What You’ll Leave With
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {outcomes.map((outcome) => (
                <div key={outcome.title} className="flex gap-4">
                  <Icon
                    name={outcome.icon}
                    className="text-secondary text-2xl shrink-0"
                  />
                  <div>
                    <h4 className="font-display font-bold text-primary mb-1">
                      {outcome.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {outcome.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
