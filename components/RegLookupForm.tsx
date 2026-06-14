"use client";

import { useState, FormEvent } from "react";

const BOOKING_APP_URL = "https://ignition-autocare.netlify.app/";
// Basic UK plate shape: two blocks of 2-4 alphanumerics, optional space.
const UK_REG_PATTERN = /^[A-Z0-9]{2,4}\s?[A-Z0-9]{2,4}$/i;

export default function RegLookupForm({ compact = false }: { compact?: boolean }) {
  const [reg, setReg] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const value = reg.trim().toUpperCase();
    if (!value) {
      setError("Please enter your car registration.");
      return;
    }
    if (!UK_REG_PATTERN.test(value)) {
      setError("That doesn't look like a valid UK registration. Try e.g. AB12 CDE.");
      return;
    }

    setError(null);
    setLoading(true);
    window.location.href = `${BOOKING_APP_URL}?reg=${encodeURIComponent(value)}`;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={compact ? "" : "w-full max-w-xl"}>
      {!compact && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-500">
          Book quickly and easily
        </p>
      )}
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="reg-input" className="sr-only">
          Enter Car Registration
        </label>
        <div className="relative flex-1">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 flex w-10 items-center justify-center rounded-l-xl bg-blue-700 text-[10px] font-bold leading-tight text-white"
          >
            GB
          </span>
          <input
            id="reg-input"
            type="text"
            inputMode="text"
            autoComplete="off"
            spellCheck={false}
            maxLength={9}
            placeholder="Enter Car Registration"
            value={reg}
            onChange={(e) => {
              setReg(e.target.value.toUpperCase());
              if (error) setError(null);
            }}
            aria-invalid={!!error}
            aria-describedby={error ? "reg-error" : undefined}
            className="w-full rounded-xl border-2 border-ink-900/15 bg-yellow-300 py-3.5 pl-14 pr-4 text-center font-plate text-xl font-bold uppercase tracking-[0.2em] text-ink-900 placeholder:text-base placeholder:font-sans placeholder:font-medium placeholder:normal-case placeholder:tracking-normal placeholder:text-ink-700/60 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
          />
        </div>
        <button type="submit" disabled={loading} className="btn-primary whitespace-nowrap px-8 text-base">
          {loading ? (
            <>
              <svg
                className="h-5 w-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Loading…
            </>
          ) : (
            "Get a Price Now!"
          )}
        </button>
      </div>
      {error && (
        <p id="reg-error" role="alert" className="mt-2 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </form>
  );
}
