import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ContactButtons from "@/components/ContactButtons";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import TapToPlayVideo from "@/components/TapToPlayVideo";
import {
  CarIcon,
  GaugeIcon,
  ShieldCheckIcon,
  TagIcon,
  WrenchIcon,
} from "@/components/Icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wet Belt Replacement Castleford | Ford EcoBoost & PureTech | Ignition Autocare",
  description:
    "Wet belt (belt-in-oil) replacement in Castleford for Ford EcoBoost, Peugeot, Citroën and Vauxhall 1.2 PureTech and more. Free wet belt check, OE-quality parts, from £900–£1,500. Call 01977 807050.",
};

const WA_MESSAGE = "Hi Ignition Autocare, I'd like a quote for a wet belt replacement. My reg is: ";

/** Typical price range given by the garage. Exact price depends on the vehicle. */
const PRICE_RANGE = "£900 – £1,500";

/**
 * Common belt-in-oil engines. Manufacturers moved some later versions to timing
 * chains, so the copy always asks for the reg rather than promising by model.
 */
const COMMON_CARS = [
  {
    make: "Ford",
    engines: "1.0 EcoBoost petrol, 1.1 & 1.5 three-cylinder petrol, 1.5 & 2.0 EcoBlue diesel",
    models: "Fiesta, Focus, Puma, EcoSport, Kuga, C-Max, B-Max, Ranger, Transit Custom, Transit",
  },
  {
    make: "Peugeot",
    engines: "1.2 PureTech petrol",
    models: "108, 208, 2008, 308, 3008, 408, 5008, Rifter",
  },
  {
    make: "Citroën & DS",
    engines: "1.2 PureTech petrol",
    models: "C1, C3, C3 Aircross, C4, C4 Cactus, C5 Aircross, Berlingo, DS 3",
  },
  {
    make: "Vauxhall",
    engines: "1.2 petrol (PureTech-based)",
    models: "Corsa, Astra, Mokka, Crossland, Grandland",
  },
  {
    make: "Others",
    engines: "Including Jeep 1.2 and Honda 1.0 VTEC Turbo",
    models: "Not sure if your car has a wet belt? Send us your reg and we'll check for you.",
  },
];

const WARNING_SIGNS = [
  {
    title: "Oil Pressure Warning Light",
    text: "Pieces of a worn belt can block the oil pick-up, starving the engine of oil. If the oil light comes on, stop as soon as it's safe and call us.",
    icon: <GaugeIcon />,
  },
  {
    title: "Hard Brake Pedal",
    text: "On some engines, belt debris can affect the brake vacuum pump, making the brake pedal feel firm and less effective. Have it checked straight away.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Rattling or Ticking Noises",
    text: "A worn or stretched belt can cause rattling, especially from a cold start, as the belt and tensioner lose their grip.",
    icon: <WrenchIcon />,
  },
  {
    title: "Loss of Power or Misfiring",
    text: "If the belt has worn or jumped, the engine timing can be affected, causing rough running, misfires or a lack of power.",
    icon: <CarIcon />,
  },
  {
    title: "Engine Warning Light",
    text: "Timing or oil-pressure faults often trigger the engine management light. Our diagnostic equipment can read the fault codes.",
    icon: <GaugeIcon />,
  },
  {
    title: "Rubber Particles in the Oil",
    text: "Black flakes in the oil or on the dipstick are a sign the belt is breaking down. We check for this during every wet belt inspection.",
    icon: <TagIcon />,
  },
];

const INCLUDED = [
  { label: "New timing belt kit", desc: "Belt, tensioner and idler pulley(s) fitted together" },
  { label: "Oil pump belt", desc: "Replaced at the same time on engines that have one" },
  { label: "Sump and oil strainer clean", desc: "Sump removed and the oil pick-up cleared of belt debris" },
  { label: "Oil and filter change", desc: "Fresh oil to your engine's exact specification and a new filter" },
  { label: "Water pump and other parts", desc: "Replaced where needed. We always quote before fitting anything extra" },
  { label: "OE or OE-quality parts", desc: "Genuine or original-equipment-quality belt kits" },
];

const STEPS = [
  {
    title: "Free wet belt check",
    text: "Bring your car in and we'll inspect the belt and check the oil for debris, then tell you honestly whether it needs replacing yet.",
  },
  {
    title: "Clear, upfront quote",
    text: `Most wet belt replacements cost ${PRICE_RANGE}, depending on the vehicle. We confirm your exact price before any work starts.`,
  },
  {
    title: "We replace the belt",
    text: "Our Level 3 qualified technicians fit a new belt kit, clean the oil system and refill with the correct-specification oil.",
  },
  {
    title: "Back on the road",
    text: "We call you when your car is ready to collect, and show you on video anything else we found. Nothing extra is done without your approval.",
  },
];

