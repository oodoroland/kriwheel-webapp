import { Button } from "@/components/shared/button";
import { PageHero } from "@/components/shared/page-hero";

export function ConsultationHero() {
  return (
    <PageHero
      image="https://lh3.googleusercontent.com/aida-public/AB6AXuCmxGD1c8mujil2gwXKDRlECy1JHEDFlcq-zMZs4_nbwAIKaUiN80_baJyuLKA8KHRuLZHDcDBOvo4-nDCX-aBboyzrB5PFjvL6LYkS6JDINXwHJ4TSDAPmHQLG8BFNon1Ds5mgO_r5NDgxjMFbe7J8XrurDZqC3hEI-3Om4rPDSWbyHZrfOp-tK0sWxwHJIdXdIABds7xxdMXNZIryc_yQ2UGZaAHi-3BOn3h47WSjTcbX0cO803GUJTnV-164GrO9YbhXcVyJ6s8"
      eyebrow="Strategic Entry"
      scrollLabel="Scroll to Begin"
      title={
        <>
          Let’s Explore Your Digital{" "}
          <span className="text-secondary italic">Patient Journey™</span>
        </>
      }
      description="Move beyond surface-level aesthetics. We audit the friction in your patient experience to reveal the hidden levers of growth and institutional trust."
      actions={
        <>
          <Button variant="accent" href="#booking">
            Book Your Session
          </Button>
          <Button variant="ghost" href="/method">
            Review The Method™
          </Button>
        </>
      }
    />
  );
}
