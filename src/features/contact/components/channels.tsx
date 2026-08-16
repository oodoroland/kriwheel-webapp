import Link from "next/link";

import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const channels = [
  {
    n: "02",
    title: "General Enquiry",
    body: "For questions about Rocodeify, our services, or how we work.",
    action: { label: "Send an enquiry", href: "#enquiry" },
  },
  {
    n: "03",
    title: "Partnerships",
    body: "For organisations interested in collaboration, joint initiatives, or strategic partnerships.",
    action: { label: "partnerships@rocodeify.com", href: "mailto:partnerships@rocodeify.com" },
  },
  {
    n: "04",
    title: "Media & Speaking",
    body: "For interviews, podcasts, conferences, webinars, or speaking engagements.",
    action: { label: "media@rocodeify.com", href: "mailto:media@rocodeify.com" },
  },
  {
    n: "05",
    title: "Existing Clients",
    body: "Support for ongoing engagements and project communication.",
    action: { label: "clients@rocodeify.com", href: "mailto:clients@rocodeify.com" },
  },
];

export function Channels() {
  return (
    <section className="py-unit-4xl bg-background relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <Reveal className="mb-unit-2xl">
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest">
            Chapter Two
          </span>
          <h2 className="font-display text-4xl font-bold text-primary mt-4">
            Choose the Best Way to Reach Us
          </h2>
        </Reveal>

        {/* Featured: the primary journey stays visually dominant. */}
        <Reveal>
          <div className="bg-primary rounded-eight p-unit-xl md:p-unit-2xl relative overflow-hidden mb-6">
            <div className="absolute inset-0 method-grid opacity-5" />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(15,118,110,0.10), transparent 70%)",
              }}
            />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-xl">
                <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest">
                  01 — Recommended
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-4 mb-3">
                  Strategy Consultation
                </h3>
                <p className="text-white/60 leading-relaxed">
                  For healthcare organisations seeking strategic guidance.
                </p>
              </div>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-display font-bold px-10 py-5 rounded-eight shadow-2xl shadow-secondary/20 hover:scale-105 transition-all shrink-0"
              >
                Book Consultation
                <Icon name="arrow_forward" className="text-lg" />
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {channels.map((channel, i) => (
            <Reveal key={channel.title} delay={i * 80}>
              <Link
                href={channel.action.href}
                className="group block h-full bg-white rounded-eight border border-outline-variant/30 p-unit-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-sm font-bold text-secondary">
                    {channel.n}
                  </span>
                  <Icon
                    name="arrow_outward"
                    className="text-on-surface-variant/40 group-hover:text-secondary transition-colors"
                  />
                </div>
                <div className="h-px w-full bg-outline-variant/30 my-6" />
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  {channel.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  {channel.body}
                </p>
                <span className="font-mono text-xs font-bold text-primary group-hover:text-secondary transition-colors uppercase tracking-widest">
                  {channel.action.label}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
