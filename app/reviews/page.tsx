import type { Metadata } from "next";
import { TESTIMONIALS } from "@/lib/site";
import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Customer Reviews | Ignition Autocare — Castleford MOT & Servicing",
  description:
    "Read genuine customer reviews of Ignition Autocare in Castleford. 4.9★ on Google from 450+ reviews. MOT testing, servicing, repairs and more.",
};

const STAR_COUNT = 5;

function StarRating({ rating = STAR_COUNT }: { rating?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "#FBBF24" : "#E5E7EB"}
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 pb-20 pt-36 text-center text-white">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-200">
            What Our Customers Say
          </p>
          <h1 className="font-heading text-4xl font-extrabold sm:text-5xl">
            4.9 Stars on Google
          </h1>
          <p className="mt-3 text-lg text-brand-100">
            [VERIFY: current rating and review count] — Over 450 verified reviews
          </p>
          <div className="mt-4 flex justify-center">
            <StarRating />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-base text-brand-100">
            Every review below is from a real customer. We don&apos;t cherry-pick or filter — these are the kinds of things people say about us on Google day-to-day.
          </p>
        </Reveal>
      </section>

      {/* Reviews grid */}
      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="Verified Google Reviews" title="Straight From Our Customers" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-2xl border border-ink-900/5 bg-white p-6 shadow-card">
                <StarRating />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="mt-5 flex items-center gap-3 border-t border-ink-900/5 pt-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{t.name}</p>
                    <p className="text-xs text-ink-400">Google Review</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20 text-center">
          <SectionHeader
            eyebrow="Have You Visited Us?"
            title="Leave Us a Google Review"
          />
          <p className="mx-auto mt-4 max-w-xl text-ink-600">
            If you&apos;ve used Ignition Autocare and want to share your experience, we&apos;d genuinely appreciate a Google review. It helps other customers make an informed choice, and it helps us understand where we can improve.
          </p>
          <a
            href="https://g.page/r/[VERIFY: Google review link]/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex items-center gap-2 px-8 py-3 text-base"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Write a Review on Google
          </a>
          <p className="mt-3 text-xs text-ink-400">[VERIFY: update Google review link before going live]</p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
