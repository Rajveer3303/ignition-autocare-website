import type { Metadata } from "next";
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
  title: "Car Repairs Castleford – Diagnostics, Suspension & Engine | Ignition Autocare",
  description:
    "Professional car repairs in Castleford — engine, suspension, diagnostics and more. Honest prices, experienced team. Book your repair today.",
};

const SERVICE_TYPES = [
  { title: "Interim Service", text: "Keep your car running smoothly with essential maintenance — ideal between annual services for regularly driven vehicles.", icon: <WrenchIcon /> },
  { title: "Full Service", text: "A thorough inspection covering brakes, suspension, filters, fluids and a detailed multi-point check of your vehicle.", icon: <GaugeIcon /> },
  { title: "Major Service", text: "Comprehensive maintenance for complete peace of mind, with deeper component checks for long-term reliability.", icon: <ShieldCheckIcon /> },
];

const BENEFITS = [
  { title: "Reduced Risk of Breakdowns", text: "Regular servicing catches wear and developing faults before they leave you stranded.", icon: <ShieldCheckIcon /> },
  { title: "Better Fuel Economy", text: "Fresh oil, clean filters, and a well-tuned engine help your car use less fuel.", icon: <GaugeIcon /> },
  { title: "Extended Vehicle Lifespan", text: "Consistent maintenance keeps your engine and components running for longer.", icon: <WrenchIcon /> },
  { title: "Maintains Resale Value", text: "A complete service history makes your car more attractive to future buyers.", icon: <TagIcon /> },
];

const STEPS = [
  { title: "Book your service", text: "Schedule your service online or by phone at a time that suits you." },
  { title: "We inspect your vehicle", text: "Our qualified technicians carry out a thorough inspection using manufacturer-approved methods." },
  { title: "Approve the work", text: "You get straightforward quotes and a free technician video health report — your approval first." },
  { title: "Drive away happy", text: "We ensure your car is running smoothly and reliably, so you can hit the road with peace of mind." },
];

const FAQS = [
  { q: "Do you offer car servicing in Castleford?", a: "Yes, we provide interim, full, and major car servicing in Castleford for all makes and models. Regular servicing helps improve fuel efficiency, extend engine life, and avoid costly repairs later." },
  { q: "What's the difference between an interim, full, and major service?", a: "An interim service covers essential oil & filter changes with key safety checks. A full service is a comprehensive annual service covering fluids, filters, and a detailed multi-point inspection. A major service (typically every 24 months) adds items like spark plugs, brake fluid, and coolant with deeper component checks." },
  { q: "How often should I service my car?", a: "Most manufacturers recommend a full service every 12 months or 12,000 miles, whichever comes first. If you drive frequently, an interim service every 6 months keeps your car in peak condition." },
  { q: "Will servicing affect my manufacturer warranty?", a: "No — we use manufacturer-approved methods and quality parts, so your warranty stays intact while you pay independent garage prices." },
  { q: "Can you collect my car for a service?", a: "Yes, we offer a collection & delivery service within a 10-mile radius of our Castleford garage, so your car can be serviced without disrupting your day." },
];

export default function CarServicingPage() {
  return (
    <>
      <PageHero
        title="Car Servicing in Castleford"
        intro="At Ignition Autocare in Castleford, we specialise in expert car servicing for all makes and models. Whether it's a routine oil change, full service, or preventative maintenance, our skilled technicians use the latest tools and manufacturer-approved methods to keep your vehicle in peak condition."
        formLabel="Book Your Service Online"
      />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="Our Services" title="Types of Car Servicing We Offer" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICE_TYPES.map((s, i) => (
            <FeatureCard key={s.title} {...s} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="The Benefits" title="Why Regular Servicing Matters" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <FeatureCard key={b.title} {...b} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <TrustedGarage text="From routine oil changes to major services, our skilled technicians use the latest tools and manufacturer-approved methods. Enter your registration for an instant servicing price." />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="Our Process" title="How It Works" />
        <div className="mt-14">
          <ProcessSteps steps={STEPS} />
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="Why Choose Us?" title="Frequently Asked Questions" />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
