import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const signals = [
  "Re-typing the same patient details into three different systems",
  "Running operations on spreadsheets, WhatsApp, and paper",
  "Staff calling patients one by one for reminders and follow-ups",
  "No clear view of what’s actually happening day to day",
  "Tools that don’t talk to your lab, pharmacy, or payments",
  "Software your team has to work around instead of with",
];

export function Problem() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-white relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-start">
        <Reveal className="lg:col-span-5">
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">
            The Problem
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary font-bold leading-[1.1] tracking-tight mb-unit-md">
            Healthcare runs on parts that don’t talk to each other.
          </h2>
          <p className="text-on-surface-variant text-body-lg leading-relaxed">
            Reception, records, labs, pharmacy, billing, follow-ups - each one
            critical, each often on its own system. When they don’t connect,
            your team fills the gaps by hand, patients wait, and management
            loses visibility.
          </p>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal className="mb-unit-md">
            <p className="font-display font-bold text-primary text-lg">
              Sound familiar?
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {signals.map((signal, i) => (
              <Reveal
                key={signal}
                delay={(i % 2) * 80}
                className="flex gap-4 items-start bg-surface-container/30 rounded-eight border border-outline-variant/30 p-unit-md"
              >
                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon
                    name="close"
                    className="text-on-surface-variant/60 text-lg"
                  />
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {signal}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
