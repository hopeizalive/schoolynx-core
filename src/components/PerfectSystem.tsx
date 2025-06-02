import React from 'react';

const features = [
  {
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-0">
        {/* <circle cx="36" cy="36" r="35" stroke="#f4473e" strokeWidth="2" fill="none" /> */}
        <path d="M24 44V32C24 29.7909 25.7909 28 28 28H44C46.2091 28 48 29.7909 48 32V44" stroke="#1a2d52" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 40C37.6569 40 39 38.6569 39 37C39 35.3431 37.6569 34 36 34C34.3431 34 33 35.3431 33 37C33 38.6569 34.3431 40 36 40Z" stroke="#1a2d52" strokeWidth="2.5"/>
        <path d="M28 44V46C28 47.1046 28.8954 48 30 48H42C43.1046 48 44 47.1046 44 46V44" stroke="#1a2d52" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Simple & Easy to use for Teachers',
    desc: 'Designed to engage teachers and parents. No expertise is required to quickly accomplish a task.',
  },
  {
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-0">
        <rect x="12" y="20" width="48" height="32" rx="6" stroke="#1a2d52" strokeWidth="2.5" fill="none" />
        <path d="M36 36L36 44" stroke="#f4473e" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M36 36L44 28" stroke="#f4473e" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M36 36L28 28" stroke="#f4473e" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Powerful features for your Institution',
    desc: 'We provide everything you will ever need to run an education institution. No customization required',
  },
  {
    icon: (
      <svg width="100" height="100" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-0">
        <rect x="16" y="20" width="40" height="32" rx="6" stroke="#1a2d52" strokeWidth="2.5" fill="none" />
        <circle cx="36" cy="36" r="8" stroke="#1a2d52" strokeWidth="2.5" fill="none" />
        <rect x="30" y="44" width="12" height="4" rx="2" fill="#f4473e" />
        <rect x="28" y="28" width="16" height="4" rx="2" fill="#f4473e" />
      </svg>
    ),
    title: 'Online & On-site Customer Support',
    desc: 'Along with online & on-site support, Fedena also offers on-demand & webinar-based training to their customers.',
  },
];

const PerfectSystem = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2d52] text-center mb-12">
          Perfect School Management System to Meet Your Institution Needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {f.icon}
              <h3 className="text-xl font-bold text-[#1a2d52] mb-2">{f.title}</h3>
              <p className="text-gray-500 text-lg max-w-xs">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerfectSystem; 