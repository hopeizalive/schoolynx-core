"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const images = [
  { id: 1, src: "/assets/home1.png", alt: "Schoolynx School Management Software Dashboard" },
  { id: 2, src: "/assets/home2.png", alt: "Schoolynx Attendance Tracking" },
  { id: 3, src: "/assets/home3.png", alt: "Schoolynx Mobile App View" },
  { id: 4, src: "/assets/home4.png", alt: "Schoolynx Student and Employee Management" },
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((previousImage) => (previousImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-bubble-motion relative isolate overflow-hidden">
      <div className="relative mx-auto grid w-[92%] max-w-[1480px] grid-cols-1 items-center gap-10 py-12 sm:py-14 lg:min-h-[600px] lg:grid-cols-[0.82fr_1.18fr] lg:gap-8 lg:py-12 xl:gap-10">
        <div className="relative z-10 mx-auto w-full max-w-[610px] text-center lg:mx-0 lg:text-left">
          <span className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#172d50]/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.17em] text-[#52627c] shadow-sm sm:text-sm">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#ff6b66] shadow-[0_0_14px_rgba(255,107,102,0.75)]" />
            All-in-One
          </span>

          <h1 className="mb-6 text-[2.25rem] font-bold leading-[1.08] tracking-[-0.04em] text-[#172d50] sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem]">
            College and School
            <span className="mt-2 block text-[#ff706b]">Management Software</span>
          </h1>

          <p className="mx-auto mb-9 max-w-[540px] text-base leading-7 text-[#53627a] sm:text-lg sm:leading-8 lg:mx-0">
            <strong className="font-semibold text-[#263956]">
              Automate school operations, access insightful reports, and make faster decisions.
            </strong>{" "}
            Schoolynx brings your academic and administrative workflows together in one easy-to-use platform.
          </p>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
            <Link
              href="/live-demo"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#f4473e] px-7 text-center text-base font-semibold text-white shadow-[0_14px_35px_rgba(244,71,62,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e83e36] hover:shadow-[0_18px_40px_rgba(244,71,62,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172d50] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-lg"
            >
              Request Live Demo
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1">
                <path d="M4.5 10h11m0 0-4.5-4.5M15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-14 items-center justify-center rounded-xl border border-[#172d50]/20 bg-white/70 px-7 text-center text-base font-semibold text-[#172d50] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#172d50]/35 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172d50] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-lg"
            >
              Pricing &amp; Plans
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[820px] lg:ml-auto lg:w-[112%]">
          <div className="relative aspect-[4/3] w-full">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  priority={index === 0}
                  className="scale-[1.18] object-contain drop-shadow-[0_24px_30px_rgba(23,45,80,0.14)]"
                  quality={40}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
