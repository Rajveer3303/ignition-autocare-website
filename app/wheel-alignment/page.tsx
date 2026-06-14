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
  WheelIcon,
  WrenchIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Wheel Alignment Castleford – 4-Wheel Alignment & Tracking",
  description:
    "Precision wheel alignment in Castleford. Improve tyre life, fuel economy & safety. Book your 2-wheel or 4-wheel alignment today.",
};

const BENEFITS = [
  { title: "Prevents Uneven Tyre Wear", text: "Keeps your tyres lasting longer and saves you money on replacements.", icon: <WheelIcon /> },
  { title: "Improves Steering & Handling", text: "Ensures smooth, stable, and precise control of your vehicle.", icon: <CarIcon /> },
  { title: "Increases Fuel Efficiency", text: "Proper alignment reduces rolling resistance, helping your car use less fuel.", icon: <GaugeIcon /> },
  { title: "Enhances Safety on the Road", text: "Maintains optimal traction and control, especially at higher speeds.", icon: <ShieldCheckIcon /> },
];

const SERVICES = [
  { title: "2-Wheel / Front Wheel Tracking", text: "Ideal for front-wheel-drive vehicles to ensure straight, stable steering.", icon: <WheelIcon /> },
  { title: "4-Wheel Alignment", text: "Full precision adjustment for all-wheel and rear-wheel-drive vehicles.", icon: <CarIcon /> },
  { title: "Suspension Adjustment After Repairs", text: "Ensures correct geometry and alignment after suspension or steering work.", icon: <WrenchIcon /> },
];

const STEPS = [
  { title: "Initial Inspection", text: "We begin by checking your tyres, suspension, and steering components to identify any visible wear or damage that could affect alignment accuracy." },
  { title: "Precision Alignment", text: "Using advanced computerised alignment equipment, our technicians measure and adjust your vehicle's wheel angles to the exact manufacturer specifications." },
  { title: "Final Testing & Road Check", text: "Once adjustments are complete, we test your vehicle to ensure smooth handling, proper steering response, and even tyre wear — guaranteeing your car drives straight and safely." },
];

const WHY = [
  { title: "Experienced Technicians", text: "Our skilled team has years of experience in wheel alignment, ensuring your car handles perfectly and safely.", icon: <WrenchIcon /> },
  { title: "Advanced Alignment Technology", text: "We use the latest 3D and laser alignment equipment to ensure pinpoint accuracy for every vehicle.", icon: <GaugeIcon /> },
  { title: "Honest & Transparent Service", text: "We explain all findings clearly, provide fair pricing, and only recommend what your vehicle truly needs.", icon: <TagIcon /> },
];

const FAQS = [
  { q: "How do I know if my car needs wheel alignment?", a: "Common signs include your car pulling to one side, uneven or rapid tyre wear, a crooked steering wheel when driving straight, or vibration through the steering wheel." },
  { q: "What's the difference between 2-wheel tracking and 4-wheel alignment?", a: "2-wheel (front) tracking adjusts the front wheels only and suits most front-wheel-drive cars. 4-wheel alignment measures and adjusts all four wheels for full precision — recommended for all-wheel and rear-wheel-drive vehicles." },
  { q: "How long does a wheel alignment take?", a: "A typical alignment takes around 30–60 minutes, depending on your vehicle and whether suspension components need attention first." },
  { q: "Should I get an alignment after suspension repairs?", a: "Yes — suspension or steering work can change your vehicle's geometry. An alignment afterwards ensures everything is set back to exact manufacturer specifications." },
];

export default function WheelAlignmentPage() {
  return (
    <>
      <PageHero
        title="Wheel Alignment & Tracking in Castleford"
        intro="At Ignition Autocare in Castleford, we provide precise wheel alignment and tracking to improve handling, safety, and tyre life. Our experts use advanced equipment to align your wheels to exact manufacturer standards."
        formLabel="Book Your Wheel Alignment"
      />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader
          eyebrow="Drive Straight"
          title="Why Wheel Alignment Matters"
          intro="We combine precision, experience, and modern equipment to deliver accurate wheel alignment that protects your tyres and improves handling. With 29 years in the trade and a brand-new facility in Castleford, we offer honest assessments, clear pricing, and a service you can trust."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <FeatureCard key={b.title} {...b} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader title="Expert Wheel Tracking & Alignment Services" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <FeatureCard key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <TrustedGarage text="Fast service, trusted mechanics, and affordable prices — enter your registration for an instant wheel alignment quote." />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="Our Process" title="Our Wheel Alignment Process" />
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
