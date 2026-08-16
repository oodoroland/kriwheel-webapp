import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const legacyPoints = [
  {
    title: "Feature-first, not workflow-first",
    body: "Building screens before understanding how work actually flows.",
  },
  {
    title: "Generic tools, forced fit",
    body: "Off-the-shelf software your team has to work around.",
  },
];

const methodPoints = [
  {
    title: "Workflow-first",
    body: "We map how you actually operate before we build.",
  },
  {
    title: "Engineered to connect",
    body: "Systems designed to integrate and automate, not just look good.",
  },
];

export function Contrast() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl method-mesh relative">
      <div className="max-w-container-max mx-auto px-gutter">
        <Reveal className="mb-20">
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest">
            The Contrast
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-4">
            Why Healthcare Software Fails.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Legacy card */}
          <Reveal className="lg:col-span-5 group">
            <div className="h-full p-10 bg-white rounded-eight border border-outline-variant/30 shadow-sm group-hover:shadow-xl transition-all duration-500">
              <div className="mb-8 p-3 w-fit rounded-eight bg-red-50 text-red-600">
                <Icon name="warning" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-6">
                The Legacy Approach
              </h3>
              <p className="text-on-surface-variant mb-8">
                Most agencies build features, not systems - configuring generic
                tools that force your team to adapt.
              </p>
              <div className="space-y-6">
                {legacyPoints.map((point) => (
                  <div key={point.title} className="flex gap-4 items-start">
                    <div className="mt-1 w-5 h-5 rounded-full border-2 border-red-200 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-primary">
                        {point.title}
                      </h4>
                      <p className="text-xs text-on-surface-variant mt-1">
                        {point.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Vertical bridge */}
          <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
            <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-outline-variant to-transparent relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-outline-variant flex items-center justify-center font-mono text-xs font-bold">
                VS
              </div>
            </div>
          </div>

          {/* Kriwheel card */}
          <Reveal delay={200} className="lg:col-span-6">
            <div className="h-full p-10 bg-primary text-white rounded-eight shadow-2xl shadow-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[100px]" />
              <div className="relative z-10">
                <div className="mb-8 p-3 w-fit rounded-eight bg-secondary/20 text-secondary">
                  <Icon name="auto_awesome" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-6">
                  The Kriwheel Approach
                </h3>
                <p className="text-white/70 mb-8">
                  We start with your workflows and build systems around them -
                  engineered to connect, automate, and last.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  {methodPoints.map((point) => (
                    <div key={point.title} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon
                          name="verified"
                          className="text-secondary text-sm"
                        />
                        <span className="font-bold text-sm">{point.title}</span>
                      </div>
                      <p className="text-xs text-white/50">{point.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
