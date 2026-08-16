import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const capabilities = [
  {
    n: "01",
    icon: "code",
    label: "Build",
    title: "Healthcare Software",
    body: "Software designed around your actual workflows — not generic tools you have to bend to fit.",
    examples: [
      "Clinic & hospital management systems",
      "Patient portals & booking platforms",
      "Operations dashboards",
      "Custom healthcare SaaS",
    ],
  },
  {
    n: "02",
    icon: "bolt",
    label: "Automate",
    title: "Healthcare Automation",
    body: "Turn repetitive manual processes into reliable digital workflows that run on their own.",
    examples: [
      "Appointment reminders & follow-ups",
      "Patient communication (WhatsApp / SMS)",
      "Reporting & data processing",
      "Operational alerts",
    ],
  },
  {
    n: "03",
    icon: "hub",
    label: "Connect",
    title: "Healthcare Integrations",
    body: "Connect the systems you already depend on so information moves without re-entry.",
    examples: [
      "Payment integrations",
      "Laboratory & pharmacy systems",
      "Insurance & records",
      "APIs & data synchronization",
    ],
  },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-unit-2xl md:py-unit-4xl bg-surface mesh-gradient relative"
    >
      <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
      <div className="max-w-container-max mx-auto px-gutter relative">
        <Reveal className="max-w-2xl mb-unit-2xl">
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary font-bold tracking-tight">
            Build. Automate. Connect.
          </h2>
          <p className="text-on-surface-variant mt-4 text-body-lg leading-relaxed">
            Three capabilities that turn fragmented, manual operations into
            connected systems your team can rely on.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.label} delay={i * 100} className="group h-full">
              <div className="bg-white rounded-eight border border-outline-variant/30 p-unit-lg h-full flex flex-col hover:border-secondary hover:shadow-2xl hover:shadow-primary/5 transition-all">
                <div className="flex items-center justify-between mb-unit-md">
                  <div className="w-14 h-14 rounded-eight bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <Icon
                      name={cap.icon}
                      className="text-secondary group-hover:text-white text-2xl transition-colors"
                    />
                  </div>
                  <span className="font-mono text-sm font-bold text-outline-variant">
                    {cap.n}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest">
                  {cap.label}
                </span>
                <h3 className="font-display text-2xl font-bold text-primary mt-1 mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  {cap.body}
                </p>
                <ul className="mt-auto space-y-2 border-t border-outline-variant/30 pt-6">
                  {cap.examples.map((example) => (
                    <li
                      key={example}
                      className="flex gap-2 items-start text-sm text-on-surface-variant"
                    >
                      <Icon
                        name="check"
                        className="text-secondary text-base shrink-0 mt-0.5"
                      />
                      {example}
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
