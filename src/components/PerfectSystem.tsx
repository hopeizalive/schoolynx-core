import {
  BookOpenIcon,
  ComputerDesktopIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: (
      <span className="relative inline-flex h-24 w-24 items-center justify-center">
        <span aria-hidden="true" className="absolute inset-2 rounded-full border-[5px] border-[#f4473e]" />
        <UserIcon aria-hidden="true" className="relative mt-2 h-16 w-16" strokeWidth={1.7} />
      </span>
    ),
    number: "01",
    title: "Simple & Easy to use for Teachers",
    desc: "Designed to engage teachers and parents. No expertise is required to quickly accomplish a task.",
  },
  {
    icon: (
      <span className="relative inline-flex">
        <BookOpenIcon aria-hidden="true" className="h-20 w-20" strokeWidth={1.5} />
        <svg aria-hidden="true" className="absolute -right-1 -top-2 h-9 w-9 text-[#f4473e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="m13 2-3 9h6l-5 11 1-9H7l6-11Z" />
        </svg>
      </span>
    ),
    number: "02",
    title: "Powerful features for your Institution",
    desc: "We provide everything you will ever need to run an education institution. No customization required.",
  },
  {
    icon: <ComputerDesktopIcon aria-hidden="true" className="h-24 w-24" strokeWidth={1.5} />,
    number: "03",
    title: "Online & On-site Customer Support",
    desc: "Get help when you need it with online and onsite support, webinars, and on-demand training tailored to your team.",
  },
];

const PerfectSystem = () => (
  <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#1a2d52] sm:text-4xl">
          A comprehensive ERP system
          <span className="block">
            built around your school&apos;s needs
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3 lg:gap-16">
        {features.map((feature) => (
          <article
            key={feature.number}
            className="group flex flex-col items-center text-center"
          >
            <span className="mb-3 inline-flex h-24 items-center justify-center text-[#314960] transition-transform duration-300 group-hover:-translate-y-1">
              {feature.icon}
            </span>
            <h3 className="max-w-xs text-xl font-semibold leading-snug text-[#1a2d52] sm:text-[22px]">
              {feature.title}
            </h3>
            <p className="mt-4 max-w-sm text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              {feature.desc}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PerfectSystem;
