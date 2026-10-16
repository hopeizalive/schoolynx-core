"use client";

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import React, { Suspense, useEffect, useState, useCallback } from 'react';

// Dynamically import icons
const IconComponents = {
  BsCalendar4Event: dynamic(() => import('react-icons/bs').then(mod => mod.BsCalendar4Event), { ssr: false }),
  CgProfile: dynamic(() => import('react-icons/cg').then(mod => mod.CgProfile), { ssr: false }),
  CiLogin: dynamic(() => import('react-icons/ci').then(mod => mod.CiLogin), { ssr: false }),
  GrCertificate: dynamic(() => import('react-icons/gr').then(mod => mod.GrCertificate), { ssr: false }),
  GrMoney: dynamic(() => import('react-icons/gr').then(mod => mod.GrMoney), { ssr: false }),
  IoBookOutline: dynamic(() => import('react-icons/io5').then(mod => mod.IoBookOutline), { ssr: false }),
  LiaIdCardSolid: dynamic(() => import('react-icons/lia').then(mod => mod.LiaIdCardSolid), { ssr: false }),
  LuBookKey: dynamic(() => import('react-icons/lu').then(mod => mod.LuBookKey), { ssr: false }),
  LuLayoutDashboard: dynamic(() => import('react-icons/lu').then(mod => mod.LuLayoutDashboard), { ssr: false }),
  LuMessageSquareMore: dynamic(() => import('react-icons/lu').then(mod => mod.LuMessageSquareMore), { ssr: false }),
  MdAppRegistration: dynamic(() => import('react-icons/md').then(mod => mod.MdAppRegistration), { ssr: false }),
  MdOutlineLibraryBooks: dynamic(() => import('react-icons/md').then(mod => mod.MdOutlineLibraryBooks), { ssr: false }),
  MdOutlineManageAccounts: dynamic(() => import('react-icons/md').then(mod => mod.MdOutlineManageAccounts), { ssr: false }),
  MdOutlineTextsms: dynamic(() => import('react-icons/md').then(mod => mod.MdOutlineTextsms), { ssr: false }),
  PiExam: dynamic(() => import('react-icons/pi').then(mod => mod.PiExam), { ssr: false }),
  PiNewspaperClippingLight: dynamic(() => import('react-icons/pi').then(mod => mod.PiNewspaperClippingLight), { ssr: false }),
  PiStudent: dynamic(() => import('react-icons/pi').then(mod => mod.PiStudent), { ssr: false }),
  RiTimelineView: dynamic(() => import('react-icons/ri').then(mod => mod.RiTimelineView), { ssr: false }),
  TbReportAnalytics: dynamic(() => import('react-icons/tb').then(mod => mod.TbReportAnalytics), { ssr: false }),
} as const;

type IconName = keyof typeof IconComponents;

const instituteLogos = [
  '/assets/institute-logos/logo-01.png',
  '/assets/institute-logos/logo-02.png',
  '/assets/institute-logos/logo-03.png',
  '/assets/institute-logos/logo-04.png',
  '/assets/institute-logos/logo-05.png',
  '/assets/institute-logos/logo-06.png',
  '/assets/institute-logos/logo-07.png',
  '/assets/institute-logos/logo-08.png',
  '/assets/institute-logos/logo-09.png',
  '/assets/institute-logos/logo-10.png',
  '/assets/institute-logos/logo-11.png',
  '/assets/institute-logos/logo-12.png',
  '/assets/institute-logos/logo-13.png',
  '/assets/institute-logos/logo-14.png',
];

// Loading component for icons
const IconLoader = () => (
  <div className="h-6 w-6 animate-pulse rounded bg-red-100"></div>
);

