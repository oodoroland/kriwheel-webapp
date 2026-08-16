import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Single submission endpoint for both site forms. The `type` field discriminates
 * between the consultation booking and the general enquiry. No data is stored —
 * each valid submission is emailed to CONTACT_TO_EMAIL via Resend.
 */

type Field = { label: string; value: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}


function cleanEnv(value: string | undefined): string {
  return (value ?? "").trim().replace(/^["']|["']$/g, "").trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Builds the subject, reply-to, and field list for each form type. */
function buildEmail(
  body: Record<string, unknown>,
): { subject: string; replyTo: string; fields: Field[] } | { error: string } {
  const type = str(body.type);
  const email = str(body.email);

  if (!EMAIL_RE.test(email)) {
    return { error: "A valid email address is required." };
  }

  if (type === "consultation") {
    const fullName = str(body.fullName);
    const organisation = str(body.organisation);
    if (!fullName || !organisation) {
      return { error: "Name and organisation are required." };
    }
    return {
      subject: `New consultation request — ${fullName}, ${organisation}`,
      replyTo: email,
      fields: [
        { label: "Full name", value: fullName },
        { label: "Organisation", value: organisation },
        { label: "Email", value: email },
        { label: "Primary objective", value: str(body.objective) || "—" },
        { label: "Strategic context", value: str(body.context) || "—" },
      ],
    };
  }

  if (type === "enquiry") {
    const name = str(body.name);
    const subject = str(body.subject);
    const message = str(body.message);
    if (!name || !subject || !message) {
      return { error: "Name, subject, and message are required." };
    }
    return {
      subject: `New enquiry — ${subject}`,
      replyTo: email,
      fields: [
        { label: "Name", value: name },
        { label: "Organisation", value: str(body.organisation) || "—" },
        { label: "Email", value: email },
        { label: "Phone", value: str(body.phone) || "—" },
        { label: "Subject", value: subject },
        { label: "Message", value: message },
      ],
    };
  }

  return { error: "Unknown form type." };
}

function renderHtml(fields: Field[]): string {
  const rows = fields
    .map(
      (f) =>
        `<tr><td style="padding:8px 16px;font-weight:600;color:#0b1f33;vertical-align:top">${escapeHtml(
          f.label,
        )}</td><td style="padding:8px 16px;color:#334155;white-space:pre-wrap">${escapeHtml(
          f.value,
        )}</td></tr>`,
    )
    .join("");
  return `<table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">${rows}</table>`;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields; humans never see it. Silently accept.
  if (str(body.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const built = buildEmail(body);
  if ("error" in built) {
    return NextResponse.json({ error: built.error }, { status: 400 });
  }

  const apiKey = cleanEnv(process.env.RESEND_API_KEY);
  const to = cleanEnv(process.env.CONTACT_TO_EMAIL);
  const from =
    cleanEnv(process.env.CONTACT_FROM_EMAIL) ||
    "Kriwheel <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.");
    return NextResponse.json(
      { error: "The form isn’t configured yet. Please try again later." },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: built.replyTo,
      subject: built.subject,
      html: renderHtml(built.fields),
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: "We couldn’t send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
