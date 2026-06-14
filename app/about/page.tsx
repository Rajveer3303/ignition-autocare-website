import type { Metadata } from "next";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import {
  HeartIcon,
  PinIcon,
  ShieldCheckIcon,
  TagIcon,
  TruckIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Ignition Autocare – Trusted Castleford Garage",
  description:
    "Learn more about Ignition Autocare, Castleford’s trusted local garage with 29+ years of experience in MOTs, servicing and repairs.",
};

const MISSION = [
  { title: "Customer-Centric Care", text: "Deliver honest, reliable, and quality automotive care.", icon: <HeartIcon /> },
  { title: "Safety First", text: "Keep every driver road-ready with expert servicing, honest pricing, and clear communication.", icon: <ShieldCheckIcon /> },
  { title: "Local Commitment", text: "Build lasting relationships through integrity and value.", icon: <PinIcon /> },
];

const WHY_CHOOSE = [
  { title: "Experience", text: "Over 29 years' experience in Castleford car repairs & servicing", icon: <ShieldCheckIcon /> },
  { title: "Transparent Pricing", text: "No hidden extras, only honest MOT & repairs Castleford", icon: <TagIcon /> },
  { title: "Door to Door Service", text: "Pick-up & drop-off service Castleford (home, office, or near Junction 32)", icon: <TruckIcon /> },
  { title: "Proudly Supporting Castleford Heroes", text: "Discounts for NHS, Army, and local residents in Castleford", icon: <HeartIcon /> },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        intro="Ignition Autocare has proudly served Castleford and surrounding areas for over 29 years. We believe in honest pricing, professional service, and putting customers first."
        formLabel="Book Your Appointment Online"
      />

      <section className="container-site grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2">
        <Reveal className="relative">
          <Image
            src="/images/reception.jpg"
            alt="Ignition Autocare modern reception area in Castleford"
            width={800}
            height={1000}
            className="w-full rounded-3xl object-cover shadow-card"
          />
          <div className="absolute -bottom-6 left-6 flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-card-hover">
            <span className="text-4xl font-extrabold text-brand-600">
              <AnimatedCounter to={29} suffix="+" />
            </span>
            <span className="text-sm font-bold leading-tight text-ink-900">
              Years of
              <br />
              Experience
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <span className="section-eyebrow">Who We Are</span>
          <h2 className="section-title">Your Local Castleford Garage</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-500">
            For over 29 years, Ignition Autocare has looked after drivers in Castleford and the
            surrounding areas. We&apos;re a friendly, independent garage built on honest pricing,
            clear communication, and professional workmanship. From Interim, Full and Major
            Services to MOTs, repairs, tyres, brakes and diagnostics, our trained technicians use
            modern equipment and follow manufacturer-approved procedures.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            Every visit includes straightforward quotes (your approval first) and a free technician
            video health report for transparency. Need convenience? We also offer a collection
            &amp; delivery service within 10 miles. With thousands of happy local customers,
            we&apos;re here to keep you safe, road-ready, and confident in your car.
          </p>
        </Reveal>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader title="Our Facilities" intro="A modern, purpose-built garage designed for your comfort and your car's care." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal className="overflow-hidden rounded-3xl shadow-card">
              <Image src="/images/garage-exterior.jpg" alt="Ignition Autocare garage exterior with Service Bay and MOT Lane" width={600} height={400} className="h-64 w-full object-cover" />
            </Reveal>
            <Reveal delay={0.1} className="overflow-hidden rounded-3xl shadow-card">
              <Image src="/images/lounge.jpg" alt="Comfortable customer waiting lounge at Ignition Autocare" width={600} height={400} className="h-64 w-full object-cover" />
            </Reveal>
            <Reveal delay={0.2} className="overflow-hidden rounded-3xl shadow-card">
              <Image src="/images/team-rear.jpg" alt="Ignition Autocare team outside the Castleford garage" width={600} height={400} className="h-64 w-full object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container-site py-16 sm:py-20">
          <SectionHeader title="Our Mission" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {MISSION.map((m, i) => (
              <FeatureCard key={m.title} {...m} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16 sm:py-20">
        <SectionHeader title="Why Choose Ignition Autocare" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((c, i) => (
            <FeatureCard key={c.title} {...c} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <CTASection heading="Contact Us" subheading="Talk with An Expert" />
    </>
  );
}
