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
            <div className="aspect-square rounded-eight p-8 flex flex-col justify-between relative overflow-hidden border border-white/10">
              {/* Engineering image — treated to sit in the dark section */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Engineering at work"
                src="/images/engineering.jpg"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-105 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/70 to-transparent" />
              <div className="absolute inset-0 method-grid opacity-10" />

              <div className="flex justify-between items-center relative z-10">
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-50">
                  How We Build
                </span>
                <span className="px-2 py-1 bg-secondary/20 rounded text-secondary font-mono text-[10px]">
                  ARCHITECTURE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-eight border border-white/10">
                  <p className="text-[10px] opacity-50 mb-1">SECURITY</p>
                  <p className="font-mono text-xl">Built in</p>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-eight border border-white/10">
                  <p className="text-[10px] opacity-50 mb-1">CODE</p>
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
