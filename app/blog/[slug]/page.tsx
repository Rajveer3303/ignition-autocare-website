import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { BLOG_POSTS, formatDate, getPost } from "@/lib/blog";
import { SITE_URL, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.description,
    openGraph: { title: post.title, description: post.description, images: [post.image], type: "article" },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: SITE.name, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#business` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
  const crumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />

      <article className="container-site max-w-3xl py-10 sm:py-14">
        <Reveal immediate>
          <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:underline">
            ← All articles
          </Link>
          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand-600">
            {formatDate(post.date)} · {post.readMinutes} min read
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">{post.intro}</p>
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={675}
            priority
            className="mt-8 w-full rounded-3xl object-cover shadow-card"
          />
        </Reveal>

        <div className="mt-10 space-y-10">
          {post.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-heading text-2xl font-extrabold text-ink-900">{s.heading}</h2>
              {s.paragraphs?.map((t) => (
                <p key={t.slice(0, 30)} className="mt-4 text-base leading-relaxed text-ink-600">
                  {t}
                </p>
              ))}
              {s.list && (
                <ul className="mt-4 space-y-2">
                  {s.list.map((li) => (
                    <li key={li} className="flex gap-3 text-base leading-relaxed text-ink-600">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                      {li}
                    </li>
                  ))}
                </ul>
              )}
              {s.after?.map((t) => (
                <p key={t.slice(0, 30)} className="mt-4 text-base leading-relaxed text-ink-600">
                  {t}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-brand-600 p-8 text-center text-white">
          <p className="font-heading text-2xl font-extrabold">Need a hand with your car?</p>
          <p className="mx-auto mt-2 max-w-md text-brand-100">
            Enter your reg for an instant price, or call us on {SITE.phone}.
          </p>
          <Link
            href={post.cta.href}
            className="mt-6 inline-block rounded-2xl bg-white px-8 py-3 font-extrabold text-brand-700 shadow-lg hover:bg-brand-50"
          >
            {post.cta.label}
          </Link>
        </div>
      </article>

      {more.length > 0 && (
        <section className="bg-slate-50">
          <div className="container-site py-10 sm:py-14">
            <h2 className="text-center text-xl font-extrabold text-ink-900">More from the blog</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="rounded-2xl border border-ink-900/5 bg-white p-5 font-semibold text-ink-900 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-600"
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
