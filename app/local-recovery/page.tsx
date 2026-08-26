import type { Metadata } from "next";
import Image from "next/image";
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
  ClockIcon,
  ShieldCheckIcon,
  TagIcon,
  TruckIcon,
  WrenchIcon,
} from "@/components/Icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vehicle Recovery Castleford – Local Breakdown Recovery | Ignition Autocare",
  description:
    "Broken down near Castleford? Ignition Autocare provides local vehicle recovery within a 10-mile radius. We recover your car to our garage and repair it the same day. Call 01977 807050.",
};

const SERVICES = [
  {
    title: "Roadside Breakdown Recovery",
    text: "Whether your car won't start, has a flat battery, or has broken down on the road — we'll get to you and recover your vehicle safely to our Castleford garage.",
    icon: <TruckIcon />,
  },
  {
    title: "Post-Accident Recovery",
    text: "If your car has been in an accident and isn't driveable, we can recover it to our garage for assessment, repair, or safe storage while you sort the insurance.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Same-Day Repair Where Possible",
    text: "Once your car is with us, our workshop team assesses the fault and — where parts are available — carries out the repair the same day. No waiting in a queue at a third-party garage.",
    icon: <WrenchIcon />,
  },
  {
    title: "Fast Local Response",
    text: "We cover a 10-mile radius of our Castleford garage. Call us and we'll tell you honestly how quickly we can reach you — no false promises.",
    icon: <ClockIcon />,
  },
  {
    title: "Transparent Pricing",
    text: "Recovery and repair costs are quoted clearly before any work starts. No hidden fees, no shock invoices. You decide what gets done.",
    icon: <TagIcon />,
  },
  {
    title: "All Makes & Models",
    text: "We recover and repair all makes and models — from small hatchbacks to larger family cars. Bosch diagnostic equipment used throughout.",
    icon: <WrenchIcon />,
  },
];

const STEPS = [
  {
    title: "Call us directly",
    text: "Phone our garage on 01977 807050. Give us your location, tell us what's happened, and we'll assess whether we can reach you and give you an honest timeframe.",
  },
  {
    title: "We dispatch to you",
    text: "A trained recovery driver is dispatched with our in-house recovery truck. We'll call when we're on our way so you're not left guessing.",
  },
  {
    title: "We secure your vehicle",
    text: "Your car is loaded and secured safely on our recovery truck. We take care to protect your vehicle during transport — no damage from careless handling.",
  },
  {
    title: "We recover it to our garage",
    text: "Your car comes back to our Castleford workshop where our technicians can assess the fault immediately — not tomorrow, not next week.",
  },
  {
    title: "We diagnose and quote",
    text: "We use Bosch diagnostic equipment to find the cause of the breakdown and give you a clear, upfront quote. Nothing is touched until you've said yes.",
  },
];

const FAQS = [
  {
    q: "How far do you travel for vehicle recovery?",
    a: "We cover a 10-mile radius of our Castleford garage. If you're unsure whether you're within range, call us on 01977 807050 and we'll check.",
  },
  {
    q: "How quickly can you reach me?",
    a: "Response times depend on how busy the workshop is. We'll give you an honest estimate when you call — we won't tell you 20 minutes if it's going to be an hour.",
  },
  {
    q: "Do you recover cars after accidents?",
    a: "Yes. If your car isn't driveable following an accident, we can recover it to our garage for assessment and repair, or safe storage while you deal with the insurance.",
  },
  {
    q: "What does vehicle recovery cost?",
    a: "Recovery pricing depends on your location and situation. Call us for a clear price before we set off — there are no hidden charges added later.",
  },
  {
    q: "Can you repair the car the same day?",
    a: "In many cases, yes. Once your car is with us, our technicians assess it straight away. If parts are available, we'll carry out the repair the same day where possible.",
  },
  {
    q: "Do I have to use your garage for repairs, or can you just recover it?",
    a: "Recovery is primarily offered as part of bringing your car to our garage for repair. If you need recovery to a different address, call us and we'll discuss what we can do.",
  },
  {
    q: "Will my breakdown cover conflict with using you?",
    a: "If you have existing breakdown cover with a national provider, you can still call us instead for a faster, more local response. We're an independent option — there's no obligation to use us over anyone else.",
  },
];