// Module component with lazy loaded icon
const ModuleLink = ({ href, iconName, text }: { href: string; iconName: IconName; text: string }) => {
  const Icon = IconComponents[iconName];
  
  return (
    <Link
      href={href}
      className="group flex min-h-[76px] items-center gap-4 rounded-xl border border-slate-100 bg-white px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-100 hover:bg-red-50/40 hover:shadow-[0_8px_20px_rgba(23,45,80,0.06)]"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#f4473e] transition-colors duration-200 group-hover:bg-[#f4473e] group-hover:text-white">
        <Suspense fallback={<IconLoader />}>
          {Icon && <Icon size={24} aria-hidden="true" />}
        </Suspense>
      </span>
      <p className="text-sm font-medium leading-5 text-[#263956] transition-colors group-hover:text-[#e33e36] sm:text-base">{text}</p>
    </Link>
  );
};

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What is Schoolynx?",
    answer: (
      <>
        Schoolynx is a school management software. Learn more on{" "}
        <a
          href="https://Schoolynx.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 font-semibold"
        >
          our website
        </a>.
      </>
    ),
  },
  {
    question: "How is Schoolynx different from other school management software?",
    answer: "Schoolynx is a user-friendly and web-based school management system, that also provides customization and unlimited user license at an affordable price.",
  },
  {
    question: "What kind of software programs do I require to run Schoolynx?",
    answer: "To run Schoolynx, you don't require any software installation. It is an entirely web-based school management system that is designed to simplify your daily school operations.",
  },
  {
    question: "Can Schoolynx ERP software be customized for my Institute?",
    answer:(
      <>
        Yes, according to your institution&apos;s needs, Schoolynx can be customized. The basic version of Schoolynx is an open-source code and is available free of cost. We also provide the Enterprise version, for more insights follow the link:{" "}
        <a
          href="https://Schoolynx.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 font-semibold"
        >
         https://enterprise.Schoolynx.com
        </a>.
      </>
    ),
  },
  {
    question: "Does Schoolynx provide data backup facility?",
    answer: "Yes, Schoolynx provides data backup storage facility. Hassle-free customers can easily retrieve their data.",
  }
];

