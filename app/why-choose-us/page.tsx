import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import ReviewStrip from "@/components/ReviewStrip";
import Link from "next/link";
import { ShieldCheckIcon, GaugeIcon, WrenchIcon, CarIcon, TagIcon, WheelIcon, DiscIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Why Choose Ignition Autocare? | Bosch Approved, 4.9★ Google Reviews",
  description:
    "Bosch Approved. Free Video Health Check. Courtesy Cars. 300+ tyres in stock. Same-day fitting. Based in Castleford. Here's why thousands of customers choose Ignition Autocare.",
};

const REASONS = [
  {
    icon: <ShieldCheckIcon />,
    title: "Bosch Approved Garage",
    text: "We've been independently assessed and approved by Bosch against their standard for equipment, training and workshop processes. Not self-certified — externally evaluated.",
    link: "/bosch-approved",
    linkLabel: "What Bosch Approved means →",
    highlight: true,
  },
  {
    icon: <CarIcon />,
    title: "Free Video Health Check",
    text: "Every service customer receives a video walkaround inspection sent directly to their phone — showing exactly what we found before you agree to any additional work.",
    link: "/video-health-check",
    linkLabel: "How it works →",
    highlight: true,
  },
  {
    icon: <WrenchIcon />,
    title: "Free Collection & Delivery",
    text: "We pick up your car from home or work, service it at the garage, and return it to you. No need to take time off or arrange transport.",
    link: "/collection-delivery-service",
    linkLabel: "Find out more →",
    highlight: false,
  },
  {
    icon: <GaugeIcon />,
    title: "Courtesy Cars Available",
    text: "Need to stay on the road while your car is with us? We offer courtesy vehicles so your day isn't disrupted. Subject to availability — ask when booking.",
    link: "/courtesy-cars",
    linkLabel: "Courtesy car details →",
    highlight: false,
  },
  {
    icon: <WheelIcon />,
    title: "300+ Tyres in Stock",
    text: "Budget to premium — Michelin, Continental and more — with same-day fitting. We carry enough stock to sort most fittings the day you call.",
    link: "/tyres",
    linkLabel: "See tyre options →",
    highlight: false,
  },
  {
    icon: <DiscIcon />,
    title: "Modern Diagnostic Equipment",
    text: "We use the same Bosch diagnostic tools found in main dealer workshops. When your warning light comes on, we find the actual cause — not our best guess.",
    link: "/diagnostics",
    linkLabel: "About our diagnostics →",
    highlight: false,
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Genuine & Quality-Matched Parts",
    text: "We use OEM-equivalent or genuine manufacturer parts. No cheap alternatives that fail early and end up costing you more in the long run.",
    link: null,
    linkLabel: null,
    highlight: false,
  },
  {
    icon: <TagIcon />,
    title: "Transparent, Upfront Pricing",
    text: "The price you're quoted is the price you pay. We explain everything before we start and don't add work without asking. No invoice surprises.",
    link: "/book",
    linkLabel: "Get an instant price →",
    highlight: false,
  },
  {
    icon: <CarIcon />,
    title: "Based in Castleford",
    text: "Colorado Way, Castleford, WF10 4TA — easy to reach, with free on-site parking. Mon–Fri 8am–5pm, Saturday 8am–4pm.",
    link: "/contact-us",
    linkLabel: "Get directions →",
    highlight: false,
  },
  {
    icon: <ShieldCheckIcon />,
    title: "4.9 Stars on Google",
    text: "[VERIFY: current rating] from 450+ reviews. Not a number we manufactured — it's the average of what customers say after they've used us.",
    link: "/reviews",
    linkLabel: "Read the reviews →",
    highlight: false,
  },
  {
    icon: <GaugeIcon />,
    title: "29+ Years Experience",
    text: "Family-run since [VERIFY: founding year]. Decades of experience across all makes and models, from everyday hatchbacks to prestige vehicles.",
    link: "/about",
    linkLabel: "Our story →",
    highlight: false,
  },
  {
    icon: <ShieldCheckIcon />,
    title: "DVSA Approved MOT Station",
    text: "Our MOT testing is carried out by DVSA-certified testers on authorised testing equipment. Official testing, free retest if required.",
    link: "/mot",
    linkLabel: "Book an MOT →",
    highlight: false,
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 pb-20 pt-36 text-center text-white">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-200">
            Why Ignition Autocare?
          </p>
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
            Twelve Reasons Customers Come Back
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
            We could say &ldquo;we&apos;re the best&rdquo; — but this page is about showing you what that actually looks like in practice, not just saying it.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/book" className="btn-primary bg-white px-8 py-3 text-base text-brand-700 hover:bg-brand-50">
              Book Online Now
            </Link>
            <Link href="/contact-us" className="rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10">
              Find a Branch
            </Link>
          </div>
          <ReviewStrip variant="dark" className="mx-auto mt-8 max-w-md text-left" />
        </Reveal>
      </section>

      {/* Reasons grid */}
      <section className="container-site py-10 sm:py-16">
        <SectionHeader
          eyebrow="The Reasons"
          title="What Makes Us Different"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.08}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-6 ${
                  r.highlight
                    ? "border-brand-200 bg-brand-50"
                    : "border-ink-900/5 bg-white shadow-card"
                }`}
              >
                <span className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${r.highlight ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-600"}`}>
                  {r.icon}
                </span>
                <h3 className="font-heading text-lg font-bold text-ink-900">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{r.text}</p>
                {r.link && (
                  <Link
                    href={r.link}
                    className="mt-4 text-sm font-semibold text-brand-600 hover:underline"
                  >
                    {r.linkLabel}
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Strong CTA */}
      <section className="bg-brand-600">
        <div className="container-site py-16 text-center sm:py-20">
          <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Book?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
            Enter your reg for an instant price. No payment upfront. No card required. Same-day and next-day slots often available.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/book" className="rounded-2xl bg-white px-10 py-4 text-lg font-extrabold text-brand-700 shadow-lg transition hover:bg-brand-50">
              Book Online — Get an Instant Price
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
