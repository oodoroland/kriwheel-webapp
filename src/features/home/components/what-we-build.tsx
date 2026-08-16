import Link from "next/link";

import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const builds = [
  {
    badge: "Build",
    src: "/images/healthcare_scheduling.jpg",
    title: "Clinic & Hospital Operations",
    body: "Platforms that run scheduling, records, and day-to-day workflows in one connected place.",
    delay: 0,
  },
  {
    badge: "Automate",
    src: "/images/apointment_scheduling.png",
    title: "Automated Patient Communication",
    body: "Reminders, follow-ups, and updates that run on their own instead of by hand.",
    delay: 200,
  },
  {
    badge: "Connect",
    src: "/images/connected.jpg",
    title: "Connected Systems & Integrations",
    body: "Payments, labs, pharmacy, and records synced so information moves without re-entry.",
    delay: 400,
  },
];

export function WhatWeBuild() {
  return (
    <section id="cases" className="py-unit-2xl md:py-unit-4xl bg-white">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-unit-md mb-unit-2xl md:mb-unit-3xl">
          <div className="max-w-xl">
            <span className="text-secondary font-mono text-xs tracking-widest uppercase font-bold mb-4 block">
              What We Build
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-primary font-bold tracking-tight">
              Systems we design and ship.
            </h2>
          </div>
          <Link
            href="/consultation"
            className="text-primary font-bold flex items-center gap-2 hover:text-secondary transition-colors pb-2 border-b-2 border-primary/10 group shrink-0"
          >
            Discuss a project{" "}
            <Icon
              name="arrow_forward"
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-unit-md">
          {builds.map((item) => (
            <Reveal
              key={item.title}
              delay={item.delay}
              className="group relative aspect-[3/4] overflow-hidden rounded-eight"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={item.title}
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
                <p className="text-white/70 text-sm">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