const FAQS = [
  {
    q: "What is a wet belt?",
    a: "A wet belt, also called a belt-in-oil, is a timing belt that runs inside the engine, bathed in engine oil, rather than outside it like a traditional cambelt. It keeps the engine's moving parts in time. Because it sits in oil, it's sensitive to the type and condition of the oil, and when it wears, pieces of the belt can end up in the oil system.",
  },
  {
    q: "How much does a wet belt replacement cost?",
    a: `Most wet belt replacements cost between £900 and £1,500, depending on your vehicle and engine. Call us on ${SITE.phone}, email ${SITE.email} or WhatsApp us with your registration and we'll give you an exact price.`,
  },
  {
    q: "How often should a wet belt be replaced?",
    a: "It depends on the engine. Ford quotes 10 years or 150,000 miles for the 1.0 EcoBoost, while the 1.2 PureTech interval was reduced to 6 years or 62,000 miles. Short journeys, missed services or the wrong oil can wear a belt out sooner, which is why we offer a free wet belt check.",
  },
  {
    q: "Is the wet belt check really free?",
    a: "Yes. We'll inspect the belt and check the oil for signs of wear, then tell you honestly whether it needs replacing now or can wait.",
  },
  {
    q: "Can I keep driving if my wet belt is worn?",
    a: "We don't recommend it. If a worn belt breaks down, debris can block the oil pick-up and starve the engine of oil, which can lead to serious engine damage. If your oil pressure light comes on, stop as soon as it's safe and call us.",
  },
  {
    q: "Which oil should my car use?",
    a: "Wet belt engines need oil that meets the exact specification set by the manufacturer. The wrong oil, or oil additives, can attack the belt. We use the correct specification for your engine at every service and wet belt replacement.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes. Our wet belt replacements are backed by our parts and labour warranty. Ask us for the details when you get your quote.",
  },
  {
    q: "Can I spread the cost?",
    a: "Yes. With Payment Assist you can spread the cost of your repair over 3 or 6 monthly instalments, interest free, subject to eligibility.",
  },
];

