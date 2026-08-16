import { Button } from "@/components/shared/button";
import { PageHero } from "@/components/shared/page-hero";

export function Hero() {
  return (
    <PageHero
      image="https://lh3.googleusercontent.com/aida-public/AB6AXuBO9VqLAjYlNYhyuMUHcJ5LFo7MP5N89pPGZ5doapz0j_N_mXhLeX8O16CgMPqbZqAAyreC76zju9cWKorDfxuiCDBZGWkd9h7J2PRaov8amEXSypivMEQWWOXj0AOeVhQlZwKvT2a6nA2ndVJSCRwmiMx9FH3zDJN3RJj8CNFWIFfnCnKeObvZKyzLNXeudKtR-QRHCWa9BFbUnZI4FfIWNxraw-mdXmq-7arydImu-Dfd_iZQBKUO5bIvqxwfw1rhRPNojXakBn0"
      eyebrow="Healthcare Technology & Automation"
      scrollLabel="Scroll to Explore"
      title={
        <>
          Healthcare software built around{" "}
          <span className="text-secondary italic">how you actually operate</span>
          .
        </>
      }
      description="Kriwheel designs, builds, and automates the systems behind modern healthcare organizations — from internal workflows and patient operations to integrations and custom software."
      actions={
        <>
          <Button variant="accent" href="/consultation">
            Discuss a Project
          </Button>
          <Button variant="ghost" href="#capabilities">
            See What We Build
          </Button>
        </>
      }
    />
  );
}
