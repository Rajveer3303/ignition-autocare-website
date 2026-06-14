import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export default function CTASection({
  heading = "Any Questions?",
  subheading = "Talk with An Expert",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="container-site py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-12 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl"
          />
          <p className="relative text-sm font-bold uppercase tracking-widest text-brand-400">{heading}</p>
          <h2 className="relative mt-2 text-3xl font-extrabold text-white sm:text-4xl">{subheading}</h2>
          <a href={SITE.phoneHref} className="btn-primary relative mt-7 px-8 text-base">
            Call us: {SITE.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
