"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/shared/button";
import { Icon } from "@/components/shared/icon";
import { Reveal } from "@/components/shared/reveal";
import { SuccessModal } from "@/components/shared/success-modal";
import { submitContactForm } from "@/lib/submit-contact-form";

const inputClasses =
  "w-full px-6 py-4 rounded-eight bg-surface-container-lowest border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none";
const labelClasses =
  "font-mono text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-2";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * General enquiry form. Posts to /api/contact, which emails the submission via
 * Resend. Mirrors the consultation BookingForm behaviour for consistency.
 */
export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    setStatus("submitting");
    setError("");

    const result = await submitContactForm({
      type: "enquiry",
      name: String(fd.get("name") ?? ""),
      organisation: String(fd.get("organisation") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
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
    <section id="enquiry" className="py-unit-4xl bg-background">
      <div className="max-w-3xl mx-auto px-gutter">
        <Reveal className="text-center mb-unit-2xl">
          <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest">
            Chapter Four
          </span>
          <h2 className="font-display text-4xl font-bold text-primary mt-4">
            Send a General Enquiry
          </h2>
          <p className="text-on-surface-variant mt-4">
            For strategic guidance, booking a consultation is the better path.
            For everything else, this reaches us directly.
          </p>
        </Reveal>

        <Reveal>
          <div className="bg-white rounded-eight border border-outline-variant/30 shadow-xl p-unit-xl md:p-unit-2xl">
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
                  Message received.
                </h3>
                <p className="text-on-surface-variant max-w-md">
                  We aim to respond within one to two business days.
                </p>
                <Link
                  href="/method"
                  className="mt-2 flex items-center gap-2 font-mono text-xs font-bold text-secondary hover:text-primary uppercase tracking-widest transition-colors"
                >
                  Explore the Rocodeify Method
                  <Icon name="arrow_forward" className="text-sm" />
                </Link>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                <div>
                  <label className={labelClasses} htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
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
                    placeholder="Clinic / Hospital / Company"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses} htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses} htmlFor="phone">
                    Phone Number{" "}
                    <span className="text-on-surface-variant/50 normal-case">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234 …"
                    className={inputClasses}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClasses} htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What is this about?"
                    className={inputClasses}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClasses} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="How can we help?"
                    className={inputClasses}
                  />
                </div>
                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    variant="accent"
                    className="w-full disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={submitting}
                  >
                    {submitting ? "Sending…" : "Send Enquiry"}
                  </Button>
                  {status === "error" && (
                    <p className="text-error-crimson text-sm text-center mt-4">
                      {error}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>

      <SuccessModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Message sent"
        message="Thank you for reaching out. We aim to respond within one to two business days."
      />
    </section>
  );
}
