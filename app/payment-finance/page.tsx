import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { ShieldCheckIcon, GaugeIcon, TagIcon, WrenchIcon, ClockIcon, CarIcon } from "@/components/Icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Payment Assist – 0% Finance Up to 6 Months | Ignition Autocare Castleford",
  description:
    "Spread the cost of your car repair or service over up to 6 months interest free with Payment Assist at Ignition Autocare Castleford. No credit checks. Quick approval. Call 01977 807050.",
};

const BENEFITS = [
  {
    title: "Up to 6 Months Interest Free",
    text: "Spread the cost of any repair or service over 3 or 6 monthly instalments — completely interest free. You pay exactly what we quote, nothing more.",
    icon: <TagIcon />,
  },
  {
    title: "No Credit Check",
    text: "Payment Assist doesn't run a credit check. You need a UK bank account, a debit card, and to be 18 or over. That's it.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Quick Approval",
    text: "The application takes a few minutes at the garage. In most cases you'll know straight away whether you're approved, and the work can start the same day.",
    icon: <ClockIcon />,
  },
  {
    title: "Available on Most Services",
    text: "Finance is available on MOTs, servicing, repairs, tyres, and diagnostics — any invoice above the minimum amount qualifies.",
    icon: <WrenchIcon />,
  },
  {
    title: "Keep Your Car on the Road",
    text: "Don't delay essential work because of short-term cash flow. Finance means you can get your car fixed safely now and manage the cost over the following months.",
    icon: <CarIcon />,
  },
  {
    title: "Transparent. No Surprises.",
    text: "You'll know the exact monthly amount before you agree to anything. No hidden charges, no interest added later. What you see is what you pay.",
    icon: <GaugeIcon />,
  },
];

const HOW_IT_WORKS = [
  {
    title: "Get your quote",
    text: "We carry out the diagnostic or inspection and give you a clear, itemised quote. No work starts until you've agreed the price.",
  },
  {
    title: "Choose to spread the cost",
    text: "Tell us you'd like to use Payment Assist. We'll take you through the quick application — it only takes a few minutes.",
  },
  {
    title: "Approval in minutes",
    text: "Most applications are approved on the spot. You'll know before we start work. If approved, choose your repayment period — 3 or 6 months.",
  },
  {
    title: "Work gets done",
    text: "We carry out the agreed work. You leave with your car fixed, and your first payment isn't taken until your due date.",
  },
  {
    title: "Pay monthly, interest free",
    text: "Your repayments come out automatically over the agreed term. No interest. No fees. Just the original invoice amount split equally.",
  },
];

const FAQS = [
  {
    q: "What is Payment Assist?",
    a: "Payment Assist is a buy now, pay later service that lets you spread the cost of your car repair or service over 3 or 6 months, completely interest free. It's available at our Castleford garage on most invoices.",
  },
  {
    q: "Is there a credit check?",
    a: "No. Payment Assist does not run a credit check. Approval is based on your bank account and debit card, not your credit score.",
  },
  {
    q: "Who is eligible?",
    a: "You need to be 18 or over, a UK resident, and have a UK bank account with a Visa or Mastercard debit card. That's all that's required.",
  },
  {
    q: "Is it really 0% interest?",
    a: "Yes — 100% interest free. You repay only the amount on your invoice, split equally over your chosen term. There are no hidden fees or interest charges.",
  },
  {
    q: "What's the minimum and maximum amount I can finance?",
    a: "Payment Assist is available on invoices from £100 upwards. Call us on 01977 807050 for the current maximum and any applicable limits.",
  },
  {
    q: "Can I use finance for an MOT?",
    a: "Yes — finance is available on MOTs, servicing, repairs, tyres, and diagnostics, provided the invoice meets the minimum amount threshold.",
  },
  {
    q: "How do I apply?",
    a: "Just tell us at the garage that you'd like to use Payment Assist. We'll walk you through the quick application. It takes a few minutes and you'll know the outcome the same day.",
  },
];

export default function PaymentFinancePage() {
  return (
    <>
      <PageHero
        title="Spread the Cost — 0% Finance"
        intro="Don't put off essential repairs because of the cost. With Payment Assist, you can spread the cost of any service or repair over 3 or 6 months — completely interest free. No credit check. Quick approval. Available on most jobs."
        formLabel="Book and Ask About Finance"
      />

      {/* Key facts strip */}
      <section className="bg-brand-600">
        <div className="container-site grid grid-cols-2 gap-6 py-10 text-center sm:grid-cols-4">
          {[
            { stat: "0%", label: "Interest — always" },
            { stat: "Up to 6 mo", label: "Repayment term" },
            { stat: "No credit", label: "Check required" },
            { stat: "Same day", label: "Approval in most cases" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">{s.stat}</p>
              <p className="mt-1 text-sm font-medium text-brand-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action callout */}
      <section className="container-site py-12">
        <Reveal className="mx-auto max-w-3xl rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white text-2xl">
              💳
            </span>
            <div className="flex-1">
              <h3 className="font-heading text-lg font-bold text-ink-900">Want to use Payment Assist?</h3>
              <p className="mt-1 text-sm text-ink-700">
                Just mention it when you book or when you arrive. We&apos;ll handle the rest — the application takes minutes.
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

      {/* Benefits */}
      <section className="container-site pb-16 sm:pb-20">
        <SectionHeader eyebrow="Why Use It" title="Get Your Car Fixed Now. Pay Over Time." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <FeatureCard key={b.title} {...b} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50">
        <div className="container-site py-10 sm:py-16">
          <SectionHeader eyebrow="Step by Step" title="How Payment Assist Works" />
          <div className="mt-14">
            <ol className="relative ml-6 space-y-10 border-l-2 border-brand-200">
              {HOW_IT_WORKS.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <li className="relative pl-8">
                    <span className="absolute -left-[1.15rem] flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-extrabold text-white shadow">
                      {i + 1}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-ink-900">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{step.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-ink-900">
        <div className="container-site py-10 sm:py-16">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">No Credit Check · 0% Interest · Same-Day Approval</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl">
              Don&apos;t Delay. Fix It Today.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Essential repairs keep you safe on the road. Payment Assist means you never have to choose between your safety and your budget.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/book" className="rounded-full bg-brand-600 px-8 py-4 font-extrabold text-white shadow-lg transition hover:bg-brand-500">
                Book Online
              </Link>
              <Link href={SITE.phoneHref} className="rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:border-white/50">
                📞 Call {SITE.phone}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="container-site py-10 sm:py-16">
          <SectionHeader eyebrow="FAQ" title="Payment Assist — Your Questions Answered" />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
