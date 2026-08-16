import Link from "next/link";

import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const cases = [
  {
    alt: "Clinical precision",
    src: "/images/hospital1.jpg",
    badge: "+180% INQUIRY GROWTH",
    title: "St. Jude Medical Center",
    body: "Re-architecting the high-intent patient journey for specialized orthopedic care.",
    delay: 0,
  },
  {
    alt: "Modern medical office",
    src: "/images/hospital2.jpg",
    badge: "40% CAC REDUCTION",
    title: "OrthoOne Specialty",
    body: "Implementing data-driven attribution models for regional expansion.",
    delay: 200,
  },
  {
    alt: "Tech lab",
    src: "/images/hospital3.jpg",
    badge: "65% FORM COMPLETION",
    title: "HealthSpan Institute",
    body: "Eliminating registration friction through behavioral UX science.",
    delay: 400,
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="py-unit-2xl md:py-unit-4xl bg-white">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-unit-md mb-unit-2xl md:mb-unit-3xl">
          <div className="max-w-xl">
            <span className="text-secondary font-mono text-xs tracking-widest uppercase font-bold mb-4 block">
              Proven Outcomes
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-primary font-bold tracking-tight">
              Clinical Success Stories.
            </h2>
          </div>
          <Link
            href="/method"
            className="text-primary font-bold flex items-center gap-2 hover:text-secondary transition-colors pb-2 border-b-2 border-primary/10 group shrink-0"
          >
            Explore Methodology{" "}
            <Icon
              name="arrow_forward"
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-unit-md">
          {cases.map((item) => (
            <Reveal
              key={item.title}
              delay={item.delay}
              className="group relative aspect-[3/4] overflow-hidden rounded-eight"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={item.alt}
                src={item.src}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
              <div className="absolute bottom-0 p-unit-lg text-white">
                <div className="bg-secondary/90 text-[10px] font-mono px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-widest font-bold">
                  {item.badge}
                </div>
                <h4 className="font-display text-2xl font-bold mb-2">
                  {item.title}
                </h4>
                <p className="text-white/60 text-sm line-clamp-2">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
