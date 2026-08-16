import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const commitments = [
  {
    icon: "verified_user",
    title: "HIPAA & GDPR",
    body: "Privacy is foundational, not optional. Full compliance in every pixel.",
  },
  {
    icon: "analytics",
    title: "Data Integrity",
    body: "Ensuring the clean, secure flow of patient data across all platforms.",
  },
  {
    icon: "accessibility_new",
    title: "Universal Access",
    body: "WCAG 2.1 AAA compliance for truly inclusive patient care.",
  },
  {
    icon: "speed",
    title: "Zero Latency",
    body: "Performance optimized for critical care environments.",
  },
];

export function Commitment() {
  return (
    <section className="py-unit-4xl bg-primary text-white">
      <div className="max-w-container-max mx-auto px-gutter">
        <Reveal className="max-w-3xl mx-auto text-center mb-unit-3xl">
          <h2 className="font-headline-lg text-headline-lg mb-6">
            The Rocodeify Commitment
          </h2>
          <p className="text-white/70">
            Our standards are non-negotiable. Every partnership is held to the
            highest tier of clinical and digital compliance.
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
