"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  "Branded iOS and Android apps",
  "Stay connected with parents, teachers, and students",
  "Seamlessly synced with your school ERP",
];

const heading = "Your school, always within reach. Meet the Schoolynx mobile app.";

const MobileAppSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setVisibleCharacters(heading.length);
      return;
    }

    const timer = window.setInterval(() => {
      setVisibleCharacters((current) => {
        if (current >= heading.length) {
          window.clearInterval(timer);
          return current;
        }

        return current + 1;
      });
    }, 36);

    return () => window.clearInterval(timer);
  }, [isInView, prefersReducedMotion]);

  const firstLine = "Your school, always within reach.";
  const typedFirstLine = heading.slice(0, Math.min(visibleCharacters, firstLine.length));
  const typedSecondLine = heading.slice(firstLine.length + 1, visibleCharacters);

  return (
  <section
    ref={sectionRef}
    className="relative isolate w-full overflow-hidden bg-[#050824] py-16 text-white sm:py-20 lg:py-24"
  >
    <div aria-hidden="true" className="mobile-app-wave absolute inset-0 z-0" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 top-[-15rem] z-0 h-[520px] w-[520px] rounded-full bg-[#f4473e]/15 blur-3xl"
    />
    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-10">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, x: -72 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto flex min-h-[320px] w-full max-w-[570px] items-center justify-center sm:min-h-[440px] lg:min-h-[560px]"
      >
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[72%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4473e]/15 blur-2xl"
        />
        <Image
          src="/assets/mobile_app.png"
          alt="Schoolynx school dashboard and attendance register displayed on two mobile phones"
          width={2048}
          height={1365}
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="relative h-auto max-h-[560px] w-full object-contain drop-shadow-[0_28px_35px_rgba(65,15,15,0.2)]"
          priority={false}
        />
        <div className="absolute right-0 top-[18%] hidden items-center gap-2 rounded-xl border border-white/70 bg-white/95 px-4 py-3 text-sm font-semibold text-[#1a2d52] shadow-xl shadow-black/20 lg:flex">
          <SignalIcon aria-hidden="true" className="h-5 w-5 text-emerald-600" />
          Always in sync
        </div>
        <div className="absolute bottom-[12%] left-0 hidden rounded-xl border border-white/70 bg-white/95 px-4 py-3 shadow-xl shadow-black/20 lg:block">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
            One connected community
          </p>
          <p className="mt-1 text-sm font-bold text-[#1a2d52]">
            Parents · Teachers · Students
          </p>
        </div>
      </motion.div>

      <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white sm:text-sm">
          Schoolynx on the go
        </span>
        <h2
          aria-label={heading}
          className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          <span aria-hidden="true">
            {typedFirstLine}
            {visibleCharacters <= firstLine.length && visibleCharacters < heading.length && (
              <span className="mobile-heading-caret" />
            )}
            <span className="mt-1 block text-[0.8em] text-white/75">
              {typedSecondLine}
              {visibleCharacters > firstLine.length && visibleCharacters < heading.length && (
                <span className="mobile-heading-caret" />
              )}
            </span>
          </span>
        </h2>
        <p className="mt-5 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
          Effortlessly handle daily institutional tasks from your fingertips.
          Give your school community a dedicated app connected directly to
          your ERP.
        </p>

        <ul className="mt-7 space-y-3 text-left">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-3 text-sm leading-6 text-white/95 sm:text-base"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-white"
              />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/product/feature-tour"
          className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-base font-bold text-[#e83d35] shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#fff4f3] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050824] sm:px-8 sm:text-lg"
        >
          Explore app features
          <ArrowRightIcon aria-hidden="true" className="h-5 w-5" />
        </Link>
        <p className="mt-4 text-sm text-white/75">
          For parents, teachers, and students
        </p>
      </div>
    </div>
  </section>
  );
};

export default MobileAppSection;