export default function WetBeltReplacementPage() {
  return (
    <>
      <PageHero
        title="Wet Belt Replacement in Castleford"
        intro="Expert wet belt (belt-in-oil) replacement for Ford EcoBoost, Peugeot, Citroën and Vauxhall 1.2 PureTech and other belt-in-oil engines. Free wet belt check, OE-quality parts and a clear price before we start."
        formLabel="Get a Wet Belt Quote"
        contactCta
        whatsappMessage={WA_MESSAGE}
        image="/images/garage/engine-service.jpg"
        imageAlt="Technician working on an engine at Ignition Autocare Castleford"
        imagePosition="center 55%"
      />

      {/* Key facts strip */}
      <section className="bg-brand-600">
        <div className="container-site grid grid-cols-2 gap-6 py-10 text-center sm:grid-cols-4">
          {[
            { stat: "Free", label: "Wet belt check" },
            { stat: "£900–£1,500", label: "Typical price" },
            { stat: "OE-quality", label: "Parts fitted" },
            { stat: "Warranty", label: "On parts & labour" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">{s.stat}</p>
              <p className="mt-1 text-sm font-medium text-brand-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What is a wet belt */}
      <section className="container-site py-10 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/images/garage/workshop-lift.jpg"
              alt="Car on the lift in the Ignition Autocare workshop"
              width={1200}
              height={1600}
              className="max-h-[460px] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <span className="section-eyebrow">Belt-in-Oil Engines</span>
            <h2 className="section-title">What Is a Wet Belt?</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              A wet belt is a timing belt that runs <strong className="text-ink-900">inside the engine, bathed in oil</strong>,
              instead of outside it like a traditional cambelt. Carmakers introduced it to make engines quieter and more
              efficient, and you&apos;ll find it on many popular cars, including Ford&apos;s EcoBoost engines and the 1.2
              PureTech used by Peugeot, Citroën and Vauxhall.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              The catch is that a wet belt is sensitive to the oil it runs in. The wrong oil, missed services or lots
              of short journeys can make it wear early. As it breaks down, pieces of rubber can block the oil pick-up
              and starve the engine of oil, which is why replacing it on time matters.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              Replacing a wet belt is a bigger job than a standard cambelt. Done properly, it means removing the sump,
              cleaning the oil system and using the exact oil your engine needs. That&apos;s exactly how we do it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Video: our own Ranger */}
      <section className="bg-ink-900">
        <div className="container-site grid items-center gap-10 py-10 sm:py-16 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-[300px]">
            <TapToPlayVideo
              src="/videos/wet-belt-ranger.mp4"
              poster="/images/garage/wet-belt-video-poster.jpg"
              label="Play our wet belt replacement video"
              aspect="540 / 960"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-400">See It Done</span>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              A Wet Belt Replacement on Our Own Ford Ranger
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              We trust this job on our own vehicles. Watch our team replace the wet belt on the Ignition Autocare
              Ford Ranger, using the correct timing tools to lock the engine in place so everything goes back
              exactly as it should.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              Your car gets the same care: a free wet belt check first, a clear quote, OE-quality parts and the
              correct oil, with nothing extra done without your approval.
            </p>
            <ContactButtons message={WA_MESSAGE} className="mt-6" />
          </Reveal>
        </div>
      </section>

      {/* Which cars */}
      <section className="bg-slate-50">
        <div className="container-site py-10 sm:py-16">
          <SectionHeader
            eyebrow="Does My Car Have One?"
            title="Common Cars With a Wet Belt"
            intro="We replace wet belts on all makes and models. These are some of the most common. Some later versions moved to a timing chain, so send us your reg and we'll confirm."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_CARS.map((c, i) => (
              <Reveal key={c.make} delay={(i % 3) * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-ink-900/5 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-ink-900">{c.make}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-600">{c.engines}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.models}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="container-site py-10 sm:py-16">
        <SectionHeader
          eyebrow="Warning Signs"
          title="Signs Your Wet Belt Needs Attention"
          intro="A wet belt can wear without obvious symptoms, so a check before it's due is the safest option. If you notice any of these, get it looked at as soon as possible."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WARNING_SIGNS.map((w, i) => (
            <FeatureCard key={w.title} {...w} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="bg-slate-50">
        <div className="container-site py-10 sm:py-16">
          <SectionHeader
            eyebrow="Done Properly"
            title="What's Included in Our Wet Belt Replacement"
            intro="A wet belt job is only as good as the clean-up around it. Every replacement includes:"
          />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {INCLUDED.map((item, i) => (
              <Reveal key={item.label} delay={(i % 2) * 0.06}>
                <li className="flex h-full items-start gap-3 rounded-xl border border-ink-900/5 bg-white p-4 shadow-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-600">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink-900">{item.label}</p>
                    <p className="text-xs text-ink-500">{item.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-ink-500">
            Backed by our parts and labour warranty. Ask us for the details when you get your quote.
          </p>
        </div>
      </section>

      {/* Price */}
      <section className="container-site py-10 sm:py-16">
        <Reveal className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-ink-900 p-8 text-center sm:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-400">Wet Belt Replacement Price</p>
          <p className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">{PRICE_RANGE}</p>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            The exact price depends on your vehicle and engine. Contact our garage with your registration for an
            exact quote.
          </p>
          <ContactButtons message={WA_MESSAGE} className="mt-6 justify-center" />
          <a
            href={`mailto:${SITE.email}?subject=${encodeURIComponent("Wet belt replacement quote")}`}
            className="mx-auto mt-3 block max-w-md rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 sm:text-base"
          >
            ✉️ Email us: {SITE.email}
          </a>
          <p className="mt-6 text-sm text-slate-400">
            Spread the cost interest free with{" "}
            <Link href="/payment-finance" className="font-semibold text-brand-400 underline underline-offset-2">
              Payment Assist
            </Link>
            , subject to eligibility.
          </p>
        </Reveal>
      </section>

      {/* How it works */}
      <section className="bg-slate-50">
        <div className="container-site py-10 sm:py-16">
          <SectionHeader eyebrow="Step by Step" title="How Our Wet Belt Service Works" />
          <div className="mt-14">
            <ProcessSteps steps={STEPS} />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container-site py-10 sm:py-16">
        <SectionHeader eyebrow="Why Ignition Autocare" title="Why Trust Us With Your Wet Belt" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Bosch Approved Garage",
              text: "Independently assessed by Bosch in 2026, with Bosch diagnostic equipment used throughout.",
              icon: <ShieldCheckIcon />,
            },
            {
              title: "Level 3 Qualified Technicians",
              text: "Experienced technicians with over 29 years of motor trade expertise behind them.",
              icon: <WrenchIcon />,
            },
            {
              title: "No Surprise Bills",
              text: "We quote before we start, and nothing extra is done without your approval.",
              icon: <TagIcon />,
            },
          ].map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="container-site py-10 sm:py-16">
          <SectionHeader eyebrow="FAQ" title="Wet Belt Questions Answered" />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      <CTASection heading="Wet Belt Quote" subheading="Talk to Our Team Today" />
    </>
  );
}
