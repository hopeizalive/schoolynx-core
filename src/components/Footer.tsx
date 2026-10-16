import Image from 'next/image';
import Link from 'next/link';

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Explore features', href: '/product/feature-tour#core-modules' },
      { label: 'Pricing & plans', href: '/pricing' },
      { label: 'Our services', href: '/services' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { label: 'Why Schoolynx', href: '/product/why-schoolynx' },
      { label: 'Frequently asked questions', href: '/product/faq' },
      { label: 'Contact us', href: '/contact' },
    ],
  },
];

export const Footer = () => (
  <footer className="bg-[#f5f7fb] px-4 pb-5 pt-12 sm:px-6 sm:pt-16">
    <div className="mx-auto max-w-7xl">
      <section className="relative isolate overflow-hidden rounded-[1.75rem] bg-[#172d50] px-6 py-9 text-white shadow-xl shadow-[#172d50]/10 sm:px-10 sm:py-11 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-36 -z-10 h-80 w-80 rounded-full bg-[#f4473e]/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-36 right-1/3 -z-10 h-64 w-64 rounded-full bg-blue-400/15 blur-3xl"
        />
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ffaaa4]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f4473e]" />
              Ready for a smarter school?
            </span>
            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Let&apos;s make school management simpler.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-blue-100/80 sm:text-base">
              See how Schoolynx can bring your school&apos;s day-to-day into one clear, connected place.
            </p>
          </div>
          <Link
            href="/live-demo"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#f4473e] px-6 text-sm font-bold text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#ff5b52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#172d50]"
          >
            Book a free demo
            <span aria-hidden="true" className="text-lg leading-none">→</span>
          </Link>
        </div>
      </section>

      <div className="grid items-start gap-8 py-8 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-12 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-4">
          <Link
            href="/"
            aria-label="Schoolynx home"
            className="inline-flex w-56 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-4"
          >
            <Image
              src="/assets/logo-footer.png"
              alt="Schoolynx School ERP"
              width={380}
              height={88}
              className="h-auto w-full object-contain"
            />
          </Link>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
            Thoughtful tools for the people who make great schools happen.
          </p>
        </div>

        {footerSections.map((section) => (
          <nav
            key={section.title}
            aria-label={section.title}
            className="lg:col-span-2"
          >
            <h2 className="text-sm font-bold text-[#172d50]">{section.title}</h2>
            <ul className="mt-4 space-y-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm leading-6 text-slate-600 transition-colors hover:text-[#f4473e] focus-visible:text-[#f4473e] focus-visible:outline-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="sm:col-span-2 lg:col-span-4">
          <h2 className="text-sm font-bold text-[#172d50]">Come say hello</h2>
          <div className="mt-4 flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#f4473e] shadow-sm ring-1 ring-slate-200/70" aria-hidden="true">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.3" />
              </svg>
            </span>
            <p className="max-w-xs text-sm leading-6 text-slate-600">
              Office No. 108, Iqra IT Park, Defence View Phase II, Shaheed-i-Milat Road, Karachi
            </p>
          </div>
          <a
            href="tel:+923155814609"
            className="mt-4 inline-flex min-h-10 items-center gap-3 rounded-lg text-sm font-semibold text-[#172d50] transition-colors hover:text-[#f4473e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#f4473e] shadow-sm ring-1 ring-slate-200/70" aria-hidden="true">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 4 3.5-.8L11 7l-2 2a15 15 0 0 0 6 6l2-2 3.8 2.5L20 19c-.3 1-1.3 1.5-2.3 1.2A18 18 0 0 1 3.8 6.3C3.5 5.3 4 4.3 5 4Z" />
              </svg>
            </span>
            +92-315-5814609
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-slate-200 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Schoolynx. All rights reserved.</p>
        <p>Made for better school days.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
