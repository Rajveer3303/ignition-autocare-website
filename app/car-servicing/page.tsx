import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import TrustedGarage from "@/components/TrustedGarage";
import {
  CarIcon,
  GaugeIcon,
  ShieldCheckIcon,
  TagIcon,
  WrenchIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Car Servicing Castleford – Interim, Full & Major Service | Ignition Autocare",
  description:
    "Expert car servicing in Castleford at Ignition Autocare. Interim, full, and major services for all makes and models. Bosch equipment, free video health check, 12-month parts guarantee. Book online.",
};

const SERVICE_TYPES = [
  {
    title: "Interim Service",
    text: "Ideal for cars driven more than 12,000 miles a year. Covers an oil & filter change, fluid top-ups, tyre condition, battery check, brake visual inspection, and a safety check of key components.",
    icon: <WrenchIcon />,
    freq: "Every 6 months or 6,000 miles",
  },
  {
    title: "Full Service",
    text: "Our most popular service. Covers everything in the Interim plus air filter, cabin filter, brake fluid condition, full multi-point inspection of brakes, suspension, steering, and exhaust, plus a free video health check.",
    icon: <GaugeIcon />,
    freq: "Every 12 months or 12,000 miles",
  },
  {
    title: "Major Service",
    text: "The most comprehensive service we offer. Everything in the Full Service plus spark plugs, coolant, brake fluid change, and deeper component inspection for long-term reliability and peace of mind.",
    icon: <ShieldCheckIcon />,
    freq: "Every 24 months or 24,000 miles",
  },
];

const BENEFITS = [
  {
    title: "Reduces Breakdown Risk",
    text: "Regular servicing catches wear and developing faults before they fail on the road. Most breakdowns are preventable with routine maintenance.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Better Fuel Economy",
    text: "Fresh oil, clean filters, and a correctly tuned engine all contribute to lower fuel consumption. A service often pays for itself in fuel savings.",
    icon: <GaugeIcon />,
  },
  {
    title: "Extends Vehicle Life",
    text: "Consistent servicing protects your engine internals from wear and keeps all major components working as designed for longer.",
    icon: <WrenchIcon />,
  },
  {
    title: "Protects Resale Value",
    text: "A full, stamped service history is one of the most important factors in used car value. Buyers pay more for cars with clear maintenance records.",
    icon: <TagIcon />,
  },
];

const STEPS = [
  {
    title: "Book online or by phone",
    text: "Enter your reg for an instant service price. Pick a date, choose collection or drop-off, and we confirm your slot within minutes.",
  },
  {
    title: "We carry out the service",
    text: "Your car is serviced by trained technicians using Bosch diagnostic equipment and quality OEM-equivalent parts, following manufacturer-recommended intervals.",
  },
  {
    title: "We send you a video health check",
    text: "Our technician films a walkaround of your car and sends it directly to your phone — showing exactly what they found during the inspection. Free with every service.",
  },
  {
    title: "You approve any additional work",
    text: "If anything needs attention beyond the booked service, we quote clearly before touching it. Nothing extra happens without your explicit go-ahead.",
  },
  {
    title: "Drive away with 12-month parts guarantee",
    text: "Any parts we fit come with a 12-month guarantee. Your service history is updated and your next service interval is noted so you don&apos;t have to remember it.",
  },
];

const FAQS = [
  {
    q: "How often should I service my car?",
    a: "Most manufacturers recommend a full service every 12 months or 12,000 miles — whichever comes first. If you drive more than 12,000 miles a year, an interim service every 6 months helps keep your car in peak condition between annual services.",
  },
  {
    q: "What&apos;s the difference between an interim, full, and major service?",
    a: "An interim service covers the essentials — oil, filter, fluids, and key safety checks. A full service adds air and cabin filters, a complete multi-point inspection, and a free video health check. A major service (every 2 years) goes further with spark plugs, coolant, brake fluid change, and deeper component checks.",
  },
  {
    q: "Will servicing at an independent garage affect my manufacturer warranty?",
    a: "No. Under UK and EU block exemption regulations, you have the legal right to have your car serviced at any reputable independent garage without voiding your manufacturer warranty — provided the correct parts and service intervals are followed. We use quality OEM-equivalent parts and follow manufacturer schedules.",
  },
  {
    q: "Why choose Ignition Autocare over a main dealer?",
    a: "We&apos;re a Bosch Approved garage with the same diagnostic equipment and technical standards as many dealerships — but without the dealership overheads and waiting times. You get a personal service, faster bookings, and transparent pricing.",
  },
  {
    q: "Do you stamp the service book?",
    a: "Yes, we stamp and sign your physical service book. If your car has a digital service record, we update that too. Your full service history is preserved with us.",
  },
  {
    q: "Do you offer collection and delivery for servicing?",
    a: "Yes — we offer a free collection and delivery service within 10 miles of our Castleford garage. We pick up your car from home or work, carry out the service, and return it the same day.",
  },
  {
    q: "What does the free video health check include?",
    a: "Our technician records a short video of your car during the service, showing any issues found — worn brake pads, leaking seals, tyre wear, and more. You receive it on your phone before we quote for any additional work. There&apos;s nothing to pay — it&apos;s included with every service.",
  },
];

