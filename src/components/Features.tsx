const partners = [
  {
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png",
    className: "max-h-14 max-w-[210px]",
  },
  {
    name: "NASA",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/640px-NASA_Worm_logo.svg.png",
    className: "max-h-16 max-w-[180px]",
  },
  {
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    className: "max-h-14 max-w-[190px]",
  },
  {
    name: "NASSCOM",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Nasscom-logo-svg.svg",
    className: "max-h-14 max-w-[200px]",
  },
];

const Features = () => (
  <section
    aria-labelledby="trusted-technology-heading"
    className="w-full overflow-hidden bg-white py-16 sm:py-20"
  >
    <div className="mx-auto mb-10 max-w-7xl px-5 text-center sm:mb-12 sm:px-8">
      <span className="mb-3 inline-flex rounded-full border border-[#1a2a49]/10 bg-[#f5f7fb] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1a2a49]/70 sm:text-sm">
        Our trusted network
      </span>
      <h2
        id="trusted-technology-heading"
        className="text-2xl font-bold tracking-tight text-[#1a2a49] sm:text-3xl lg:text-4xl"
      >
        Trusted by leaders in educational technology
      </h2>
    </div>

    <div className="relative mx-auto max-w-7xl overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-24"
      />
      <div className="logo-marquee flex w-max hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {partners.map((partner) => (
              <div
                key={`${copy}-${partner.name}`}
                className="flex h-24 w-[210px] shrink-0 items-center justify-center px-7 sm:h-28 sm:w-[280px] sm:px-10"
              >
                <img
                  src={partner.src}
                  alt={copy === 0 ? partner.name : ""}
                  loading="lazy"
                  draggable={false}
                  className={`h-auto w-auto object-contain opacity-70 grayscale transition duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0 ${partner.className}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
