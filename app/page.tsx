import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import HeroMedia from "@/components/HeroMedia";
import ProcessSteps from "@/components/ProcessSteps";
import RegLookupForm from "@/components/RegLookupForm";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Testimonials from "@/components/Testimonials";
import {
  CarIcon,
  CheckIcon,
  ClockIcon,
  DiscIcon,
  GaugeIcon,
  HeartIcon,
  ShieldCheckIcon,
  TagIcon,
  TruckIcon,
  WheelIcon,
  WrenchIcon,
} from "@/components/Icons";
import { HOME_FAQS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trusted MOT & Car Servicing Garage | Ignition Auto Care Castleford",
  description:
    "Keep your car safe and road-ready with MOTs, servicing, brakes, and tyre fitting at Ignition Auto Care. Expert technicians, honest prices, and easy online booking.",
};

const FEATURE_CARDS = [
  {
    title: "Free Collection & Delivery",
    text: "From work or home",
    icon: <TruckIcon />,
  },
  {
    title: "Courtesy Cars",
    text: "Stay on the move while we care for your car",
    icon: <CarIcon />,
  },
  {
    title: 'No Surprise Bill Promise',
    text: "No work carried out without approval.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Video Health Check With Every Service",
    text: "More transparency. Total peace of mind.",
    icon: <GaugeIcon />,
  },
];

const ABOUT_BULLETS = [
  "MOT Castleford bookings with free retest options",
  "Car servicing Castleford (interim, full, and major services)",
  "Vehicle diagnostics Castleford for warning lights and fault codes",
  "Brake repairs Castleford including pads, discs, and fluid checks",
  "Wheel alignment Castleford with precision tracking",
  "Tyres Castleford – supply, fitting & balancing",
];

const WHY_CHOOSE = [
  {
    title: "Experience",
    text: "Over 29 years' experience in Castleford car repairs & servicing",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Transparent Pricing",
    text: "No hidden extras, only honest MOT & repairs Castleford",
    icon: <TagIcon />,
  },
  {
    title: "Door to Door Service",
    text: "Pick-up & drop-off service Castleford (home, office, or near Junction 32)",
    icon: <TruckIcon />,
  },
  {
    title: "Proudly Supporting Castleford Heroes",
    text: "Discounts for NHS, Army, and local residents in Castleford",
    icon: <HeartIcon />,
  },
];

const SOLUTIONS = [
  {
    title: "Car Servicing",
    text: "Interim & full service for all makes/models",
    href: "/car-servicing",
    icon: <WrenchIcon />,
  },
  {
    title: "MOT Testing",
    text: "Fast, affordable, and DVSA-approved",
    href: "/mot",
    icon: <GaugeIcon />,
  },
  {
    title: "Wheel Alignment",
    text: "Accurate Wheel Alignment for Better Handling",
    href: "/wheel-alignment",
    icon: <WheelIcon />,
  },
  {
    title: "Brake Repairs",
    text: "Pads, discs, and hydraulic systems",
    href: "/brake-repairs",
    icon: <DiscIcon />,
  },
];

const PROCESS_STEPS = [
  { title: "Get a quick quote", text: "Enter Car reg & choose your service." },
  { title: "Book your slot", text: "Pick a convenient time at our Castleford garage." },
  {
    title: "Pick-up or drop off",
    text: "We offer easy vehicle pick-up and delivery across Castleford.",
  },
  {
    title: "Drive away safe",
    text: "Our expert team completes the job — pay after the work is done.",
  },
];

const PRICING_PLANS = [
  {
    name: "MOT Testing",
    href: "/mot",
    features: [
      "Comprehensive inspection of all major vehicle components",
      "Brake, tyre, and suspension safety assessment",
      "Exhaust and emissions compliance check",
      "Lights, mirrors, and visibility system inspection",
      "Official MOT certificate with detailed results",
    ],
  },
  {
    name: "Full Servicing",
    href: "/car-servicing",
    features: [
      "All features from the Basic Maintenance Package",
      "Brake Inspection: Included",
      "Transmission Fluid Service",
      "Air Filter Replacement",
      "Discount on Additional Repairs",
    ],
  },
];

