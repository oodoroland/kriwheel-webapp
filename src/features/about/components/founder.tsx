import { Reveal } from "@/components/shared/reveal";

export function Founder() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-surface relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-unit-3xl items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] rounded-eight overflow-hidden shadow-2xl relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Kriwheel founder portrait"
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
            Healthcare teams shouldn’t have to work around their own software.
          </h2>
          <blockquote className="font-body-lg text-body-lg italic text-on-surface-variant border-l-4 border-secondary pl-6 mb-8">
            “We started Kriwheel because we kept seeing healthcare teams held
            back by disconnected tools and manual work — re-typing data, chasing
            follow-ups, flying blind. Software should carry that load, not the
            staff.”
          </blockquote>
          <p className="font-body-md text-on-surface-variant mb-6">
            Our work is guided by a simple belief: technology should remove
            friction from care, never add to it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
