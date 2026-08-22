import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import TrustedGarage from "@/components/TrustedGarage";
import { ShieldCheckIcon, GaugeIcon, WrenchIcon, CarIcon, TagIcon } from "@/components/Icons";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Bosch Approved Garage Castleford | Ignition Autocare",
  description:
    "Ignition Autocare is a Bosch Approved garage in Castleford — independently owned but vetted, equipped and trained to Bosch standards. What that means for you and why it matters.",
};

const WHAT_IT_MEANS = [
  {
    title: "Vetted to a Consistent Standard",
    text: "To join the Bosch Car Service network, a garage goes through an assessment process. We don't self-certify — we've been evaluated and approved by Bosch as meeting their standard for equipment, processes and technical capability.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Bosch Diagnostic Equipment",
    text: "We use Bosch diagnostic systems — the same technology used in main dealership workshops. This matters when it comes to reading fault codes accurately and interpreting what they actually mean for your specific vehicle.",
    icon: <GaugeIcon />,
  },
  {
    title: "Technicians Trained to Bosch Standards",
    text: "Bosch Car Service centres commit to ongoing technical training. The industry changes constantly — new hybrid and EV systems, evolving diagnostics — and our technicians stay current.",
    icon: <WrenchIcon />,
  },
  {
    title: "Still an Independent Garage",
    text: "Being Bosch Approved doesn't make us a franchise. We're still independently owned and run — which means faster bookings, personal service, and pricing that isn't inflated by dealership overheads.",
    icon: <CarIcon />,
  },
  {
    title: "Quality Parts",
    text: "Bosch Car Service garages commit to using quality parts — OEM-equivalent or genuine components — not cheap alternatives that fail early and create more problems than they solve.",
    icon: <TagIcon />,
  },
  {
    title: "Consistent Quality Standard",
    text: "Being part of the Bosch Car Service network means every visit is backed by the same standard — the same diagnostic equipment, the same parts quality benchmark, the same approach to how we communicate with you.",
    icon: <ShieldCheckIcon />,
  },
];

const FAQS = [
  {
    q: "What is a Bosch Car Service garage?",
    a: "Bosch Car Service is an international network of independent garages that have been evaluated and approved by Bosch. To qualify, garages must meet specific standards for equipment, technical training and workshop processes. Ignition Autocare is part of that network.",
  },
  {
    q: "Is a Bosch Approved garage better than a regular independent?",
    a: "The approval provides a consistent benchmark — you know the garage has been assessed rather than self-described as 'professional'. In practice, it means standardised diagnostic equipment, committed training, and accountability to Bosch's standards.",
  },
  {
    q: "Is a Bosch Approved garage the same as a main dealer?",
    a: "No. Bosch Car Service garages are independently owned — they're not part of any car manufacturer's dealer network. That's an advantage: you get a consistent technical standard without the dealership pricing.",
  },
  {
    q: "Does using a Bosch Approved garage protect my warranty?",
    a: "Yes. EU block exemption regulations protect your right to use any reputable independent garage for servicing and repairs without affecting your manufacturer warranty. This applies to Bosch Car Service garages and any other independent garage using appropriate parts and following manufacturer schedules.",
  },
  {
    q: "How large is the Bosch Car Service network?",
    a: "Bosch Car Service is one of the largest independent garage networks in the world, with thousands of approved centres across Europe and beyond. The network provides a recognisable quality standard wherever you are.",
  },
];

export default function BoschApprovedPage() {
  return (
    <>
      <PageHero
        title="Bosch Approved Garage in Castleford"
        intro="Ignition Autocare is a Bosch Approved Car Service centre. That's not a marketing phrase — it means we've been independently assessed and approved by Bosch against a defined standard for equipment, training and workshop quality. Here's what that actually means for you."
        formLabel="Book at a Bosch Approved Garage"
      />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader
          eyebrow="What Bosch Approved Actually Means"
          title="The Standard Behind the Badge"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink-600">
          A lot of garages describe themselves as professional. Bosch Approved means an external body has assessed us and agreed. Here&apos;s what sits behind the accreditation.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_IT_MEANS.map((w, i) => (
            <FeatureCard key={w.title} {...w} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </section>

      {/* Callout comparison */}
      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-ink-900/5 bg-white shadow-card">
            <div className="grid divide-y divide-ink-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {[
                {
                  label: "Dealership",
                  points: ["Manufacturer-trained staff", "Latest diagnostic tools", "Manufacturer parts", "High hourly rates", "Lengthy booking waits"],
                  highlight: false,
                },
                {
                  label: "Bosch Approved (Us)",
                  points: ["Bosch-trained technicians", "Bosch diagnostic equipment", "Quality OEM-standard parts", "Independent pricing", "Flexible, faster bookings"],
                  highlight: true,
                },
                {
                  label: "Unaccredited Garage",
                  points: ["Variable skill level", "Variable equipment quality", "Parts quality unknown", "Potentially lower cost", "No external quality check"],
                  highlight: false,
                },
              ].map((col) => (
                <div
                  key={col.label}
                  className={`p-6 sm:p-8 ${col.highlight ? "bg-brand-50" : ""}`}
                >
                  <h3
                    className={`mb-4 font-heading text-lg font-bold ${
                      col.highlight ? "text-brand-700" : "text-ink-900"
                    }`}
                  >
                    {col.label}
                    {col.highlight && (
                      <span className="ml-2 rounded-full bg-brand-500 px-2 py-0.5 text-xs font-bold text-white">
                        Ignition Autocare
                      </span>
                    )}
                  </h3>
                  <ul className="space-y-2">
                    {col.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-ink-600">
                        <span className={`mt-0.5 shrink-0 ${col.highlight ? "text-brand-500" : "text-ink-300"}`}>
                          {col.highlight ? "✓" : "·"}
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustedGarage text="Independently owned. Bosch Approved. We have the equipment, the training and the accountability of the world's largest independent garage network — without the dealership overheads." />

      <section className="container-site py-16 sm:py-20">
        <Reveal className="overflow-hidden rounded-3xl shadow-card">
          <Image
            src="/images/garage/exterior-branded.jpg"
            alt="Ignition Autocare Bosch Approved garage exterior in Castleford"
            width={1920}
            height={800}
            className="w-full object-cover"
            style={{ maxHeight: "420px" }}
          />
        </Reveal>
      </section>

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="FAQ" title="Bosch Approved — Common Questions" />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion faqs={FAQS} />
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
