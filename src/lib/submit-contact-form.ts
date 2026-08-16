export type ContactResult = { ok: true } | { ok: false; error: string };

/**
 * Posts a form payload to the contact API and normalises the response so both
 * forms share one success/error contract.
 */
export async function submitContactForm(
  payload: Record<string, string>,
): Promise<ContactResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    if (!res.ok) {
      return {
        ok: false,
        error: data.error ?? "Something went wrong. Please try again.",
      };
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Network error. Please check your connection and try again.",
    };
  }
}
