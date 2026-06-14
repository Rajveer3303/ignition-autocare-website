import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import {
  PinIcon,
  ShieldCheckIcon,
  TagIcon,
  TruckIcon,
  WrenchIcon,
  ClockIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Local Vehicle Recovery | Ignition Auto Care Castleford",
  description:
    "Stranded on the road? Ignition Auto Care offers fast and reliable local vehicle recovery in Castleford. Get professional roadside assistance and safe towing when you need it most.",
};

const SERVICES = [
  { title: "On-Site Assistance", text: "Quick response for breakdowns, flat batteries, or minor faults.", icon: <WrenchIcon /> },
  { title: "Towing to Garage", text: "Safe vehicle transport to your preferred local destination.", icon: <TruckIcon /> },
  { title: "GPS Location Dispatch", text: "Our team instantly locates you through GPS or shared pin for fast dispatch.", icon: <PinIcon /> },
];

const STEPS = [
  { title: "Call & Share Location", text: "Call us and share your location — our team instantly locates you through GPS or shared pin for fast dispatch." },
  { title: "Vehicle Assessment & Pickup", text: "A trained recovery specialist arrives promptly to assess and secure your vehicle." },
  { title: "Safe Drop-Off", text: "We tow or transport your car safely to your home, garage, or preferred workshop." },
];

const WHY = [
  { title: "Quick Local Response", text: "We provide fast roadside assistance and vehicle recovery within a 10-mile radius — so you're never left waiting too long.", icon: <ClockIcon /> },
  { title: "Transparent Pricing", text: "No hidden fees or surprise charges — we offer honest quotes and clear communication from start to finish.", icon: <TagIcon /> },
  { title: "Safe & Secure Towing", text: "Our trained recovery team uses modern tow vehicles and safety equipment to ensure your car is handled with care.", icon: <ShieldCheckIcon /> },
];

const FAQS = [
  { q: "What area does your recovery service cover?", a: "We provide vehicle recovery services within a 10-mile radius of our Castleford garage, ensuring your vehicle is safely recovered and promptly repaired — all under one roof." },
  { q: "Is the recovery service really free?", a: "We offer free local recovery for our customers when your vehicle is brought to our garage for repair. Call us to confirm eligibility for your situation." },
  { q: "How quickly can you reach me?", a: "We aim for a quick local response. Once you call and share your location, our recovery specialist is dispatched promptly." },
  { q: "What if my car can't be repaired at the roadside?", a: "We'll safely tow your vehicle to our garage using our in-house recovery truck, assess the fault, and confirm a clear quote before any work begins." },
];

export default function LocalRecoveryPage() {
  return (
    <>
      <PageHero
        title="Free Local Recovery"
        intro="At Ignition Autocare, we offer an in-house recovery truck for our customers — ensuring your vehicle is safely collected and brought to our garage for repair."
        formLabel="Book Local Recovery Online"
      />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader
          eyebrow="Our Services"
          title="Local Recovery Within a 10-Mile Radius"
          intro="We provide vehicle recovery services within a 10-mile radius of our garage. Our goal is to ensure your vehicle is safely recovered and promptly repaired — all under one roof."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <FeatureCard key={s.title} {...s} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="Our Process" title="How It Works" />
          <div className="mt-14">
            <ProcessSteps steps={STEPS} />
          </div>
        </div>
      </section>

      <section className="container-site py-16 sm:py-20">
        <SectionHeader title="Why Choose Ignition Autocare" />
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

      <CTASection />
    </>
  );
}
