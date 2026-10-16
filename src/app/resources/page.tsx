import Image from "next/image";
import Link from "next/link";
import { blogArticles } from "./blogData";

const caseStudies = [
  {
    title: "Success Story: ABC School",
    description:
      "A closer look at how a school can simplify everyday administration and bring routine tasks into one place.",
    accent: "from-blue-100 to-indigo-50",
  },
  {
    title: "Success Story: XYZ Academy",
    description:
      "Explore the steps involved in planning a digital transformation around the needs of a school community.",
    accent: "from-orange-100 to-rose-50",
  },
];

const ebooks = [
  {
    title: "Complete Guide to School Management",
    description:
      "A practical introduction to modern school operations, communication, and choosing the right digital tools.",
    number: "01",
  },
  {
    title: "Digital Transformation in Education",
    description:
      "A step-by-step framework for planning change, supporting staff, and introducing new systems thoughtfully.",
    number: "02",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] pb-24 pt-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="relative isolate overflow-hidden rounded-[2rem] bg-[#102342] text-white shadow-xl shadow-blue-950/10">
          <div className="absolute -right-28 -top-32 -z-10 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
          <div className="grid items-center gap-8 px-6 py-12 sm:px-10 sm:py-14 lg:min-h-[490px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-2 lg:py-10 lg:pl-14 lg:pr-8">
            <div className="relative z-10">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                The Schoolynx resource hub
              </p>
              <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Ideas and tools for{" "}
                <span className="text-orange-300">better-run schools.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">
                Explore practical articles, school stories, and guides for
                making everyday school operations simpler.
              </p>
              <a
                href="#latest-blogs"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-orange-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-300"
              >
                Explore the blog
                <span
                  aria-hidden="true"
                  className="text-lg leading-none transition-transform group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </a>
            </div>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] lg:aspect-square lg:max-w-[500px]">
              <div className="absolute inset-[7%] rounded-full bg-blue-300/10 blur-2xl" />
              <div
                aria-hidden="true"
                className="absolute inset-[8%] rounded-full border border-white/10"
              />
              <div
                aria-hidden="true"
                className="absolute inset-[17%] rounded-full border border-orange-300/20"
              />
              <Image
                src="/assets/school_management.png"
                alt="Illustration of connected school management tools"
                fill
                priority
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-contain p-2 drop-shadow-[0_24px_36px_rgba(0,0,0,0.18)] sm:p-4"
              />
              <div className="absolute bottom-[9%] left-[5%] rounded-2xl border border-white/15 bg-[#193356]/90 px-4 py-3 shadow-xl backdrop-blur">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-200">
                  Explore
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Ideas for school teams
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="latest-blogs" className="scroll-mt-28 pt-20">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                From the blog
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Fresh thinking for your school
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              Actionable perspectives on school operations, digital change, and
              supporting every student.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article, index) => (
              <article
                key={article.slug}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <Link
                  href={`/resources/blog/${article.slug}`}
                  className="relative block h-56 overflow-hidden bg-slate-100"
                  aria-label={`Read ${article.title}`}
                >
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain p-5 transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
                    {article.category}
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {article.readTime}
                  </p>
                  <h3 className="text-xl font-bold leading-snug text-slate-900">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/resources/blog/${article.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-700 transition group-hover:gap-3"
                  >
                    Read article <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="case-studies" className="scroll-mt-28 pt-20">
          <div className="mb-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Real-world perspectives
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Case studies
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <article
                key={study.title}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 sm:p-9"
              >
                <div
                  className={`absolute -right-10 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${study.accent} opacity-80`}
                />
                <p className="relative text-sm font-bold uppercase tracking-widest text-slate-400">
                  Case study 0{index + 1}
                </p>
                <h3 className="relative mt-5 text-2xl font-bold text-slate-900">
                  {study.title}
                </h3>
                <p className="relative mt-3 max-w-xl leading-7 text-slate-600">
                  {study.description}
                </p>
                <span className="relative mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-500">
                  Coming soon
                </span>
              </article>
            ))}
          </div>
        </section>

        <section id="ebooks" className="scroll-mt-28 pt-20">
          <div className="mb-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Learn at your own pace
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Guides and ebooks
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {ebooks.map((ebook) => (
              <article
                key={ebook.number}
                className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 sm:gap-7 sm:p-8"
              >
                <div className="flex h-16 w-14 shrink-0 items-center justify-center rounded-xl bg-[#102342] text-lg font-bold text-orange-300 shadow-lg shadow-blue-950/15">
                  {ebook.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {ebook.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {ebook.description}
                  </p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Coming soon
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
