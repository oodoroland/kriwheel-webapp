import Link from "next/link";

import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const details = [
  {
    icon: "mail",
    label: "Email Address",
    value: "hello@rocodeify.com",
    href: "mailto:hello@rocodeify.com",
  },
  {
    icon: "schedule",
    label: "Business Hours",
    value: "Monday – Friday, 9:00 – 17:00 WAT",
  },
  {
    icon: "public",
    label: "Service Region",
    value: "Africa & International",
  },
  {
    icon: "sync_alt",
    label: "Remote Collaboration",
    value: "We work remotely with healthcare teams across Africa and beyond.",
  },
  {
    icon: "link",
    label: "LinkedIn",
    value: "linkedin.com/company/rocodeify",
    href: "https://linkedin.com/company/rocodeify",
  },
  {
    icon: "location_on",
    label: "Location",
    value: "Based in Lagos, Nigeria — delivered remotely and internationally.",
  },
];

export function ContactInfo() {
  return (
    <section className="py-unit-4xl bg-surface-container/30">
      <div className="max-w-container-max mx-auto px-gutter">
        <Reveal className="mb-unit-2xl">
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest">
            Chapter Three
          </span>
          <h2 className="font-display text-4xl font-bold text-primary mt-4">
            Contact Information
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-unit-xl">
          {details.map((detail, i) => (
            <Reveal key={detail.label} delay={i * 60}>
              <div className="flex gap-4">
                <Icon
                  name={detail.icon}
                  className="text-secondary text-2xl shrink-0"
                />
                <div>
                  <div className="font-mono text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    {detail.label}
                  </div>
                  {detail.href ? (
                    <Link
                      href={detail.href}
                      className="font-display text-lg text-primary hover:text-secondary transition-colors break-words"
                    >
                      {detail.value}
                    </Link>
                  ) : (
                    <p className="font-display text-lg text-primary leading-relaxed">
                      {detail.value}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
