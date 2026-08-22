import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import TrustedGarage from "@/components/TrustedGarage";
import { ShieldCheckIcon, GaugeIcon, WrenchIcon, TagIcon, WheelIcon } from "@/components/Icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tyre Fitting Castleford – 300+ Tyres in Stock, Same-Day Fitting | Ignition Autocare",
  description:
    "Over 300 tyres in stock with same-day fitting available. Budget, mid-range and premium brands. Puncture repairs, tyre pressure checks and free wheel alignment advice. Book in Castleford today.",
};

const TYRE_TYPES = [
  {
    title: "Budget Tyres",
    text: "If cost is the priority, we stock budget tyres from reputable manufacturers that meet all UK legal requirements. A sensible choice for older cars or low-mileage drivers. [VERIFY: specific budget brands stocked]",
    icon: <TagIcon />,
  },
  {
    title: "Mid-Range Tyres",
    text: "The sweet spot for most drivers — better grip and longevity than budget options without the premium price tag. Good all-round performance in UK conditions. [VERIFY: mid-range brands stocked]",
    icon: <WheelIcon />,
  },
  {
    title: "Premium Tyres",
    text: "Michelin, Continental, Pirelli, Bridgestone — premium tyres deliver measurably shorter stopping distances, better fuel efficiency and longer life. Worth it if you do high mileage or drive a performance car. [VERIFY: premium brands stocked]",
    icon: <ShieldCheckIcon />,
  },
];

const FEATURES = [
  {
    title: "300+ Tyres in Stock",
    text: "We carry a wide range of sizes across budget, mid-range and premium brands. Most fittings can happen the same day you call — no waiting around for an order.",
    icon: <WheelIcon />,
  },
  {
    title: "Same-Day Fitting",
    text: "Call in the morning and drive away on new rubber the same day. We know you can't always plan a tyre failure in advance.",
    icon: <GaugeIcon />,
  },
  {
    title: "Puncture Repairs",
    text: "Not every puncture means a new tyre. Where a puncture is repairable within industry safety guidelines, we'll fix it rather than push you towards a replacement you don't need.",
    icon: <WrenchIcon />,
  },
  {
    title: "Free Alignment Advice",
    text: "New tyres wear unevenly if your wheel alignment is off. We'll check alignment as part of every tyre fitting and flag it if something needs attention.",
    icon: <ShieldCheckIcon />,
  },
];

const LEGAL_FACTS = [
  { label: "Minimum legal tread depth (cars)", value: "1.6mm" },
  { label: "Recommended replacement depth", value: "3mm" },
  { label: "Fine for illegal tyre", value: "Up to £2,500 per tyre" },
  { label: "Penalty points per illegal tyre", value: "3 points" },
  { label: "MOT failure tread depth", value: "Below 1.6mm" },
];

const FAQS = [
  {
    q: "How do I know what size tyre I need?",
    a: "Your tyre size is printed on the sidewall of your existing tyres — it looks something like 205/55 R16. You can also enter your registration number in our booking tool and we'll identify the right size for your vehicle.",
  },
  {
    q: "Can you fix a puncture instead of replacing the tyre?",
    a: "Often yes. If the puncture is in the central three-quarters of the tread and the tyre is otherwise in good condition, a repair is usually safe and far cheaper than a replacement. We'll assess it and give you an honest recommendation.",
  },
  {
    q: "How long does tyre fitting take?",
    a: "A single tyre usually takes around 20–30 minutes including balancing. A full set of four typically takes an hour. We'll give you a realistic time when you book.",
  },
  {
    q: "Do you balance tyres when fitting?",
    a: "Yes, every new tyre fitting includes wheel balancing. An unbalanced wheel causes vibration through the steering wheel and accelerates uneven tyre wear.",
  },
  {
    q: "Is it worth buying premium tyres?",
    a: "Depends on your driving. Premium tyres from brands like Michelin and Continental consistently test better for wet stopping distances — which matters most in UK conditions. For high-mileage drivers, they often work out cheaper over time because they last longer.",
  },
  {
    q: "What's the minimum legal tread depth in the UK?",
    a: "1.6mm across the central three-quarters of the tyre's breadth around its entire circumference. We recommend replacing at 3mm — wet stopping distances increase significantly below that level.",
  },
];

export default function TyresPage() {
  return (
    <>
      <PageHero
        title="Tyre Fitting in Castleford"
        intro="We stock over 300 tyres across budget, mid-range and premium brands — and we fit them the same day. Whether you've had a blow-out, failed a tread depth check, or just need new rubber before your MOT, we'll sort it fast."
        formLabel="Check Tyre Prices for Your Car"
      />

      {/* Hero stat strip */}
      <section className="bg-brand-600">
        <div className="container-site grid grid-cols-2 gap-6 py-10 text-center sm:grid-cols-4">
          {[
            { stat: "300+", label: "Tyres in stock" },
            { stat: "Same day", label: "Fitting available" },
            { stat: "All brands", label: "Budget to premium" },
            { stat: "Free", label: "Wheel balance included" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-white">{s.stat}</p>
              <p className="mt-1 text-sm font-medium text-brand-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="Our Tyre Range" title="Budget, Mid-Range or Premium?" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink-600">
          We don&apos;t push premium tyres on every customer. We&apos;ll tell you which tier makes sense for your car, your mileage and your budget — and stock all three.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {TYRE_TYPES.map((t, i) => (
            <FeatureCard key={t.title} {...t} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="What's Included" title="Why Book Your Tyres With Us?" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Legal tread depth info box */}
      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="UK Law" title="Tyre Safety — Know the Numbers" />
        <Reveal className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-ink-900/5 bg-white shadow-card">
          <div className="divide-y divide-ink-900/5">
            {LEGAL_FACTS.map((f) => (
              <div key={f.label} className="flex items-center justify-between px-6 py-4">
                <span className="text-sm text-ink-600">{f.label}</span>
                <span className="font-bold text-ink-900">{f.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-ink-500">
          Worn tyres are one of the most common causes of MOT failures and one of the most preventable.{" "}
          <Link href="/wheel-alignment" className="text-brand-600 underline underline-offset-2">
            Pair new tyres with a wheel alignment check
          </Link>{" "}
          to get the most life out of them.
        </p>
      </section>

      <TrustedGarage text="Over 300 tyres in stock. Same-day fitting. Budget to premium brands. Wheel balancing included with every fit — and honest advice on what your car actually needs." />

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader eyebrow="FAQ" title="Tyre Questions Answered" />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
