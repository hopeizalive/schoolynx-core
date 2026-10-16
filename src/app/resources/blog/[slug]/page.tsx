import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogArticles } from "../../blogData";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Article not found | Schoolynx" };
  }

  return {
    title: `${article.title} | Schoolynx`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[#f7f8fc] pb-24 pt-24 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/resources#latest-blogs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-orange-700"
        >
          <span aria-hidden="true">←</span> All resources
        </Link>

        <header className="mx-auto max-w-3xl py-12 text-center sm:py-16">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">
            {article.category} <span className="px-2 text-slate-300">·</span>{" "}
            {article.readTime}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {article.excerpt}
          </p>
        </header>

        <div className="relative mx-auto aspect-[16/8] max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-contain p-6 sm:p-10"
          />
        </div>

        <div className="mx-auto max-w-2xl pt-12 sm:pt-16">
          {article.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-base leading-8 text-slate-700"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <div className="mt-14 rounded-3xl bg-[#102342] p-7 text-white sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-300">
              Keep exploring
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              More practical ideas for your school
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-blue-100">
              Browse the Schoolynx resource hub for more articles, school
              perspectives, and guides.
            </p>
            <Link
              href="/resources#latest-blogs"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-orange-300"
            >
              Back to resources <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
