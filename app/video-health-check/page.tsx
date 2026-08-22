import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import SectionHeader from "@/components/SectionHeader";
import TrustedGarage from "@/components/TrustedGarage";
import { ShieldCheckIcon, GaugeIcon, WrenchIcon, CarIcon } from "@/components/Icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Video Health Check | Ignition Autocare – See Every Issue on Camera",
  description:
    "Every service customer gets a free video walkaround inspection showing exactly what we found on your car. See the issue yourself before agreeing to any work. No jargon, no pressure.",
};

const BENEFITS = [
  {
    title: "See It Yourself",
    text: "We film the actual issue on your car — worn brake pads, a leaking boot, a corroded component — and send it directly to your phone. You can see exactly what the technician is looking at.",
    icon: <CarIcon />,
  },
  {
    title: "No Jargon Over the Phone",
    text: "Instead of a confusing description of a technical problem, you get a video with the technician talking you through what they found and why it matters.",
    icon: <WrenchIcon />,
  },
  {
    title: "Agree to Work with Confidence",
    text: "You decide what gets done based on what you've seen, not what someone told you over the phone. If you want a second opinion, you've already got the evidence in your hand.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Included Free with Every Service",
    text: "This isn't an extra you have to pay for. Every service customer at Ignition Autocare gets a video health check as standard — it's part of how we work.",
    icon: <GaugeIcon />,
  },
];

const STEPS = [
  {
    title: "Drop your car off",
    text: "Bring your car in for its service as normal. Leave us a contact number and the best way to reach you — text, email or call.",
  },
  {
    title: "We carry out the service",
    text: "While servicing your car, our technicians carry out a full inspection of all major components — brakes, tyres, fluid levels, suspension, lights and more.",
  },
  {
    title: "We film anything that needs attention",
    text: "If we find something that needs work — now or in the near future — we film it with a commentary explaining what it is and why it matters. [VERIFY: delivery method — text/email/app]",
  },
  {
    title: "You watch it and decide",
    text: "You receive the video on your phone. If you want to go ahead with any additional work, we can often do it the same day. If you'd rather wait or get a second opinion, that's absolutely fine.",
  },
];

export default function VideoHealthCheckPage() {
  return (
    <>
      <PageHero
        title="Free Video Health Check with Every Service"
        intro="When your car goes in for a service, you trust us to tell you what needs doing. We think that trust works better both ways — so we show you. Every service customer gets a free video walkaround inspection sent directly to their phone."
        formLabel="Book a Service with Free Video Check"
      />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader
          eyebrow="How It Works for You"
          title="See Every Issue — Before You Agree to Anything"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <FeatureCard key={b.title} {...b} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="The Process" title="What Happens Step by Step" />
          <div className="mt-14">
            <ProcessSteps steps={STEPS} />
          </div>
        </div>
      </section>

      {/* Trust callout */}
      <section className="container-site py-16 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-2xl bg-brand-600 p-10 text-center text-white">
          <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
            &ldquo;They sent me a video showing exactly what was wrong — I could see it myself.&rdquo;
          </h2>
          <p className="mt-3 text-brand-100">— Jade Allsop, verified Google reviewer</p>
          <p className="mx-auto mt-6 max-w-xl text-sm text-brand-100">
            This is how every service works at Ignition Autocare. Not a vague phone call and a quote you can&apos;t verify — a clear video of exactly what the technician found.
          </p>
        </div>
      </section>

      <TrustedGarage text="Free video health check included with every car service. You see the issue, you decide whether to fix it. No pressure, no jargon — just clear communication." />

      {/* CTA with link to servicing */}
      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20 text-center">
          <h2 className="font-heading text-2xl font-extrabold text-ink-900 sm:text-3xl">
            Ready to Book a Service?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-600">
            Book your car in for a{" "}
            <Link href="/car-servicing" className="text-brand-600 underline underline-offset-2">
              full service
            </Link>{" "}
            and we&apos;ll include the video health check at no extra charge. Available at all Ignition Autocare branches — Castleford, Shrewsbury, Bury and Thetford.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/book" className="btn-primary px-8 py-3 text-base">
              Book a Service Online
            </Link>
            <Link href="/car-servicing" className="btn-secondary px-8 py-3 text-base">
              See What&apos;s Included
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
