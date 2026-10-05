"use client";

import { useState, FormEvent } from "react";
import { SITE, whatsappHref } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

// text-base (16px) on phones: iOS Safari zooms the page into any field under
// 16px on focus and stays zoomed, which made the form look cut off.
const FIELD =
  "mt-1.5 w-full rounded-xl border border-ink-900/15 px-4 py-2.5 text-base sm:text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300";

/**
 * Posts to /netlify-forms.html, not to a Next.js route. Under Netlify's Next.js
 * runtime a submission is only captured when POSTed to a static file — and that
 * same static file is what Netlify scans at deploy time to register the form.
 * The previous version posted to /contact-us, which Netlify never saw.
 */
export default function FleetEnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // React nulls currentTarget after the await
    setStatus("sending");
    const body = new URLSearchParams();
    new FormData(form).forEach((v, k) => body.append(k, String(v)));
    try {
      const res = await fetch("/netlify-forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      // Never claim success unless Netlify actually accepted it.
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5">
        <p className="font-bold text-green-900">Thanks — we&apos;ve got your enquiry.</p>
        <p className="mt-1 text-sm text-green-800">
          We&apos;ll be in touch shortly. If it&apos;s urgent, call us on{" "}
          <a href={SITE.phoneHref} className="font-semibold underline">{SITE.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form name="fleet-enquiry" onSubmit={handleSubmit} className="mt-6 space-y-4">
      <input type="hidden" name="form-name" value="fleet-enquiry" />
      {/* Honeypot — real people never see or fill this; bots that do are dropped */}
      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this in: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-ink-700">Company Name</label>
        <input id="company" name="company" type="text" required autoComplete="organization" className={FIELD} />
      </div>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-ink-700">Your Name</label>
        <input id="contact-name" name="name" type="text" required autoComplete="name" className={FIELD} />
      </div>
      <div>
        <label htmlFor="fleet-phone" className="block text-sm font-medium text-ink-700">Phone Number</label>
        <input id="fleet-phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" className={FIELD} />
      </div>
      <div>
        <label htmlFor="fleet-size" className="block text-sm font-medium text-ink-700">Fleet Size (approximate)</label>
        <select id="fleet-size" name="fleet_size" className={FIELD}>
          <option value="">Select fleet size</option>
          <option value="2-5">2–5 vehicles</option>
          <option value="6-15">6–15 vehicles</option>
          <option value="16-30">16–30 vehicles</option>
          <option value="30+">30+ vehicles</option>
        </select>
      </div>
      <div>
        <label htmlFor="fleet-message" className="block text-sm font-medium text-ink-700">What do you need? (optional)</label>
        <textarea
          id="fleet-message"
          name="message"
          rows={3}
          placeholder="e.g. MOTs for a van fleet, regular servicing for company cars..."
          className={FIELD}
        />
      </div>

      {status === "error" && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          Sorry, that didn&apos;t send. Please call us on{" "}
          <a href={SITE.phoneHref} className="font-semibold underline">{SITE.phone}</a> or{" "}
          <a
            href={whatsappHref("Hi Ignition Autocare! I'd like to enquire about your fleet services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >
            message us on WhatsApp
          </a>.
        </div>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full py-3">
        {status === "sending" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
