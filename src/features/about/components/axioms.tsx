import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const axioms = [
  {
    icon: "account_tree",
    iconBg: "bg-primary",
    title: "Solve the workflow, not the feature",
    body: "We build around what you're actually trying to accomplish - not a checklist of features that look good in a demo.",
  },
  {
    icon: "hub",
    iconBg: "bg-secondary",
    title: "Connect the moving parts",
    body: "We prefer coherent systems over isolated tools that don't talk. Information should move without being re-typed.",
  },
  {
    icon: "shield",
    iconBg: "bg-primary",
    title: "Earn trust through engineering",
    body: "Security, reliability, and data integrity aren't add-ons. In healthcare, they're the foundation everything else sits on.",
  },
];

export function Axioms() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-surface">
      <div className="max-w-container-max mx-auto px-gutter">
        <Reveal className="text-center mb-unit-3xl">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">
            OUR PRINCIPLES
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            How We Build
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-md">
          {axioms.map((axiom, i) => (
            <Reveal key={axiom.title} delay={i * 100}>
              <div className="glass-light p-unit-lg rounded-eight hover:translate-y-[-8px] transition-all duration-500 group h-full">
                <div
                  className={`w-12 h-12 ${axiom.iconBg} text-white rounded-eight flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon name={axiom.icon} filled />
                </div>
                <h4 className="font-headline-md text-headline-md mb-4 text-primary">
                  {axiom.title}
                </h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {axiom.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
