import { MethodSteps } from "@/components/shared/method-steps";
import { Reveal } from "@/components/shared/reveal";

export function AboutMethod() {
  return (
    <section className="py-unit-4xl bg-background-cool relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter">
        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-unit-3xl border-b border-outline-variant/30 pb-8">
          <div>
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">
              OPERATIONAL FRAMEWORK
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              The Rocodeify Method™
            </h2>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-sm mt-4 md:mt-0">
            A 6-stage linear progression from diagnostic discovery to continuous
            digital evolution.
          </p>
        </Reveal>

        <MethodSteps />
      </div>
    </section>
  );
}
