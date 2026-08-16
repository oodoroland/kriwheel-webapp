import { Button } from "@/components/shared/button";
import { PageHero } from "@/components/shared/page-hero";

export function ConsultationHero() {
  return (
    <PageHero
      image="https://lh3.googleusercontent.com/aida-public/AB6AXuCmxGD1c8mujil2gwXKDRlECy1JHEDFlcq-zMZs4_nbwAIKaUiN80_baJyuLKA8KHRuLZHDcDBOvo4-nDCX-aBboyzrB5PFjvL6LYkS6JDINXwHJ4TSDAPmHQLG8BFNon1Ds5mgO_r5NDgxjMFbe7J8XrurDZqC3hEI-3Om4rPDSWbyHZrfOp-tK0sWxwHJIdXdIABds7xxdMXNZIryc_yQ2UGZaAHi-3BOn3h47WSjTcbX0cO803GUJTnV-164GrO9YbhXcVyJ6s8"
      eyebrow="Project Discovery"
      scrollLabel="Scroll to Begin"
      title={
        <>
          Let’s scope the system your{" "}
          <span className="text-secondary italic">operations</span> need.
        </>
      }
      description="Tell us where the manual work and disconnected tools are slowing your team down. In one focused call, we’ll map what’s worth building, automating, or connecting first."
      actions={
        <>
          <Button variant="accent" href="#booking">
            Book a Discovery Call
          </Button>
          <Button variant="ghost" href="/method">
            See How We Work
          </Button>
        </>
      }
    />
  );
}
