import {
  AcademicCapIcon,
  LifebuoyIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: <Squares2X2Icon aria-hidden="true" className="h-7 w-7" />,
    number: "01",
    title: "Powerful features for your Institution",
    desc: "Everything you need to manage your institution efficiently, ready to use with no customization required.",
  },
  {
    icon: <AcademicCapIcon aria-hidden="true" className="h-7 w-7" />,
    number: "02",
    title: "Simple & Easy to use for Teachers",
    desc: "A friendly experience that connects educators and parents. No technical skills needed to get things done.",
  },
  {
    icon: <LifebuoyIcon aria-hidden="true" className="h-7 w-7" />,
    number: "03",
    title: "Online & On-site Customer Support",
    desc: "Get help when you need it with online and onsite support, webinars, and on-demand training tailored to your team.",
  },
];

const PerfectSystem = () => (
  <section className="relative isolate w-full overflow-hidden bg-[#f5f7fb] py-16 sm:py-20 lg:py-24">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-48 -top-48 z-0 h-[440px] w-[440px] rounded-full bg-blue-100/70 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-56 -right-40 z-0 h-[440px] w-[440px] rounded-full bg-red-100/45 blur-3xl"
    />

    <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
        <span className="mb-4 inline-flex items-center rounded-full border border-[#1a2d52]/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1a2d52] shadow-sm sm:text-sm">
          Made for your school
        </span>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#1a2d52] sm:text-4xl lg:text-5xl">
          A comprehensive ERP system
          <span className="mt-1 block text-[#f4473e]">
            built around your school&apos;s needs
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          The right tools, an easy experience, and a real team behind you—so
          your school can focus on what matters most.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {features.map((feature) => (
          <article
            key={feature.number}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_12px_36px_-22px_rgba(26,45,82,0.3)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_48px_-24px_rgba(26,45,82,0.35)] sm:p-8"
          >
            <span
              aria-hidden="true"
              className="absolute right-6 top-5 text-sm font-bold tracking-widest text-slate-300 transition-colors group-hover:text-[#f4473e]/60"
            >
              {feature.number}
            </span>
            <span className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1ef] text-[#f4473e] transition duration-300 group-hover:bg-[#f4473e] group-hover:text-white">
              {feature.icon}
            </span>
            <h3 className="max-w-xs text-xl font-bold leading-snug text-[#1a2d52] sm:text-[22px]">
              {feature.title}
            </h3>
            <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-600">
              {feature.desc}
            </p>
            <div
              aria-hidden="true"
              className="mt-7 h-1 w-12 rounded-full bg-[#f4473e]/70 transition-all duration-300 group-hover:w-20"
            />
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PerfectSystem;