const HERO_OFFERS = [
  "NHS & Army Discounts Castleford – valid ID required",
  "Free Vehicle Health Check Castleford with first booking",
  "Referral Offers – recommend Ignition Autocare Castleford & save on next service",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-100 blur-3xl"
        />
        <div className="container-site relative grid gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
          <div className="order-1">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="section-eyebrow">Book Your Appointment Online</span>
                <div className="flex items-center gap-2 rounded-full border border-ink-900/5 bg-white px-4 py-2 shadow-card">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-white">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <span className="text-xl font-extrabold text-ink-900">4.9</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-ink-500">600+ Google Reviews</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
                Trusted Garage in{" "}
                <span className="text-brand-600">Castleford</span>
                <br />
                for Car Repairs
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
                Ignition Autocare delivers reliable MOT testing, expert car servicing, and
                professional repairs in Castleford; including brake replacement, tyre fitting, and
                precision wheel alignment.
              </p>
            </Reveal>
          </div>

          {/* Feature row */}
          <Reveal delay={0.1} className="order-2 lg:order-4 lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 rounded-3xl border border-ink-900/5 bg-white p-5 shadow-card sm:gap-6 lg:grid-cols-4 lg:gap-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
              {FEATURE_CARDS.map((c) => (
                <div key={c.title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 [&>svg]:h-5 [&>svg]:w-5 sm:mb-3 sm:h-12 sm:w-12 sm:[&>svg]:h-6 sm:[&>svg]:w-6">
                    {c.icon}
                  </span>
                  <h3 className="text-[11px] font-bold uppercase leading-tight tracking-wider text-ink-900 sm:text-xs">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-ink-500 sm:text-xs">{c.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Booking bar */}
          <Reveal delay={0.15} className="order-3 lg:order-5 lg:col-span-2">
            <div className="flex flex-col items-center gap-4 rounded-3xl bg-ink-900 px-6 py-5 shadow-xl sm:flex-row sm:px-10 sm:py-6">
              <span className="shrink-0 text-sm font-bold uppercase tracking-widest text-white">
                Book Quickly<br className="sm:hidden" /> and Easily
              </span>
              <div className="w-full flex-1">
                <RegLookupForm compact />
              </div>
            </div>
          </Reveal>

          {/* Hero media */}
          <Reveal delay={0.2} className="order-4 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card-hover sm:aspect-[5/4] lg:aspect-[4/3]">
              <HeroMedia />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tagline */}
      <div className="container-site">
        <Reveal>
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-ink-200" />
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-ink-400">
              Quality you can <span className="text-brand-600">trust</span>. Service you can <span className="text-brand-600">rely on</span>.
            </p>
            <div className="h-px flex-1 bg-ink-200" />
          </div>
        </Reveal>
      </div>

      {/* Payment Assist */}
      <section className="container-site py-16 sm:py-20">
        <Reveal>
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-ink-900/5 bg-slate-50 p-8 sm:p-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="section-title">Facing an unexpected repair?</h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-500">
                We offer payment assistance: spread your invoice over 3, 4 or 6 months,
                interest-free, subject to approval. Terms and eligibility apply—please ask for
                details.
              </p>
              <h3 className="mt-6 text-lg font-bold text-ink-900">Spread the cost of your booking</h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-500">
                If your booking is £100 or more, you can use Payment Assist to pay in 4
                interest-free instalments.
              </p>
            </div>
            <Image
              src="/images/payment-assist.svg"
              unoptimized
              alt="Payment Assist – spread the cost over interest-free instalments"
              width={400}
              height={240}
              className="w-full max-w-xs justify-self-center rounded-2xl shadow-card lg:justify-self-end"
            />
          </div>
        </Reveal>
      </section>

      {/* About */}
      <section className="bg-white">
        <div className="container-site grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <Image
              src="/images/team-front.jpg"
              alt="Ignition Autocare team with branded vehicle outside the Castleford garage"
              width={1200}
              height={800}
              className="w-full rounded-3xl object-cover shadow-card"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="section-eyebrow">About Us</span>
              <h2 className="section-title">Your Local Independent Garage in Castleford</h2>
              <p className="mt-5 text-base leading-relaxed text-ink-500">
                At Ignition Autocare, we combine{" "}
                <strong className="text-ink-900">29 years of motor trade expertise</strong> with a
                brand-new garage facility in Castleford. Whether you need{" "}
                <strong className="text-ink-900">MOT testing Castleford</strong>,{" "}
                <strong className="text-ink-900">full vehicle servicing</strong>, or quick{" "}
                <strong className="text-ink-900">brake repairs in Castleford</strong>, our team
                delivers dealership-level care at independent garage prices.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-500">
                We understand that Castleford drivers want{" "}
                <strong className="text-ink-900">
                  affordable, transparent, and reliable garage services
                </strong>
                . That&apos;s why we specialise in:
              </p>
            </Reveal>
            <ul className="mt-6 space-y-3">
              {ABOUT_BULLETS.map((b, i) => (
                <Reveal key={b} delay={i * 0.06}>
                  <li className="flex items-start gap-3 text-sm font-medium text-ink-700">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader title="Why Choose Ignition Autocare" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((c, i) => (
              <FeatureCard key={c.title} icon={c.icon} title={c.title} text={c.text} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-site py-16 sm:py-20">
        <SectionHeader
          eyebrow="Our Services"
          title="Our Premiere Automotive Solutions"
          intro="Ignition Autocare Castleford offers everything your car needs under one roof:"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="h-full">
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-3xl border border-ink-900/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-ink-900">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{s.text}</p>
                <span className="mt-4 text-sm font-bold text-brand-600 transition-transform duration-300 group-hover:translate-x-1">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="The Process" title="How It Works" />
          <div className="mt-14">
            <ProcessSteps steps={PROCESS_STEPS} />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container-site py-16 sm:py-20">
        <SectionHeader
          eyebrow="Pricing Plan"
          title="Choose A Plan That Suits Your Needs And Budgets"
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {PRICING_PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.12} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border-2 border-ink-900/5 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-card-hover">
                <h3 className="text-xl font-extrabold uppercase tracking-wide text-ink-900">
                  {plan.name}
                </h3>
                <ul className="mt-6 flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={plan.href} className="btn-primary mt-8 w-full">
                  Learn More
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="Testimonials" title="What Our Customers Say" />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion faqs={HOME_FAQS} />
        </Reveal>
      </section>

      {/* Special Offer */}
      <section className="container-site pb-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-12 sm:px-12">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Special Offer to Super Heroes
                </h2>
                <ul className="mt-6 space-y-3">
                  {HERO_OFFERS.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-sm font-medium text-slate-200">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact-us" className="btn-primary px-10 py-4 text-base">
                Claim Discount
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
