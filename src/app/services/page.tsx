import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'Online Training',
    description:
      'Our online training modules help you and your staff learn at your own pace. Start with the essentials, then grow your expertise and become a Certified Schoolynx Professional.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4m-3-9 2.5-2 2.5 2" />
      </>
    ),
  },
  {
    number: '02',
    title: 'Implementation Services',
    description:
      'Get expert help setting up Schoolynx at your institution. We guide you through implementation so your team can get started with confidence.',
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.36-6.36-2.12 2.12M7.76 16.24l-2.12 2.12m12.72 0-2.12-2.12M7.76 7.76 5.64 5.64" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
  {
    number: '03',
    title: 'Migration Services',
    description:
      'Moving from another school management system? We can help transfer your data into Schoolynx. Pricing depends on the complexity of your data.',
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h11l-3-3m3 3-3 3M17 17H6l3 3m-3-3 3-3" />
      </>
    ),
  },
  {
    number: '04',
    title: 'Customization Services',
    description:
      'Every institution has its own way of working. We offer customization and plugin development to help Schoolynx meet your specific needs.',
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
];

const Services = () => (
  <main className="min-h-screen bg-[#f5f7fb]">
    <section className="overflow-hidden bg-[#eef1f2]">
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-7 sm:px-8 sm:py-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-8 lg:px-10 lg:py-6">
        <div className="relative z-10 text-center lg:pl-5 lg:text-left">
          <span className="inline-flex rounded-xl bg-[#f4473e] px-3 py-2 text-sm font-semibold text-white sm:text-base">
            All-in-One
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-[1.12] tracking-tight text-[#1a2d52] sm:text-4xl lg:mx-0 lg:text-[2.75rem]">
            All-in-One School Management Software
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#1a2d52] sm:text-lg sm:leading-8 lg:mx-0">
            <strong className="font-bold">
              Automate institute operations, get insightful reports, and make better decisions.
            </strong>{' '}
            Schoolynx brings your school&apos;s academic and administrative work together in one simple platform.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/live-demo"
              className="inline-flex min-h-14 items-center justify-center rounded-lg border-2 border-[#f4473e] px-6 text-lg font-semibold text-[#f4473e] transition hover:bg-[#f4473e] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172d50] focus-visible:ring-offset-2"
            >
              Request Live Demo
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[#f4473e] px-6 text-lg font-semibold text-white transition hover:bg-[#d93630] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172d50] focus-visible:ring-offset-2"
            >
              Pricing &amp; Plans
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div aria-hidden="true" className="absolute inset-x-10 bottom-8 top-12 rounded-full bg-white/80 blur-3xl" />
          <Image
            src="/assets/home4.png"
            alt="Schoolynx school dashboard shown on a laptop and mobile phone"
            width={1024}
            height={1024}
            priority
            sizes="(max-width: 1024px) 90vw, 55vw"
            className="relative h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>

    <section className="px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#c7342e]">Schoolynx Pro Services</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#172d50] sm:text-4xl">
              The right support, when you need it.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-right sm:text-base">
            Your continued satisfaction is our priority. We&apos;re here to help your school succeed at every stage.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_45px_-34px_rgba(23,45,80,0.28)] transition duration-300 hover:-translate-y-1 hover:border-[#f4473e]/25 hover:shadow-[0_24px_55px_-32px_rgba(23,45,80,0.25)] sm:p-8"
            >
              <span aria-hidden="true" className="absolute right-6 top-4 text-5xl font-bold tracking-tight text-slate-100 transition-colors group-hover:text-[#fff0ef] sm:right-8 sm:top-5 sm:text-6xl">
                {service.number}
              </span>
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff0ef] text-[#e3443b] ring-1 ring-inset ring-[#f4473e]/10 transition group-hover:bg-[#f4473e] group-hover:text-white">
                <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  {service.icon}
                </svg>
              </span>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-[#172d50] sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="relative isolate mt-8 overflow-hidden rounded-3xl bg-[#172d50] px-6 py-8 text-white sm:mt-10 sm:px-9 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-28 -z-10 h-64 w-64 rounded-full bg-[#f4473e]/20 blur-3xl" />
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#ffaaa4]">Let&apos;s get started</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Tell us how we can help your school.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-blue-100/75 sm:text-base">
              Talk to our team about the right services for your institution.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#f4473e] px-6 text-sm font-bold text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#ff5b52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#172d50] lg:mt-0"
          >
            Contact our team
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default Services;