export default function PricingPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isAnnual, setIsAnnual] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Pricing data
  const pricing = {
    standard: {
      monthly: 99,
      yearly: 999,
    },
    premium: {
      monthly: 139,
      yearly: 1399,
    },
    ultimate: {
      monthly: 169,
      yearly: 1699,
    },
  };

  // Testimonial data with real images
  const testimonials = [
    {
      text: `This system is a great boon for us. Thank you, Team Schoolynx, for making us successful! In terms of administrative reforms, we were able to run in no time that in a brick-and-mortar way may have taken so many years. Schoolynx is a true disruption in the education world.`,
      name: 'Laksh Career Academy',
      img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=64&h=64&facepad=2',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_Logo.png',
    },
    {
      text: `Schoolynx is an all-in-one school management software. You have got everything in it. It manages attendance, grade book, fees collection, and even HR.`,
      name: 'Wellspring International School, Vietnam',
      img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=64&h=64&facepad=2',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg',
    },
    {
      text: `We have been able to automate all our school processes with Schoolynx. The support team is fantastic!`,
      name: 'Brighton School',
      img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=64&h=64&facepad=2',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    },
    {
      text: `Schoolynx has made our administrative work so much easier. Highly recommended for all educational institutes!`,
      name: 'NCA Academy',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=64&h=64&facepad=2',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
  ];

  const visibleTestimonials = [
    testimonials[testimonialIndex],
    testimonials[(testimonialIndex + 1) % testimonials.length],
  ];

  const handlePrev = () => {
    setTestimonialIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  const handleNext = useCallback(() => {
    setTestimonialIndex((prev) => (prev + 2) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <>
    <section className="relative overflow-hidden bg-[#f7f8fc] px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="mb-4 inline-flex items-center rounded-full border border-[#f4473e]/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#e33e36] shadow-sm">
            Simple, transparent pricing
          </span>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-[#172d50] sm:text-4xl lg:text-5xl">
            Affordable Plans for Smart Institutes
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            All plans include free cloud hosting with encrypted security.
          </p>

          <div className="mx-auto mt-7 inline-flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_8px_24px_rgba(23,45,80,0.08)] sm:gap-4 sm:px-5">
            <span className={`text-sm font-semibold sm:text-base ${!isAnnual ? 'text-[#172d50]' : 'text-slate-500'}`}>Monthly</span>
            <button
              className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors duration-300 ${isAnnual ? 'bg-[#f4473e]' : 'bg-slate-300'}`}
              onClick={() => setIsAnnual((prev) => !prev)}
              aria-label="Toggle pricing period"
              aria-pressed={isAnnual}
            >
              <span className="sr-only">Toggle pricing period</span>
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
            <span className={`text-sm font-semibold sm:text-base ${isAnnual ? 'text-[#172d50]' : 'text-slate-500'}`}>
              Annual <span className="ml-1 text-[#e33e36]">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Standard Plan */}
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(23,45,80,0.07)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(23,45,80,0.12)]">
            <div className="flex-1 p-5 sm:p-6">
              <h2 className="mb-5 text-center text-2xl font-bold tracking-wide text-[#674FE4]">STANDARD</h2>
              <div className="mb-6">
                <span className="flex justify-center text-3xl font-bold tracking-tight text-[#172d50]">$ {isAnnual ? pricing.standard.yearly : pricing.standard.monthly}</span>
                <p className="text-sm text-gray-700 flex justify-center pt-2">({isAnnual ? 'billed yearly' : 'billed monthly'})</p>
              </div>
              <Link href="/" className='mx-auto mb-6 flex w-fit cursor-pointer items-center justify-center rounded-xl border border-[#674FE4] px-5 py-2 text-base font-semibold text-[#674FE4] transition-colors hover:bg-[#674FE4]/5'>Buy Standard</Link>

              <div className='border-b-2 border-gray-200'></div>
             
              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">21 Core Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">17 Standard Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
            
                  <span className="text-gray-600 line-through">10 Premium Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                 
                  <span className="text-gray-600 line-through">12 Ultimate Modules</span>
                </li>
              </ul>

              <div className='border-b-2 border-gray-200'></div>

              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Unlimited Users</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">One to one Online training</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Automatic Updates</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Email & Phone support</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Onboarding data & configuration</span>
                </li>
                
              </ul>
            </div>
            <Link href="/contact" className='mx-auto mb-6 flex w-[85%] cursor-pointer items-center justify-center rounded-xl bg-[#674FE4] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#5842d0]'>Contact Us</Link>
          </div>

          {/* Premium Plan */}
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#ff8b00]/35 bg-white shadow-[0_16px_40px_rgba(255,139,0,0.1)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(255,139,0,0.16)]">
            <div className="flex-1 p-5 sm:p-6">
              <h2 className="mb-5 text-center text-2xl font-bold tracking-wide uppercase text-[#ff8b00]">Premium</h2>
              <div className="mb-6">
                <span className="flex justify-center text-3xl font-bold tracking-tight text-[#172d50]">$ {isAnnual ? pricing.premium.yearly : pricing.premium.monthly}</span>
                <p className="text-sm text-gray-700 flex justify-center pt-2">({isAnnual ? 'billed yearly' : 'billed monthly'})</p>
              </div>
              <Link href="/" className='mx-auto mb-6 flex w-fit cursor-pointer items-center justify-center rounded-xl border border-[#ff8b00] px-5 py-2 text-base font-semibold text-[#ff8b00] transition-colors hover:bg-[#ff8b00]/5'>Buy Standard</Link>

              <div className='border-b-2 border-gray-200'></div>
             
              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">21 Core Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">17 Standard Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">10 Premium Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                 
                  <span className="text-gray-600 line-through">12 Ultimate Modules</span>
                </li>
              </ul>

              <div className='border-b-2 border-gray-200'></div>

              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Unlimited Users</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">One to one Online training</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Automatic Updates</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Email & Phone support</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Onboarding data & configuration</span>
                </li>
                
              </ul>
            </div>
            <Link href="/contact" className='mx-auto mb-6 flex w-[85%] cursor-pointer items-center justify-center rounded-xl bg-[#ff8b00] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#e67d00]'>Contact Us</Link>
          </div>

          {/* Ultimate Plan */}
          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(23,45,80,0.07)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(23,45,80,0.12)]">
            <div className="flex-1 p-5 sm:p-6">
              <h2 className="mb-5 text-center text-2xl font-bold tracking-wide uppercase text-[#E84C3D]">Ultimate</h2>
              <div className="mb-6">
                <span className="flex justify-center text-3xl font-bold tracking-tight text-[#172d50]">$ {isAnnual ? pricing.ultimate.yearly : pricing.ultimate.monthly}</span>
                <p className="text-sm text-gray-700 flex justify-center pt-2">({isAnnual ? 'billed yearly' : 'billed monthly'})</p>
              </div>
              <Link href="/" className='mx-auto mb-6 flex w-fit cursor-pointer items-center justify-center rounded-xl border border-[#E84C3D] px-5 py-2 text-base font-semibold text-[#E84C3D] transition-colors hover:bg-[#E84C3D]/5'>Buy Ultimate</Link>

              <div className='border-b-2 border-gray-200'></div>
             
              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">21 Core Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">17 Standard Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">10 Premium Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">12 Ultimate Modules</span>
                </li>
              </ul>

              <div className='border-b-2 border-gray-200'></div>

              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Unlimited Users</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">One to one Online training</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Automatic Updates</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Email & Phone support</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Onboarding data & configuration</span>
                </li>
                
              </ul>
            </div>
            <Link href="/contact" className='mx-auto mb-6 flex w-[85%] cursor-pointer items-center justify-center rounded-xl bg-[#E84C3D] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#d43d31]'>Contact Us</Link>
          </div>

          <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(23,45,80,0.07)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(23,45,80,0.12)]">
            <div className="flex-1 p-5 sm:p-6">
              <h2 className="mb-5 text-center text-2xl font-bold tracking-wide uppercase text-[#08AD69]">Enterprise</h2>
              <div className="mb-6">
              <Link href="/contact" className='mx-auto mb-6 flex w-fit cursor-pointer items-center justify-center rounded-xl bg-[#08AD69] px-5 py-2 text-base font-semibold text-white transition-colors hover:bg-[#078f58]'>Contact Sales</Link>
              </div>
              <Link href="/" className='mx-auto mb-6 flex w-fit cursor-pointer items-center justify-center rounded-xl border border-[#08AD69] px-5 py-2 text-base font-semibold text-[#08AD69] transition-colors hover:bg-[#08AD69]/5'>Buy Enterprise</Link>

              <div className='border-b-2 border-gray-200'></div>
             
              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">21 Core Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">17 Standard Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">10 Premium Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">12 Ultimate Modules</span>
                </li>
              </ul>

              <div className='border-b-2 border-gray-200'></div>

              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Unlimited Users</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">One to one Online training</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Automatic Updates</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Email & Phone support</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Onboarding data & configuration</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Product source code</span>
                </li>
                
              </ul>
            </div>
            <Link href="/contact" className='mx-auto mb-6 flex w-[85%] cursor-pointer items-center justify-center rounded-xl bg-[#08AD69] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#078f58]'>Contact Us</Link>
          </div>

        </div>

        {/* Modules Section */}
        <section className="mx-auto mt-12 w-full rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_40px_rgba(23,45,80,0.06)] sm:p-8 lg:p-10">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#172d50] sm:text-3xl">
            Core Modules <span className="font-medium text-slate-400">(21)</span>
          </h2>
          <p className="mb-7 text-sm text-slate-500 sm:text-base">Explore the essential tools included in your school management platform.</p>
          
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

     <ModuleLink href={"#"} iconName="IoBookOutline" text="Courses and Batches" />
     <ModuleLink href={"#"} iconName="GrCertificate" text="Certificate Generator" />
     <ModuleLink href={"#"} iconName="PiStudent" text="Student Information" />
     <ModuleLink href={"#"} iconName="CgProfile" text="Human Resources" />
     <ModuleLink href={"#"} iconName="LuLayoutDashboard" text="Multiple Dashboards" />
     <ModuleLink href={"#"} iconName="LuBookKey" text="Employee / Teacher Login" />
     <ModuleLink href={"#"} iconName="MdAppRegistration" text="Student Attendance" />
     <ModuleLink href={"#"} iconName="PiStudent" text="Student Admission" />
     <ModuleLink href={"#"} iconName="CiLogin" text="Students / Parents Login" />
     <ModuleLink href={"#"} iconName="RiTimelineView" text="Timetable" />
     <ModuleLink href={"#"} iconName="PiNewspaperClippingLight" text="News Management" />
     <ModuleLink href={"#"} iconName="LuMessageSquareMore" text="Messaging System" />
     <ModuleLink href={"#"} iconName="MdOutlineLibraryBooks" text="Gradebook" />
     <ModuleLink href={"#"} iconName="PiExam" text="Examination" />
     <ModuleLink href={"#"} iconName="MdOutlineManageAccounts" text="User Management" />
     <ModuleLink href={"#"} iconName="MdOutlineTextsms" text="SMS Integration" />
     <ModuleLink href={"#"} iconName="BsCalendar4Event" text="School / Events Calendar" />
     <ModuleLink href={"#"} iconName="TbReportAnalytics" text="Report Center" />
     <ModuleLink href={"#"} iconName="LiaIdCardSolid" text="ID Card Generator" />
     <ModuleLink href={"#"} iconName="GrMoney" text="Finance" />
     <ModuleLink href={"#"} iconName="PiStudent" text="Custom Student Remarks" />
      </div>
    </section>

    <section className="mx-auto mt-8 w-full rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_40px_rgba(23,45,80,0.06)] sm:p-8 lg:p-10">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#172d50] sm:text-3xl">
          Standard Modules <span className="font-medium text-slate-400">(17)</span>
          </h2>
          <p className="mb-7 text-sm text-slate-500 sm:text-base">Everyday features that keep your school operations running smoothly.</p>
          
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

     <ModuleLink href={"#"} iconName="IoBookOutline" text="Courses and Batches" />
     <ModuleLink href={"#"} iconName="GrCertificate" text="Certificate Generator" />
     <ModuleLink href={"#"} iconName="PiStudent" text="Student Information" />
     <ModuleLink href={"#"} iconName="CgProfile" text="Human Resources" />
     <ModuleLink href={"#"} iconName="LuLayoutDashboard" text="Multiple Dashboards" />
     <ModuleLink href={"#"} iconName="LuBookKey" text="Employee / Teacher Login" />
     <ModuleLink href={"#"} iconName="MdAppRegistration" text="Student Attendance" />
     <ModuleLink href={"#"} iconName="PiStudent" text="Student Admission" />
     <ModuleLink href={"#"} iconName="CiLogin" text="Students / Parents Login" />
     <ModuleLink href={"#"} iconName="RiTimelineView" text="Timetable" />
     <ModuleLink href={"#"} iconName="PiNewspaperClippingLight" text="News Management" />
     <ModuleLink href={"#"} iconName="LuMessageSquareMore" text="Messaging System" />
     <ModuleLink href={"#"} iconName="MdOutlineLibraryBooks" text="Gradebook" />
     <ModuleLink href={"#"} iconName="PiExam" text="Examination" />
     <ModuleLink href={"#"} iconName="MdOutlineManageAccounts" text="User Management" />
     <ModuleLink href={"#"} iconName="MdOutlineTextsms" text="SMS Integration" />
     <ModuleLink href={"#"} iconName="MdOutlineManageAccounts" text="User Management" />
     <ModuleLink href={"#"} iconName="BsCalendar4Event" text="School / Events Calendar" />
     <ModuleLink href={"#"} iconName="TbReportAnalytics" text="Report Center" />
     <ModuleLink href={"#"} iconName="LiaIdCardSolid" text="ID Card Generator" />
     <ModuleLink href={"#"} iconName="GrMoney" text="Finance" />
     <ModuleLink href={"#"} iconName="PiStudent" text="Custom Student Remarks" />
      </div>
    </section>

    <section className="mx-auto mt-8 w-full rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_40px_rgba(23,45,80,0.06)] sm:p-8 lg:p-10">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#172d50] sm:text-3xl">
          Premium Modules <span className="font-medium text-slate-400">(10)</span>
          </h2>
          <p className="mb-7 text-sm text-slate-500 sm:text-base">Powerful add-ons for deeper insight and more connected workflows.</p>
          
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

     <ModuleLink href={"#"} iconName="IoBookOutline" text="Courses and Batches" />
     <ModuleLink href={"#"} iconName="GrCertificate" text="Certificate Generator" />
     <ModuleLink href={"#"} iconName="PiStudent" text="Student Information" />
     <ModuleLink href={"#"} iconName="CgProfile" text="Human Resources" />
     <ModuleLink href={"#"} iconName="LuLayoutDashboard" text="Multiple Dashboards" />
     <ModuleLink href={"#"} iconName="LuBookKey" text="Employee / Teacher Login" />
     <ModuleLink href={"#"} iconName="MdAppRegistration" text="Student Attendance" />
     <ModuleLink href={"#"} iconName="PiStudent" text="Student Admission" />
     <ModuleLink href={"#"} iconName="CiLogin" text="Students / Parents Login" />
     <ModuleLink href={"#"} iconName="RiTimelineView" text="Timetable" />
      </div>
    </section>

    <section className="mx-auto mt-8 w-full rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_40px_rgba(23,45,80,0.06)] sm:p-8 lg:p-10">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#172d50] sm:text-3xl">
          Ultimate Modules <span className="font-medium text-slate-400">(12)</span>
          </h2>
          <p className="mb-7 text-sm text-slate-500 sm:text-base">Get the complete toolkit for comprehensive school management.</p>
          
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

     <ModuleLink href={"#"} iconName="IoBookOutline" text="Courses and Batches" />
     <ModuleLink href={"#"} iconName="GrCertificate" text="Certificate Generator" />
     <ModuleLink href={"#"} iconName="PiStudent" text="Student Information" />
     <ModuleLink href={"#"} iconName="CgProfile" text="Human Resources" />
     <ModuleLink href={"#"} iconName="LuLayoutDashboard" text="Multiple Dashboards" />
     <ModuleLink href={"#"} iconName="LuBookKey" text="Employee / Teacher Login" />
     <ModuleLink href={"#"} iconName="MdAppRegistration" text="Student Attendance" />
     <ModuleLink href={"#"} iconName="PiStudent" text="Student Admission" />
     <ModuleLink href={"#"} iconName="CiLogin" text="Students / Parents Login" />
     <ModuleLink href={"#"} iconName="RiTimelineView" text="Timetable" />
      </div>
    </section>
      </div>
    </section>

    <section className="relative isolate w-full overflow-hidden bg-[#172d50] px-5 py-14 text-center sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 -top-40 h-80 w-80 rounded-full bg-[#5579b9]/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -right-20 h-96 w-96 rounded-full bg-[#f4473e]/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center">
        <span aria-hidden="true" className="mb-5 h-1 w-12 rounded-full bg-[#ff6458]" />
        <h2 className="mb-7 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
          Can&apos;t decide which plan is right for you?
        </h2>
        <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Link
            href="/live-demo"
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#ff5c4d] px-8 text-base font-semibold text-white shadow-[0_12px_28px_rgba(255,92,77,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e84c3d] hover:shadow-[0_16px_34px_rgba(255,92,77,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#172d50] sm:px-9 sm:text-lg"
          >
            Book A Demo
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1">
              <path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-14 items-center justify-center rounded-xl border border-[#ff6458]/80 bg-white/[0.03] px-8 text-base font-semibold text-[#ff7063] transition-all duration-200 hover:border-[#ff6458] hover:bg-[#ff5c4d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#172d50] sm:px-9 sm:text-lg"
          >
            Connect With Expert
          </Link>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-[#fff7f6] py-14 sm:py-16">
      <div className="mx-auto mb-9 max-w-4xl px-5 text-center sm:mb-12">
        <span className="mb-3 inline-flex rounded-full border border-[#f4473e]/15 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#e33e36] shadow-sm">
          Trusted by schools worldwide
        </span>
        <h3 className="text-2xl font-bold tracking-tight text-[#1a2d52] sm:text-3xl">
          Loved by 40,000+ Institutes Around the World!
        </h3>
      </div>

      <div className="relative mx-auto max-w-[1600px] overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#fff7f6] to-transparent sm:w-24" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#fff7f6] to-transparent sm:w-24" />
        <div className="logo-marquee flex w-max items-center hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6"
            >
              {instituteLogos.map((logo, index) => (
                <div
                  key={`${copy}-${index}`}
                  role={copy === 0 ? "img" : undefined}
                  aria-label={copy === 0 ? `Institute partner logo ${index + 1}` : undefined}
                  className="flex h-24 w-24 shrink-0 items-center justify-center transition-transform duration-200 hover:scale-110 sm:h-28 sm:w-28"
                >
                  <Image
                    src={logo}
                    alt=""
                    aria-hidden="true"
                    width={97}
                    height={97}
                    className="h-[88px] w-[88px] object-contain sm:h-[104px] sm:w-[104px]"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="relative z-10 w-full bg-white px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col items-center justify-between gap-5 sm:mb-10 sm:flex-row">
            <div className="text-center sm:text-left">
              <span className="mb-2 inline-flex rounded-full bg-[#fff1ef] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#e84c3d]">
                What schools say
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-[#1a2d52] sm:text-3xl">
                Customer Testimonials
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonials"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1a2d52] shadow-sm transition-colors hover:border-[#ff5c4d] hover:bg-[#fff5f4] hover:text-[#e84c3d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5c4d]"
              >
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonials"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1a2d52] shadow-sm transition-colors hover:border-[#ff5c4d] hover:bg-[#fff5f4] hover:text-[#e84c3d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5c4d]"
              >
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {visibleTestimonials.map((t) => (
              <article
                key={t.name}
                className="relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-[#fbfcfe] p-6 shadow-[0_10px_30px_rgba(26,45,82,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[#ff5c4d]/30 hover:shadow-[0_18px_38px_rgba(26,45,82,0.1)] sm:p-8"
              >
                <span aria-hidden="true" className="absolute right-5 top-2 select-none font-serif text-7xl leading-none text-[#ff5c4d]/10">“</span>
                <p className="relative z-10 mb-8 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                  {t.text}
                </p>
                <div className="flex items-center gap-4 border-t border-slate-200 pt-5">
                  <img
                    src={t.img}
                    alt=""
                    aria-hidden="true"
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white shadow-sm sm:h-14 sm:w-14"
                  />
                  <span className="font-semibold leading-6 text-[#1a2d52] sm:text-lg">{t.name}</span>
                  <span aria-hidden="true" className="ml-auto h-2 w-2 shrink-0 rounded-full bg-[#ff5c4d]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    <section className="bg-[#f7f8fb] px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center sm:mb-10">
          <span className="mb-3 inline-flex rounded-full border border-[#172d50]/10 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#536783] shadow-sm">
            Helpful answers
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-[#1a2d52] sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                activeIndex === index
                  ? "border-[#f4473e]/25 bg-white shadow-[0_10px_28px_rgba(23,45,80,0.07)]"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[#243955] sm:px-6 sm:py-[18px]"
              >
                <span>{item.question}</span>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                  activeIndex === index ? "bg-[#fff0ee] text-[#e84c3d]" : "bg-slate-100 text-slate-500"
                }`}>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`h-4 w-4 transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""}`}
                  >
                    <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              {activeIndex === index && (
                <div className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-slate-600 sm:px-6 sm:text-base">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              className="inline-flex items-center gap-2 font-semibold text-[#e84c3d] transition-colors hover:text-[#c9362e]"
              href="/product/faq"
            >
              Read more questions and answers
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                <path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="relative isolate overflow-hidden bg-[#f5f8fc] px-5 py-14 sm:px-8 sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#ffe5e2]/70 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_24px_70px_rgba(23,45,80,0.1)] md:grid-cols-[1.08fr_0.92fr] md:gap-4 lg:gap-10">
        <div className="relative flex min-h-[260px] items-center justify-center px-5 pt-7 sm:min-h-[340px] sm:px-10 md:min-h-[420px] md:py-8">
          <div aria-hidden="true" className="absolute inset-5 rounded-[1.5rem] bg-gradient-to-br from-[#edf6ff] via-[#f8fbff] to-[#fff1ef] sm:inset-8" />
          <Image
            src="/assets/kick_start.png"
            alt="A team launching a school automation project"
            width={700}
            height={500}
            className="relative z-10 h-auto w-full max-w-[620px] object-contain"
          />
        </div>
        <div className="relative z-10 px-6 pb-9 sm:px-10 sm:pb-12 md:px-8 md:py-12 lg:px-12 lg:py-16">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#fff0ee] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#e84c3d] sm:text-sm">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#f4473e]" />
            Your next chapter starts here
          </span>
          <h3 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-[#1a2d52] sm:text-4xl lg:text-[2.75rem]">
            Kickstart your school automation today with Schoolynx.
          </h3>
          <div aria-hidden="true" className="mb-5 h-1 w-14 rounded-full bg-[#f4473e]" />
          <p className="text-lg leading-8 text-slate-600 sm:text-xl">
            Book a one-on-one demo or start{" "}
            <span className="font-semibold text-[#1a2d52]">14 days free trial today</span>
          </p>
        </div>
      </div>
    </section>
    {/* --- End Custom Section --- */}
    </>
  );
} 