import { Reveal } from "@/components/shared/reveal";

export function ProblemStatement() {
  return (
    <section className="py-unit-4xl bg-surface-bright relative blueprint-grid">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-unit-2xl items-center">
        <Reveal className="lg:col-span-7">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">
            THE PROBLEM STATEMENT
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8 max-w-xl">
            The gap between clinical excellence and digital representation is
            widening.
          </h2>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            <p>
              Most healthcare institutions treat digital platforms as secondary
              to physical facilities. Yet, for a patient, the digital journey
              begins long before they enter your doors.
            </p>
            <p>
              At Rocodeify, we bridge the gap between world-class medical
              expertise and fragmented digital experiences. We believe that your
              digital presence should be as precise, reliable, and empathetic as
              the care you provide.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200} className="lg:col-span-5">
          <div className="relative aspect-square glass-light rounded-eight p-unit-lg flex items-center justify-center border-outline-variant shadow-2xl">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/20" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/20" />
            <div className="text-center">
              <div className="font-stats-md text-[64px] font-bold text-primary mb-2">
                91%
              </div>
              <p className="font-label-caps text-label-caps text-on-surface-variant">
                OF PATIENTS EVALUATE CARE
                <br />
                THROUGH DIGITAL FIRST CONTACT
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
