"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

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
  },
  {
    question: "What measures do we take for data security?",
    answer: "Keeping the school data safe and secure is the topmost priority of Schoolynx. We offer full privacy to school data as per industry standard. The data remain fully encrypted when it has stored in Schoolynx system.",
  },
  {
    question: "Can the report be customized in Schoolynx?",
    answer: "Using custom report plugin, you can customize the report according to your need. Learn More: Customized Report",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <Head>
        <title>FAQ - Schoolynx</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-gray-800">Frequently Asked Questions</h1>
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
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">Have any questions?</h1>
        <p className="text-md py-4 px-1">We are happy to help you. Write us to <a href="https://Schoolynx.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600">support@Schoolynx.com</a> or call the support desk 
          <a href="https://Schoolynx.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600">+91-1130018096</a>
           </p>

           <button className=' bg-red-600 cursor-pointer px-4 py-2 rounded-md text-white hover:bg-red-700'>
              Contact Us
            </button>
      </div>

      <section id="feature-tour" className="py-12 bg-[#1a2d52]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-16">
          Can't decide which plan is right for you?
          </h2>
         
          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href={"/"} className="mt-8 md:mt-0 px-10 py-3 bg-[#f4473e] text-white font-semibold rounded-md shadow-lg hover:bg-red-700 transition duration-300 text-lg">
          Book a demo
        </Link>
          <Link href={"/"} className="mt-8 md:mt-0 px-10 py-3 border-2 border-[#f4473e] text-[#f4473e] font-semibold rounded-md shadow-lg hover:bg-red-700 hover:text-white transition duration-300 text-lg">
          Connect with Experts
        </Link>
           
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default FAQ;
