import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { PinIcon } from "@/components/Icons";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { CASTLEFORD_AREAS, TOWNS, placeList } from "@/lib/towns";

export const metadata: Metadata = {
  title: "Areas We Cover | Garage Serving Castleford, Pontefract, Wakefield & Selby | Ignition Autocare",
  description:
    "Ignition Autocare serves drivers across West Yorkshire from our Bosch Approved garage in Castleford: Pontefract, Normanton, Featherstone, Knottingley, Wakefield, Garforth, Kippax, Rothwell, Selby and more. Free collection & delivery within 20 miles.",
};

export default function AreasPage() {
  const crumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Areas We Cover", href: "/areas" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      <PageHero
        title="Areas We Cover"
        intro={`We're based on Colorado Way in Castleford, just off Junction 32 of the M62, and look after drivers from across West Yorkshire and beyond. Bring your car to us, or use our free collection and delivery service within 20 miles.`}
        formLabel="Get an Instant Price"
        image="/images/garage/exterior-aerial.jpg"
        imageAlt="Aerial view of Ignition Autocare garage in Castleford"
      />

      <section className="container-site py-10 sm:py-16">
        <SectionHeader
          eyebrow="Find Your Area"
          title="Towns & Villages We Serve"
          intro="Choose your area for driving distances, collection details and answers to common questions."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Castleford itself is the homepage */}
          <Reveal className="h-full">
            <Link
              href="/"
              className="group flex h-full flex-col rounded-3xl border-2 border-brand-200 bg-brand-50 p-6 transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-700">
                <span className="[&>svg]:h-4 [&>svg]:w-4"><PinIcon /></span>
                Our home
              </span>
              <h3 className="mt-2 text-xl font-extrabold text-ink-900 group-hover:text-brand-600">Castleford</h3>
              <p className="mt-2 text-sm text-ink-500">{CASTLEFORD_AREAS.join(", ")}</p>
              <p className="mt-auto pt-4 text-sm font-semibold text-brand-600">Our garage, {SITE.address} →</p>
            </Link>
          </Reveal>

          {TOWNS.map((t, i) => (
            <Reveal key={t.slug} delay={((i + 1) % 3) * 0.08} className="h-full">
              <Link
                href={`/areas/${t.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-ink-900/5 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <h3 className="text-xl font-extrabold text-ink-900 group-hover:text-brand-600">{placeList(t)}</h3>
                <ul className="mt-3 space-y-1 text-sm text-ink-500">
                  {t.places.map((p) => (
                    <li key={p.name}>
                      {p.name}: {p.miles} miles, ~{p.minutes} min
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-4 text-sm font-semibold text-brand-600">View area →</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-500">
          Don&apos;t see your area? If you&apos;re within 20 miles of Castleford we can usually collect your car.
          Call us on{" "}
          <a href={SITE.phoneHref} className="font-semibold text-brand-600">
            {SITE.phone}
          </a>{" "}
          and we&apos;ll check.
        </p>
      </section>

      <CTASection />
    </>
  );
}
