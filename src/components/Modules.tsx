import {
  AcademicCapIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const modules = [
  {
    icon: <ClipboardDocumentListIcon aria-hidden="true" className="h-7 w-7" />,
    title: "Student Admission",
    desc: "Track admission inquiries, manage applications online, customize forms, and validate documents digitally.",
    category: "Admissions",
  },
  {
    icon: <BanknotesIcon aria-hidden="true" className="h-7 w-7" />,
    title: "Fees Management",
    desc: "Automate fee collection, apply taxes and discounts, manage late fees, and keep outstanding payments in view.",
    category: "Finance",
  },
  {
    icon: <CalendarDaysIcon aria-hidden="true" className="h-7 w-7" />,
    title: "Timetable & Attendance",
    desc: "Record attendance, build accurate timetables, assign classrooms, and coordinate subjects and teachers.",
    category: "Academics",
  },
  {
    icon: <UserGroupIcon aria-hidden="true" className="h-7 w-7" />,
    title: "Parent Collaboration",
    desc: "Keep families connected with teachers, student progress, school events, and timely announcements.",
    category: "Communication",
  },
  {
    icon: <VideoCameraIcon aria-hidden="true" className="h-7 w-7" />,
    title: "Online Classes",
    desc: "Connect with Google Meet, Zoom, and BigBlueButton to support engaging virtual teaching and learning.",
    category: "Learning",
  },
  {
    icon: <ClipboardDocumentCheckIcon aria-hidden="true" className="h-7 w-7" />,
    title: "Exams & Gradebook",
    desc: "Organize examinations and assessments, automate grading, and create clear digital report cards.",
    category: "Academics",
  },
];

const Modules = () => (
  <section className="relative isolate w-full overflow-hidden bg-[#f5f7fb] py-16 text-[#172d50] sm:py-20 lg:py-24">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-36 -top-40 z-0 h-[440px] w-[440px] rounded-full bg-sky-200/50 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-56 -left-40 z-0 h-[420px] w-[420px] rounded-full bg-rose-100/70 blur-3xl"
    />

    <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#172d50]/10 bg-white/80 px-4 py-2 text-xs font-bold tracking-wide text-[#36506f] shadow-sm sm:text-sm">
          <AcademicCapIcon aria-hidden="true" className="h-4 w-4 text-[#f4473e]" />
          THE SCHOOLYNX PLATFORM
        </span>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#172d50] sm:text-4xl lg:text-5xl">
          Everything your school needs,
          <span className="mt-1 block text-[#f4473e]">all in one place.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          Explore connected tools that make everyday school operations simpler, smarter, and more organized.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {modules.map((module) => (
          <article
            key={module.title}
            className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_24px_-18px_rgba(23,45,80,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#f4473e]/30 hover:shadow-[0_20px_45px_-24px_rgba(23,45,80,0.28)] sm:min-h-[232px] sm:p-7"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ef] text-[#f4473e] ring-1 ring-[#f4473e]/10 transition duration-300 group-hover:bg-[#f4473e] group-hover:text-white">
                {module.icon}
              </span>
              <span className="rounded-full bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 ring-1 ring-slate-200/80">
                {module.category}
              </span>
            </div>
            <h3 className="text-lg font-bold tracking-tight text-[#172d50]">
              {module.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
              {module.desc}
            </p>
            <Link
              href="/product/feature-tour"
              className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#e3443b] transition-colors hover:text-[#b92f29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-2"
            >
              Learn more
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-[#dce4ef] bg-white/80 p-5 shadow-sm backdrop-blur-sm sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-extrabold leading-none tracking-tight text-[#f4473e] sm:text-4xl">30+</span>
          <p className="max-w-xs text-sm leading-5 text-slate-600 sm:text-base">
            more powerful modules to help your school thrive
          </p>
        </div>
        <Link
          href="/product/feature-tour"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#172d50] px-5 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#24436f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-2"
        >
          See all features
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default Modules;
