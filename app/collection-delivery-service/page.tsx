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
  CarIcon,
  ClockIcon,
  GaugeIcon,
  ShieldCheckIcon,
  TagIcon,
  TruckIcon,
  WrenchIcon,
} from "@/components/Icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Collection & Delivery Service | Ignition Autocare Castleford",
  description:
    "Ignition Autocare collects your car from home or work, services it at our Castleford garage, and returns it the same day — free within 10 miles. No waiting rooms, no arranging lifts. Book online.",
};

const BENEFITS = [
  {
    title: "We Come to You",
    text: "Book online or by phone, give us your address, and one of our team will collect your car from your home or workplace at a time that suits you.",
    icon: <TruckIcon />,
  },
  {
    title: "No Disruption to Your Day",
    text: "No waiting rooms, no arranging lifts, no taking time off work. Your car gets serviced while you carry on with your day.",
    icon: <ClockIcon />,
  },
  {
    title: "Video Health Check Included",
    text: "While your car is with us, we carry out a free video inspection and send it directly to your phone — so you can see exactly what was found before approving any work.",
    icon: <GaugeIcon />,
  },
  {
    title: "Nothing Without Your Approval",
    text: "We quote before we start. No work is carried out without your explicit sign-off. You stay in control of what gets done and what it costs.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Returned the Same Day",
    text: "For most services, your car is collected, serviced, and returned the same day. We&apos;ll confirm the timeline when you book.",
    icon: <CarIcon />,
  },
  {
    title: "Transparent Pricing",
    text: "The price quoted is the price you pay. No add-ons, no surprises when we deliver your car back.",
    icon: <TagIcon />,
  },
];

const STEPS = [
  {
    title: "Book online or call us",
    text: "Enter your reg for an instant price, pick a date, and add your collection address. Or call 01977 807050 and we&apos;ll arrange it over the phone.",
  },
  {
    title: "We collect your car",
    text: "One of our trained drivers comes to your home or workplace at the agreed time. We&apos;ll confirm the day before and give you a call when we&apos;re on our way.",
  },
  {
    title: "We carry out the work",
    text: "Your car is serviced at our Castleford garage using Bosch diagnostic equipment and quality parts. We film a video walkaround of anything that needs attention.",
  },
  {
    title: "You watch the video and approve",
    text: "We send the video to your phone. If we find anything extra, we quote it clearly. You decide what gets done — nothing goes ahead without your say.",
  },
  {
    title: "We deliver it back",
    text: "Once the work is complete, we return your car to the same address. Same day for most bookings — we&apos;ll confirm the estimated return time when we pick up.",
  },
];

const WHAT_WE_COLLECT_FOR = [
  { label: "Full Service", desc: "Annual service with multi-point inspection" },
  { label: "Interim Service", desc: "Essential maintenance for high-mileage cars" },
  { label: "Major Service", desc: "Full deep-clean service every 2 years" },
  { label: "MOT + Service", desc: "Combined booking — collection included" },
  { label: "Brake Repairs", desc: "Pads, discs, callipers, brake fluid" },
  { label: "Diagnostics", desc: "Warning lights and fault code investigation" },
  { label: "Wheel Alignment", desc: "Precision laser alignment" },
  { label: "Air Conditioning", desc: "Re-gas and system check" },
];

const FAQS = [
  {
    q: "How far do you travel for collection and delivery?",
    a: "We cover a 10-mile radius from our Castleford garage. If you&apos;re unsure whether you&apos;re in the area, give us a call on 01977 807050 and we&apos;ll check.",
  },
  {
    q: "Is there a charge for collection and delivery?",
    a: "Collection and delivery is free for most bookings. If there is any charge — for example for locations at the outer edge of our radius — we&apos;ll tell you upfront before you confirm.",
  },
  {
    q: "Can you collect for an MOT-only booking?",
    a: "We don&apos;t offer collection for MOT-only bookings. If you book an MOT combined with a service, collection is included. For a standalone MOT, you&apos;re welcome to drop the car off at the garage.",
  },
  {
    q: "What time will you collect my car?",
    a: "We&apos;ll agree a collection window when you book. We&apos;ll confirm the day before and call when we&apos;re on our way so you&apos;re not left waiting.",
  },
  {
    q: "How do I prepare my car for collection?",
    a: "Have the keys ready, let us know of any parking restrictions or alarm codes, remove valuables, and make sure there&apos;s enough fuel for short movements. That&apos;s it.",
  },
  {
    q: "What if extra work is needed?",
    a: "We&apos;ll send you a video showing exactly what we found and a clear quote for any additional work. Nothing gets done without your explicit approval — you can say yes, no, or ask us to explain further.",
  },
  {
    q: "Do you offer vehicle recovery as well?",
    a: "Yes — alongside collection and delivery for booked services, we also offer vehicle recovery. Give us a call on 01977 807050 for availability and pricing.",
  },
];

