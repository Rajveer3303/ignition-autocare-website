import type { Metadata } from "next";
import Link from "next/link";
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
  ClockIcon,
  DiscIcon,
  GaugeIcon,
  ShieldCheckIcon,
  TagIcon,
  WheelIcon,
  WrenchIcon,
} from "@/components/Icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "MOT Failure Repairs in Castleford | Ignition Autocare",
  description:
    "Failed your MOT? We repair MOT failures in Castleford, from bulbs and tyres to brakes and suspension, with a clear quote before any work. Call 01977 807050.",
};

const COMMON_FAILS = [
  { title: "Lights & Bulbs", text: "Blown bulbs, cracked lenses and badly aimed headlights are among the most common MOT failures, and usually the quickest to fix.", icon: <GaugeIcon /> },
  { title: "Tyres", text: "Tread below 1.6mm, cuts, bulges or the wrong size. We keep tyres in stock, so many tyre failures are fixed the same day.", icon: <WheelIcon /> },
  { title: "Brakes", text: "Worn pads and discs, corroded pipes, sticking callipers or an uneven handbrake. We show you what we found before we quote.", icon: <DiscIcon /> },
  { title: "Suspension & Steering", text: "Worn ball joints, track rod ends, bushes, broken springs and leaking shock absorbers.", icon: <WrenchIcon /> },
  { title: "Wipers, Washers & Screen", text: "Split wiper blades, empty or blocked washers and chips in the driver's line of sight.", icon: <CarIcon /> },
  { title: "Exhaust & Emissions", text: "Leaks, loose mountings, high emissions and DPF problems, diagnosed with Bosch equipment.", icon: <ShieldCheckIcon /> },
];

const STEPS = [
  { title: "Bring us your fail sheet", text: "Failed with us or somewhere else? Bring the car and the MOT fail sheet (VT30), or call us with your reg and we'll look up the failure items." },
  { title: "Clear quote, before any work", text: "We check each failure item, explain it in plain English and give you a written quote. Nothing is done without your OK." },
  { title: "Repaired, often the same day", text: "Many common failures, like bulbs, tyres, wipers and brake pads, can be fixed the same day when parts are in stock." },
  { title: "Retest at our DVSA centre", text: "Once the repairs are done we can retest your car here, so there's no driving between garages." },
];

const WHY = [
  { title: "DVSA MOT Test Centre", text: "We test and repair under one roof, so your car can be fixed and retested without leaving the garage.", icon: <ShieldCheckIcon /> },
  { title: "Bosch Car Service", text: "Bosch-approved technicians and diagnostic equipment, with quality parts on every repair.", icon: <WrenchIcon /> },
  { title: "Upfront Prices", text: "A written quote for every failure item before we start. No surprises when you collect.", icon: <TagIcon /> },
  { title: "Quick Turnaround", text: "Tyres and common parts in stock, plus free collection and delivery and courtesy cars subject to availability.", icon: <ClockIcon /> },
];

const FAQS = [
  { q: "Can you repair my car if it failed its MOT somewhere else?", a: "Yes. Bring the car and your fail sheet, or call us with your registration and we can look up the failure items. We'll quote for the repairs and can retest it at our DVSA test centre." },
  { q: "Can I drive my car after it fails its MOT?", a: "If any item is marked 'dangerous', the car must not be driven until it's repaired. If your old MOT certificate is still valid and there are no dangerous faults, you can drive it, but it must still be roadworthy. If you're unsure, call us and we'll explain what your fail sheet means." },
  { q: "How quickly can you fix MOT failures?", a: "Many common failures, like bulbs, tyres, wipers and brake pads, are fixed the same day when parts are in stock. For bigger jobs we'll give you a time estimate with the quote." },
  { q: "Do I need to pay for a retest?", a: "MOT retest fees may apply depending on the circumstances and when the vehicle is returned. Ask our team and we'll confirm before any work starts." },
  { q: "Will you do work my car doesn't need?", a: "No. We quote for the failure items on your sheet. If we spot advisories, we'll tell you and leave the decision with you." },
];

export default function MOTFailureRepairsPage() {
  return (
    <>
      <PageHero
        price={{
          label: "Failed your MOT?",
          amount: "Fixed & retested",
          note: "Clear quote for every failure item before any work starts.",
        }}
        title="MOT Failure Repairs in Castleford"
        intro="Failed your MOT? Ignition Autocare is a DVSA MOT test centre and Bosch Car Service garage in Castleford. We repair MOT failures for all makes and models, quote before any work, and can retest your car here, often on the same day."
        formLabel="Book Your MOT Repairs Online"
        service="general-repair-diagnostic"
        image="/images/garage/workshop-ramps-v2.jpg"
        imageAlt="Car raised on a ramp for MOT failure repairs at Ignition Autocare"
        imagePosition="center"
      />

      <section className="container-site py-10 sm:py-16">
        <SectionHeader eyebrow="Common Failures" title="What Cars Usually Fail On" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink-600">
          These are the failure items we fix most often. Whatever is on your sheet, we&apos;ll explain it and quote first.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMMON_FAILS.map((c, i) => (
            <FeatureCard key={c.title} {...c} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-10 sm:py-16">
          <SectionHeader eyebrow="How It Works" title="From Fail to Pass" />
          <div className="mt-14">
            <ProcessSteps steps={STEPS} />
          </div>
        </div>
      </section>

      <TrustedGarage text="Failed your MOT? Enter your registration to book your repairs, or call us on 01977 807050 and we'll talk you through your fail sheet." />

      <section className="container-site py-10 sm:py-16">
        <SectionHeader title="Why Get Your MOT Repairs Done With Us?" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <FeatureCard key={w.title} {...w} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <section className="container-site pb-10 sm:pb-16">
        <Reveal className="mx-auto max-w-3xl rounded-2xl bg-brand-600 p-8 text-center text-white sm:p-10">
          <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">MOT Not Done Yet?</h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-100">
            Book your MOT with us for £40. If anything fails, we quote on the spot and can often fix it the same day.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/mot" className="inline-block rounded-full bg-white px-8 py-3 font-extrabold text-brand-700 transition hover:bg-brand-50">
              Book an MOT
            </Link>
            <a href={SITE.phoneHref} className="inline-block rounded-full border-2 border-white px-8 py-3 font-extrabold text-white transition hover:bg-white/10">
              Call {SITE.phone}
            </a>
          </div>
        </Reveal>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-10 sm:py-16">
          <SectionHeader title="MOT Failure Questions" />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
