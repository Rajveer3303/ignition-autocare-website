"use client";

import { useEffect, useState } from "react";
import { GoogleIcon, StarIcon } from "@/components/Icons";
import { REVIEW_STATS, TESTIMONIALS } from "@/lib/site";

const ROTATE_INTERVAL = 6000;
const MAX_QUOTE_CHARS = 95;

/** Trim a real review to a short excerpt on a word boundary, never mid-word. */
function excerpt(text: string) {
  if (text.length <= MAX_QUOTE_CHARS) return text;
  const cut = text.slice(0, MAX_QUOTE_CHARS);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/** Surname -> initial, so we don't republish full names in a compact strip. */
function shortName(name: string) {
  const [first, ...rest] = name.trim().split(/\s+/);
  return rest.length ? `${first} ${rest[rest.length - 1][0]}.` : first;
}

export default function ReviewStrip({
  variant = "light",
  className = "",
  showAggregate = true,
}: {
  variant?: "light" | "dark";
  className?: string;
  /** Hide the 4.9/600+ row where the surrounding hero already shows it. */
  showAggregate?: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (TESTIMONIALS.length < 2) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      ROTATE_INTERVAL
    );
    return () => clearInterval(t);
  }, []);

  const dark = variant === "dark";
  const review = TESTIMONIALS[index];

  return (
    <div
      className={`rounded-2xl border px-4 py-3 ${
        dark
          ? "border-white/15 bg-white/10 backdrop-blur-sm"
          : "border-ink-900/5 bg-ink-50"
      } ${className}`}
    >
      {/* Aggregate rating */}
      <div
        className={`flex flex-wrap items-center gap-x-2 gap-y-1 ${showAggregate ? "" : "hidden"}`}
      >
        <span
          className="flex text-amber-400"
          aria-label={`Rated ${REVIEW_STATS.rating} out of 5 on Google`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="h-4 w-4" />
          ))}
        </span>
        <span className={`text-sm font-extrabold ${dark ? "text-white" : "text-ink-900"}`}>
          {REVIEW_STATS.rating}
        </span>
        <span className={`text-xs font-semibold ${dark ? "text-slate-300" : "text-ink-600"}`}>
          {REVIEW_STATS.label}
        </span>
        <GoogleIcon className="ml-auto h-4 w-4 shrink-0" />
      </div>

      {/* Rotating excerpt from a real customer review */}
      <blockquote
        aria-live="polite"
        className={`text-xs leading-relaxed ${showAggregate ? "mt-2" : ""} ${
          dark ? "text-slate-200" : "text-ink-600"
        }`}
      >
        <span className="italic">&ldquo;{excerpt(review.text)}&rdquo;</span>{" "}
        <cite
          className={`not-italic font-semibold ${dark ? "text-white" : "text-ink-900"}`}
        >
          — {shortName(review.name)}
        </cite>
      </blockquote>
    </div>
  );
}
