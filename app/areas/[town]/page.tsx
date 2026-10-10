import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import {
  CarIcon,
  GaugeIcon,
  PinIcon,
  ShieldCheckIcon,
  TagIcon,
  TruckIcon,
  WrenchIcon,
} from "@/components/Icons";
import { breadcrumbSchema } from "@/lib/schema";
import { BRANCHES, REVIEW_STATS, SERVICE_LINKS, SITE } from "@/lib/site";
import { TOWNS, getTown, placeList } from "@/lib/towns";

export const dynamicParams = false;

export function generateStaticParams() {
  return TOWNS.map((t) => ({ town: t.slug }));
}

export function generateMetadata({ params }: { params: { town: string } }): Metadata {
  const town = getTown(params.town);
  if (!town) return {};
  const places = placeList(town);
  return {
    title: `MOT, Servicing & Car Repairs near ${places} | Ignition Autocare`,
    description: `Bosch Approved garage serving ${places}, ${town.places[0].miles} miles from our Castleford garage. MOTs, servicing, brakes, tyres and diagnostics with free collection & delivery. ${REVIEW_STATS.rating}★ from ${REVIEW_STATS.count} Google reviews.`,
  };
}

const WHY = [
  {
    title: "Bosch Approved",
    text: "Independently assessed by Bosch in 2026, and we use Bosch diagnostic equipment throughout.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Level 3 Qualified",
    text: "Our technicians are Level 3 qualified, backed by over 29 years of motor trade expertise.",
    icon: <WrenchIcon />,
  },
  {
    title: "Video Health Check",
    text: "Every Full or Major Service comes with a video of your car sent to your phone, so you see exactly what we see.",
    icon: <GaugeIcon />,
  },
  {
    title: "Free Collection & Delivery",
    text: "We collect from your home or work within 20 miles and bring your car back, for most service and repair bookings.",
    icon: <TruckIcon />,
  },
  {
    title: "No Surprise Bills",
    text: "We quote before we start. Nothing is carried out without your approval, and the price quoted is the price you pay.",
    icon: <TagIcon />,
  },
  {
    title: "Free Courtesy Cars",
    text: "Stay on the move while we work on your car. Ask when you book and we'll check availability for your date.",
    icon: <CarIcon />,
  },
];

const STEPS = [
  {
    title: "Book online",
    text: "Enter your reg for an instant price, choose a date, and add your collection address if you'd like us to pick the car up.",
  },
  {
    title: "Drop off or we collect",
    text: "Bring the car to our Castleford garage, or we'll collect it from your home or workplace at the agreed time.",
  },
  {
    title: "Video & approval",
    text: "We send you a video of anything we find with a clear quote. Nothing extra goes ahead without your say-so.",
  },
  {
    title: "Back on the road",
    text: "Pick your car up, or we deliver it back to you. Same day for most bookings.",
  },
];

