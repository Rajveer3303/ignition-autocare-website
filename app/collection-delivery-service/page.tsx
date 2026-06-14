import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import TrustedGarage from "@/components/TrustedGarage";
import {
  ClockIcon,
  GaugeIcon,
  ShieldCheckIcon,
  TagIcon,
  WrenchIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Car Collection & Delivery Service | Ignition Auto Care Castleford",
  description:
    "Ignition Auto Care offers convenient car collection and delivery in Castleford. Book your MOT, servicing, or repairs, and we’ll pick up and return your vehicle hassle-free.",
};

const SERVICES = [
  { title: "Interim Service", text: "Essential oil & filter change with key safety checks to keep a regularly driven car running smoothly between annual services.", icon: <WrenchIcon /> },
  { title: "Full Service", text: "Comprehensive annual service covering fluids, filters (oil/air/cabin), and a detailed multi-point inspection of brakes, steering, suspension and electrics.", icon: <GaugeIcon /> },
  { title: "Major Service", text: "Our most thorough service (typically every 24 months) adding items like spark plugs/brake fluid/coolant and deeper component checks for long-term reliability.", icon: <ShieldCheckIcon /> },
];

const WHY = [
  { title: "Quick Local Response", text: "Fast collection and turnaround, so you're never left waiting.", icon: <ClockIcon /> },
  { title: "Transparent Pricing", text: "Clear quotes and your approval before any work starts.", icon: <TagIcon /> },
  { title: "Safe, Secure Transport", text: "Modern recovery vehicles and trained staff handle your car with care.", icon: <ShieldCheckIcon /> },
];

const FAQS = [
  { q: "What areas do you cover?", a: "We offer collection & delivery within a 10-mile radius of our garage (subject to availability and booking slot)." },
  { q: "Can you collect for MOT only?", a: "No — collection is available for Servicing bookings. If you book MOT + Service together, we'll collect and return your vehicle as part of the package." },
  { q: "Is there a charge for collection & delivery?", a: "Any collection/delivery fee (if applicable) is confirmed upfront at booking — clear quotes, no hidden charges." },
  { q: "How should I prepare the car for collection?", a: "Have keys, parking/access info, and the locking wheel nut key ready; remove valuables, and ensure there's enough fuel/charge for movements. Let us know of alarms/immobilisers." },
  { q: "When will my car be returned?", a: "For most services it's same-day. We'll send a technician video report for approval before any work, then deliver your car back once completed. If the vehicle is undriveable, we'll advise the best recovery option and timings." },
];

export default function CollectionDeliveryPage() {
  return (
    <>
      <PageHero
        title="Collection & Delivery Service"
        intro="Ignition Autocare offers a home or workplace collection & delivery service within a 10-mile radius of our garage – so your car can be serviced without disrupting your day."
        formLabel="Book a Service Online"
      />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="Our Services" title="Comprehensive Car Servicing Solutions" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <FeatureCard key={s.title} {...s} delay={i * 0.1} />
          ))}
        </div>
        <Reveal className="mx-auto mt-10 max-w-3xl">
          <p className="rounded-2xl border-l-4 border-brand-500 bg-brand-50 p-5 text-sm leading-relaxed text-ink-700">
            <strong className="text-ink-900">MOT policy:</strong> We don&apos;t offer collection for
            MOT-only bookings. Book MOT + Service together and we&apos;ll collect and return your
            vehicle as part of the package.
          </p>
        </Reveal>
      </section>

      <TrustedGarage text="Your car serviced without disrupting your day — we collect from your home or workplace within 10 miles, and return it once the work is done and approved by you." />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader title="Why Choose Us?" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {WHY.map((w, i) => (
            <FeatureCard key={w.title} {...w} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader title="Frequently Asked Questions" />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      <CTASection heading="Any Question?" subheading="Talk with An Expert" />
    </>
  );
}
