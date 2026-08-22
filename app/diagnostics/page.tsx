import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import TrustedGarage from "@/components/TrustedGarage";
import { GaugeIcon, ShieldCheckIcon, WrenchIcon, CarIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Vehicle Diagnostics Castleford – Warning Light Investigation | Ignition Autocare",
  description:
    "Engine management light on? Our Bosch diagnostic equipment finds the exact fault — fast. No guesswork, no unnecessary work. Book vehicle diagnostics in Castleford today.",
};

const WARNING_LIGHTS = [
  {
    title: "Engine Management Light",
    text: "The most common warning light. Could be anything from a loose fuel cap to a sensor fault or emission issue. Our diagnostics pinpoints the exact cause.",
    icon: <GaugeIcon />,
  },
  {
    title: "ABS Warning Light",
    text: "Indicates a fault in your anti-lock braking system. ABS failures affect emergency stopping ability — don't ignore this one.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Airbag / SRS Light",
    text: "A fault in the supplemental restraint system. In a collision, a faulty airbag may not deploy. This needs professional diagnosis, not a reset.",
    icon: <CarIcon />,
  },
  {
    title: "DPF / Emissions Light",
    text: "Diesel particulate filter blockages are common on cars used mainly for short journeys. We can read the system and advise on the best course of action.",
    icon: <GaugeIcon />,
  },
  {
    title: "Glow Plug / Preheat Light",
    text: "Diesel engine starting problems often trace back to glow plug faults. Our diagnostics reads fault codes and identifies which plugs need attention.",
    icon: <WrenchIcon />,
  },
  {
    title: "Transmission / Gearbox Light",
    text: "Gearbox faults can range from a solenoid issue to something more serious. An early diagnosis almost always saves money versus waiting for a failure.",
    icon: <WrenchIcon />,
  },
];

const STEPS = [
  {
    title: "Plug in, read the codes",
    text: "Our Bosch diagnostic equipment connects directly to your car's OBD port and pulls every fault code stored across all systems — engine, transmission, ABS, airbag and more.",
  },
  {
    title: "Interpret, not just report",
    text: "A fault code tells you which system flagged an issue — it doesn't always tell you exactly what's wrong. We use the code as a starting point and apply experience to find the real cause.",
  },
  {
    title: "Give you a clear picture",
    text: "We explain what we found in plain English. If work is needed, you get an upfront quote before anything is touched. If it turns out to be minor, we'll tell you that too.",
  },
  {
    title: "Fix it or advise on next steps",
    text: "Many faults can be resolved the same day. Where parts need ordering we'll book you back in quickly and keep you updated throughout.",
  },
];

const FAQS = [
  {
    q: "How much does a diagnostic check cost?",
    a: "Diagnostic costs vary depending on the fault and time involved. We charge for the diagnostic time honestly — if we find the issue quickly, you're not paying for an hour we didn't use. Contact us for a guide price.",
  },
  {
    q: "Can you just reset the warning light without fixing the fault?",
    a: "We can clear fault codes as part of a diagnostic session, but we won't just reset a light and send you on your way without explaining what caused it. A light that comes back is a sign the underlying problem hasn't been fixed.",
  },
  {
    q: "My car seems fine but the engine light is on — do I still need to come in?",
    a: "Yes. Many faults don't cause obvious symptoms early on but can develop into expensive problems if left. The earlier we catch a fault, the cheaper it usually is to fix.",
  },
  {
    q: "Do you work on all makes and models?",
    a: "Our Bosch diagnostic equipment covers the vast majority of makes and models on UK roads, including European, Japanese, Korean, and American vehicles. Call us if you're unsure about your specific car.",
  },
  {
    q: "Will diagnostics void my manufacturer warranty?",
    a: "No. Having your car diagnosed at an independent garage does not affect your manufacturer warranty. EU block exemption regulations protect your right to use independent garages for servicing and repairs.",
  },
];

export default function DiagnosticsPage() {
  return (
    <>
      <PageHero
        title="Vehicle Diagnostics in Castleford"
        intro="Warning light on? Something not quite right but you can't put your finger on it? Our Bosch diagnostic equipment reads every fault code across your car's systems — engine, ABS, airbag, transmission and more — so we find the actual problem, not just guess at it."
        formLabel="Book a Diagnostic Check"
      />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader
          eyebrow="Warning Lights"
          title="What Does That Light Actually Mean?"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink-600">
          Modern cars flag hundreds of different fault codes. Here are the ones we see most often — and why each one is worth investigating rather than ignoring.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WARNING_LIGHTS.map((w, i) => (
            <FeatureCard key={w.title} {...w} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <SectionHeader
            eyebrow="Bosch Diagnostics"
            title="What Happens During a Diagnostic Check?"
          />
          <div className="mt-14">
            <ProcessSteps steps={STEPS} />
          </div>
        </div>
      </section>

      <TrustedGarage text="We use professional Bosch diagnostic equipment — the same technology found in main dealer workshops — to read fault codes across every system in your car. No guesswork. No unnecessary work." />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="FAQ" title="Diagnostics — Your Questions Answered" />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion faqs={FAQS} />
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
