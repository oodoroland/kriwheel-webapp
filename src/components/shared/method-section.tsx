import { MethodSteps } from "@/components/shared/method-steps";

/**
 * The homepage's Zeenom Method™ section — centered heading over the shared
 * step cards. The About page composes the same <MethodSteps /> under its own
 * heading (see features/about/components/about-method.tsx).
 */
export function MethodSection() {
  return (
    <section
      id="methodology"
      className="py-unit-2xl md:py-unit-4xl bg-surface-container-low overflow-hidden relative"
    >
      <div className="max-w-container-max mx-auto px-gutter relative">
        <div className="mb-unit-2xl md:mb-unit-3xl text-center">
          <h2 className="font-display text-4xl md:text-6xl text-primary font-bold tracking-tight">
            The Zeenom Method<span className="text-secondary">™</span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mt-4 text-body-lg">
            Our proven implementation framework for converting strategic
            intelligence into clinical growth.
          </p>
        </div>

        <MethodSteps />
      </div>
    </section>
  );
}
