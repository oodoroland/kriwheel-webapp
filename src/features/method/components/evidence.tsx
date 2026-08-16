import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const blocks = [
  {
    icon: "hub",
    title: "Systems thinking",
    body: "We consider how every part of your operation connects — not just the feature in front of us.",
  },
  {
    icon: "code",
    title: "Engineering depth",
    body: "We build the underlying systems, not just configure someone else's tool.",
  },
];

const bars = ["70%", "45%", "88%"];

export function Evidence() {
  return (
    <section id="evidence" className="py-unit-2xl md:py-unit-4xl bg-primary text-white overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <h2 className="font-display text-4xl font-bold mb-8">
              Why teams trust what we build.
            </h2>
            <div className="space-y-4">
              {blocks.map((block) => (
                <div
                  key={block.title}
                  className="p-6 rounded-eight bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <Icon name={block.icon} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{block.title}</h4>
                      <p className="text-white/60 text-sm">{block.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200} className="relative">
            {/* Diagnosis matrix visualizer */}
            <div className="aspect-square glass-morphic rounded-eight p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 method-grid opacity-10" />
              <div className="flex justify-between items-center relative z-10">
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-40">
                  How We Build
                </span>
                <span className="px-2 py-1 bg-secondary/20 rounded text-secondary font-mono text-[10px]">
                  ARCHITECTURE
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center relative z-10">
                <div className="w-full space-y-6">
                  {bars.map((w, i) => (
                    <div
                      key={i}
                      className="h-1 w-full bg-white/10 rounded-full overflow-hidden"
                    >
                      <div
                        className="h-full bg-secondary transition-all duration-1000"
                        style={{ width: w }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="p-4 bg-white/5 rounded-eight border border-white/5">
                  <p className="text-[10px] opacity-40 mb-1">SECURITY</p>
                  <p className="font-mono text-xl">Built in</p>
                </div>
                <div className="p-4 bg-white/5 rounded-eight border border-white/5">
                  <p className="text-[10px] opacity-40 mb-1">CODE</p>
                  <p className="font-mono text-xl">Yours</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
