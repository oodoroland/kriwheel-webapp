import { Button } from "@/components/shared/button";
import { PageHero } from "@/components/shared/page-hero";

export function MethodHero() {
  return (
    <PageHero
      image="/images/screen.png"
      eyebrow="Our Approach"
      scrollLabel="Scroll to Begin"
      title={
        <>
          From workflow to{" "}
          <span className="text-secondary italic font-medium">
            working system
          </span>
          .
        </>
      }
      description="A practical, engineering-led approach to building software that fits how healthcare teams actually operate — and keeps working long after launch."
      actions={
        <>
          <Button variant="accent" href="#methodology">
            Explore the Framework
          </Button>
          <Button variant="ghost" href="#evidence">
            Why It Works
          </Button>
        </>
      }
    />
  );
}
