import { Button } from "@/components/shared/button";
import { PageHero } from "@/components/shared/page-hero";

export function Hero() {
  return (
    <PageHero
      image="https://lh3.googleusercontent.com/aida-public/AB6AXuBO9VqLAjYlNYhyuMUHcJ5LFo7MP5N89pPGZ5doapz0j_N_mXhLeX8O16CgMPqbZqAAyreC76zju9cWKorDfxuiCDBZGWkd9h7J2PRaov8amEXSypivMEQWWOXj0AOeVhQlZwKvT2a6nA2ndVJSCRwmiMx9FH3zDJN3RJj8CNFWIFfnCnKeObvZKyzLNXeudKtR-QRHCWa9BFbUnZI4FfIWNxraw-mdXmq-7arydImu-Dfd_iZQBKUO5bIvqxwfw1rhRPNojXakBn0"
      eyebrow="Intelligence Before Creativity"
      scrollLabel="Scroll to Diagnose"
      title={
        <>
          Healthcare Doesn’t Begin at{" "}
          <span className="text-secondary italic">Reception</span> Anymore.
        </>
      }
      description="94% of patient outcomes are influenced before they ever set foot in your clinic. We diagnose the digital friction points that prevent patients from ever making that first call."
      actions={
        <>
          <Button variant="accent" href="/method">
            Explore the Method
          </Button>
          <Button variant="ghost" href="#cases">
            See the Results
          </Button>
        </>
      }
    />
  );
}
