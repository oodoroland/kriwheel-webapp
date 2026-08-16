"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/shared/button";
import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";
import { SuccessModal } from "@/components/shared/success-modal";
import { submitContactForm } from "@/lib/submit-contact-form";

const inputClasses =
  "w-full px-4 py-3 sm:px-6 sm:py-4 text-base rounded-eight bg-surface-container-lowest border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none";
const labelClasses =
  "font-mono text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-2";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Consultation request form. Posts to /api/contact, which emails the
 * submission via Resend. Shows loading, error, and success states.
 */
export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    setStatus("submitting");
    setError("");

    const result = await submitContactForm({
      type: "consultation",
      fullName: String(fd.get("fullName") ?? ""),
      organisation: String(fd.get("organisation") ?? ""),
      email: String(fd.get("email") ?? ""),
      objective: String(fd.get("objective") ?? ""),
      context: String(fd.get("context") ?? ""),
      company_website: String(fd.get("company_website") ?? ""),
    });

    if (result.ok) {
      setStatus("success");
      setModalOpen(true);
    } else {
      setError(result.error);
      setStatus("error");
    }
  };

  const submitting = status === "submitting";

  return (
    <section id="booking" className="py-unit-2xl md:py-unit-4xl bg-background">
      <div className="max-w-4xl mx-auto px-gutter">
        <Reveal>
          <div className="bg-white rounded-eight border border-outline-variant/30 shadow-xl p-6 sm:p-unit-xl md:p-unit-2xl">
            <div className="text-center mb-unit-xl">
              <h2 className="font-display text-4xl font-bold text-primary">
                Tell Us About Your Project
              </h2>
              <p className="text-on-surface-variant mt-4">
                Share where the friction is — we’ll help you map what to build
                first.
              </p>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center text-center gap-4 py-unit-lg">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon
                    name="check_circle"
                    className="text-secondary text-3xl"
                    filled
                  />
                </div>
                <h3 className="font-display font-bold text-xl text-primary">
                  Your request is in.
                </h3>
                <p className="text-on-surface-variant max-w-md">
                  We’ll be in touch personally, usually within 24 hours.
                </p>
                <Link
                  href="/method"
                  className="mt-2 flex items-center gap-2 font-mono text-xs font-bold text-secondary hover:text-primary uppercase tracking-widest transition-colors"
                >
                  Explore the Method while you wait
                  <Icon name="arrow_forward" className="text-sm" />
                </Link>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Honeypot: hidden from humans, catches bots. */}
                <div className="hidden" aria-hidden>
                  <input
                    type="text"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <label className={labelClasses} htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="John Doe"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses} htmlFor="organisation">
                      Organisation
                    </label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      required
                      placeholder="Clinic / Hospital Name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses} htmlFor="email">
                      Professional Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className={labelClasses} htmlFor="objective">
                      What do you need?
                    </label>
                    <div className="relative">
                      <select
                        id="objective"
                        name="objective"
                        className={`${inputClasses} appearance-none pr-12 cursor-pointer`}
                      >
                        <option>Build custom software</option>
                        <option>Automate a workflow</option>
                        <option>Connect / integrate systems</option>
                        <option>Not sure yet — let’s talk</option>
                      </select>
                      <Icon
                        name="expand_more"
                        className="text-on-surface-variant absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClasses} htmlFor="context">
                      What’s slowing you down?
                    </label>
                    <textarea
                      id="context"
                      name="context"
                      rows={4}
                      placeholder="Spreadsheets, manual follow-ups, systems that don’t talk…"
                      className={inputClasses}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="accent"
                    className="w-full disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={submitting}
                  >
                    {submitting ? "Sending…" : "Request a Call"}
                  </Button>
                  {status === "error" && (
                    <p className="text-error-crimson text-sm text-center">
                      {error}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </Reveal>

        <p className="text-center text-sm text-on-surface-variant mt-unit-lg">
          Not ready to book, or have a different kind of enquiry?{" "}
          <Link
            href="/contact"
            className="font-bold text-secondary hover:text-primary transition-colors"
          >
            Get in touch instead
          </Link>
          .
        </p>
      </div>

      <SuccessModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Request received"
        message="Thanks — we've got your project details. We'll be in touch personally, usually within 24 hours."
      />
    </section>
  );
}
