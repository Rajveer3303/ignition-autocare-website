import Link from "next/link";
import RegLookupForm from "@/components/RegLookupForm";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

const WA_HREF = `https://wa.me/447401302273?text=${encodeURIComponent("Hi Ignition Autocare! I'd like to enquire about your fleet services.")}`;

export default function PageHero({
  title,
  intro,
  formLabel = "Book a Service Online",
  contactCta = false,
}: {
  title: string;
  intro: string;
  formLabel?: string;
  contactCta?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"
      />
      <div className="container-site relative py-10 sm:py-16">
        <Reveal className="max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">{intro}</p>
        </Reveal>
        <Reveal delay={0.15} className="mt-8 max-w-xl rounded-3xl border border-ink-900/5 bg-white p-6 shadow-card">
          <h2 className="mb-3 text-lg font-bold text-ink-900">{formLabel}</h2>
          {contactCta ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-bold text-white shadow transition hover:bg-brand-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="white">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Call {SITE.phone}
              </Link>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold text-white shadow transition hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="white">
                  <path d="M16.003 3C9.376 3 4 8.373 4 14.997c0 2.17.584 4.21 1.6 5.97L4 29l8.242-1.573A12.94 12.94 0 0 0 16.003 28C22.63 28 28 22.627 28 16.003 28 9.376 22.63 3 16.003 3zm0 23.636a10.6 10.6 0 0 1-5.41-1.48l-.387-.23-4.894.934.976-4.77-.253-.4A10.582 10.582 0 0 1 4.364 16c0-6.415 5.223-11.636 11.639-11.636S27.636 9.585 27.636 16c0 6.414-5.222 11.636-11.633 11.636zm6.382-8.713c-.35-.175-2.07-1.02-2.39-1.136-.32-.116-.553-.175-.786.175-.233.35-.9 1.136-1.103 1.37-.203.233-.406.262-.756.087-.35-.175-1.477-.544-2.814-1.736-1.04-.927-1.742-2.072-1.946-2.422-.203-.35-.022-.54.153-.714.157-.157.35-.408.524-.612.175-.203.233-.35.35-.583.116-.233.058-.437-.029-.612-.087-.175-.786-1.894-1.078-2.594-.284-.68-.573-.587-.786-.598l-.67-.012c-.233 0-.612.087-.932.437-.32.35-1.223 1.194-1.223 2.913s1.252 3.38 1.427 3.613c.175.233 2.464 3.764 5.972 5.277.835.36 1.487.576 1.994.737.838.267 1.601.23 2.204.14.672-.1 2.07-.845 2.363-1.663.291-.816.291-1.516.203-1.663-.087-.146-.32-.233-.67-.408z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          ) : (
            <RegLookupForm />
          )}
        </Reveal>
      </div>
    </section>
  );
}
