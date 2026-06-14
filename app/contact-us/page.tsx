import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import RegLookupForm from "@/components/RegLookupForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Ignition Autocare – MOT, Servicing & Repairs Castleford",
  description:
    "Get in touch with Ignition Autocare for MOTs, servicing, and car repairs in Castleford. Call, email, or book online today.",
};

const HOW_WE_WORK = [
  { title: "Book Your Service", text: "Schedule your Service online or by phone at a time that suits you." },
  { title: "We Inspect Your Vehicle", text: "Our qualified technicians carry out a thorough inspection." },
  { title: "Get Work Done", text: "We ensure your car is running smoothly and reliably, so you can hit the road with peace of mind." },
];

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
        intro="Got questions? Hit us up — we're just a click away."
        formLabel="Book Your Appointment Online"
      />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="Looking for any Service?" title="Get In Touch" />
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

        <Reveal className="mx-auto mt-12 max-w-2xl rounded-3xl border border-ink-900/5 bg-slate-50 p-8">
          <h3 className="mb-1 text-lg font-bold text-ink-900">Book quickly and easily</h3>
          <p className="mb-5 text-sm text-ink-500">
            MOT Testing · Servicing · Repairs · Wheel Alignment
          </p>
          <RegLookupForm compact />
        </Reveal>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="How we work?" title="Simple, Transparent, Hassle-Free" />
          <div className="mt-14">
            <ProcessSteps steps={HOW_WE_WORK} />
          </div>
        </div>
      </section>

      <section className="container-site py-16">
        <SectionHeader title="Office Hours" />
        <Reveal className="mx-auto mt-10 max-w-md">
          <ul className="divide-y divide-ink-900/5 rounded-3xl border border-ink-900/5 bg-white shadow-card">
            {SITE.hours.map((h) => (
              <li key={h.days} className="flex items-center justify-between px-7 py-4 text-sm">
                <span className="font-semibold text-ink-900">{h.days}</span>
                <span className={h.time === "Closed" ? "font-semibold text-red-500" : "text-ink-500"}>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
