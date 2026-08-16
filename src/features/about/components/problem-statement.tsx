import { Reveal } from "@/components/shared/reveal";

export function ProblemStatement() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-surface-bright relative blueprint-grid">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-unit-2xl items-center">
        <Reveal className="lg:col-span-7">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">
            WHY WE EXIST
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8 max-w-xl">
            Healthcare runs on parts that don’t talk to each other.
          </h2>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            <p>
              Reception, records, labs, pharmacy, billing, follow-ups — each one
              critical, each often on its own system. When they don’t connect,
              teams compensate with spreadsheets, phone calls, paper, and
              repetitive data entry.
            </p>
            <p>
              Kriwheel exists to reduce that friction. We build software,
              automation, and integrations that connect the moving parts of
              healthcare and help organizations operate with greater clarity and
              efficiency.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200} className="lg:col-span-5">
          <div className="relative aspect-square glass-light rounded-eight p-unit-lg flex items-center justify-center border-outline-variant shadow-2xl">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/20" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/20" />
            <div className="text-center px-4">
              <p className="font-label-caps text-label-caps text-secondary mb-4">
                OUR ROLE
              </p>
              <div className="font-display text-3xl font-bold text-primary mb-4 leading-tight">
                Connect. Automate. Improve.
              </div>
              <p className="font-label-caps text-label-caps text-on-surface-variant">
                WE TURN COMPLICATED WORKFLOWS
                <br />
                INTO RELIABLE DIGITAL SYSTEMS
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
