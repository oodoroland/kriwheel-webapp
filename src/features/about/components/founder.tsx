import { Reveal } from "@/components/shared/reveal";

export function Founder() {
  return (
    <section className="py-unit-4xl bg-surface relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-unit-3xl items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] rounded-eight overflow-hidden shadow-2xl relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Rocodeify founder portrait"
              className="object-cover w-full h-full"
              src="/images/roland.jpeg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-unit-lg bg-gradient-to-t from-primary/80 to-transparent">
              <p className="text-white font-label-caps text-label-caps tracking-widest uppercase">
                Roland Oodo | <span><a href="http://oodoroland.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300 lowercase">
                  oodoroland.com
                </a></span>
              </p>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-outline-variant/30 rounded-full flex items-center justify-center animate-pulse">
            <span className="font-label-caps text-[10px] text-center text-primary">
              MISSION DRIVEN
              <br />
              EST. 2024
            </span>
          </div>
        </Reveal>

        <Reveal delay={150} className="order-1 lg:order-2">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">
            A MESSAGE FROM OUR FOUNDER
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8 leading-tight">
            Healthcare digital experience isn’t a design problem; it’s a patient
            safety imperative.
          </h2>
          <blockquote className="font-body-lg text-body-lg italic text-on-surface-variant border-l-4 border-secondary pl-6 mb-8">
            “We started Rocodeify because we saw clinicians struggling with
            systems that didn’t understand them, and patients losing faith in
            institutions through broken digital touchpoints. We’re here to fix
            that.”
          </blockquote>
          <p className="font-body-md text-on-surface-variant mb-6">
            Our work is guided by the belief that technology should be an
            invisible conduit for care, never an obstacle to it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
