import { Button } from "@/components/shared/button";
import { PageHero } from "@/components/shared/page-hero";

export function AboutHero() {
  return (
    <PageHero
      image="/images/screen1.png"
      eyebrow="Intelligence Before Creativity"
      scrollLabel="Scroll to Explore"
      title={
        <>
          We Believe Great Healthcare Deserves Great{" "}
          <span className="text-secondary italic">Digital Experiences</span>.
        </>
      }
      actions={
        <>
          <Button variant="accent" href="/method">
            Explore the Method™
          </Button>
          <Button variant="ghost" href="/#cases">
            See Our Work
          </Button>
        </>
      }
    />
  );
}
