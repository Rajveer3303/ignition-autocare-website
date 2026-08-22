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
  DiscIcon,
  GaugeIcon,
  ShieldCheckIcon,
  TagIcon,
  WheelIcon,
  WrenchIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "MOT Castleford – DVSA-Approved MOT Test | Ignition Autocare",
  description:
    "Book your MOT in Castleford at Ignition Autocare — DVSA-approved testers, honest results, free retest if needed. 45–60 minute test. Same-day slots available. Enter your reg for instant pricing.",
};

const MOT_CHECKS = [
  {
    title: "Brakes & Steering",
    text: "Brake pads, discs, callipers, fluid level, handbrake, and full steering system including joints and gaiters are checked for wear and correct operation.",
    icon: <DiscIcon />,
  },
  {
    title: "Tyres & Wheels",
    text: "Tread depth (minimum 1.6mm), sidewall condition, correct inflation, and wheel security. Tyres with illegal tread are an instant MOT failure.",
    icon: <WheelIcon />,
  },
  {
    title: "Lights & Electrics",
    text: "Headlights, brake lights, indicators, fog lights, reversing lights, and number plate lighting are all checked for operation and correct alignment.",
    icon: <GaugeIcon />,
  },
  {
    title: "Exhaust & Emissions",
    text: "Exhaust integrity, noise levels, and emissions output tested against current legal limits. Diesel particulate filter (DPF) condition also checked.",
    icon: <CarIcon />,
  },
  {
    title: "Suspension & Shock Absorbers",
    text: "All suspension components, springs, shock absorbers, and anti-roll bars assessed for wear, damage, and correct function.",
    icon: <WrenchIcon />,
  },
  {
    title: "Seatbelts & Safety Systems",
    text: "All seatbelts checked for secure anchorage, correct retraction, and locking mechanism. Horn operation also tested.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Windscreen, Wipers & Washers",
    text: "Windscreen assessed for chips or cracks in the driver's field of vision. Wiper blades, washers, and demister function all checked.",
    icon: <WrenchIcon />,
  },
  {
    title: "Fuel & Fluid Systems",
    text: "Fuel cap security, fluid leaks, and underbody corrosion inspected. Body and chassis integrity examined against structural standards.",
    icon: <TagIcon />,
  },
];

const BENEFITS = [
  {
    title: "It&apos;s a Legal Requirement",
    text: "Driving without a valid MOT is illegal and can result in a fine of up to £1,000. It can also invalidate your car insurance — leaving you unprotected in the event of an accident.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Catches Problems Early",
    text: "An MOT identifies developing faults before they become expensive failures or leave you stranded. Many serious mechanical issues are caught first at an MOT.",
    icon: <GaugeIcon />,
  },
  {
    title: "Keeps You Road-Safe",
    text: "The MOT checks the systems that keep you and other road users safe — brakes, tyres, lights, steering. A pass means your car meets the minimum legal safety standard.",
    icon: <CarIcon />,
  },
  {
    title: "Protects Resale Value",
    text: "A full, unbroken MOT history is one of the first things buyers check. Continuous MOT records show a well-maintained vehicle and support a stronger resale price.",
    icon: <TagIcon />,
  },
];

const STEPS = [
  {
    title: "Book online or by phone",
    text: "Enter your reg for an instant MOT price and pick a time that suits you. Same-day slots are often available — call 01977 807050 if you need one quickly.",
  },
  {
    title: "Bring your car in",
    text: "Arrive at our Castleford garage at your booked time. Our DVSA-approved testers will take your car straight to the dedicated MOT bay.",
  },
  {
    title: "We carry out the test",
    text: "Your MOT takes approximately 45–60 minutes. Our tester works through every item on the official DVSA checklist — nothing skipped, nothing invented.",
  },
  {
    title: "Get your results in plain English",
    text: "Pass: you leave with your certificate. Fail: we explain exactly what failed, why it matters, and give you a clear, upfront quote for the repair work needed.",
  },
  {
    title: "Free retest included",
    text: "If your car fails and you get the repair work done with us, the retest is free. No additional booking needed — we sort it before you leave.",
  },
];