export default function CollectionDeliveryPage() {
  return (
    <>
      <PageHero
        title="Free Collection & Delivery Service"
        intro="We come to you. Book your service or repair online, tell us your address, and we&apos;ll collect your car from your home or workplace, carry out the work at our Castleford garage, and return it to you — all within the same day for most bookings."
        formLabel="Book a Service with Collection"
      />

      {/* Stat strip */}
      <section className="bg-brand-600">
        <div className="container-site grid grid-cols-2 gap-6 py-10 text-center sm:grid-cols-4">
          {[
            { stat: "Free", label: "Collection & delivery" },
            { stat: "10 mi", label: "Radius from Castleford" },
            { stat: "Same day", label: "Return for most services" },
            { stat: "0% surprise", label: "Nothing without your approval" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-white">{s.stat}</p>
              <p className="mt-1 text-sm font-medium text-brand-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits grid */}
      <section className="container-site py-16 sm:py-20">
        <SectionHeader
          eyebrow="Why Use It"
          title="Your Car Serviced Without Leaving the House"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <FeatureCard key={b.title} {...b} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </section>

      {/* Image + what we collect for */}
      <section className="bg-slate-50">
        <div className="container-site grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/images/garage/exterior-front.jpg"
              alt="Ignition Autocare garage in Castleford — collection and delivery available"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="font-heading text-2xl font-extrabold text-ink-900 sm:text-3xl">
              What We Collect For
            </h2>
            <p className="mt-3 text-ink-600">
              Collection is available for most service and repair bookings. Here&apos;s what&apos;s included:
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {WHAT_WE_COLLECT_FOR.map((item) => (
                <li key={item.label} className="flex items-start gap-3 rounded-xl border border-ink-900/5 bg-white p-4 shadow-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 text-xs font-bold">✓</span>
                  <div>
                    <p className="text-sm font-bold text-ink-900">{item.label}</p>
                    <p className="text-xs text-ink-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl border-l-4 border-brand-500 bg-brand-50 p-4 text-sm text-ink-700">
              <strong className="text-ink-900">MOT note:</strong> Collection is available when you book MOT + Service together. For a standalone MOT, please drop your car off at the garage.
            </p>
          </Reveal>
        </div>
      </section>

      <TrustedGarage text="We collect your car from your home or workplace, carry out the work at our Castleford garage, send you a video of anything we find, and return it the same day. You approve everything before we start." />

      {/* How it works */}
      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="Step by Step" title="How Collection & Delivery Works" />
        <div className="mt-14">
          <ProcessSteps steps={STEPS} />
        </div>
      </section>

      {/* Vehicle Recovery section */}
      <section className="bg-ink-900">
        <div className="container-site py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white">
                  <TruckIcon />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">Also Available</p>
                  <h2 className="mt-1 font-heading text-2xl font-extrabold text-white sm:text-3xl">
                    Vehicle Recovery
                  </h2>
                  <p className="mt-3 text-lg text-slate-300">
                    Alongside our collection and delivery service for booked work, we also offer vehicle recovery. Whether your car has broken down and won&apos;t start, or you&apos;ve had an accident and need it recovered to our garage, call us directly and we&apos;ll talk you through your options.
                  </p>
                  <p className="mt-3 text-slate-400">
                    Recovery availability and pricing depends on your location and situation — the best way to get accurate information is to call the garage directly.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-white/10 p-8 sm:flex-row">
                <div>
                  <p className="font-heading text-xl font-bold text-white">Need Recovery?</p>
                  <p className="mt-1 text-slate-300">Call our garage directly for availability and pricing.</p>
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
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="FAQ" title="Collection, Delivery & Recovery — Questions Answered" />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
