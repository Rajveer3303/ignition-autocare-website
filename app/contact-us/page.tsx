import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Ignition Autocare – MOT, Servicing & Repairs Castleford",
  description:
    "Get in touch with Ignition Autocare for MOTs, servicing, and car repairs in Castleford. Call 01977 807050, email Info@ignitionautocare.co.uk, or visit us on Colorado Way.",
};

const CONTACT_CARDS = [
  {
    title: "Call Us",
    value: SITE.phone,
    href: SITE.phoneHref,
    icon: <PhoneIcon />,
  },
  {
    title: "Email Us",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: <MailIcon />,
  },
  {
    title: "Visit Us",
    value: SITE.fullAddress,
    href: "https://maps.google.com/?q=Colorado+Way,+Castleford,+WF10+4TA",
    icon: <PinIcon />,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        intro="Got a question or want to book? Call us, email us, or drop in. We're based on Colorado Way in Castleford — easy to find, with free parking right outside."
        formLabel="Book Your Appointment Online"
      />

      {/* Contact cards */}
      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="Get in Touch" title="We're Here to Help" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CONTACT_CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1} className="h-full">
              <a
                href={c.href}
                className="group flex h-full flex-col items-center rounded-3xl border border-ink-900/5 bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover"
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  {c.icon}
                </span>
                <h3 className="text-lg font-bold text-ink-900">{c.title}</h3>
                <p className="mt-2 break-words text-sm text-ink-500">{c.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Meet Casey */}
      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="Meet the Team" title="Your First Point of Contact" />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <div className="flex flex-col items-start gap-8 rounded-2xl border border-ink-900/5 bg-white p-8 shadow-card sm:flex-row">
              <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-5xl">
                👋
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Manager</p>
                <h3 className="mt-1 font-heading text-2xl font-extrabold text-ink-900">Casey</h3>
                <p className="mt-4 text-base leading-relaxed text-ink-600">
                  Casey has extensive knowledge built up through years of working in the automotive industry. As manager of Ignition Autocare, she oversees everything that happens at the garage — from making sure the workshop runs on time to ensuring every customer is looked after properly.
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink-600">
                  If you call the garage, there&apos;s a good chance you&apos;ll speak to Casey first. She knows the industry inside and out, speaks plainly about what your car needs, and will always give you an honest answer — whether that&apos;s good news or not.
                </p>
                <Link
                  href={SITE.phoneHref}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-500"
                >
                  📞 Call and speak to the team
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Aerial / How to find us */}
      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="How to Find Us" title="Where We Are" />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/images/garage/find-us-map.jpg"
              alt="Aerial view showing how to find Ignition Autocare on Colorado Way, Castleford"
              width={1200}
              height={900}
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="font-heading text-2xl font-extrabold text-ink-900">
              Colorado Way, Castleford, WF10 4TA
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              We&apos;re on Colorado Way in Castleford — right next to the Asda superstore. There&apos;s free parking directly in front of the garage, and we&apos;re easy to spot with our illuminated signage.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { label: "Mon – Fri", value: "08:00 – 17:00" },
                { label: "Saturday", value: "08:00 – 16:00" },
                { label: "Sunday", value: "Closed" },
              ].map((h) => (
                <li key={h.label} className="flex items-center justify-between rounded-xl border border-ink-900/5 bg-white px-5 py-3 shadow-sm">
                  <span className="font-semibold text-ink-900">{h.label}</span>
                  <span className={h.value === "Closed" ? "font-semibold text-red-500" : "text-ink-500"}>{h.value}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://maps.google.com/?q=Colorado+Way,+Castleford,+WF10+4TA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-block px-6 py-3"
            >
              Open in Google Maps
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