export default function CarServicingPage() {
  return (
    <>
      <PageHero
        title="Car Servicing in Castleford"
        intro="Ignition Autocare provides Interim, Full, and Major car servicing for all makes and models. Bosch-approved workshop. Free video health check with every service. 12-month guarantee on parts fitted. A genuine alternative to dealership servicing — without the dealership price."
        formLabel="Book Your Service Online"
      />

      {/* Stat strip */}
      <section className="bg-brand-600">
        <div className="container-site grid grid-cols-2 gap-6 py-10 text-center sm:grid-cols-4">
          {[
            { stat: "All makes", label: "& models serviced" },
            { stat: "12-month", label: "Parts guarantee" },
            { stat: "Free", label: "Video health check included" },
            { stat: "Bosch", label: "Diagnostic equipment" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-white">{s.stat}</p>
              <p className="mt-1 text-sm font-medium text-brand-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service types */}
      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="Choose Your Service" title="Which Service Does Your Car Need?" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink-600">
          Not sure which service is right for you? Enter your reg and we&apos;ll tell you what&apos;s due based on your vehicle — or call us and we&apos;ll advise you in plain English.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICE_TYPES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-ink-900/5 bg-white p-6 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  {s.icon}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-ink-900">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{s.text}</p>
                <div className="mt-4 rounded-lg bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
                  {s.freq}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="Why Service Regularly?" title="What Regular Servicing Actually Does for Your Car" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <FeatureCard key={b.title} {...b} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <TrustedGarage text="Bosch Approved workshop. Free video health check with every service. Quality parts, 12-month guarantee. Honest prices — a genuine alternative to main dealer servicing in Castleford." />

      {/* Image + dealership vs us */}
      <section className="container-site py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal delay={0.15} className="order-2 lg:order-1">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="section-title">Dealership Quality. Independent Price.</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              As a Bosch Approved garage, we use the same diagnostic equipment found in main dealer workshops, follow manufacturer-approved service schedules, and use quality OEM-standard parts. Your warranty remains fully protected.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              What we don&apos;t have: the dealership overhead costs, the long wait times, or the impersonal service. Every car that comes through our workshop is treated as if it belongs to one of our own team.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { label: "Manufacturer warranty", val: "Protected ✓" },
                { label: "Service book stamp", val: "Yes ✓" },
                { label: "Video health check", val: "Free ✓" },
                { label: "12-month parts guarantee", val: "Included ✓" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-ink-900/5 bg-white p-3 shadow-sm">
                  <p className="text-xs text-ink-500">{item.label}</p>
                  <p className="mt-0.5 text-sm font-bold text-brand-600">{item.val}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="order-1 overflow-hidden rounded-3xl shadow-card lg:order-2">
            <Image
              src="/images/garage/workshop-red-car.jpg"
              alt="Car on the lift inside the Ignition Autocare workshop during a full service"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="Step by Step" title="How Your Service Works" />
          <div className="mt-14">
            <ProcessSteps steps={STEPS} />
          </div>
        </div>
      </section>

      {/* MOT + Service upsell */}
      <section className="container-site py-16 sm:py-20">
        <Reveal className="mx-auto max-w-3xl rounded-2xl bg-brand-600 p-8 text-center text-white sm:p-10">
          <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
            MOT Due at the Same Time?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-100">
            Book your MOT and service together — we carry out both on the same visit, saving you time and often money. If your car needs work to pass its MOT, we sort it all in one go.
          </p>
          <Link href="/book" className="mt-6 inline-block rounded-full bg-white px-8 py-3 font-extrabold text-brand-700 transition hover:bg-brand-50">
            Book MOT + Service Together
          </Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="FAQ" title="Car Servicing Questions Answered" />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
