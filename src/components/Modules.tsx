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
  <section className="relative isolate w-full overflow-hidden bg-[#f5f7fb] py-16 text-[#1a2d52] sm:py-20 lg:py-24">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 -top-44 z-0 h-[420px] w-[420px] rounded-full bg-blue-200/35 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-52 -left-40 z-0 h-[420px] w-[420px] rounded-full bg-red-100/50 blur-3xl"
    />

    <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1a2d52]/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1a2d52] shadow-sm sm:text-sm">
          <AcademicCapIcon aria-hidden="true" className="h-4 w-4 text-[#f4473e]" />
          One platform. Every school need.
        </span>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#1a2d52] sm:text-4xl lg:text-5xl">
          <span className="text-[#f4473e]">Comprehensive</span> ERP Solution
          <br className="hidden sm:block" /> for Schools
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Bring academics, administration, finance, and family communication
          together in one simple school management system.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {modules.map((module) => (
          <article
            key={module.title}
            className="group flex min-h-[260px] flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_-18px_rgba(26,45,82,0.28)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_-22px_rgba(26,45,82,0.32)] sm:p-7"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1ef] text-[#f4473e] transition-colors duration-300 group-hover:bg-[#f4473e] group-hover:text-white">
                {module.icon}
              </span>
              <span className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500">
                {module.category}
              </span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-[#1a2d52]">
              {module.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 sm:text-[15px]">
              {module.desc}
            </p>
            <Link
              href="/product/feature-tour"
              className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#1a2d52] transition-colors hover:text-[#f4473e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-4"
            >
              Explore feature
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#1a2d52] px-6 py-7 text-center text-white shadow-lg sm:mt-14 sm:flex-row sm:px-9 sm:py-8 sm:text-left">
        <div>
          <p className="text-2xl font-bold sm:text-3xl">
            <span className="text-[#ff8279]">30+</span> powerful modules
          </p>
          <p className="mt-1 text-sm text-white/75 sm:text-base">
            Everything your school needs, working together.
          </p>
        </div>
        <Link
          href="/product/feature-tour"
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#f4473e] px-6 py-3 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#e43c34] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d52] sm:text-base"
        >
          Explore all features
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default Modules;
