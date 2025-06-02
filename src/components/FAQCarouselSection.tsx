import React from 'react';

const faqs = [
  {
    question: 'How can schools benefit from e-learning modules in School Software?',
    answer: (
      <>
        <span>Benefits of having an <span className="text-[#f4473e] font-medium">E-learning</span> module in school management system are -</span>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-2"><span className="mt-1"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#34c759"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Institutes can <span className="font-semibold">deliver a better learning experience to students</span> beyond classroom boundaries.</li>
          <li className="flex items-start gap-2"><span className="mt-1"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#34c759"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Teachers can <span className="font-semibold">create media-rich customised courses</span> and resolve students doubts in real-time.</li>
          <li className="flex items-start gap-2"><span className="mt-1"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#34c759"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Students can <span className="font-semibold">download the study material</span> and watch the recorded lectures at the comfort of their home.</li>
        </ul>
        <div className="mt-6 text-base">
          Learn more about online learning module in school ERP - <span className="text-[#f4473e] font-medium">Schoolynx Learn</span>
        </div>
      </>
    ),
  },
  {
    question: 'Is Schoolynx School ERP secure for student data?',
    answer: (
      <>
        <span>Yes, Schoolynx uses <span className="font-semibold text-[#1a2a49]">advanced encryption</span> and <span className="font-semibold text-[#f4473e]">role-based access</span> to keep all student and staff data safe and private.</span>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-2"><span className="mt-1"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#34c759"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>All data is stored on <span className="font-semibold">secure cloud servers</span>.</li>
          <li className="flex items-start gap-2"><span className="mt-1"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#34c759"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Access is <span className="font-semibold text-[#f4473e]">strictly controlled</span> by user roles and permissions.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Can parents track their childs progress using Schoolynx?',
    answer: (
      <>
        <span>Absolutely! Parents can <span className="font-semibold text-[#f4473e]">log in</span> to the parent portal and:</span>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-2"><span className="mt-1"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#34c759"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>View <span className="font-semibold">attendance, grades, and assignments</span> in real time.</li>
          <li className="flex items-start gap-2"><span className="mt-1"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#34c759"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Receive <span className="font-semibold text-[#f4473e]">instant notifications</span> about important events.</li>
        </ul>
      </>
    ),
  },
  {
    answer: (
      <>
        <span>Yes, Schoolynx offers <span className="font-semibold text-[#f4473e]">integrated payment gateways</span> for secure and convenient online fee collection.</span>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-2"><span className="mt-1"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#34c759"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Parents can pay fees <span className="font-semibold text-[#f4473e]">anytime, anywhere</span>.</li>
          <li className="flex items-start gap-2"><span className="mt-1"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#34c759"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>All transactions are <span className="font-semibold">secure and tracked</span> in the system.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Is Schoolynx customizable for different schools?',
    answer: (
      <>
        <span>Yes, Schoolynx is <span className="font-semibold text-[#f4473e]">highly customizable</span> to fit the unique needs of any school or college.</span>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start gap-2"><span className="mt-1"></span>Modules and features can be <span className="font-semibold text-[#f4473e]">enabled or disabled</span> as needed.</li>
          <li className="flex items-start gap-2"><span className="mt-1"></span>Branding and reports can be <span className="font-semibold">customized</span> for your institution.</li>
        </ul>
      </>
    ),
  },
];

export default function FAQCarouselSection() {
  const [current, setCurrent] = React.useState(0);

  const goTo = (idx: number) => setCurrent(idx);

  return (
    <section className="w-full py-20 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a49] text-center mb-12">
        FAQs on School Management Software
      </h2>
      <div className="relative flex flex-col items-center w-full max-w-5xl">
        {/* Card */}
        <div className="relative bg-[#f6f7f9] rounded-2xl mx-auto px-8 py-12 flex flex-col items-center text-center w-full border border-[#f6f7f9]" style={{boxShadow:'0 0 32px 0 #e5e7eb22'}}>
            {faqs[current].question && (

          <div className="text-lg md:text-xl font-bold text-[#1a2a49] mb-6 text-left w-full">{faqs[current].question}</div>
            )}
          <div className="text-md text-[#1a2a49] text-left leading-relaxed w-[95%] mx-auto">
            {faqs[current].answer}
          </div>
        </div>
      
        {/* Dots */}
        <div className="flex gap-3 mt-10 justify-center">
          {faqs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-[#9f9f9f] border-[#9f9f9f]' : 'bg-white border-[#e5e7eb]'} transition cursor-pointer`}
              aria-label={`Go to FAQ ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 