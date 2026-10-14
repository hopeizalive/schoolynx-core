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
  <section className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#172d50] via-[#17466b] to-[#102947] py-14 text-white sm:py-16 lg:py-20">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 -top-48 z-0 h-[440px] w-[440px] rounded-full bg-cyan-300/10 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-60 -left-40 z-0 h-[440px] w-[440px] rounded-full bg-[#f4473e]/15 blur-3xl"
    />

    <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <div className="flex flex-col justify-center pb-3 sm:col-span-2 sm:pb-5 lg:col-span-2 lg:pb-0">
          <span className="mb-3 inline-flex w-fit items-center gap-2 text-xs font-semibold text-blue-100 sm:text-sm">
            <AcademicCapIcon aria-hidden="true" className="h-4 w-4 text-[#ff8279]" />
            Single ERP platform for all your education needs
          </span>
          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.65rem]">
            <span className="text-[#ff8279]">Modules</span> to Automate School Management
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-blue-100/75 sm:text-base sm:leading-7">
            Powerful tools to make everyday school operations simpler, smarter, and more connected.
          </p>
        </div>

        {modules.map((module) => (
          <article
            key={module.title}
            className="group flex min-h-[226px] flex-col items-center rounded-2xl border border-white/60 bg-white px-5 py-5 text-center text-[#172d50] shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[238px] sm:px-5 sm:py-6"
          >
            <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff1ef] text-[#f4473e] transition-colors duration-300 group-hover:bg-[#f4473e] group-hover:text-white">
              {module.icon}
            </span>
            <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              {module.category}
            </span>
            <h3 className="text-sm font-bold tracking-tight text-[#172d50] sm:text-base">
              {module.title}
            </h3>
            <p className="mt-2 flex-1 text-xs leading-5 text-slate-600">
              {module.desc}
            </p>
            <Link
              href="/product/feature-tour"
              className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#e3443b] transition-colors hover:text-[#b92f29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-2"
            >
              Learn more
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 text-center sm:mt-10">
        <p className="text-3xl font-bold leading-none sm:text-4xl">
          <span className="text-[#ff8279]">30+</span>
        </p>
        <p className="text-xs font-medium text-blue-100/80 sm:text-sm">
          More powerful modules to help your school thrive
        </p>
        <Link
          href="/product/feature-tour"
          className="mt-1 inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#f4473e] px-5 text-xs font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#e43c34] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d52] sm:text-sm"
        >
          See all features
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default Modules;
