import type { ReactNode } from "react";

/** Plain, readable layout for policy pages. Styles the h2/p/ul inside it. */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="container-site py-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-ink-400">Last updated: {updated}</p>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-600 [&_a]:font-semibold [&_a]:text-brand-600 [&_a:hover]:text-brand-700 [&_h2]:pt-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink-900 [&_h3]:pt-2 [&_h3]:font-bold [&_h3]:text-ink-900 [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_strong]:text-ink-900 [&_ul]:space-y-1.5">
          {children}
        </div>
      </div>
    </section>
  );
}
