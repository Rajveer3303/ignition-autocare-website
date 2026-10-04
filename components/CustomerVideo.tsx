"use client";

import { useRef, useState } from "react";
import Reveal from "@/components/Reveal";

/**
 * Self-hosted customer video. preload="none" plus a poster means the 5MB file
 * is only fetched once someone actually taps play, so it costs mobile visitors
 * nothing on page load. Native controls appear after the first tap.
 */
export default function CustomerVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function start() {
    setStarted(true);
    ref.current?.play();
  }

  return (
    <section className="container-site py-10 sm:py-16">
      <Reveal>
        <div className="grid items-center gap-6 overflow-hidden rounded-3xl bg-ink-900 p-5 sm:gap-8 sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-400">In Their Words</p>
            <h2 className="mt-2 font-heading text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Hear it from our customers
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300">
              Tap play to hear what it&apos;s like to bring your car to us — and see the kind of
              inspection footage we send you while your car is on the ramp.
            </p>
          </div>

          <div
            className="relative mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl shadow-card lg:justify-self-end"
            style={{ aspectRatio: "576 / 816" }}
          >
            <video
              ref={ref}
              src="/videos/customer-story.mp4"
              poster="/images/garage/customer-video-poster.jpg"
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
                aria-label="Play customer video"
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
        </div>
      </Reveal>
    </section>
  );
}
