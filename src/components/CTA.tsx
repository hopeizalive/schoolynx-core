import React from 'react';
import Link from 'next/link';

export const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-blue-600 dark:bg-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make Your School Smarter?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of educational institutions that are already using SchooLnyx to streamline their operations. Schedule a demo today and see how we can help your school thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#" 
              className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition duration-300 text-center"
            >
              Request a Demo
            </Link>
            <Link 
              href="#" 
              className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border border-white hover:bg-blue-700 transition duration-300 text-center"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 