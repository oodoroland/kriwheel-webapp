import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";

const sideArticles = [
  {
    kicker: "PRACTICAL GUIDE",
    title: "Automating Patient Follow-ups",
    body: "How to replace manual reminder calls with reliable workflows your team can trust.",
    delay: 200,
  },
  {
    kicker: "ENGINEERING NOTE",
    title: "Build vs. Buy Healthcare Software",
    body: "When a custom system pays off, and when an off-the-shelf tool is the right call.",
    delay: 400,
  },
];

export function Insights() {
  return (
    <section id="insights" className="py-unit-2xl md:py-unit-4xl bg-surface mesh-gradient">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="mb-unit-2xl">
          <h2 className="font-display text-4xl md:text-5xl text-primary font-bold tracking-tight">
            Field Notes
          </h2>
          <p className="text-on-surface-variant mt-4 text-body-lg">
            Practical thinking on healthcare operations, automation, and
            building software that lasts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-lg">
          {/* Featured article */}
          <Reveal className="lg:col-span-8 group cursor-pointer">
            <div className="bg-white rounded-eight overflow-hidden border border-outline-variant/30 flex flex-col md:flex-row h-full hover:shadow-2xl transition-all">
              <div className="md:w-1/2 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Executive research"
                  src="/images/research.jpg"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-1/2 p-unit-lg flex flex-col justify-center">
                <span className="text-secondary font-mono text-[10px] tracking-[0.2em] uppercase font-bold mb-4 block">
                  OPERATIONS REPORT
                </span>
                <h3 className="font-display text-3xl text-primary font-bold mb-4 group-hover:text-secondary transition-colors">
                  The Operational Cost of Disconnected Systems
                </h3>
                <p className="text-on-surface-variant text-body-md leading-relaxed mb-6">
                  Where manual work and disconnected tools quietly drain time,
                  money, and visibility from growing healthcare organizations —
                  and what to fix first.
                </p>
                <div className="mt-auto flex items-center gap-2 font-bold text-primary text-sm group-hover:gap-4 transition-all">
                  READ THE BRIEF <Icon name="arrow_right_alt" className="text-sm" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Side articles */}
          <div className="lg:col-span-4 flex flex-col gap-unit-md">
            {sideArticles.map((article) => (
              <Reveal
                key={article.title}
                delay={article.delay}
                className="bg-white p-unit-lg rounded-eight border border-outline-variant/30 group cursor-pointer hover:border-secondary transition-all"
              >
                <span className="text-secondary font-mono text-[10px] uppercase font-bold mb-3 block">
                  {article.kicker}
                </span>
                <h4 className="font-display text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {article.title}
                </h4>
                <p className="text-on-surface-variant text-sm line-clamp-3">
                  {article.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
