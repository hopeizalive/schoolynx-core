import Image from 'next/image';
import Link from 'next/link';
import { BsCalendar4Event } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { CiLogin } from 'react-icons/ci';
import { GrCertificate, GrMoney } from 'react-icons/gr';
import { IoBookOutline } from 'react-icons/io5';
import { LiaIdCardSolid } from 'react-icons/lia';
import { LuBookKey, LuLayoutDashboard, LuMessageSquareMore } from 'react-icons/lu';
import {
  MdAppRegistration,
  MdOutlineLibraryBooks,
  MdOutlineManageAccounts,
  MdOutlineTextsms,
} from 'react-icons/md';
import { PiExam, PiNewspaperClippingLight, PiStudent } from 'react-icons/pi';
import { RiTimelineView } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';

const modules = [
  { name: 'Courses & batches', Icon: IoBookOutline },
  { name: 'Certificate generator', Icon: GrCertificate },
  { name: 'Student information', Icon: PiStudent },
  { name: 'Human resources', Icon: CgProfile },
  { name: 'Multiple dashboards', Icon: LuLayoutDashboard },
  { name: 'Teacher & employee login', Icon: LuBookKey },
  { name: 'Student attendance', Icon: MdAppRegistration },
  { name: 'Student admissions', Icon: PiStudent },
  { name: 'Parent & student portal', Icon: CiLogin },
  { name: 'Timetable management', Icon: RiTimelineView },
  { name: 'News management', Icon: PiNewspaperClippingLight },
  { name: 'Messaging system', Icon: LuMessageSquareMore },
  { name: 'Gradebook', Icon: MdOutlineLibraryBooks },
  { name: 'Examinations', Icon: PiExam },
  { name: 'User management', Icon: MdOutlineManageAccounts },
  { name: 'SMS integration', Icon: MdOutlineTextsms },
  { name: 'School & events calendar', Icon: BsCalendar4Event },
  { name: 'Report center', Icon: TbReportAnalytics },
  { name: 'ID card generator', Icon: LiaIdCardSolid },
  { name: 'Finance', Icon: GrMoney },
  { name: 'Student remarks', Icon: PiStudent },
];

const plans = [
  {
    name: 'Standard',
    count: '17',
    category: 'Standard modules',
    note: 'The everyday essentials to keep your school running smoothly.',
    includes: ['21 Core modules', '17 Standard modules'],
    accent: 'blue',
  },
  {
    name: 'Premium',
    count: '10',
    category: 'Premium modules',
    note: 'More ways to connect your school, staff, students, and families.',
    includes: ['21 Core modules', '17 Standard modules', '10 Premium modules'],
    accent: 'red',
  },
  {
    name: 'Ultimate',
    count: '12',
    category: 'Ultimate modules',
    note: 'The complete toolkit for schools ready to do even more.',
    includes: ['21 Core modules', '17 Standard modules', '10 Premium modules', '12 Ultimate modules'],
    accent: 'navy',
  },
];

const ArrowIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

