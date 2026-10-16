import Link from 'next/link';

const partnerAdvantages = [
  'Embed Schoolynx in your application and deliver value faster',
  'Use a proven platform instead of building another enterprise system from scratch',
  'Offer an end-to-end solution for admissions, fees, attendance, exams, and communication',
  'Reduce your time to market with auto-upgrades and bug-fix support',
];

const partnerFeatures = [
  {
    title: 'Custom branding',
    description: 'Deliver a polished user experience using your own brand identity and visual language.',
  },
  {
    title: 'API-first integration',
    description: 'Connect Schoolynx with your platform or existing systems with a flexible integration model.',
  },
  {
    title: 'Ongoing support',
    description: 'Get help with onboarding, technical questions, and long-term implementation success.',
  },
];

export default function OemPartnerPage() {
  return (
    <main className="min-h-screen bg-[#f6f8fc] text-slate-800">
      <section className="relative overflow-hidden bg-[#101f3a] text-white">
        <div aria-hidden="true" className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#f4473e]/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
            <span className="h-2 w-2 rounded-full bg-[#ff7f73]" />
            OEM partnership
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Build your next education solution with Schoolynx.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100/80 sm:text-lg">
            Embed Schoolynx School Management Software into your product, accelerate delivery, and create a stronger offering for schools and institutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#f4473e] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#df3d35] hover:shadow-lg hover:shadow-[#f4473e]/20"
            >
              Enquire now
            </Link>
            <Link
              href="/partner"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Back to partner program
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(23,45,80,0.04)] sm:p-8">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#e84c3d]">Why OEM partners choose us</span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#172d50] sm:text-3xl">
              Expand your business into the EdTech market.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Schoolynx gives your team a proven platform that already covers the critical workflows schools need, so you can focus on growth rather than building a whole enterprise solution from scratch.
            </p>
          </div>

          <div className="grid gap-4">
            {partnerFeatures.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-lg font-bold text-[#172d50]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 sm:mt-20">
          <div className="mb-7">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#e84c3d]">Partner advantages</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#172d50] sm:text-3xl">
              Everything you need to grow faster
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {partnerAdvantages.map((item) => (
              <article key={item} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(23,45,80,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#f4473e]/30 hover:bg-[#fffaf9] hover:shadow-[0_18px_38px_rgba(23,45,80,0.08)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0ee] text-[#e84c3d] transition-colors duration-200 group-hover:bg-[#f4473e] group-hover:text-white">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path d="m6 12 3 3 9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm leading-6 text-slate-600">{item}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
