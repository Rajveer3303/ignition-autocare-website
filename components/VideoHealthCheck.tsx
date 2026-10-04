import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const VIDEO_URL = "https://video.citnow.com/vtM8Khf2QhD";

function PlayIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.14v13.72c0 .83.92 1.33 1.62.88l10.78-6.86a1.05 1.05 0 000-1.76L9.62 4.26A1.05 1.05 0 008 5.14z" />
    </svg>
  );
}

/**
 * Links out to a real CitNow example rather than embedding: CitNow serves its
 * own player page, so a poster image with a play overlay gives the familiar
 * tap-to-watch affordance without pretending the video plays inline.
 */
export default function VideoHealthCheck() {
  return (
    <section className="container-site py-10 sm:py-16">
      <Reveal>
        <div className="grid items-center gap-6 overflow-hidden rounded-3xl bg-ink-900 p-5 sm:gap-8 sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-400">
              Free Video Health Check
            </p>
            <h2 className="mt-2 font-heading text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              See exactly what we see
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300">
              Click the link to view an example video health check. You&apos;ll receive a similar
              video of your car with every Full or Major Service — because transparency is key at
              Ignition Autocare.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-bold text-white shadow transition hover:bg-brand-500"
              >
                <PlayIcon />
                Watch an example video
              </a>
              <Link
                href="/video-health-check"
                className="flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/50"
              >
                How it works
              </Link>
            </div>
          </div>

          <a
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch an example video health check"
            className="group relative mx-auto block aspect-video w-full max-w-sm overflow-hidden rounded-2xl shadow-card lg:justify-self-end"
          >
            <Image
              src="/images/garage/workshop-lift.jpg"
              alt="Technician inspecting a car on the ramp at Ignition Autocare"
              fill
              sizes="(max-width: 1024px) 100vw, 384px"
              className="object-cover transition duration-300 group-hover:scale-105"
              style={{ objectPosition: "center 62%" }}
            />
            <span aria-hidden="true" className="absolute inset-0 bg-ink-900/45 transition group-hover:bg-ink-900/30" />
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 shadow-lg ring-4 ring-white/20 transition group-hover:scale-110">
                <PlayIcon className="ml-1 h-7 w-7 text-white" />
              </span>
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
