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
  DiscIcon,
  GaugeIcon,
  ShieldCheckIcon,
  TagIcon,
  WrenchIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Brake Repairs Castleford – Safe Brakes at Ignition Autocare",
  description:
    "Expert brake repairs, pad replacements, disc machining and inspections in Castleford. Ensure your safety — book your brake check today.",
};

const SIGNS = [
  { title: "Squealing or Grinding Noises", text: "Often caused by worn brake pads or metal-on-metal contact.", icon: <DiscIcon /> },
  { title: "Soft or Spongy Brake Pedal", text: "Indicates air in the brake lines or low brake fluid.", icon: <GaugeIcon /> },
  { title: "Car Pulls to One Side When Braking", text: "Could signal uneven wear or a brake caliper issue.", icon: <WrenchIcon /> },
  { title: "Brake Warning Light", text: "A clear sign your braking system needs immediate attention.", icon: <ShieldCheckIcon /> },
];

const BRAKE_SERVICES = [
  { title: "Brake Pad & Disc Replacement", text: "Restore smooth, responsive braking with high-quality parts.", icon: <DiscIcon /> },
  { title: "Brake Fluid Change & Bleeding", text: "Maintain proper pressure and prevent brake failure.", icon: <GaugeIcon /> },
  { title: "ABS Diagnostics & Repair", text: "Identify and fix issues in your anti-lock braking system.", icon: <ShieldCheckIcon /> },
  { title: "Caliper Repairs", text: "Ensure even braking and extend the lifespan of your pads and discs.", icon: <WrenchIcon /> },
];

const STEPS = [
  { title: "Inspection & Diagnosis", text: "Our technicians begin with a detailed brake inspection to identify wear, damage, or fluid issues using advanced diagnostic tools." },
  { title: "Expert Repair or Replacement", text: "We repair or replace brake pads, discs, and other components using high-quality, manufacturer-approved parts to ensure safety and performance." },
  { title: "Final Testing & Safety Check", text: "After repairs, we thoroughly test your braking system to confirm everything works perfectly before you drive away with confidence." },
];

const WHY = [
  { title: "Skilled Brake Specialists", text: "Our experienced technicians are trained to handle all types of brake systems, ensuring accurate repairs every time.", icon: <WrenchIcon /> },
  { title: "Honest, Transparent Service", text: "We provide clear explanations, upfront pricing, and only recommend the work your vehicle truly needs.", icon: <TagIcon /> },
  { title: "Quality Parts & Reliable Results", text: "We use high-quality, manufacturer-approved components to guarantee long-lasting performance and safety.", icon: <ShieldCheckIcon /> },
];

const FAQS = [
  { q: "What signs indicate I need brake repairs?", a: "Common signs include squealing or grinding noises, reduced braking performance, vibration when braking, or a soft/pulled brake pedal." },
  { q: "Do you replace all brake components?", a: "Yes — we replace brake pads, discs, drums, shoes, and callipers as needed. All parts meet high quality and safety standards." },
  { q: "How long does a brake repair take?", a: "Repair time depends on the issue — pad replacement is quicker, while full system overhauls take longer. We'll provide an estimate upfront when you book." },
  { q: "Will brake repair affect my MOT?", a: "Absolutely. Properly functioning brakes are essential for passing the MOT. Repairs ensure your vehicle meets legal safety requirements." },
  { q: "Can I book a brake inspection separately?", a: "Yes — you can bring your vehicle in for just a brake inspection. We'll check all components and recommend repairs only if needed." },
];

export default function BrakeRepairsPage() {
  return (
    <>
      <PageHero
        title="Brake Repairs & Replacements in Castleford"
        intro="At Ignition Autocare in Castleford, we provide expert brake repairs and replacements for all makes and models. Our skilled technicians use advanced tools and quality parts to ensure safe, reliable braking and peace of mind on the road."
        formLabel="Book Your Brake Service Online"
      />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader title="Signs You Need Brake Repairs" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNS.map((s, i) => (
            <FeatureCard key={s.title} {...s} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader title="Our Comprehensive Brake Care Services" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BRAKE_SERVICES.map((s, i) => (
              <FeatureCard key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <TrustedGarage text="Safe, reliable braking starts with an honest inspection. Enter your registration to get an instant price for your brake check or repair." />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="Our Process" title="Our Brake Repair Process" />
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
