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
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[580px] w-[95%] max-w-[1760px] grid-cols-1 items-center gap-7 py-10 sm:py-14 lg:min-h-[700px] lg:grid-cols-[0.84fr_1.16fr] lg:gap-8 lg:pt-0 lg:pb-24">
        <div className="w-full text-center lg:text-left">
          <span className="mb-3 inline-flex rounded-xl bg-[#f4473e] px-3 py-2 text-sm font-semibold text-white sm:text-base lg:mb-4">
            All-in-One
          </span>
          <h1 className="mx-auto mb-4 max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-[#1a2d52] sm:text-5xl md:mb-6 lg:mx-0 lg:text-[3.5rem]">
            College and School Management Software
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-base leading-7 text-[#1a2d52] sm:text-lg sm:leading-8 md:mb-8 lg:mx-0">
            <strong className="font-bold">
              Automate school operations, access insightful reports, and make faster decisions.
            </strong>{" "}
            Schoolynx brings your academic and administrative workflows together in one easy-to-use platform.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
            <Link
              href="/live-demo"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-lg border-2 border-[#f4473e] bg-transparent px-6 text-center text-lg font-semibold text-[#f4473e] transition-colors hover:bg-[#f4473e] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172d50] focus-visible:ring-offset-2 sm:w-auto"
            >
              Request Live Demo
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-[#f4473e] px-6 text-center text-lg font-semibold text-white transition-colors hover:bg-[#d93630] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172d50] focus-visible:ring-offset-2 sm:w-auto"
            >
              Pricing &amp; Plans
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[680px] lg:w-[112%] lg:max-w-[1050px]">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
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
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  priority={index === 0}
                  className="object-contain"
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
