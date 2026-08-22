import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import TrustedGarage from "@/components/TrustedGarage";
import { ShieldCheckIcon, GaugeIcon, WrenchIcon, CarIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Air Conditioning Service Castleford – Re-gas & Leak Check | Ignition Autocare",
  description:
    "Air con not cooling? Musty smell or weak airflow? We re-gas, leak test and service car air conditioning systems in Castleford. Book your air con service today.",
};

const SYMPTOMS = [
  {
    title: "Not Cooling Properly",
    text: "The most obvious sign. Air con systems naturally lose refrigerant over time — typically around 10–15% per year — so a system that was fine last summer may struggle this year.",
    icon: <GaugeIcon />,
  },
  {
    title: "Musty or Unpleasant Smell",
    text: "Bacteria and mould can build up in the evaporator when the system isn't used regularly. An antibacterial treatment alongside a re-gas usually sorts this.",
    icon: <WrenchIcon />,
  },
  {
    title: "Weak Airflow",
    text: "If the fan seems fine but airflow from the vents feels reduced, a blocked cabin filter or a leak in the system could be the cause. We check both.",
    icon: <CarIcon />,
  },
  {
    title: "Window Fogging Slowly",
    text: "Air conditioning does more than cool — it dehumidifies air, which is what clears a fogged windscreen quickly. A poorly functioning system means slower demisting and reduced visibility.",
    icon: <ShieldCheckIcon />,
  },
];

const WHAT_INCLUDED = [
  {
    title: "Refrigerant Re-gas",
    text: "We evacuate the old refrigerant, check the system for leaks, and recharge to the manufacturer's specified level using the correct refrigerant type for your vehicle.",
    icon: <WrenchIcon />,
  },
  {
    title: "Leak Detection",
    text: "We test the system for leaks before recharging. Re-gassing a leaking system is a waste of money — we find and fix the leak first.",
    icon: <GaugeIcon />,
  },
  {
    title: "Cabin Air Filter Check",
    text: "A blocked cabin filter reduces airflow significantly. We inspect it and recommend replacement if it's overdue — most manufacturers suggest every 12,000–15,000 miles.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "System Performance Test",
    text: "Once recharged, we run a temperature performance test to confirm the system is cooling to the correct level and everything is working as it should.",
    icon: <CarIcon />,
  },
];

const STEPS = [
  {
    title: "System check",
    text: "We connect to your air con system and check current refrigerant levels, pressure readings and look for any obvious leaks before starting.",
  },
  {
    title: "Evacuation & leak test",
    text: "The old refrigerant is fully evacuated. We then pressure test the system to check for leaks — if any are found, we advise on repairs before proceeding.",
  },
  {
    title: "Recharge",
    text: "The system is recharged with the correct refrigerant to the exact specification for your vehicle — not a rough fill, but a precise charge by weight.",
  },
  {
    title: "Performance test",
    text: "We run the system and measure vent temperature to confirm it's cooling correctly. You'll know it works before you leave.",
  },
];

const FAQS = [
  {
    q: "How often should I get my air con serviced?",
    a: "Most manufacturers recommend an air con service every two years. Refrigerant leaks out gradually even in a healthy system, so regular re-gassing keeps performance consistent and prevents the compressor from working too hard.",
  },
  {
    q: "Does air con affect fuel economy?",
    a: "Yes — running air conditioning increases fuel consumption by around 5–10%. A poorly charged system works the compressor harder and increases that figure. A properly serviced system is more efficient.",
  },
  {
    q: "My air con was fine last year — why has it stopped working?",
    a: "Refrigerant loss is the most common cause. Systems typically lose around 10–15% of refrigerant per year even without a leak. After a couple of years, performance drops noticeably. A re-gas is usually all that's needed.",
  },
  {
    q: "Is air con servicing covered by my warranty?",
    a: "Air con servicing at an independent garage won't affect your manufacturer warranty. EU block exemption regulations protect your right to use independent garages for routine maintenance.",
  },
  {
    q: "Can you service air conditioning on any car?",
    a: "We can service air conditioning on the vast majority of cars on UK roads. If you're unsure whether we cover your vehicle, give us a call before booking.",
  },
];

export default function AirConditioningPage() {
  return (
    <>
      <PageHero
        title="Air Conditioning Service in Castleford"
        intro="Air conditioning isn't just for summer. It dehumidifies your car's air, which is what clears a fogged windscreen in seconds rather than minutes. Whether your system isn't cooling, smells off, or hasn't been touched in a couple of years, we'll get it working properly."
        formLabel="Book an Air Con Service"
      />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="Common Problems" title="Signs Your Air Con Needs Attention" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SYMPTOMS.map((s, i) => (
            <FeatureCard key={s.title} {...s} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="What's Included" title="Our Air Con Service Covers" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_INCLUDED.map((w, i) => (
              <FeatureCard key={w.title} {...w} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="The Process" title="How It Works" />
        <div className="mt-14">
          <ProcessSteps steps={STEPS} />
        </div>
      </section>

      <TrustedGarage text="We service air conditioning on all makes and models. Proper evacuation, leak testing, and a precise refrigerant charge by weight — not a rough top-up. You'll know it's working before you leave." />

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="FAQ" title="Air Con Questions Answered" />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
