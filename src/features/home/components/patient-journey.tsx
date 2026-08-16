import { Icon } from "@/components/shared/icon";

const stages = [
  {
    label: "01 / DISCOVER",
    title: "The Invisible Search",
    body: "Patients are searching for symptoms, not your brand. If you aren't answering their questions, you don't exist.",
    icon: "search",
  },
  {
    label: "02 / UNDERSTAND",
    title: "The Cognitive Filter",
    body: "Complex medical terminology acts as a barrier. Clarity is the most effective clinical trust signal.",
    icon: "visibility",
  },
  {
    label: "03 / TRUST",
    title: "Validation Loops",
    body: "Patients seek third-party social proof. We architect feedback loops that build institutional authority.",
    icon: "verified",
  },
  {
    label: "04 / DECIDE",
    title: "The Friction Pivot",
    body: "The moment of intent. A confusing booking form is a clinical failure. We eliminate the obstacles.",
    icon: "touch_app",
  },
  {
    label: "05 / CONNECT",
    title: "Retention Sync",
    body: "Ensuring the digital promise matches the clinical reality to foster long-term loyalty.",
    icon: "sync_alt",
  },
];

export function PatientJourney() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-surface mesh-gradient relative">
      <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
      <div className="max-w-container-max mx-auto px-gutter relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-unit-2xl md:mb-unit-3xl gap-unit-md">
          <div className="max-w-2xl">
            <span className="text-secondary font-mono text-xs tracking-widest uppercase font-bold mb-4 block">
              Visual Framework v2.4
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-primary font-bold tracking-tight">
              The Digital Patient Journey<span className="text-secondary">™</span>
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-sm text-body-lg">
            Our signature diagnostic model mapping the transition from anonymous
            seeker to lifelong patient.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stages.map((stage) => (
            <div key={stage.label} className="group cursor-pointer">
              <div className="glass-panel p-unit-lg min-h-[360px] lg:h-[480px] h-full flex flex-col hover:bg-primary transition-all duration-700 group-hover:-translate-y-4">
                <div className="font-mono text-secondary group-hover:text-white/50 text-stats-md mb-auto">
                  {stage.label}
                </div>
                <div className="mb-unit-xl">
                  <h3 className="font-display text-2xl text-primary group-hover:text-white font-bold mb-4">
                    {stage.title}
                  </h3>
                  <p className="text-on-surface-variant group-hover:text-white/70 text-body-md leading-relaxed">
                    {stage.body}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Icon
                    name={stage.icon}
                    className="text-secondary group-hover:text-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