export default function ProductPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section
        className="relative isolate overflow-hidden bg-[#101f3a] text-white"
        style={{ backgroundColor: '#101f3a', color: '#ffffff' }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-44 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#f4473e]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-64 left-[-8rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-blue-500/15 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#ff7169]" />
              One platform. Every school day.
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Your school, running
              <span className="text-[#ff7169]"> in sync.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100/80 sm:text-lg sm:leading-8" style={{ color: '#dbeafe' }}>
              Bring academics, administration, communication, and finance together with one easy-to-use school ERP.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/live-demo"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4473e] px-6 text-sm font-bold text-white shadow-lg shadow-[#f4473e]/20 transition hover:-translate-y-0.5 hover:bg-[#ff5b52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101f3a]"
              >
                Book a free demo <ArrowIcon />
              </Link>
              <Link
                href="#core-modules"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-6 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore the modules
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-blue-100/75">
              <span className="inline-flex items-center gap-2">
                <span className="text-[#ff8279]">✓</span> One connected platform
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="text-[#ff8279]">✓</span> Built for your whole school
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div aria-hidden="true" className="absolute inset-8 rounded-full bg-[#f4473e]/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-6">
              <div className="mb-4 flex items-center justify-between px-1">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-blue-100/60">Schoolynx ERP</p>
                  <p className="mt-1 text-sm font-semibold text-white">Everything in one place</p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4473e] text-sm font-bold text-white">S</span>
              </div>
              <Image
                src="/assets/feature-product/2.png"
                alt="School ERP connecting academics, administration, communication, and finance"
                width={500}
                height={500}
                priority
                className="h-auto w-full rounded-2xl bg-[#f1effb] object-contain"
              />
              <div className="mt-4 grid grid-cols-3 gap-2">
                {['Academics', 'People', 'Insights'].map((label, index) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 text-center">
                    <span className={`mx-auto mb-2 block h-1.5 w-7 rounded-full ${index === 1 ? 'bg-[#ff7169]' : 'bg-blue-300/70'}`} />
                    <span className="text-[11px] font-medium text-blue-100/80 sm:text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:px-8 md:grid-cols-3 md:py-14">
          {[
            { number: '21', label: 'connected core modules' },
            { number: '1', label: 'place for your school operations' },
            { number: 'All', label: 'your school community in sync' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white px-5 py-5 shadow-sm shadow-slate-900/[0.02]">
              <span className="text-3xl font-bold tracking-tight text-[#f4473e]">{item.number}</span>
              <span className="max-w-[12rem] text-sm font-medium leading-5 text-[#172d50]">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="core-modules" className="relative isolate scroll-mt-24 overflow-hidden bg-[#f4f7fc] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-blue-200/35 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1a2d52]/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1a2d52] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f4473e]" />
              A closer look
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#172d50] sm:text-4xl lg:text-5xl">
              Every school day, <span className="text-[#f4473e]">beautifully organised.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              The tools your team needs—from admissions and attendance to finance and reporting—all work together in one place.
            </p>
          </div>

          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-[#172d50]">Core school management</p>
              <p className="mt-1 text-xs text-slate-500">One connected toolkit for your entire school</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-bold text-[#172d50] shadow-sm sm:px-4 sm:text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff0ef] text-[11px] text-[#c7342e]">21</span>
              modules
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map(({ name, Icon }, index) => {
              const iconStyles = [
                'bg-blue-50 text-blue-700 ring-blue-100 group-hover:bg-blue-100',
                'bg-rose-50 text-rose-600 ring-rose-100 group-hover:bg-rose-100',
                'bg-violet-50 text-violet-700 ring-violet-100 group-hover:bg-violet-100',
                'bg-emerald-50 text-emerald-700 ring-emerald-100 group-hover:bg-emerald-100',
                'bg-amber-50 text-amber-700 ring-amber-100 group-hover:bg-amber-100',
                'bg-cyan-50 text-cyan-700 ring-cyan-100 group-hover:bg-cyan-100',
              ];

              return (
                <article
                  key={name}
                  className="group relative flex min-h-[5.5rem] items-center gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-[0_8px_24px_-20px_rgba(23,45,80,0.3)] transition duration-200 hover:-translate-y-0.5 hover:border-[#f4473e]/25 hover:shadow-[0_18px_34px_-20px_rgba(23,45,80,0.2)] sm:px-5"
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] ring-1 ring-inset transition-colors ${iconStyles[index % iconStyles.length]}`}>
                    <Icon aria-hidden="true" className="h-[1.35rem] w-[1.35rem]" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold leading-5 text-[#253653]">{name}</span>
                    <span className="mt-1 block text-xs text-slate-500">Schoolynx core module</span>
                  </span>
                  <span className="text-[11px] font-semibold tabular-nums text-slate-300 transition-colors group-hover:text-[#f4473e]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#172d50]/[0.06] bg-white/70 px-5 py-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm leading-6 text-slate-600">
              Need more than the essentials? Explore additional tools for your growing school.
            </p>
            <Link
              href="/pricing"
              className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full bg-[#172d50] px-5 text-sm font-semibold text-white transition hover:bg-[#243e68] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-2"
            >
              Explore all plans <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#f3f6fb] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-24 -z-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f4473e]/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#c7342e] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f4473e]" />
              Room to grow
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#172d50] sm:text-4xl lg:text-[2.75rem]">
              Find the right fit for your school.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Start with what you need today. Add more possibilities as your school grows.
            </p>
          </div>

          <div className="grid items-stretch gap-5 md:grid-cols-3 md:gap-4 lg:gap-6">
            {plans.map((plan, index) => {
              const isPopular = index === 1;
              const accentColor = plan.accent === 'red'
                ? 'bg-[#f4473e]'
                : plan.accent === 'blue'
                  ? 'bg-[#3565a5]'
                  : 'bg-[#172d50]';
              const accentText = plan.accent === 'red'
                ? 'text-[#d83d35]'
                : plan.accent === 'blue'
                  ? 'text-[#3565a5]'
                  : 'text-[#172d50]';

              return (
                <article
                  key={plan.name}
                  className={`group relative flex flex-col overflow-hidden rounded-[1.6rem] border bg-white transition duration-300 hover:-translate-y-1 ${
                    isPopular
                      ? 'border-[#f4473e]/40 shadow-[0_24px_70px_-28px_rgba(244,71,62,0.28)] md:z-10 md:scale-[1.035]'
                      : 'border-slate-200/80 shadow-[0_18px_50px_-34px_rgba(23,45,80,0.28)] hover:shadow-[0_24px_60px_-34px_rgba(23,45,80,0.3)]'
                  }`}
                >
                  <div className={`h-1.5 w-full ${accentColor}`} />
                  <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-[0.16em] ${accentText}`}>
                          {plan.category}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#172d50]">
                          {plan.name}
                        </h3>
                      </div>
                      {isPopular ? (
                        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#fff0ef] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#c7342e] sm:text-[11px]">
                          <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="m10 1.7 2.1 5 5.4.5-4.1 3.6 1.2 5.3-4.6-2.8-4.6 2.8 1.2-5.3-4.1-3.6 5.4-.5L10 1.7Z" />
                          </svg>
                          Popular
                        </span>
                      ) : (
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${plan.accent === 'blue' ? 'bg-blue-50 text-[#3565a5]' : 'bg-slate-100 text-[#172d50]'}`}>
                          <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                          </svg>
                        </span>
                      )}
                    </div>

                    <div className="mt-7 flex items-end gap-2 border-b border-slate-100 pb-6">
                      <span className={`text-5xl font-bold leading-none tracking-[-0.05em] ${accentText}`}>
                        {plan.count}
                      </span>
                      <span className="pb-1 text-sm font-medium text-slate-500">
                        {plan.category.toLowerCase()}
                      </span>
                    </div>

                    <p className="mt-5 min-h-12 text-sm leading-6 text-slate-600">{plan.note}</p>

                    <ul className="mt-5 space-y-3">
                      {plan.includes.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                          <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isPopular ? 'bg-[#fff0ef] text-[#e3443b]' : 'bg-[#edf7f2] text-[#16865a]'}`}>
                            <svg aria-hidden="true" className="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m3 8 3.2 3.2L13 4.5" />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/pricing"
                      className={`mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-2 ${
                        isPopular
                          ? 'bg-[#f4473e] text-white shadow-lg shadow-[#f4473e]/20 hover:bg-[#d93630]'
                          : 'border border-slate-200 bg-white text-[#172d50] hover:border-[#172d50]/30 hover:bg-slate-50'
                      }`}
                    >
                      Explore {plan.name} <ArrowIcon />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mt-7 text-center text-sm text-slate-500">
            Need help choosing?{' '}
            <Link href="/contact" className="font-semibold text-[#c7342e] underline decoration-[#f4473e]/30 underline-offset-4 hover:decoration-[#f4473e]">
              Talk to our team
            </Link>
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <article className="relative isolate overflow-hidden rounded-3xl bg-[#172d50] p-7 text-white sm:p-9">
            <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-16 -z-10 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">For partners</span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">Grow with Schoolynx.</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-blue-100/80">
              Bring Schoolynx to your market and explore our partner program.
            </p>
            <Link
              href="/partner"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Become a partner <ArrowIcon />
            </Link>
          </article>

          <article className="relative isolate overflow-hidden rounded-3xl bg-[#fff1ef] p-7 sm:p-9">
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -right-8 -z-10 h-52 w-52 rounded-full bg-[#f4473e]/10 blur-3xl" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#c7342e]">For your school</span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#172d50]">See Schoolynx in action.</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
              Get a guided look at the tools that can make your school day run more smoothly.
            </p>
            <Link
              href="/live-demo"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#f4473e] px-5 text-sm font-semibold text-white transition hover:bg-[#d93630] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172d50] focus-visible:ring-offset-2"
            >
              Book a free demo <ArrowIcon />
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
