import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { TEAM } from "@/lib/team";

/** Homepage teaser for the Meet the Team page: four faces, one link. */
export default function TeamStrip() {
  return (
    <section className="bg-slate-50">
      <div className="container-site py-10 sm:py-16">
        <SectionHeader eyebrow="Our Team" title="Meet the People Looking After Your Car" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-ink-600">
          Highly professional, friendly and experienced — say hello to the team you&apos;ll deal
          with when you bring your car to us.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 4) * 0.08}>
              <Link
                href="/meet-the-team"
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-card"
              >
                <Image
                  src={`/images/garage/team-${m.slug}-poster.jpg`}
                  alt={`${m.name}, ${m.role} at Ignition Autocare`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                  style={{ objectPosition: "center 30%" }}
                />
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-900/85 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <span className="block font-heading text-lg font-extrabold text-white sm:text-xl">{m.name}</span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-brand-200 sm:text-sm">{m.role}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <Link href="/meet-the-team" className="inline-flex items-center gap-1 font-semibold text-brand-600 hover:underline">
            Watch their video introductions →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
