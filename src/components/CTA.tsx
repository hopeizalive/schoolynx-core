import React from 'react';
import Link from 'next/link';

export const CTA = () => {
  return (
    <section id="contact" className="py-16 bg-[#1a2d52]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Get Started for Free Today
          </h2>
          <p className="text-lg text-white mb-10 w-[60%] mx-auto">
          Join millions of users who have shared that Fedena provides 99% of
          Customer Support Satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href={"/"} className="mt-8 md:mt-0 px-10 py-3 bg-[#f4473e] text-white font-semibold rounded-md shadow-lg hover:bg-red-700 transition duration-300 text-lg">
          Book a demo
        </Link>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 