export default function TownPage({ params }: { params: { town: string } }) {
  const town = getTown(params.town);
  if (!town) notFound();

  const places = placeList(town);
  const main = town.places[0];
  const otherTowns = TOWNS.filter((t) => t.slug !== town.slug);

  const faqs = [
    ...town.faqs,
    {
      q: `Do you have a garage in ${town.name}?`,
      a: `Our garage is on Colorado Way, Castleford (WF10 4FA). We don't have a site in ${town.name}, but we look after drivers from across the area, and our free collection and delivery service means you don't need to bring the car to us.`,
    },
    {
      q: "How do I book?",
      a: `Enter your registration at the top of this page for an instant price and choose a date, or call us on ${SITE.phone}. You can also message us on WhatsApp.`,
    },
    {
      q: "What are your opening hours?",
      a: `${SITE.hours.map((h) => `${h.days}: ${h.time}`).join(". ")}.`.replace(/ – /g, " to "),
    },
  ];

  const crumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Areas We Cover", href: "/areas" },
    { name: places, href: `/areas/${town.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      <PageHero
        title={`MOT, Servicing & Repairs for ${places}`}
        intro={town.intro}
        formLabel="Get an Instant Price"
        image={town.image}
        imageAlt={town.imageAlt}
        imagePosition={town.imagePosition}
      />

      {/* Stat strip */}
      <section className="bg-brand-600">
        <div className="container-site grid grid-cols-2 gap-6 py-10 text-center sm:grid-cols-4">
          {[
            { stat: `${main.miles} mi`, label: `From ${main.name}` },
            { stat: `~${main.minutes} min`, label: "Typical drive" },
            { stat: "Free", label: "Collection & delivery" },
            { stat: `${REVIEW_STATS.rating}★`, label: `${REVIEW_STATS.count} Google reviews` },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-white">{s.stat}</p>
              <p className="mt-1 text-sm font-medium text-brand-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Local section */}
      <section className="container-site py-10 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
          <Reveal>
            <span className="section-eyebrow">Serving {town.name}</span>
            <h2 className="section-title">Your Local Garage for {places}</h2>
            {town.local.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-base leading-relaxed text-ink-500">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink-900/5 bg-slate-50 p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-ink-900">
                <span className="text-brand-600 [&>svg]:h-5 [&>svg]:w-5">
                  <PinIcon />
                </span>
                Distance to our garage
              </h3>
              <ul className="mt-4 divide-y divide-ink-900/5">
                {town.places.map((p) => (
                  <li key={p.name} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="font-semibold text-ink-900">{p.name}</span>
                    <span className="text-ink-500">
                      {p.miles} miles · ~{p.minutes} min
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-ink-500">
                Driving distance to {SITE.fullAddress}. Times are typical and depend on traffic.
              </p>
              {town.nearby.length > 0 && (
                <>
                  <p className="mt-5 text-sm font-semibold text-ink-900">We also cover</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {town.nearby.map((n) => (
                      <span key={n} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-700 shadow-sm">
                        {n}
                      </span>
                    ))}
                  </div>
                </>
              )}
              <a
                href={BRANCHES[0].mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Get directions →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50">
        <div className="container-site py-10 sm:py-16">
          <SectionHeader
            eyebrow="Our Services"
            title={`Car Services for ${town.name} Drivers`}
            intro="All makes and models, carried out at our Castleford garage."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_LINKS.map((s, i) => (
              <Reveal key={s.href} delay={(i % 3) * 0.05}>
                <Link
                  href={s.href}
                  className="flex items-center justify-between rounded-2xl border border-ink-900/5 bg-white px-5 py-4 font-semibold text-ink-900 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-600"
                >
                  {s.label}
                  <span aria-hidden="true" className="text-brand-600">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container-site py-10 sm:py-16">
        <SectionHeader eyebrow="Why Ignition Autocare" title="Dealer Standard, Independent Prices" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <FeatureCard key={w.title} {...w} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50">
        <div className="container-site py-10 sm:py-16">
          <SectionHeader eyebrow="Step by Step" title="How It Works" />
          <div className="mt-14">
            <ProcessSteps steps={STEPS} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-site py-10 sm:py-16">
        <SectionHeader eyebrow="FAQ" title={`Questions from ${town.name} Drivers`} />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </Reveal>
      </section>

      {/* Other areas */}
      <section className="bg-slate-50">
        <div className="container-site py-10 sm:py-14">
          <h2 className="text-center text-xl font-extrabold text-ink-900">Other Areas We Cover</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {otherTowns.map((t) => (
              <Link
                key={t.slug}
                href={`/areas/${t.slug}`}
                className="rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-600"
              >
                {placeList(t)}
              </Link>
            ))}
            <Link
              href="/areas"
              className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
            >
              All areas
            </Link>
          </div>
        </div>
      </section>

      <CTASection heading="Any Questions?" subheading="Talk to Our Team About Your Car" />
    </>
  );
}
