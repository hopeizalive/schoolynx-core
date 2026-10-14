import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const CheckMark = () => (
  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white" aria-hidden="true">
    ✓
  </span>
);

const faqs = [
  {
    question: 'How Do Schools Gain from E-Learning Modules in School ERP?',
    answer: (
      <>
        <span>Key Benefits of Incorporating an <span className="text-[#f4473e] font-medium">E-learning</span> Module in School Management System Are –</span>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-3"><CheckMark /><span className="min-w-0 flex-1">Institutes can <strong className="font-semibold text-slate-700">enhance the learning experience for students</strong> beyond traditional classroom settings.</span></li>
          <li className="flex items-start gap-3"><CheckMark /><span className="min-w-0 flex-1">Teachers can <strong className="font-semibold text-slate-700">design interactive, personalized courses</strong> and address student queries instantly.</span></li>
          <li className="flex items-start gap-3"><CheckMark /><span className="min-w-0 flex-1">Students can <strong className="font-semibold text-slate-700">access study resources offline</strong> and view recorded sessions comfortably from home.</span></li>
        </ul>
        <div className="mt-6 text-base">
          Explore the online learning module in School ERP – <span className="text-[#f4473e] font-medium">Schoolynx Learn today.</span>
        </div>
      </>
    ),
  },
  {
    question: 'Is Schoolynx School ERP secure for student data? ',
    answer: (
      <>
        <span>Yes, Schoolynx employs <span className="font-semibold text-slate-700">advanced encryption protocols</span> and <span className="font-semibold text-[#f4473e]">role-based access</span> controls to ensure student and staff data remains secure and confidential.</span>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-3"><CheckMark /><span className="min-w-0 flex-1">All data is hosted on <strong className="font-semibold text-slate-700">highly secure cloud infrastructure</strong>.</span></li>
          <li className="flex items-start gap-3"><CheckMark /><span className="min-w-0 flex-1">Access is <strong className="font-semibold text-[#f4473e]">tightly managed</strong> through defined user roles and permissions.</span></li>
        </ul>
      </>
    ),
  },
  {
    question: "Can parents track their child's progress using Schoolynx?",
    answer: (
      <>
        <span>Absolutely! Parents can <span className="font-semibold text-[#f4473e]">access the</span> dedicated portal and:</span>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-3"><CheckMark /><span className="min-w-0 flex-1">Monitor <strong className="font-semibold text-slate-700">attendance, academic performance, and coursework</strong> in real time.</span></li>
          <li className="flex items-start gap-3"><CheckMark /><span className="min-w-0 flex-1">Get <strong className="font-semibold text-[#f4473e]">immediate alerts</strong> about key updates and upcoming events.</span></li>
        </ul>
      </>
    ),
  },
  {
    question: 'Can parents pay school fees online through Schoolynx?',
    answer: (
      <>
        <span>Yes, Schoolynx Provides <span className="font-semibold text-[#f4473e]">integrated payment gateways</span> for reliable and seamless online fee collection.</span>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-3"><CheckMark /><span className="min-w-0 flex-1">Parents can make payments <strong className="font-semibold text-[#f4473e]">anytime, anywhere</strong>.</span></li>
          <li className="flex items-start gap-3"><CheckMark /><span className="min-w-0 flex-1">All transactions are <strong className="font-semibold text-slate-700">encrypted and recorded</strong> within the system.</span></li>
        </ul>
      </>
    ),
  },
  {
    question: 'Is Schoolynx customizable for different schools?',
    answer: (
      <>
        <span>Yes, Schoolynx is <span className="font-semibold text-[#f4473e]">fully adaptable</span> to meet the specific requirements of any school.</span>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-3"><CheckMark /><span className="min-w-0 flex-1">Modules and features can be <strong className="font-semibold text-[#f4473e]">activated or deactivated</strong> as needed.</span></li>
          <li className="flex items-start gap-3"><CheckMark /><span className="min-w-0 flex-1">Branding and reports can be <strong className="font-semibold text-slate-700">personalized</strong> to reflect your institution.</span></li>
        </ul>
      </>
    ),
  },
];

export default function FAQCarouselSection() {
  const [current, setCurrent] = React.useState(0);

  const goTo = (idx: number) => setCurrent((idx + faqs.length) % faqs.length);
  const previous = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  return (
    <section className="relative isolate w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 z-0 h-96 w-96 rounded-full bg-blue-100/55 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 z-0 h-96 w-96 rounded-full bg-red-100/45 blur-3xl"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <span className="mb-4 inline-flex rounded-full border border-[#f4473e]/15 bg-[#fff8f7] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f4473e] sm:text-sm">
            Need to know
          </span>
          <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-700 sm:text-4xl lg:text-5xl">
            Answers to your school ERP
            <span className="mt-1 block text-[#f4473e]">questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Learn more about the tools that help your school community thrive.
          </p>
        </div>

        <div className="mx-auto w-full max-w-5xl">
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous FAQ"
              className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1a2a49] shadow-sm transition hover:border-[#f4473e] hover:bg-[#f4473e] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] sm:flex"
            >
              <ChevronLeftIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-[#f8f9fb] p-5 shadow-[0_24px_70px_-38px_rgba(26,42,73,0.22)] sm:p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.article
                  key={current}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  aria-live="polite"
                  className="flex flex-col justify-center"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#f4473e] shadow-sm">
                      {String(current + 1).padStart(2, '0')}
                    </span>
                    <h3 className="min-w-0 flex-1 text-base font-bold leading-snug text-slate-700 sm:text-xl">
                      {faqs[current].question}
                    </h3>
                  </div>
                  <div className="min-w-0 break-words text-sm leading-6 text-slate-600 sm:pl-[52px] sm:text-base sm:leading-8">
                    {faqs[current].answer}
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next FAQ"
              className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1a2a49] shadow-sm transition hover:border-[#f4473e] hover:bg-[#f4473e] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] sm:flex"
            >
              <ChevronRightIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-3 pr-1 text-right text-xs font-semibold tracking-wider text-slate-400">
            {String(current + 1).padStart(2, '0')} / {String(faqs.length).padStart(2, '0')}
          </div>
          <div className="mt-7 flex items-center justify-center gap-2.5 sm:mt-9">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous FAQ"
              className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1a2a49] shadow-sm sm:hidden"
            >
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>
            {faqs.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={`Go to FAQ ${idx + 1}`}
              aria-pressed={idx === current}
              className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-2 ${
                idx === current ? 'w-8 bg-[#f4473e]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
            <button
              type="button"
              onClick={next}
              aria-label="Next FAQ"
              className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1a2a49] shadow-sm sm:hidden"
            >
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 