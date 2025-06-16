import React from 'react';

const modules = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f4473e" className="w-10 h-10 mx-auto mb-2"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#f4473e" strokeWidth="1.5" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8M8 12h8M8 16h4" /></svg>
    ),
    title: 'Student Admission',
    desc: 'Monitor admission inquiries, handle application data online, personalize forms, and digitally validate documents.   ',
    link: '#',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f4473e" className="w-10 h-10 mx-auto mb-2"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#f4473e" strokeWidth="1.5" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M8 16h8" /></svg>
    ),
    title: 'Fees Management',
    desc: 'Automate fee collection, apply tax on various transaction types. Enforce late fee penalties, offer instant discounts, and track outstanding payments efficiently.',
    link: '#',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f4473e" className="w-10 h-10 mx-auto mb-2"><rect x="3" y="8" width="18" height="13" rx="2" stroke="#f4473e" strokeWidth="1.5" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v5M8 3v5" /></svg>
    ),
    title: 'Timetable & Attendance',
    desc: 'Efficiently record attendance and generate accurate timetables. Manage classroom assignments and allocate subjects to teachers.',
    link: '#',
  }, 
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f4473e" className="w-10 h-10 mx-auto mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
    ),
    title: 'Parents Collaboration',
    desc: `Parents can communicate with teachers about their child’s performance and consistently monitor academic growth. Receive real-time notifications about upcoming school events and important updates.`,
    link: '#',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f4473e" className="w-10 h-10 mx-auto mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8V6a5 5 0 0 0-10 0v2M5 8h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z" /></svg>
    ),
    title: 'Online Classes',
    desc: 'Schoolynx now supports integration with leading video conferencing tools like Google Meet, Zoom, and Big Blue Button to enhance virtual teaching and learning efficiency.',
    link: '#',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f4473e" className="w-10 h-10 mx-auto mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /><circle cx="12" cy="12" r="9" stroke="#f4473e" strokeWidth="1.5" fill="none" /></svg>
    ),
    title: 'Exam & Gradebook',
    desc: 'Streamline examination process. Seamlessly manage online assessments. Generate digital report cards and automate grading system.',
    link: '#',
  },
];

const Modules = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#1a2d52] to-[#20448d] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 mb-10">
          {/* Left: Heading and description */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-[#f4473e]">Comprehensive</span> ERP Solution for Schools.
            </h2>
            <p className="mb-8 text-lg text-white/80">ERP Solution for Your Education System</p>
          </div>
          {/* Right: First two cards in a column */}
          <div className="md:w-1/2 flex flex-col md:flex-row gap-8 justify-end">
            {modules.slice(0, 2).map((mod, i) => (
              <div key={i} className="bg-white text-[#1a2d52] rounded-xl shadow-md p-6 flex flex-col items-center min-h-[260px] w-[320px] transition hover:scale-105 duration-200">
                {mod.icon}
                <h3 className="font-bold text-lg mb-2 text-center">{mod.title}</h3>
                <p className="text-sm text-center mb-4">{mod.desc}</p>
                <a href={mod.link} className="text-[#f4473e] font-semibold text-sm flex items-center gap-1 hover:underline">Learn More <span className="ml-1">→</span></a>
              </div>
            ))}
          </div>
        </div>
        {/* Second row: 4 cards left-aligned */}
        <div className="flex gap-8 mb-10 flex-col md:flex-row items-center">
          {modules.slice(2).map((mod, i) => (
            <div key={i} className="bg-white text-[#1a2d52] rounded-xl shadow-md p-6 flex flex-col items-center min-h-[260px] w-[320px] transition hover:scale-105 duration-200">
              {mod.icon}
              <h3 className="font-bold text-lg mb-2 text-center">{mod.title}</h3>
              <p className="text-sm text-center mb-4">{mod.desc}</p>
              <a href={mod.link} className="text-[#f4473e] font-semibold text-sm flex items-center gap-1 hover:underline">Learn More <span className="ml-1">→</span></a>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold mb-1">+30</p>
          <p className="mb-4 text-white/90">The powerful modules in Schoolynx ERP Software.</p>
          <button className="bg-[#f4473e] text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-red-700 transition">See All Features</button>
        </div>
      </div>
    </section>
  );
};

export default Modules; 