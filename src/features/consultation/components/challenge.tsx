import { Reveal } from "@/components/shared/reveal";

const frictions = [
  {
    n: "01",
    title: "Fragmented systems",
    body: "Tools that don't talk to each other, so information gets re-entered by hand.",
  },
  {
    n: "02",
    title: "Repetitive manual work",
    body: "Staff spending hours on tasks software could handle reliably.",
  },
  {
    n: "03",
    title: "No operational visibility",
    body: "Management can't easily see what's actually happening day to day.",
  },
];

/**
 * Dark "why leaders start here" block. Uses the same bg-primary + method-grid
 * + teal radial glow treatment as the shared CTA card, so dark sections match.
 */
export function Challenge() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-primary relative overflow-hidden">
      <div className="absolute inset-0 method-grid opacity-5" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(15,118,110,0.10), transparent 70%)",
        }}
      />

      <div className="max-w-container-max mx-auto px-gutter relative z-10 grid grid-cols-1 md:grid-cols-2 gap-unit-2xl items-center">
        <div>
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest">
            The Challenge
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-8">
            Why Organizations Start Here
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl">
            Most teams don’t need more software - they need their systems to work
            together. That starts with understanding where the friction actually
            is.
          </p>

          <div className="space-y-6">
            {frictions.map((friction) => (
              <div
                key={friction.n}
                className="p-6 bg-white/5 border border-white/10 rounded-eight flex gap-6"
              >
                <div className="font-mono text-sm font-bold text-secondary">
                  {friction.n}
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-lg mb-2">
                    {friction.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {friction.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="relative">
          <div className="aspect-[4/5] rounded-eight overflow-hidden border border-white/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Fragmented healthcare workflows unified into one connected system"
              src="/images/systems.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white rounded-eight p-8 max-w-xs shadow-2xl">
            <div className="font-mono text-xs font-bold text-secondary uppercase tracking-widest mb-3">
              Our Role
            </div>
            <div className="font-display text-2xl font-bold text-primary mb-2">
              Connect. Automate. Improve.
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              We turn complicated healthcare workflows into reliable digital
              systems.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
