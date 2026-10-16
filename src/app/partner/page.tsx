import React from 'react';

const partnershipBenefits = [
  'Access to cutting-edge school management technology',
  'Revenue sharing opportunities',
  'Dedicated partner support',
  'Marketing and sales enablement',
  'Training and certification programs',
];

const partnerRequirements = [
  'Experience in education technology',
  'Strong market presence',
  'Technical expertise',
  'Commitment to customer success',
  'Alignment with our values',
];

const oemFeatures = [
  {
    number: '01',
    title: 'Custom Branding',
    description: 'Fully customizable interface with your brand elements',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 3.5 14.6 9l5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1L9.4 9 12 3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'API Access',
    description: 'Complete API access for seamless integration',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Dedicated Support',
    description: '24/7 technical support for your customers',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 13v-1a8 8 0 0 1 16 0v1m-16 0v4a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Zm16-1v3a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 1Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function PartnerListCard({
  title,
  items,
  type,
}: {
  title: string;
  items: string[];
  type: 'benefits' | 'requirements';
}) {
  return (
    <article className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_32px_rgba(23,45,80,0.055)] transition-all duration-200 hover:-translate-y-1 hover:border-[#f4473e]/25 hover:shadow-[0_18px_38px_rgba(23,45,80,0.09)] sm:p-8">
      <div className="mb-6 flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff1ef] text-[#e84c3d] transition-colors group-hover:bg-[#f4473e] group-hover:text-white">
          {type === 'benefits' ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <path d="m12 3 2.2 5.2L20 10l-4.3 3.8 1.2 5.7-4.9-3-4.9 3 1.2-5.7L4 10l5.8-1.8L12 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <path d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="m8.5 12 2.2 2.2 4.8-4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <div>
          <h3 className="text-xl font-bold tracking-tight text-[#172d50]">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">
            {type === 'benefits' ? 'Grow your business with us' : 'What makes a great partner'}
          </p>
        </div>
      </div>
      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:text-base">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                <path d="m3.5 8 3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fb]">
      <section className="relative isolate overflow-hidden border-b border-slate-200/70 bg-white px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-48 h-[28rem] w-[28rem] rounded-full bg-[#e8f1ff] blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-36 -top-48 h-[26rem] w-[26rem] rounded-full bg-[#fff0ee] blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f4473e]/15 bg-[#fff7f6] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#e84c3d] sm:text-sm">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#f4473e]" />
            Grow with Schoolynx
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-[#172d50] sm:text-5xl lg:text-6xl">
            Partner With Us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Build better outcomes for schools with a technology partner committed to your growth.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <section aria-labelledby="partner-benefits-heading">
          <div className="mb-7">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#e84c3d]">A partnership that works</span>
            <h2 id="partner-benefits-heading" className="mt-2 text-2xl font-bold tracking-tight text-[#172d50] sm:text-3xl">
              Why Partner With Schoolynx?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
            <PartnerListCard title="Benefits of Partnership" items={partnershipBenefits} type="benefits" />
            <PartnerListCard title="Partner Requirements" items={partnerRequirements} type="requirements" />
          </div>
        </section>

        <section aria-labelledby="oem-partnership-heading" className="mt-14 sm:mt-20">
          <div className="mb-7">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#e84c3d]">Built around your brand</span>
            <h2 id="oem-partnership-heading" className="mt-2 text-2xl font-bold tracking-tight text-[#172d50] sm:text-3xl">
              OEM Partnership
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_14px_40px_rgba(23,45,80,0.06)]">
            <div className="border-b border-slate-100 bg-gradient-to-r from-white via-[#fbfcff] to-[#fff8f7] px-6 py-7 sm:px-9 sm:py-9">
              <span aria-hidden="true" className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#172d50] text-white">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <path d="M4 20V8l8-4 8 4v12M2 20h20M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M10 20v-2h4v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="text-xl font-bold tracking-tight text-[#172d50] sm:text-2xl">White Label Solutions</h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Customize and rebrand Schoolynx to match your brand identity while leveraging our powerful school management platform.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-3">
              {oemFeatures.map((feature) => (
                <article key={feature.title} className="rounded-2xl border border-slate-200 bg-[#fbfcfe] p-5 transition-colors hover:border-[#f4473e]/30 hover:bg-[#fff9f8] sm:p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0ee] text-[#e84c3d]">
                      {feature.icon}
                    </span>
                    <span className="text-sm font-bold tracking-[0.12em] text-slate-300">{feature.number}</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#172d50]">{feature.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
