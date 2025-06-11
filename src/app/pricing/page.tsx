"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsCalendar4Event } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { CiLogin } from 'react-icons/ci';
import { GrCertificate, GrMoney } from 'react-icons/gr';
import { IoBookOutline } from 'react-icons/io5';
import { LiaIdCardSolid } from 'react-icons/lia';
import { LuBookKey, LuLayoutDashboard, LuMessageSquareMore } from 'react-icons/lu';
import { MdAppRegistration, MdOutlineLibraryBooks, MdOutlineManageAccounts, MdOutlineTextsms } from 'react-icons/md';
import { PiExam, PiNewspaperClippingLight, PiStudent } from 'react-icons/pi';
import { RiTimelineView } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';

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
        Yes, according to your institution's needs, Schoolynx can be customized. The basic version of Schoolynx is an open-source code and is available free of cost. We also provide the Enterprise version, for more insights follow the link:{" "}
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
  const [isAnnual, setIsAnnual] = useState(true);

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
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const visibleTestimonials = [
    testimonials[testimonialIndex],
    testimonials[(testimonialIndex + 1) % testimonials.length],
  ];
  const handlePrev = () => {
    setTestimonialIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };
  const handleNext = () => {
    setTestimonialIndex((prev) => (prev + 2) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // move to next testimonial
    }, 5000); // every 5 seconds
  
    return () => clearInterval(interval); // cleanup on unmount
  }, [visibleTestimonials]);

  return (
    <>
    <div className='w-full bg-[#f2f2f2] py-22 relative'>
   <div className='flex- items-center justify-center w-full h-full'>
   <h1 className="text-4xl font-semibold text-gray-700 mb-2 text-center">Affordable Plans for Smart Institutes</h1>
        <p className="text-xl text-red-600 font-semibold text-center max-w-3xl mx-auto">
        All plans include free cloud hosting with encrypted security.
        </p>
   </div>

   {/* Pricing Toggle */}
   <div className="flex justify-center items-center space-x-4 absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white py-2 px-12 rounded-2xl shadow-md">
          <span className="text-gray-700 text-xl font-semibold">Monthly</span>
          <button
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${isAnnual ? 'bg-gray-200' : 'bg-red-500'}`}
            onClick={() => setIsAnnual((prev) => !prev)}
            aria-label="Toggle pricing period"
          >
            <span className="sr-only">Toggle pricing period</span>
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`}
            ></span>
          </button>
          <span className="text-gray-700 text-xl font-semibold">Annual <span className="text-red-600 text-xl font-semibold">(Save 20%)</span></span>
        </div>
    </div>
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto ">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Standard Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl text-center text-[#674FE4] mb-6 font-semibold">STANDARD</h2>
              <div className="mb-6">
                <span className="text-2xl text-gray-900 font-semibold flex justify-center">$ {isAnnual ? pricing.standard.yearly : pricing.standard.monthly}</span>
                <p className="text-sm text-gray-700 flex justify-center pt-2">({isAnnual ? 'billed yearly' : 'billed monthly'})</p>
              </div>
              <Link href="/" className='font-medium  cursor-pointer flex justify-center items-center border-2 border-[#674FE4] rounded-full px-6 py-1 w-fit mx-auto text-[#674FE4] text-xl mb-6'>Buy Standard</Link>

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
            <Link href="/" className='font-medium cursor-pointer flex justify-center items-center rounded-xl px-6 py-1 w-[80%] mx-auto bg-[#674FE4] text-white text-xl mb-6'>Contact Us</Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl text-center text-[#ff8b00] mb-6 font-semibold uppercase">Premium</h2>
              <div className="mb-6">
                <span className="text-2xl text-gray-900 font-semibold flex justify-center">$ {isAnnual ? pricing.premium.yearly : pricing.premium.monthly}</span>
                <p className="text-sm text-gray-700 flex justify-center pt-2">({isAnnual ? 'billed yearly' : 'billed monthly'})</p>
              </div>
              <Link href="/" className='font-medium cursor-pointer flex justify-center items-center border-2 border-[#ff8b00] rounded-full px-6 py-1 w-fit mx-auto text-[#ff8b00] text-xl mb-6'>Buy Standard</Link>

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
            <Link href="/" className='font-medium cursor-pointer flex justify-center items-center rounded-xl px-6 py-1 w-[80%] mx-auto bg-[#ff8b00] text-white text-xl mb-6'>Contact Us</Link>
          </div>

          {/* Ultimate Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl text-center text-[#E84C3D] mb-6 font-semibold uppercase">Ultimate</h2>
              <div className="mb-6">
                <span className="text-2xl text-gray-900 font-semibold flex justify-center">$ {isAnnual ? pricing.ultimate.yearly : pricing.ultimate.monthly}</span>
                <p className="text-sm text-gray-700 flex justify-center pt-2">({isAnnual ? 'billed yearly' : 'billed monthly'})</p>
              </div>
              <Link href="/" className='font-medium cursor-pointer flex justify-center items-center border-2 border-[#E84C3D] rounded-full px-6 py-1 w-fit mx-auto text-[#E84C3D] text-xl mb-6'>Buy Ultimate</Link>

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
            <Link href="/" className='font-medium cursor-pointer flex justify-center items-center rounded-xl px-6 py-1 w-[80%] mx-auto bg-[#E84C3D] text-white text-xl mb-6'>Contact Us</Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl text-center text-[#08AD69] mb-6 font-semibold uppercase">Enterprise</h2>
              <div className="mb-6">
              <Link href="/" className='font-medium cursor-pointer flex justify-center items-center bg-[#08AD69] rounded-full px-6 py-1 w-fit mx-auto text-white text-xl mb-6'>Contact Sales</Link>
              </div>
              <Link href="/" className='font-medium cursor-pointer flex justify-center items-center border-2 border-[#08AD69] rounded-full px-6 py-1 w-fit mx-auto text-[#08AD69] text-xl mb-6'>Buy Enterprise</Link>

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
            <Link href="/" className='font-medium cursor-pointer flex justify-center items-center rounded-xl px-6 py-1 w-[80%] mx-auto bg-[#08AD69] text-white text-xl mb-6'>Contact Us</Link>
          </div>

        </div>

        {/* Modules Section */}
        <section className="py-12  w-[100%] mx-auto mt-12 bg-white">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-6">
          Core Modules (21)
          </h2>
          
          <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-between px-4 gap-8">

     <Link href={"#"} className='flex items-center gap-6'>
     <IoBookOutline size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Courses and Batches</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <GrCertificate  size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Certificate Generator</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Student Information</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CgProfile size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Human Resources</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuLayoutDashboard size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Multiple Dashboards</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuBookKey size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
Employee / Teacher Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdAppRegistration size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Attendance</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Admission</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CiLogin size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Students / Parents Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <RiTimelineView size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Timetable</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiNewspaperClippingLight size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      News Management</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuMessageSquareMore size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Messaging System</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineLibraryBooks size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Gradebook</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiExam size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>   
Examination</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineManageAccounts size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      User Management</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineTextsms size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      SMS Integration</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineManageAccounts size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      User Management</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <BsCalendar4Event size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      School / Events Calendar</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <TbReportAnalytics size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Report Center</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LiaIdCardSolid size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      ID Card Generator</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <GrMoney size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
Finance</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Custom Student Remarks</p>
     </Link>
      </div>
    </section>

    <section className="py-12 bg-white w-[100%] mx-auto ">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-6">
          Standard Modules (17)
          </h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-between px-4 gap-8">

     <Link href={"#"} className='flex items-center gap-6'>
     <IoBookOutline size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Courses and Batches</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <GrCertificate  size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Certificate Generator</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Student Information</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CgProfile size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Human Resources</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuLayoutDashboard size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Multiple Dashboards</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuBookKey size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
Employee / Teacher Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdAppRegistration size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Attendance</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Admission</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CiLogin size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Students / Parents Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <RiTimelineView size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Timetable</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiNewspaperClippingLight size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      News Management</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuMessageSquareMore size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Messaging System</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineLibraryBooks size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Gradebook</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiExam size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>   
Examination</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineManageAccounts size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      User Management</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineTextsms size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      SMS Integration</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineManageAccounts size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      User Management</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <BsCalendar4Event size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      School / Events Calendar</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <TbReportAnalytics size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Report Center</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LiaIdCardSolid size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      ID Card Generator</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <GrMoney size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
Finance</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Custom Student Remarks</p>
     </Link>
      </div>
    </section>

    <section className="py-12 bg-white [100%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-6">
          Premium Modules (10)
          </h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-between px-4 gap-8">

     <Link href={"#"} className='flex items-center gap-6'>
     <IoBookOutline size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Courses and Batches</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <GrCertificate  size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Certificate Generator</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Student Information</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CgProfile size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Human Resources</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuLayoutDashboard size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Multiple Dashboards</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuBookKey size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
Employee / Teacher Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdAppRegistration size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Attendance</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Admission</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CiLogin size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Students / Parents Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <RiTimelineView size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Timetable</p>
     </Link>
     
      </div>
    </section>

    <section className="py-12 bg-white w-[100%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-6">
          Ultimate Modules (12)
          </h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-between px-4 gap-8">

     <Link href={"#"} className='flex items-center gap-6'>
     <IoBookOutline size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Courses and Batches</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <GrCertificate  size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Certificate Generator</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Student Information</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CgProfile size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Human Resources</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuLayoutDashboard size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Multiple Dashboards</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuBookKey size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
Employee / Teacher Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdAppRegistration size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Attendance</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Admission</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CiLogin size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Students / Parents Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <RiTimelineView size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Timetable</p>
     </Link>
     
      </div>
    </section>
      </div>
    </div>

    {/* --- Custom Section from Screenshot --- */}
    {/* CTA Bar */}
    <div className="w-full bg-[#1a2d52] py-10 flex flex-col items-center justify-center">
      <h2 className="text-white text-2xl md:text-2xl font-semibold mb-6 text-center">Can't decide which plan is right for you?</h2>
      <div className="flex gap-4 mb-2">
        <button className="bg-[#ff5c4d] hover:bg-[#e84c3d] text-white font-semibold px-8 py-2 rounded-md text-lg transition">Book A Demo</button>
        <button className="border border-[#ff5c4d] text-[#ff5c4d] hover:bg-[#ff5c4d] hover:text-white font-semibold px-8 py-2 rounded-md text-lg transition">Connect With Expert</button>
      </div>
    </div>

    {/* Logos Section */}
    <div className="w-full bg-[#fff5f5] py-10 flex flex-col items-center relative min-h-screen">
      <h3 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-8 text-center">Loved by 40,000+ Institutes Around the World!</h3>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto mb-3">
        <img className='pb-4 h-auto w-full' src="/assets/feature-product/2.png" alt="" />
      </div>

      {/* Testimonials Section - heading and background fixed, only cards move */}
      <div className="w-full flex flex-col items-center justify-center py-10 relative z-10">
        <h3 className="text-xl md:text-2xl font-semibold text-[#1a2d52] mb-12 text-center">Customer Testimonials</h3>
        <div className="absolute -bottom-[215px] flex justify-center w-full max-w-6xl">
          {/* Left Arrow */}
          <button onClick={handlePrev} aria-label="Previous" className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg cursor-pointer">
            <span className="flex items-center justify-center w-8 h-8 bg-[#ff5c4d] text-white rounded-full text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </span>
          </button>
          {/* Cards */}
          <div className="flex gap-8 w-full justify-center items-center transition-all duration-500">
            {visibleTestimonials.map((t, idx) => (
              <div key={idx} className="flex-1 max-w-xl min-w-[200px] bg-[#fafafa] border border-[#ff5c4d] rounded-2xl p-8 relative flex flex-col justify-between shadow-md" style={{borderWidth:2}}>
                {/* Quote Icon */}
                <svg className="absolute -top-8 left-8 w-16 h-16 text-[#ff5c4d]" fill="currentColor" viewBox="0 0 48 48"><path d="M17 12A8 8 0 0 0 9 20v2a8 8 0 0 0 8 8h.5A5 5 0 0 1 22 25v-2a5 5 0 0 0-5-5H17z" /></svg>
                <p className="text-[#1a2d52] text-md font-medium my-4 overflow-y-auto h-[90px]">{t.text}</p>
                <div className="flex items-center gap-4 mt-2">
                  <img src={t.img} alt={t.name} className="w-14 h-14 object-contain" />
                  <span className="font-semibold text-[#1a2d52] text-lg">{t.name}</span>
                </div>
              </div>
            ))} 
          </div>
          {/* Right Arrow */}
          <button onClick={handleNext} aria-label="Next" className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow-lg cursor-pointer">
            <span className="flex items-center justify-center w-8 h-8 bg-[#ff5c4d] text-white rounded-full text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>

    {/* Testimonials Section */}
   

    <div className="max-w-6xl mx-auto px-4 mt-52 mb-12">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-8 text-center">Frequently Asked Questions</h1>
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div key={index} className={`rounded-md p-4 border-b-4 border-gray-200 ${activeIndex === index ? "bg-white" : "bg-[#F4F5F7]"}`}>

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left font-medium text-gray-700 cursor-pointer flex justify-between items-center"
              >
                {item.question}
              </button>
              {activeIndex === index && (
                <div className="px-1 py-4 text-md text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
          <Link className='text-red-600' href={"/product/faq"}>Read more questions and answers </Link>
        </div>
      </div>

    {/* Bottom CTA with Rocket */}
    <div className="w-full bg-[#f9fafc] py-12">
      <div className='max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8'>
      <div className="flex justify-center items-center">
        <img src="https://cdn.prod.website-files.com/5bff8886c3964a992e90d465/5c006187d9549d3368158d3d_mixes.gif" alt="Rocket" className="w-[80%] h-auto object-contain" />
      </div>
      <div className="max-w-lg">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-4">Kickstart your school automation today with Schoolynx.</h3>
        <p className="text-2xl md:text-3xl font-semibold text-[#727272] mb-4">Book a one-on-one demo or start <span className="font-semibold text-[#1a2d52]">14 days free trial today</span></p>
      </div>
      </div>
    </div>
    {/* --- End Custom Section --- */}
    </>
  );
} 