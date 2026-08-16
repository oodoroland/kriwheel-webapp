import Link from "next/link";

const footerGroups = [
  {
    heading: "Platform",
    links: [
      { label: "The Method", href: "/method" },
      { label: "The Framework", href: "/method#methodology" },
      { label: "Case Studies", href: "/#cases" },
      { label: "Insights", href: "/#insights" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Consultation", href: "/consultation" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary pt-unit-4xl pb-unit-lg border-t border-white/5">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-unit-xl">
        <div className="md:col-span-5">
          <span className="font-display text-3xl font-extrabold tracking-tighter text-white block mb-6">
            Rocodeify<span className="text-secondary">™</span>
          </span>
          <p className="text-white/40 text-body-md max-w-sm mb-8 leading-relaxed">
            Intelligence Before Creativity. The global standard for high-intent
            healthcare strategy and digital institutional growth.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-secondary hover:border-secondary transition-all"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="X"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-secondary hover:border-secondary transition-all"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 gap-unit-md">
          {footerGroups.map((group) => (
            <div key={group.heading} className="flex flex-col gap-4">
              <span className="text-white font-display text-sm font-bold uppercase tracking-widest">
                {group.heading}
              </span>
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/40 hover:text-secondary text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter mt-unit-3xl pt-unit-md border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/20 text-xs font-mono">
          © 2024 Rocodeify Healthcare Consulting. All rights reserved.
        </p>
        <p className="text-white/20 text-xs font-mono">
          INTELLIGENCE BEFORE CREATIVITY
        </p>
      </div>
    </footer>
  );
}
