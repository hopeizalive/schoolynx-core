const partnerLogos = [
  {
    name: 'Deloitte Technology Fast50',
    logo: (
      <div className="flex flex-col items-start text-[#174b86]">
        <span className="text-[2rem] font-extrabold leading-none tracking-tight sm:text-4xl">
          Deloitte<span className="text-[#86bc25]">.</span>
        </span>
        <span className="mt-1 text-sm font-medium leading-none sm:text-base">Technology Fast50</span>
      </div>
    ),
  },
  {
    name: 'CNBC',
    logo: (
      <div className="flex flex-col items-center">
        <svg aria-hidden="true" className="h-10 w-16 sm:h-12 sm:w-[4.75rem]" viewBox="0 0 76 48" fill="none">
          <path d="M38 22 28 7c-3-5 4-9 8-4l5 18" fill="#7B4FA3" />
          <path d="m38 22-17-9c-5-3-2-10 4-8l13 15" fill="#E31837" />
          <path d="m38 22-20-1c-6 0-7-8-1-9l20 10" fill="#F7941D" />
          <path d="m38 22-17 8c-5 3-10-4-5-8l22 0" fill="#FDBB30" />
          <path d="m38 22 17-9c5-3 2-10-4-8L38 22" fill="#00AEEF" />
          <path d="m38 22 20-1c6 0 7-8 1-9L38 22" fill="#0072BC" />
          <path d="m38 22 17 8c5 3 10-4 5-8l-22 0" fill="#00A651" />
          <path d="M38 22v10" stroke="#253858" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <span className="text-xl font-black leading-none tracking-tight text-black sm:text-2xl">CNBC</span>
      </div>
    ),
  },
  {
    name: 'MIT Technology Review Innovators Under 35',
    logo: (
      <div className="flex items-center gap-2 text-[#73777c]">
        <span className="text-3xl font-black leading-none tracking-[-0.08em] text-[#c94345] sm:text-4xl">MIT</span>
        <span className="text-3xl font-bold leading-none tracking-tight sm:text-4xl">tr</span>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ed1c2e] text-2xl font-bold leading-none text-white sm:h-12 sm:w-12 sm:text-3xl">35</span>
      </div>
    ),
  },
  {
    name: 'NASSCOM Emerge 10',
    logo: (
      <div className="flex flex-col items-start leading-none">
        <span className="text-[1.7rem] font-extrabold tracking-tight text-[#b5222c] sm:text-3xl">
          NASSCOM<sup className="ml-0.5 text-[9px]">®</sup>
        </span>
        <span className="mt-1 text-xl font-bold tracking-wide text-[#929292] sm:text-2xl">EMERGE 10</span>
      </div>
    ),
  },
];

const Features = () => (
  <section
    aria-labelledby="trusted-technology-heading"
    className="hidden"
  >
    <div className="mx-auto mb-8 max-w-7xl px-5 text-center sm:mb-10 sm:px-8">
      <h2
        id="trusted-technology-heading"
        className="text-2xl font-semibold tracking-tight text-[#1a2a49] sm:text-3xl"
      >
        Loved by the pioneers in technology
      </h2>
    </div>

    <div className="relative mx-auto max-w-[1600px] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#f7f8fa] to-transparent sm:w-16"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#f7f8fa] to-transparent sm:w-16"
      />
      <div className="logo-marquee flex w-max">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {partnerLogos.map((partner) => (
              <div
                key={`${copy}-${partner.name}`}
                className="flex h-20 w-[230px] shrink-0 items-center justify-center px-6 sm:h-24 sm:w-[300px] sm:px-10 lg:w-[340px]"
                role={copy === 0 ? 'img' : undefined}
                aria-label={copy === 0 ? partner.name : undefined}
              >
                {partner.logo}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
