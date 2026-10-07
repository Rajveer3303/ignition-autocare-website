"use client";

import { useCallback, useEffect, useId, useRef, useState, FormEvent } from "react";
import { SITE } from "@/lib/site";

// Quote + inquiry are handled by the booking app, which owns the pricing,
// email and SMS. Prices are set there in lib/recovery.ts.
const API = "https://book.ignitionautocare.uk/api";
const TURNSTILE_SITE_KEY = "0x4AAAAAAFPttYXavkRVpYVz";
const TURNSTILE_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

interface Quote { miles: number; price: number; inRange: boolean }

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

const gbp = (n: number) => `£${n % 1 === 0 ? n : n.toFixed(2)}`;
const inputCls =
  "w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

/** Invisible-unless-suspicious Cloudflare bot check. */
function useTurnstile(active: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string>();
  const [token, setToken] = useState("");

  useEffect(() => {
    if (!active || !ref.current) return;
    let cancelled = false;
    const render = () => {
      if (cancelled || !ref.current || !window.turnstile || widgetId.current) return;
      widgetId.current = window.turnstile.render(ref.current, {
        sitekey: TURNSTILE_SITE_KEY,
        appearance: "interaction-only",
        callback: (t: string) => setToken(t),
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
      });
    };
    if (window.turnstile) render();
    else {
      let s = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SRC}"]`);
      if (!s) {
        s = document.createElement("script");
        s.src = TURNSTILE_SRC; s.async = true; s.defer = true;
        document.head.appendChild(s);
      }
      s.addEventListener("load", render);
    }
    return () => {
      cancelled = true;
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
      widgetId.current = undefined;
    };
  }, [active]);

  const reset = useCallback(() => {
    setToken("");
    if (widgetId.current) window.turnstile?.reset(widgetId.current);
  }, []);

  return { ref, token, reset };
}

export default function RecoveryQuote() {
  const uid = useId();
  const [postcode, setPostcode] = useState("");
  const [quote, setQuote] = useState<Quote | null>(null);
  const [quoting, setQuoting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reg, setReg] = useState("");
  const [notes, setNotes] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const bot = useTurnstile(Boolean(quote?.inRange) && !sent);

  async function getQuote(e: FormEvent) {
    e.preventDefault();
    setError(null); setQuote(null); setSent(false);
    if (postcode.trim().length < 5) { setError("Please enter your full postcode."); return; }
    setQuoting(true);
    try {
      const res = await fetch(`${API}/recovery-quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postcode: postcode.trim() }),
      });
      const json = await res.json();
      if (json.success) setQuote(json.data);
      else setError(json.error || "Couldn't get a quote. Please call us.");
    } catch {
      setError(`Couldn't get a quote right now. Please call ${SITE.phone}.`);
    } finally {
      setQuoting(false);
    }
  }

  async function sendInquiry(e: FormEvent) {
    e.preventDefault();
    setFormError(null);
    if (!name.trim() || phone.replace(/\D/g, "").length < 10) {
      setFormError("Please enter your name and a valid phone number.");
      return;
    }
    if (!bot.token) {
      setFormError("Please wait a second for the security check, then try again.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch(`${API}/recovery-inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(), phone: phone.trim(), postcode: postcode.trim(),
          registration: reg.trim() || undefined, notes: notes.trim() || undefined,
          turnstile_token: bot.token,
        }),
      });
      const json = await res.json();
      if (json.success) setSent(true);
      else { setFormError(json.error || `Something went wrong. Please call ${SITE.phone}.`); bot.reset(); }
    } catch {
      setFormError(`Something went wrong. Please call ${SITE.phone}.`);
      bot.reset();
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="rounded-2xl border border-ink-900/5 bg-white p-6 shadow-card sm:p-8">
      <h3 className="font-heading text-xl font-bold text-ink-900">Get an instant recovery price</h3>
      <p className="mt-1 text-sm text-ink-600">Enter the postcode where your car is and we&apos;ll show you an estimated price.</p>

      <form onSubmit={getQuote} className="mt-5 flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`${uid}-pc`} className="sr-only">Postcode</label>
        <input
          id={`${uid}-pc`}
          value={postcode}
          onChange={(e) => setPostcode(e.target.value.toUpperCase())}
          placeholder="e.g. WF10 4FA"
          autoComplete="postal-code"
          maxLength={10}
          className={`${inputCls} sm:flex-1 uppercase`}
        />
        <button
          type="submit"
          disabled={quoting}
          className="rounded-full bg-brand-600 px-6 py-3 font-bold text-white shadow transition hover:bg-brand-500 disabled:opacity-60"
        >
          {quoting ? "Checking…" : "Get price"}
        </button>
      </form>
      {error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}

      {quote && !quote.inRange && (
        <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-ink-700">
          That&apos;s about <strong>{quote.miles} miles</strong> from our garage — outside our usual 20-mile recovery area.
          Give us a call on <a href={SITE.phoneHref} className="font-bold text-brand-600">{SITE.phone}</a> and we&apos;ll see what we can do.
        </div>
      )}

      {quote?.inRange && (
        <div className="mt-5">
          <div className="rounded-xl bg-brand-50 p-5 text-center">
            <p className="text-sm font-medium text-ink-600">Estimated recovery price</p>
            <p className="mt-1 font-heading text-4xl font-extrabold text-brand-600">{gbp(quote.price)}</p>
            <p className="mt-1 text-sm text-ink-600">About {quote.miles} miles to our Castleford garage</p>
            <p className="mt-2 text-xs text-ink-500">Final price confirmed on the phone before we set off.</p>
          </div>

          {sent ? (
            <div className="mt-5 rounded-xl bg-green-50 p-4 text-center text-sm text-green-800">
              <strong>Thanks {name.split(" ")[0]}!</strong> We&apos;ve got your request and will call you back shortly.
              Urgent? Call <a href={SITE.phoneHref} className="font-bold underline">{SITE.phone}</a>.
            </div>
          ) : (
            <form onSubmit={sendInquiry} className="mt-5 grid gap-3 sm:grid-cols-2">
              <p className="sm:col-span-2 text-sm font-semibold text-ink-900">Want us to call you back?</p>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" maxLength={120} className={inputCls} />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" type="tel" autoComplete="tel" maxLength={30} className={inputCls} />
              <input value={reg} onChange={(e) => setReg(e.target.value.toUpperCase())} placeholder="Reg (optional)" maxLength={10} className={`${inputCls} uppercase`} />
              <input value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="What's happened? (optional)" maxLength={1000} className={inputCls} />
              <div ref={bot.ref} className="sm:col-span-2" />
              {formError && <p className="sm:col-span-2 text-sm font-medium text-red-600">{formError}</p>}
              <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={sending}
                  className="flex-1 rounded-full bg-ink-900 px-6 py-3 font-bold text-white shadow transition hover:opacity-90 disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Request a call back"}
                </button>
                <a href={SITE.phoneHref} className="flex-1 rounded-full bg-brand-600 px-6 py-3 text-center font-bold text-white shadow transition hover:bg-brand-500">
                  Call now {SITE.phone}
                </a>
              </div>
              <p className="sm:col-span-2 text-xs text-ink-500">
                We only use your details to contact you about this recovery. See our{" "}
                <a href="https://book.ignitionautocare.uk/privacy" className="underline">privacy policy</a>.
              </p>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
