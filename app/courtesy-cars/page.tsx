import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import TrustedGarage from "@/components/TrustedGarage";
import { CarIcon, ShieldCheckIcon, GaugeIcon, WrenchIcon } from "@/components/Icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Courtesy Cars Castleford – Subject to Availability | Ignition Autocare",
  description:
    "Courtesy cars available at Ignition Autocare Castleford — subject to availability. Ask when booking your service or repair and we'll confirm whether one is free for your slot.",
};

const BENEFITS = [
  {
    title: "Stay on the Road",
    text: "A courtesy car means you don't have to take a day off work or arrange lifts because your car is in for a service or repair. We want your life to carry on as normally as possible.",
    icon: <CarIcon />,
  },
  {
    title: "Subject to Availability",
    text: "Courtesy cars are offered on a first-come, first-served basis. Mention it at the time of booking — online or by phone — and we'll let you know straight away whether one is available for your slot.",
    icon: <GaugeIcon />,
  },
  {
    title: "No Awkward Upsell",
    text: "A courtesy car is offered as a practical convenience, not a premium extra bolted on to inflate your bill. We'll always mention it and let you decide.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Works Alongside Collection & Delivery",
    text: "If you'd prefer us to collect and return your car instead, that's also available — and free. Check out our collection and delivery service.",
    icon: <WrenchIcon />,
  },
];

const FAQS = [
  {
    q: "How do I book a courtesy car?",
    a: "Mention it when you book your service or repair — online or by phone. We'll check availability and confirm before your appointment. Courtesy cars are subject to availability, so booking in advance is always better.",
  },
  {
    q: "Is there a charge for the courtesy car?",
    a: "[VERIFY: confirm whether courtesy cars are free or have an associated charge]",
  },
  {
    q: "Do I need my own insurance to use a courtesy car?",
    a: "[VERIFY: confirm insurance requirements — whether covered under garage policy or customer's own comprehensive insurance required]",
  },
  {
    q: "What type of courtesy car will I get?",
    a: "[VERIFY: confirm the make/model or size of courtesy vehicles available]",
  },
  {
    q: "Are there age or licence restrictions?",
    a: "[VERIFY: confirm minimum age, licence type, and any other eligibility requirements]",
  },
  {
    q: "What if a courtesy car isn't available?",
    a: "If we can't offer a courtesy car for your slot, we also offer a free collection and delivery service — we come to you, service your car, and bring it back. Or if you'd prefer to wait, we're conveniently located near a Costa Coffee.",
  },
];

export default function CourtesyCarsPage() {
  return (
    <>
      <PageHero
        title="Courtesy Cars — Subject to Availability"
        intro="We offer courtesy cars for customers while their vehicle is with us — subject to availability. Mention it when you book and we'll confirm whether one is free for your slot. First come, first served, so booking ahead always helps."
        formLabel="Book a Service & Request a Courtesy Car"
      />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader
          eyebrow="What We Offer"
          title="Keep Moving While We Work"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <FeatureCard key={b.title} {...b} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <TrustedGarage text="Courtesy cars available at Ignition Autocare — subject to availability. Ask when booking and we'll confirm. Can't offer a car? We'll collect yours and return it instead." />

      {/* Alternative option */}
      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-ink-900/5 bg-white p-8 shadow-card sm:p-10">
            <h2 className="font-heading text-xl font-extrabold text-ink-900 sm:text-2xl">
              Prefer us to come to you?
            </h2>
            <p className="mt-3 text-ink-600">
              Our free collection and delivery service means you don&apos;t have to come to us at all. We collect your car from your home or workplace, carry out the work at the garage, and return it to you when it&apos;s done. No courtesy car needed.
            </p>
            <Link
              href="/collection-delivery-service"
              className="mt-6 inline-flex items-center gap-2 text-brand-600 font-semibold hover:underline"
            >
              Find out about free collection & delivery →
            </Link>
          </div>
        </div>
      </section>

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="FAQ" title="Courtesy Car Questions" />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion faqs={FAQS} />
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
