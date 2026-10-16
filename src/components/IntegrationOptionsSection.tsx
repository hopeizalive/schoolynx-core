import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CreditCardIcon,
  FingerPrintIcon,
  MapPinIcon,
  UserCircleIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';

const integrations = [
  { label: 'Biometric', icon: FingerPrintIcon },
  { label: 'Location', icon: MapPinIcon },
  { label: 'Payment Gateway', icon: CreditCardIcon },
  { label: 'Online Classes', icon: VideoCameraIcon },
];

export default function IntegrationOptionsSection() {
  return (
    <>
      <section className="relative isolate w-full overflow-hidden border-t-4 border-[#f4473e] bg-white py-12 sm:py-14 lg:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[url('/assets/dotted_bg.png')] bg-cover bg-center opacity-[0.12]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white/65 via-white/90 to-white/65"
        />
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-9 max-w-6xl text-center sm:mb-10">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#1a2d52] sm:text-4xl lg:text-[2.65rem]">
              Integrations that make school management work better
            </h2>
            <p className="mx-auto mt-4 max-w-6xl text-base leading-7 text-[#1a2d52] sm:text-lg sm:leading-8">
              Schoolynx brings together the tools your institution needs, with up to 20 integrations that enhance your school management experience.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {integrations.map(({ label, icon: Icon }) => (
              <article
                key={label}
                className="group flex min-h-[84px] items-center justify-center gap-4 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-white/65 sm:min-h-24 lg:justify-start lg:gap-5"
              >
                <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center text-[#1a2d52] transition-colors duration-200 group-hover:text-[#f4473e] sm:h-[72px] sm:w-[72px]">
                  <Icon aria-hidden="true" className="h-14 w-14" strokeWidth={1.35} />
                </span>
                <span className="text-lg font-semibold leading-snug text-[#1a2d52] sm:text-xl">
                  {label}
                </span>
              </article>
            ))}
          </div>

          <div className="mt-7 flex justify-center sm:mt-8">
            <Link
              href="/product/feature-tour"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#f4473e] px-7 py-3 text-base font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#e43c34] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-2 sm:text-lg"
            >
              See All Integration
            </Link>
          </div>
        </div>
      </section>

    {/* ------------------------------------NEW FEATURE SECTION---------------------------- */}     
    
    <section className="py-12 bg-[#1a2d52] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
       <h2 className="text-xl md:text-2xl text-center text-[white]"><strong>Introducing Schoolynx 4.0</strong> – 4 New Features | 6 Upgrades</h2>

        <button className="mt-8 md:mt-0 px-10 py-4 bg-[#f4473e] text-white font-semibold rounded-md shadow-lg hover:bg-red-700 transition duration-300 text-lg">
          Find Out More
        </button>
      </div>
    </section>

    {/* ---------------------- TESTIMONIAL CAROUSEL SECTION ---------------------- */}
    <section className="relative isolate w-full overflow-hidden bg-[#f5f7fb] py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 z-0 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 z-0 h-96 w-96 rounded-full bg-red-100/60 blur-3xl"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 text-center sm:mb-14">
          <span className="mb-4 inline-flex rounded-full border border-[#f4473e]/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f4473e] shadow-sm sm:text-sm">
            Trusted by school communities
          </span>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#1a2a49] sm:text-4xl lg:text-5xl">
            Why institutions prefer
            <span className="mt-1 block text-[#f4473e]">the Schoolynx ERP</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Hear from the schools using Schoolynx to make everyday work simpler.
          </p>
        </div>
        <TestimonialCarousel />
      </div>
    </section>
        </>
  );
}

// Carousel Component
const testimonials = [
  {
    quote: 'Schoolynx is a complete school management solution. It includes everything you need. It handles attendance, report cards, fee tracking, and even HR tasks.',
    school: '— Right Way School System.',
  },
  {
    quote: 'Schoolynx streamlined all our operations and enhanced interaction with both parents and staff members.',
    school: '— The Academy School System.',
  },
  {
    quote: 'The technical staff is fantastic, and the software is very simple to operate for all members.',
    school: '— Unique School System',
  },
];

function TestimonialCarousel() {
  const [current, setCurrent] = React.useState(0);
  const total = testimonials.length;

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const t = testimonials[current];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
      <div className="flex w-full items-center justify-center gap-3 sm:gap-5 lg:gap-8">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1a2a49] shadow-sm transition hover:border-[#f4473e] hover:bg-[#f4473e] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] sm:flex"
        >
          <ChevronLeftIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      <AnimatePresence mode="wait">
        <motion.article
          key={current}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          aria-live="polite"
          className="relative flex min-h-[360px] w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-3xl border border-white bg-white px-6 pb-8 pt-10 text-center shadow-[0_24px_70px_-34px_rgba(26,42,73,0.3)] sm:min-h-[400px] sm:px-12 sm:pb-10 sm:pt-12 lg:px-16"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#f4473e] via-[#ff928b] to-[#f4473e]"
          />
          <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1ef] text-[#f4473e] sm:mb-6 sm:h-16 sm:w-16">
            <UserCircleIcon aria-hidden="true" className="h-10 w-10 sm:h-11 sm:w-11" />
          </span>
          <span
            aria-hidden="true"
            className="mb-3 font-serif text-5xl font-bold leading-none text-[#f4473e]/80"
          >
            “
          </span>
          <p className="max-w-2xl text-lg font-medium leading-8 text-[#1a2a49] sm:text-xl sm:leading-9">
            {t.quote}
          </p>
          <p className="mt-7 text-base font-bold text-[#f4473e] sm:mt-8 sm:text-lg">
            {t.school}
          </p>
        </motion.article>
        </AnimatePresence>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1a2a49] shadow-sm transition hover:border-[#f4473e] hover:bg-[#f4473e] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] sm:flex"
        >
          <ChevronRightIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div className="mt-7 flex items-center gap-2.5 sm:mt-9">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1a2a49] shadow-sm transition hover:border-[#f4473e] hover:text-[#f4473e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] sm:hidden"
        >
          <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
        </button>
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            type="button"
            aria-label={`Go to testimonial ${idx + 1}`}
            aria-pressed={idx === current}
            className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-2 ${
              idx === current
                ? 'w-8 bg-[#f4473e]'
                : 'w-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1a2a49] shadow-sm transition hover:border-[#f4473e] hover:text-[#f4473e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] sm:hidden"
        >
          <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
} 