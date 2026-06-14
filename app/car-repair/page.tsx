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
  WheelIcon,
  WrenchIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Car Repair - ignitionautocare.uk",
  description:
    "Reliable car repairs in Castleford for all makes and models. From minor faults to major engine work — fast, high-quality service at affordable prices.",
};

const REPAIR_SERVICES = [
  { title: "Engine Diagnostics & Repairs", text: "Advanced diagnostics to pinpoint and fix engine faults fast.", icon: <GaugeIcon /> },
  { title: "Transmission & Clutch Repairs", text: "Smooth gear changes restored with expert transmission work.", icon: <WrenchIcon /> },
  { title: "Suspension & Steering Fixes", text: "Precise handling and a comfortable ride, restored.", icon: <WheelIcon /> },
  { title: "Electrical & Wiring Repairs", text: "Faults traced and fixed across all vehicle electrical systems.", icon: <ShieldCheckIcon /> },
  { title: "Exhaust & Emissions Repairs", text: "Keep your car quiet, clean, and emissions-compliant.", icon: <CarIcon /> },
  { title: "Brakes & Safety Systems", text: "Pads, discs, and hydraulic systems repaired to keep you safe.", icon: <DiscIcon /> },
];

const STEPS = [
  { title: "Inspection & Diagnosis", text: "Our technicians thoroughly inspect your vehicle using advanced diagnostic tools to identify the exact issue." },
  { title: "Repair & Replacement", text: "We carry out all necessary repairs using high-quality parts and precise techniques to restore performance and safety." },
  { title: "Final Testing & Handover", text: "Every vehicle undergoes a complete quality check before being returned, ensuring it's road-ready and running smoothly." },
];

const WHY = [
  { title: "Skilled Technicians", text: "Experience precision in problem-solving with our state-of-the-art diagnostic tools.", icon: <WrenchIcon /> },
  { title: "Performance and Efficiency", text: "We focus on optimising the performance and efficiency of your vehicle with every repair.", icon: <GaugeIcon /> },
  { title: "User Experience and Safety", text: "Your safety comes first — every repair is completed and tested to the highest standard.", icon: <ShieldCheckIcon /> },
];

const FAQS = [
  { q: "What types of repairs do you handle?", a: "From electrical and engine faults to exhaust, cooling systems, and bodywork — we repair all common issues for all makes and models." },
  { q: "How do I book a repair or diagnosis?", a: "Just call us or book through our website. We'll schedule a time to inspect your vehicle and recommend the necessary repairs." },
  { q: "How long will the repair take?", a: "It depends on the issue and parts needed. Simple repairs can be same-day; complex ones may take longer. We'll provide a time estimate up front." },
  { q: "Do you use original or aftermarket parts?", a: "We use high-quality OEM or equivalent parts, matched to your vehicle, to ensure safety and reliability." },
  { q: "Is there a warranty on repairs?", a: "Yes — all our work is backed by a parts and labour guarantee, giving you peace of mind after your car leaves our workshop." },
];

export default function CarRepairPage() {
  return (
    <>
      <PageHero
        title="Car Repairs in Castleford"
        intro="At Ignition Autocare in Castleford, we offer reliable car repairs for all makes and models. From minor faults to major engine work, our experts deliver fast, high-quality service at affordable prices."
        formLabel="Book Your Car Repair Online"
      />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader
          eyebrow="Our Services"
          title="Expert Services at Ignition Autocare"
          intro="Book today with transparent quotes confirmed before work."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REPAIR_SERVICES.map((s, i) => (
            <FeatureCard key={s.title} {...s} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </section>

      <TrustedGarage text="From minor faults to major engine work, our experts deliver fast, high-quality repairs at affordable prices — with transparent quotes confirmed before any work starts." />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="Our Process" title="How It Works" />
        <div className="mt-14">
          <ProcessSteps steps={STEPS} />
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader title="Why Choose Us?" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WHY.map((w, i) => (
              <FeatureCard key={w.title} {...w} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16 sm:py-20">
        <SectionHeader title="Frequently Asked Questions" />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion faqs={FAQS} />
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
