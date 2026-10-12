"use client";

import { useRef, useState } from "react";

/**
 * Self-hosted video health check clip, same tap-to-play pattern as
 * CustomerVideo: preload="none" + poster, so the 4MB file only loads once
 * someone taps play. Native controls appear after the first tap.
 */
export default function HealthCheckVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function start() {
    setStarted(true);
    ref.current?.play();
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl shadow-card lg:justify-self-end"
      style={{ aspectRatio: "576 / 880" }}
    >
      <video
        ref={ref}
        src="/videos/health-check.mp4"
        poster="/images/garage/health-check-poster.jpg"
        preload="none"
        playsInline
        controls={started}
        onEnded={() => setStarted(false)}
        className="h-full w-full object-cover"
      />
      {!started && (
        <button
          type="button"
          onClick={start}
          aria-label="Play video health check"
          className="group absolute inset-0 flex items-center justify-center bg-ink-900/35 transition hover:bg-ink-900/20"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 shadow-lg ring-4 ring-white/20 transition group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="white" className="ml-1 h-7 w-7" aria-hidden="true">
              <path d="M8 5.14v13.72c0 .83.92 1.33 1.62.88l10.78-6.86a1.05 1.05 0 000-1.76L9.62 4.26A1.05 1.05 0 008 5.14z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
