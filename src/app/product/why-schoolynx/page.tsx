import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Schoolynx | School Management Made Simpler",
  description:
    "Learn how Schoolynx brings school operations, communication, and reporting together in one connected school management platform.",
};

const benefits = [
  {
    number: "01",
    title: "One connected place",
    description:
      "Bring academic, administrative, communication, and finance workflows together instead of juggling disconnected tools.",
    detail: "Connected school operations",
  },
  {
    number: "02",
    title: "Clearer everyday work",
    description:
      "Keep essential information and routine tasks easier to access, so teams can spend less time chasing updates.",
    detail: "Simpler daily workflows",
  },
  {
    number: "03",
    title: "Insights for decisions",
    description:
      "Use school reports and shared information to understand what is happening and make more informed decisions.",
    detail: "Reports and visibility",
  },
  {
    number: "04",
    title: "Built for the school community",
    description:
      "Support the different needs of administrators, teachers, students, and families with role-relevant tools.",
    detail: "Tools for every role",
  },
];

export default function WhySchoolynxPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fc] text-[#172d50]">
      <section className="relative isolate overflow-hidden bg-[#102342] text-white">
        <div
          aria-hidden="true"
          className="absolute -right-36 -top-44 -z-10 h-[34rem] w-[34rem] rounded-full bg-blue-400/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-56 left-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#f4473e]/15 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[600px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-20">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-100 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#ff7169]" />
              A better way to run your school
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Bring your school&apos;s day together{" "}
              <span className="text-[#ff7169]">with Schoolynx.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100/85 sm:text-lg sm:leading-8">
              Schoolynx brings academic and administrative operations into one
              connected platform, helping school teams coordinate work, access
              information, and keep their community in sync.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/live-demo"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4473e] px-6 text-sm font-bold text-white shadow-lg shadow-[#f4473e]/20 transition hover:-translate-y-0.5 hover:bg-[#ff5b52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102342]"
              >
                See Schoolynx in action <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/product/feature-tour"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/[0.06] px-6 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore the features
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-blue-100/80">
              <span className="inline-flex items-center gap-2">
                <span className="text-[#ff8279]">✓</span> Academics and
                administration
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="text-[#ff8279]">✓</span> Communication and
                reporting
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full bg-blue-400/15 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] p-3 shadow-2xl shadow-black/25 backdrop-blur-sm sm:p-5">
              <Image
                src="/assets/school_management.png"
                alt="Illustration of school management tools working together"
                width={2000}
                height={1334}
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className="h-auto w-full rounded-[1.4rem] object-contain"
              />
              <div className="grid grid-cols-3 gap-2 p-2 pt-4 sm:gap-3">
                {["Academics", "Community", "Insights"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-[#102342]/65 px-2 py-3 text-center text-xs font-semibold text-blue-100 sm:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c7342e]">
              Why schools choose a connected approach
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Less time managing disconnected tasks. More time for your school.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Everyday school work involves many people and moving parts.
              Schoolynx helps bring the essential workflows into a clearer,
              shared experience.
            </p>
          </div>

          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_45px_-34px_rgba(23,45,80,0.28)] transition duration-300 hover:-translate-y-1 hover:border-[#f4473e]/30 hover:shadow-[0_24px_55px_-32px_rgba(23,45,80,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff0ef] text-sm font-bold text-[#d83e36]">
                    {benefit.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xl text-slate-300 transition group-hover:text-[#f4473e]"
                  >
                    ↗
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#172d50]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
                <p className="mt-6 border-t border-slate-100 pt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  {benefit.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[280px] bg-[#edf3ff] sm:min-h-[360px]">
            <Image
              src="/assets/home2.png"
              alt="Schoolynx software on a laptop and mobile device"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-5 sm:p-8"
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c7342e]">
              Made for real school workflows
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Useful tools for the people who keep school moving.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              From student records and attendance to timetables, examinations,
              messaging, and reports, Schoolynx helps bring daily work into a
              coordinated system. A web-based platform keeps teams connected
              without requiring a separate installation on every device.
            </p>
            <div className="mt-8">
              <Link
                href="/product/feature-tour#core-modules"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#172d50] px-6 text-sm font-bold text-white transition hover:bg-[#223e68] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-2"
              >
                Browse the feature tour <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[2rem] bg-[#172d50] px-7 py-9 text-white sm:px-10 sm:py-11 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffaaa4]">
              Find the right fit for your school
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
              See how a connected school platform can work for you.
            </h2>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-bold text-white transition hover:bg-white/10"
            >
              View plans
            </Link>
            <Link
              href="/live-demo"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4473e] px-6 text-sm font-bold text-white transition hover:bg-[#ff5b52]"
            >
              Book a demo <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