const FAQS = [
  {
    q: "How long does an MOT take?",
    a: "A standard MOT test takes approximately 45–60 minutes. If we find items that need attention and you want us to carry out the repair the same day, allow a little extra time.",
  },
  {
    q: "When does my car need its first MOT?",
    a: "All cars require an MOT once they are three years old. After that, it's required every year. Your MOT due date is printed on your existing certificate, or you can check it free at gov.uk using your registration number.",
  },
  {
    q: "What happens if my car fails its MOT?",
    a: "We'll give you a clear written list of everything that failed and explain what each item means in plain English. We'll quote for the repairs before starting any work, and the retest is free once the work is complete.",
  },
  {
    q: "Can I drive my car if it fails?",
    a: "If your car fails on a dangerous item, you should not drive it away. For advisory or minor failures, you can drive it but the issue still needs fixing. We'll tell you exactly what category each failure falls into.",
  },
  {
    q: "Is the MOT price the maximum set by the government?",
    a: "Yes — the government sets a maximum MOT fee of £54.85 for cars. Many garages, including us, charge less than this. Enter your reg to see our current price.",
  },
  {
    q: "Do you offer same-day MOT in Castleford?",
    a: "We often have same-day availability. Call us on 01977 807050 in the morning and we&apos;ll do our best to fit you in — or book online to check available slots.",
  },
  {
    q: "Will you try to sell me repairs I don&apos;t need?",
    a: "No. Our testers are required by DVSA to report only what the vehicle actually failed on or what advisories genuinely apply. We don&apos;t benefit from failing vehicles — we benefit from repeat customers who trust us.",
  },
];

export default function MOTPage() {
  return (
    <>
      <PageHero
        title="MOT Testing in Castleford"
        intro="Ignition Autocare is a DVSA-approved MOT test centre in Castleford. Our qualified testers carry out a thorough, honest inspection of your vehicle — no unnecessary repairs, no pressure, just a straight result and a fair price."
        formLabel="Book Your MOT Online"
      />

      {/* Key facts strip */}
      <section className="bg-brand-600">
        <div className="container-site grid grid-cols-2 gap-6 py-10 text-center sm:grid-cols-4">
          {[
            { stat: "45–60 min", label: "Test duration" },
            { stat: "DVSA", label: "Approved test centre" },
            { stat: "Free", label: "Retest if we do the work" },
            { stat: "Same day", label: "Slots often available" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-white">{s.stat}</p>
              <p className="mt-1 text-sm font-medium text-brand-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Legal callout */}
      <section className="container-site py-12">
        <Reveal className="mx-auto max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="font-heading text-lg font-bold text-ink-900">Did you know?</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-700">
                Driving without a valid MOT is illegal and can result in a fine of <strong>up to £1,000</strong>. It also
                risks <strong>invalidating your car insurance</strong> — meaning you could be personally liable for any
                accident costs. Check your MOT due date on the{" "}
                <Link href="https://www.gov.uk/check-mot-status" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline underline-offset-2">
                  government website
                </Link>.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* What's checked */}
      <section className="container-site pb-16 sm:pb-20">
        <SectionHeader
          eyebrow="The Test"
          title="What's Checked in Your MOT?"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink-600">
          The MOT test covers over 60 components across your vehicle. Here are the main areas our DVSA-approved testers inspect:
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MOT_CHECKS.map((c, i) => (
            <FeatureCard key={c.title} {...c} delay={(i % 4) * 0.1} />
          ))}
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="Why It Matters" title="The Real Reasons Your MOT Is Important" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <FeatureCard key={b.title} {...b} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <TrustedGarage text="Ignition Autocare is a DVSA-approved MOT test centre in Castleford. Honest results, transparent pricing, free retest if required. We&apos;ve been keeping local drivers road-legal for over 29 years." />

      {/* Image + DVSA copy */}
      <section className="container-site py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/images/garage/workshop-green-car.jpg"
              alt="Vehicle on the ramp during an MOT inspection at Ignition Autocare Castleford"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <span className="section-eyebrow">Our Standard</span>
            <h2 className="section-title">No Shortcuts. No Invented Failures.</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              Our MOT bay uses DVSA-authorised testing equipment operated by qualified, registered testers. Every vehicle is assessed against the same official government standard — the same test, regardless of who owns the car or where it was serviced before.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              DVSA testers are not permitted to fail vehicles on items not listed in the official test criteria. We follow those rules exactly. If your car passes, you get your certificate. If it fails, you get a clear written explanation — in plain English, not technical jargon.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              We also offer a <strong className="text-ink-900">free retest</strong> if you choose to have the repair work done with us. No rebooking, no extra charges.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="Step by Step" title="How Your MOT Works at Ignition Autocare" />
          <div className="mt-14">
            <ProcessSteps steps={STEPS} />
          </div>
        </div>
      </section>

      {/* MOT + Service callout */}
      <section className="container-site py-16 sm:py-20">
        <Reveal className="mx-auto max-w-3xl rounded-2xl bg-brand-600 p-8 text-center text-white sm:p-10">
          <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
            MOT Due? Consider Adding a Service
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-100">
            Booking your MOT and service together saves time and often money. We can carry out both on the same visit — and if your car needs repair work to pass its MOT, we sort it all in one go.
          </p>
          <Link href="/book" className="mt-6 inline-block rounded-full bg-white px-8 py-3 font-extrabold text-brand-700 transition hover:bg-brand-50">
            Book MOT + Service Together
          </Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="FAQ" title="MOT Questions Answered" />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
