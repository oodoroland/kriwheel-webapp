import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const axioms = [
  {
    icon: "architecture",
    iconBg: "bg-primary",
    title: "Strategy before Technology",
    body: "Tools are commodities. Insight is proprietary. We never write a line of code until the strategic blueprint is airtight.",
  },
  {
    icon: "biotech",
    iconBg: "bg-secondary",
    title: "Research before Assumptions",
    body: "We live in the data. We observe patient behavior, analyze friction points, and build on evidence, not intuition.",
  },
  {
    icon: "clinical_notes",
    iconBg: "bg-primary",
    title: "Patient First, Always",
    body: "Digital efficiency is meaningless if it compromises patient trust. Every experience is centered on the human at the other end.",
  },
];

export function Axioms() {
  return (
    <section className="py-unit-4xl bg-surface">
      <div className="max-w-container-max mx-auto px-gutter">
        <Reveal className="text-center mb-unit-3xl">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">
            OUR CORE PHILOSOPHY
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            The Rocodeify Axioms
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
