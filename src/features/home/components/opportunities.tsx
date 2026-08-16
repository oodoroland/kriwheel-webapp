import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const blindspots = [
  {
    icon: "psychology_alt",
    title: "Information Uncertainty",
    body: "Vague procedure descriptions and hidden pricing create “decision paralysis,” causing 68% of patients to abandon their search before even calling.",
    delay: 100,
  },
  {
    icon: "distance",
    title: "Fragmented Trust",
    body: "Inconsistent visual identity across digital touchpoints signals internal chaos, eroding clinical confidence long before the first visit.",
    delay: 200,
  },
  {
    icon: "analytics",
    title: "Data Silos",
    body: "Marketing metrics that don’t talk to clinical outcomes create a distorted view of ROI, leading to wasteful spending on low-intent patient traffic.",
    delay: 300,
  },
  {
    icon: "hub",
    title: "Legacy UX",
    body: "Complex navigation systems designed for administrators, not patients, create unnecessary friction for high-intent users.",
    delay: 400,
  },
];

export function Opportunities() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-white relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-unit-xl">
        <Reveal className="lg:col-span-5">
          <span className="text-error-crimson font-mono text-xs tracking-widest uppercase font-bold mb-4 block">
            Strategic Blindspots
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary font-bold leading-[1.1] mb-unit-md tracking-tight">
            Where Clinics Lose Opportunities.
          </h2>
          <p className="text-on-surface-variant text-body-lg mb-unit-lg leading-relaxed">
            Traditional healthcare views digital as an “add-on”. We view it as
            the primary interface of care that determines your growth ceiling.
          </p>
          <div className="bg-surface-container-low p-unit-md rounded-eight border-2 border-secondary">
            <p className="font-display font-bold italic text-primary">
              “The most expensive patient is the one who almost booked but didn’t
              because of a 3-second load delay.”
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-unit-md">
          {blindspots.map((item) => (
            <Reveal
              key={item.title}
              delay={item.delay}
              className="p-unit-lg border border-outline-variant/30 rounded-eight hover:shadow-2xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-eight bg-surface-container-high flex items-center justify-center mb-unit-md group-hover:bg-secondary/10 transition-colors">
                <Icon
                  name={item.icon}
                  className="text-primary group-hover:text-secondary"
                />
              </div>
              <h4 className="font-display text-2xl font-bold text-primary mb-unit-xs">
                {item.title}
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
