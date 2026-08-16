import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const outcomes = [
  {
    icon: "account_tree",
    title: "A clear picture of your operations",
    body: "Where manual work and disconnected tools are quietly costing you time.",
  },
  {
    icon: "list_alt",
    title: "What to build first",
    body: "A prioritized list of what's worth building, automating, or connecting.",
  },
  {
    icon: "route",
    title: "A practical plan",
    body: "Realistic scope and sequencing for an implementation that fits your team.",
  },
  {
    icon: "handshake",
    title: "An honest answer",
    body: "A straight take on whether custom software is even the right move for you.",
  },
];

export function Outcomes() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-background">
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
