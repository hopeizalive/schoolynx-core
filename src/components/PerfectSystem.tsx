import {
  BookOpenIcon,
  ComputerDesktopIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: (
      <span className="relative inline-flex h-14 w-14 items-center justify-center">
        <span aria-hidden="true" className="absolute inset-0 rounded-2xl border border-[#f4473e]/15 bg-[#fff1ef]" />
        <UserIcon aria-hidden="true" className="relative h-7 w-7" strokeWidth={1.7} />
      </span>
    ),
    number: "01",
    title: "Simple & Easy to use for Teachers",
    desc: "Designed to engage teachers and parents. No expertise is required to quickly accomplish a task.",
  },
  {
    icon: (
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f4473e]/15 bg-[#fff1ef]">
        <BookOpenIcon aria-hidden="true" className="h-7 w-7" strokeWidth={1.7} />
        <svg aria-hidden="true" className="absolute -right-1 -top-1 h-5 w-5 text-[#f4473e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="m13 2-3 9h6l-5 11 1-9H7l6-11Z" />
        </svg>
      </span>
    ),
    number: "02",
    title: "Powerful features for your Institution",
    desc: "We provide everything you will ever need to run an education institution. No customization required.",
  },
  {
    icon: (
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f4473e]/15 bg-[#fff1ef]">
        <ComputerDesktopIcon aria-hidden="true" className="h-7 w-7" strokeWidth={1.7} />
      </span>
    ),
    number: "03",
    title: "Online & On-site Customer Support",
    desc: "Get help when you need it with online and onsite support, webinars, and on-demand training tailored to your team.",
  },
];

const PerfectSystem = () => (
  <section className="relative isolate w-full overflow-hidden bg-[#f5f7fb] py-16 sm:py-20 lg:py-24">
    <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-36 -z-10 h-96 w-96 rounded-full bg-sky-100/80 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-rose-100/70 blur-3xl" />

    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
        <span className="mb-5 inline-flex items-center rounded-full border border-[#172d50]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#526781] shadow-sm sm:text-sm">
          Built for better school days
        </span>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#172d50] sm:text-4xl lg:text-5xl">
          A comprehensive ERP system
          <span className="mt-1 block text-[#f4473e]">built around your school&apos;s needs.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Give your educators the tools, features, and support to keep your entire institution moving forward.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {features.map((feature) => (
          <article
            key={feature.number}
            className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_24px_-18px_rgba(23,45,80,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#f4473e]/30 hover:shadow-[0_20px_45px_-24px_rgba(23,45,80,0.28)] sm:p-7"
          >
            <span aria-hidden="true" className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[#f4473e]/45 to-transparent" />
            <div className="mb-6 flex items-center justify-between">
              <span className="inline-flex text-[#314960] transition-transform duration-300 group-hover:-translate-y-0.5">
                {feature.icon}
              </span>
              <span className="text-sm font-bold tabular-nums tracking-wider text-slate-300">
                {feature.number}
              </span>
            </div>
            <h3 className="max-w-xs text-xl font-bold leading-snug text-[#172d50] sm:text-[22px]">
              {feature.title}
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600 sm:text-base">
              {feature.desc}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PerfectSystem;
