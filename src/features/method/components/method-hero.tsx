import { Button } from "@/components/shared/button";
import { PageHero } from "@/components/shared/page-hero";

export function MethodHero() {
  return (
    <PageHero
      image="/images/screen.png"
      eyebrow="The Rocodeify Method™ v2.0"
      scrollLabel="Scroll to Begin"
      title={
        <>
          Intelligence{" "}
          <span className="text-secondary italic font-medium">Before</span>{" "}
          Creativity.
        </>
      }
      description="A precision-engineered consulting framework designed to eliminate clinical friction and accelerate digital patient adoption."
      actions={
        <>
          <Button variant="accent" href="#methodology">
            Explore the Framework
          </Button>
          <Button variant="ghost" href="#evidence">
            See the Evidence
          </Button>
        </>
      }
    />
  );
}
