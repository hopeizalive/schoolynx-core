import React from 'react';
import Image from 'next/image';

const WhySchoolynx = () => {
  return (
    <section className="py-16 bg-white w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2d52] mb-8 text-center">
          Why School Management Comprehensive ERP System?
          </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8">
        {/* Left: Text */}
        <div className="flex-1 text-left">
          <p className="text-lg text-gray-700 mb-6">
          Schoolynx is a versatile school management solution that streamlines daily academic operations with ease and delivers comprehensive reports and 360-degree monitoring, empowering stakeholders to make informed, timely decisions to boost their institution’s overall efficiency and performance.
          </p>
          <p className="text-lg text-gray-700 mb-6">
          Whether it’s scheduling parent-teacher meetings, managing online fee payments, conducting exams, or handling bulk student data, Schoolynx executes every task seamlessly. This fully web-based ERP software includes 50+ powerful modules, offers 24/7 support, and ensures high-level data protection.
          </p>
         
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/assets/school_management.png"
            alt="School Management Illustration"
            className="max-w-[500px] w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhySchoolynx; 