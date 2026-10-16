import Link from "next/link";

const stats = [
  {
    label: "Schools",
    value: "300+",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9 sm:h-10 sm:w-10">
        <path d="m3 11 13-7 13 7-13 7L3 11Z" />
        <path d="M7 13v8l9 5 9-5v-8M4 12v9" />
        <path d="m5 21 3 2" />
      </svg>
    ),
  },
  {
    label: "Countries",
    value: "30+",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9 sm:h-10 sm:w-10">
        <circle cx="16" cy="16" r="12" />
        <path d="M10 7.5 13 10l-1 3-3 1-1 4 3 2 2 5M21 5l-1 4 3 2-1 3-4 1-2 4 2 4M5 14l4-1M20 27l1-4 4-2" />
      </svg>
    ),
  },
  {
    label: "Languages",
    value: "8+",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9 sm:h-10 sm:w-10">
        <path d="m18 6 10 20M15 10h14M22 10c-1 8-5 13-12 17M13 14c2 4 5 7 9 9M5 8h11M10.5 5v3M3 25l5-12 5 12M5 20h7" />
      </svg>
    ),
  },
];

const Stats = () => (
  <section aria-label="Schoolynx worldwide" className="w-full bg-[#1a2d52] text-white">
    <div className="mx-auto grid max-w-[1240px] grid-cols-2 items-center gap-x-3 gap-y-4 px-5 py-5 sm:gap-x-6 sm:px-8 lg:grid-cols-[repeat(3,minmax(0,1fr))_auto] lg:gap-8 lg:px-6 lg:py-[1.125rem]">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`flex items-center justify-center gap-3 sm:gap-4 ${
            index === stats.length - 1 ? "col-span-2 lg:col-span-1" : ""
          }`}
        >
          <div className="shrink-0 text-white">{stat.icon}</div>
          <div className="text-left">
            <p className="text-[1.5rem] font-bold leading-none tracking-[-0.04em] sm:text-[1.7rem]">
              {stat.value}
            </p>
            <p className="mt-1 text-[0.8rem] font-medium leading-tight text-white/90 sm:text-sm">
              {stat.label}
            </p>
          </div>
        </div>
      ))}

      <Link
        href="/pricing"
        className="col-span-2 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-[#f4433b] px-8 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#e93630] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d52] sm:col-span-2 lg:col-span-1 lg:min-w-36"
      >
        Buy Now
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
          <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  </section>
);

export default Stats;
