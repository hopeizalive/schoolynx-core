import React from 'react';
import Image from 'next/image';

const WhyFedena = () => {
  return (
    <section className="py-16 bg-white w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2d52] mb-8 text-center">
            Why Schoolynx School Management Software?
          </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8">
        {/* Left: Text */}
        <div className="flex-1 text-left">
          <p className="text-lg text-gray-700 mb-6">
            Schoolynx is a multipurpose school management system which aids in automating the school's daily operations hassle-free and provide insightful reports and 360-degree tracking so that the stakeholders can make better and faster decisions to escalate the productivity of their institution.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            From organizing the parent-teacher meeting to online fees collection and examination management, to bulk data management Schoolynx school software handles every process smoothly and efficiently. It is a fully web-based school ERP software provides 100+ excellent modules, 24/7 customer support, and data security.
          </p>
          <p className="text-lg text-gray-700">
            Additionally, Schoolynx is suitable for types of education boards such as CBSE, ICSE, Regional State Board, International Baccalaureate (IB), and more.
          </p>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_640.jpg"
            alt="School Management Illustration"
            className="max-w-[400px] w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyFedena; 