export default function LocalRecoveryPage() {
  return (
    <>
      <PageHero
        title="Vehicle Recovery in Castleford"
        intro="Broken down or had an accident near Castleford? We provide local vehicle recovery using our in-house recovery truck — picking up your car and bringing it straight to our garage for assessment and repair. Fast local response. Honest pricing. No unnecessary waiting."
        formLabel="Call Us for Recovery"
      />

      {/* Stat strip */}
      <section className="bg-brand-600">
        <div className="container-site grid grid-cols-2 gap-6 py-10 text-center sm:grid-cols-4">
          {[
            { stat: "10 mi", label: "Recovery radius from Castleford" },
            { stat: "In-house", label: "Our own recovery truck" },
            { stat: "Same day", label: "Repair where possible" },
            { stat: "All makes", label: "& models recovered" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">{s.stat}</p>
              <p className="mt-1 text-sm font-medium text-brand-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call CTA — recovery is phone-first */}
      <section className="container-site py-12">
        <Reveal className="mx-auto max-w-3xl rounded-2xl border border-ink-900/5 bg-amber-50 p-6 sm:p-8">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-white text-2xl">
              🚗
            </span>
            <div className="flex-1">
              <h3 className="font-heading text-lg font-bold text-ink-900">Broken down right now?</h3>
              <p className="mt-1 text-sm text-ink-700">
                Recovery is arranged over the phone — call us directly and we&apos;ll tell you if we can reach you and how quickly.
              </p>
            </div>
            <Link
              href={SITE.phoneHref}
              className="shrink-0 rounded-full bg-brand-600 px-6 py-3 font-extrabold text-white shadow transition hover:bg-brand-500"
            >
              📞 {SITE.phone}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Recovery truck image */}
      <section className="container-site pb-4">
        <Reveal className="overflow-hidden rounded-3xl shadow-card">
          <Image
            src="/images/garage/recovery-truck.jpg"
            alt="Ignition Autocare recovery truck outside our Castleford garage"
            width={1400}
            height={800}
            className="w-full object-cover max-h-[500px]"
          />
        </Reveal>
      </section>

      {/* Services */}
      <section className="container-site pb-16 sm:pb-20">
        <SectionHeader eyebrow="What We Offer" title="Local Recovery & Repair Under One Roof" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink-600">
          We don&apos;t just recover your car — we fix it. Once your vehicle is at our Castleford garage, our workshop team assess and repair it, so you&apos;re not dealing with multiple companies or waiting days for a slot.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <FeatureCard key={s.title} {...s} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50">
        <div className="container-site py-10 sm:py-16">
          <SectionHeader eyebrow="What Happens" title="From Breakdown to Back on the Road" />
          <div className="mt-14">
            <ProcessSteps steps={STEPS} />
          </div>
        </div>
      </section>

      <TrustedGarage text="We recover vehicles within a 10-mile radius of our Castleford garage using our own recovery truck. Once your car is with us, our workshop team get to work straight away — transparent pricing, honest repair advice, and no unnecessary delays." />

      {/* Dark phone CTA section */}
      <section className="bg-ink-900">
        <div className="container-site py-10 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white">
                  <TruckIcon />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">Need Recovery?</p>
                  <h2 className="mt-1 font-heading text-2xl font-extrabold text-white sm:text-3xl">
                    Call Us — We&apos;ll Sort It
                  </h2>
                  <p className="mt-3 text-lg text-slate-300">
                    Recovery availability depends on your location and our current workload. The quickest way to know if we can help is to call — we&apos;ll be straight with you about timings and pricing. No automated menus. Just us.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-white/10 p-8 sm:flex-row">
                <div>
                  <p className="font-heading text-xl font-bold text-white">Ignition Autocare — Castleford</p>
                  <p className="mt-1 text-slate-300">Colorado Way, Castleford, WF10 4TA · Mon–Fri 8am–5pm · Sat 8am–4pm</p>
                </div>
                <Link
                  href={SITE.phoneHref}
                  className="shrink-0 rounded-full bg-brand-600 px-8 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-brand-500"
                >
                  📞 {SITE.phone}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="container-site py-10 sm:py-16">
          <SectionHeader eyebrow="FAQ" title="Vehicle Recovery — Your Questions Answered" />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
