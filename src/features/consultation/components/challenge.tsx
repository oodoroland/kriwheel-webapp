import { Reveal } from "@/components/shared/reveal";

const frictions = [
  {
    n: "01",
    title: "Low Enquiries",
    body: "Traffic exists, but conversion into actual patients is stagnant or declining.",
  },
  {
    n: "02",
    title: "Fragmented Trust",
    body: "Referral quality is dropping because your online presence looks outdated.",
  },
  {
    n: "03",
    title: "Digital Friction",
    body: "Administrative staff are overwhelmed by fixing manual entry errors from bad UX.",
  },
];

/**
 * Dark "why leaders start here" block. Uses the same bg-primary + method-grid
 * + teal radial glow treatment as the shared CTA card, so dark sections match.
 */
export function Challenge() {
  return (
    <section className="py-unit-4xl bg-primary relative overflow-hidden">
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
            Clinical excellence alone is no longer enough. If your digital entry
            point doesn’t mirror your surgical precision, you’re losing trust
            before the first appointment.
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
              alt=""
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu9B1hP2QKQf8dUWa4cCEpyccPinywGLXfZhcCtvFIOBljcVC0y93WOO6On3IUUBacraJSEc8uNguBAIfEbr4PMdt388FnQMgkMXAERJX3pl2tPgBpfHDgosrBd6G_5buDpPnwLEfBqJoCDA717DFYtLejphu1c-6IuTISuv5v1ZGbbgOaJuRpEmzW7_d3AfZQgX67aSyWlnn3lg70ZMoTaHk9non5WSHHH0kFHshtCWuP9_VlleayoiZJ5FwUIdIFDlr6-Tay9zw"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white rounded-eight p-8 max-w-xs shadow-2xl">
            <div className="font-mono text-xs font-bold text-secondary uppercase tracking-widest mb-2">
              Key Metric
            </div>
            <div className="font-display text-5xl font-bold text-primary mb-2">
              4.2x
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Increase in patient engagement when digital trust markers are
              correctly positioned.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
