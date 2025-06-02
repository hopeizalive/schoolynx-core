import React from 'react';

const modules = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f4473e" className="w-10 h-10 mx-auto mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /><circle cx="12" cy="12" r="9" stroke="#f4473e" strokeWidth="1.5" fill="none" /></svg>
    ),
    title: 'Exam & Gradebook',
    desc: 'Automate exam process. Effortlessly conduct online examinations. Create a digital report card and automate grade calculation.',
    link: '#',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f4473e" className="w-10 h-10 mx-auto mb-2"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#f4473e" strokeWidth="1.5" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8M8 12h8M8 16h4" /></svg>
    ),
    title: 'Student Admission',
    desc: 'Track admission enquiries, manage admission details digitally, customize admission forms & verify documents digitally.',
    link: '#',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f4473e" className="w-10 h-10 mx-auto mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
    ),
    title: 'Parents Collaboration',
    desc: `Parents can discuss their child's progress with the teacher and keep a track on their pupil's academic progress. Instant alert on upcoming events.`,
    link: '#',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f4473e" className="w-10 h-10 mx-auto mb-2"><rect x="3" y="8" width="18" height="13" rx="2" stroke="#f4473e" strokeWidth="1.5" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v5M8 3v5" /></svg>
    ),
    title: 'Timetable & Attendance',
    desc: 'Easily mark the attendance & create an error-free timetable. Do classroom-allocation, subject-allocation to teachers.',
    link: '#',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f4473e" className="w-10 h-10 mx-auto mb-2"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#f4473e" strokeWidth="1.5" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M8 16h8" /></svg>
    ),
    title: 'Fees Management',
    desc: 'Automatic fee collection, calculate tax on the types of fee transactions. Imply fine on late fees, add instant discounts, and monitor fee defaulters.',
    link: '#',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f4473e" className="w-10 h-10 mx-auto mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8V6a5 5 0 0 0-10 0v2M5 8h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z" /></svg>
    ),
    title: 'Online Classes',
    desc: 'Schoolynx now integrates with various video conferencing softwares such as Google Meet, Zoom & BigBlueButton, to simplify online learning and teaching process.',
    link: '#',
  },
];

const Modules = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#1a2d52] to-[#396cae] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 mb-10">
          {/* Left: Heading and description */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-[#f4473e]">Modules</span> to Automate School Management
            </h2>
            <p className="mb-8 text-lg text-white/80">Single ERP Platform for All Your Education Need</p>
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
        <div className="flex gap-8 mb-10">
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
          <p className="text-3xl font-bold mb-1">+50</p>
          <p className="mb-4 text-white/90">other awesome modules in Schoolynx School ERP Software</p>
          <button className="bg-[#f4473e] text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-red-700 transition">See All Features</button>
        </div>
      </div>
    </section>
  );
};

export default Modules; 