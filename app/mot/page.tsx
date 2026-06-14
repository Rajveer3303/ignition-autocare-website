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
  DiscIcon,
  GaugeIcon,
  ShieldCheckIcon,
  TagIcon,
  WheelIcon,
  WrenchIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "MOT Castleford – Book Your DVSA MOT at Ignition Autocare",
  description:
    "Reliable DVSA-approved MOT testing in Castleford at Ignition Autocare. No unnecessary repairs, honest service, 29 years’ experience. Book your MOT online today.",
};

const MOT_CHECKS = [
  { title: "Brakes, Tyres, Suspension & Steering", text: "Full safety inspection of the systems that keep you in control.", icon: <DiscIcon /> },
  { title: "Lights, Indicators & Electrics", text: "All exterior lighting and electrical safety systems checked.", icon: <GaugeIcon /> },
  { title: "Exhaust & Emissions", text: "Emissions tested against current legal compliance standards.", icon: <CarIcon /> },
  { title: "Seatbelts, Airbags & Safety Systems", text: "Restraint and safety systems verified for correct operation.", icon: <ShieldCheckIcon /> },
  { title: "Windscreen, Wipers & Washers", text: "Visibility systems inspected for damage and correct function.", icon: <WrenchIcon /> },
  { title: "Vehicle Body & Structure", text: "Bodywork and structure examined for corrosion and damage.", icon: <WheelIcon /> },
];

const BENEFITS = [
  { title: "Safety on the Road", text: "Your MOT confirms your car meets the minimum safety standards to protect you, your passengers, and other road users.", icon: <ShieldCheckIcon /> },
  { title: "Legal Compliance", text: "Driving without a valid MOT is illegal and can invalidate your insurance — stay legal with a DVSA-approved test.", icon: <TagIcon /> },
  { title: "Early Problem Detection", text: "An MOT catches developing faults early, helping you avoid bigger and more expensive repairs later.", icon: <GaugeIcon /> },
  { title: "Maintain Vehicle Value", text: "A full MOT history shows your car has been looked after and supports its resale value.", icon: <CarIcon /> },
];

const STEPS = [
  { title: "Book your MOT", text: "Schedule your MOT test online or by phone at a time that suits you." },
  { title: "We test your vehicle", text: "Our DVSA-approved testers carry out a thorough inspection of all major components." },
  { title: "Get your results", text: "Receive your official MOT certificate with detailed results — and a free retest if required." },
  { title: "Drive away safe", text: "Leave with confidence knowing your car is safe, legal, and road-ready." },
];

const FAQS = [
  { q: "How long does an MOT test take?", a: "A standard MOT test usually takes 45–60 minutes, depending on your vehicle's condition." },
  { q: "Where can I book an MOT in Castleford?", a: "You can book your MOT in Castleford directly with Ignition Autocare online or by phone. We provide DVSA-approved MOT testing with transparent pricing and free retests if required." },
  { q: "How much does an MOT cost in Castleford?", a: "The cost of an MOT in Castleford varies, but at Ignition Autocare we keep it affordable with clear, upfront prices. Enter your vehicle registration online to get an instant MOT price for your car or van." },
  { q: "Can I book a same-day MOT in Castleford?", a: "Yes! At Ignition Autocare, we often have availability for same-day MOT Castleford bookings. Call us directly for the quickest slot." },
  { q: "What happens if my car fails its MOT?", a: "We'll explain exactly what failed and why, give you a clear, upfront quote for any work needed, and offer a free retest once repairs are complete." },
];

export default function MOTPage() {
  return (
    <>
      <PageHero
        title="MOT Testing in Castleford"
        intro="At Ignition Autocare in Castleford, we provide professional MOT testing for all makes and models. Our DVSA-approved testers deliver honest results, transparent pricing, and free retests if required — no unnecessary repairs, ever."
        formLabel="Book Your MOT Online"
      />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="Our Services" title="What's Checked in Your MOT?" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MOT_CHECKS.map((c, i) => (
            <FeatureCard key={c.title} {...c} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="The Benefits" title="Why Your MOT Test Really Matters" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <FeatureCard key={b.title} {...b} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <TrustedGarage text="At Ignition Autocare we keep MOT testing simple: clear prices, honest results, and free retests if required. Enter your registration to get an instant MOT price for your car or van." />

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
