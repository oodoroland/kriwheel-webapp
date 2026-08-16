import { Button } from "@/components/shared/button";
import { PageHero } from "@/components/shared/page-hero";

export function AboutHero() {
  return (
    <PageHero
      image="/images/screen1.png"
      eyebrow="Healthcare Technology & Automation"
      scrollLabel="Scroll to Explore"
      title={
        <>
          We build the technology that keeps healthcare{" "}
          <span className="text-secondary italic">moving</span>.
        </>
      }
      description="Kriwheel is a healthcare technology company. We build software, automate workflows, and connect the systems healthcare organizations depend on."
      actions={
        <>
          <Button variant="accent" href="/method">
            How We Work
          </Button>
          <Button variant="ghost" href="/#cases">
            See What We Build
          </Button>
        </>
      }
    />
  );
}
