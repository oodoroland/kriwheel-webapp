import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const audiences = [
  {
    icon: "stethoscope",
    title: "Specialist Clinics",
    points: [
      "High-value elective surgeries or chronic care.",
      "Need to automate pre-consultation trust.",
    ],
  },
  {
    icon: "domain",
    title: "Private Hospitals",
    points: [
      "Large-scale patient intake and facility tours.",
      "Looking for digital cohesion across departments.",
    ],
    featured: true,
  },
  {
    icon: "biotech",
    title: "Diagnostic Centers",
    points: [
      "High-volume, low-friction digital scheduling.",
      "Requirement for clear, technical result delivery.",
    ],
  },
];

export function Fit() {
  return (
    <section className="py-unit-4xl bg-surface-container/30">
      <div className="max-w-container-max mx-auto px-gutter">
        <Reveal className="text-center mb-unit-2xl">
          <h2 className="font-display text-4xl font-bold text-primary">
            Is This Right for Your Organisation?
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {audiences.map((audience, i) => (
            <Reveal key={audience.title} delay={i * 100}>
              <div
                className={`bg-white rounded-eight border p-unit-lg h-full transition-all ${
                  audience.featured
                    ? "border-secondary/40 shadow-xl md:-translate-y-3"
                    : "border-outline-variant/30 hover:shadow-lg"
                }`}
              >
                <Icon
                  name={audience.icon}
                  className="text-secondary text-4xl mb-6"
                />
                <h3 className="font-display font-bold text-xl text-primary mb-4">
                  {audience.title}
                </h3>
                <ul className="space-y-4">
                  {audience.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 items-start text-sm text-on-surface-variant leading-relaxed"
                    >
                      <Icon
                        name="check_circle"
                        className="text-secondary text-lg shrink-0"
                        filled
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
