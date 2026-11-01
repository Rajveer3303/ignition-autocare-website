import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { BLOG_POSTS, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Car Care Blog | Ignition Autocare Castleford",
  description:
    "Car care blog from our Castleford garage: MOT tips, servicing advice, warning lights, tyres and wet belts explained in plain English by our technicians.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Car Care Blog"
        intro="Plain-English advice from our Castleford garage team. MOT tips, servicing guides, warning lights and more, so you know what your car needs and why."
        formLabel="Book Online for an Instant Price"
      />

      <section className="container-site py-10 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/5 bg-white shadow-card transition-shadow hover:shadow-card-hover"
              >
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  width={600}
                  height={340}
                  className="h-48 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                    {formatDate(p.date)} · {p.readMinutes} min read
                  </p>
                  <h2 className="mt-2 font-heading text-lg font-bold text-ink-900 group-hover:text-brand-600">
                    {p.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{p.description}</p>
                  <span className="mt-4 text-sm font-semibold text-brand-600">Read the article →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
