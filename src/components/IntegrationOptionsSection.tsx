import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dottedBg =
  'https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png'; // Free dotted pattern

export default function IntegrationOptionsSection() {
  return (
    <>
    <section
       style={{
        backgroundImage: 'url(/assets/dotted_bg.png)',
        backgroundSize: 'cover',          // ✅ Ensure it covers fully
        backgroundRepeat: 'no-repeat',    // ✅ No repeat
        backgroundPosition: 'center',     // ✅ Center the background
        width: '100%',
        // minHeight: '100vh',               // ✅ Full viewport height
        padding: '60px 0',
      }}
      className="w-full flex flex-col items-center"
      >
      <h2 className="text-3xl md:text-3xl font-bold text-center mb-4 text-[#1a2a49]">
       Multiple Integration Options to Elevate School Management Experience.
      </h2>
      <p className="text-xl text-center max-w-3xl mb-12 text-[#1a2a49] w-full">
        Schoolynx includes all essential features your institution requires and supports up to 20 integrations, enhancing the overall efficiency and performance of the student information and management platform.
      </p>
      <div className="flex flex-wrap justify-center gap-20 mb-12">
        {/* Biometric */}
        <div className="flex flex-col md:flex-row md:gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-15">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
</svg>

          <span className="mt-4 text-xl font-semibold text-[#1a2a49] my-auto">Biometric</span>
        </div>
        {/* Payment Gateway */}
        <div className="flex flex-col md:flex-row md:gap-1 items-center">
          <svg width="64" height="64" fill="none" stroke="#1a2a49" strokeWidth="1" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M2 10h20"/><circle cx="7" cy="15" r="1"/><circle cx="11" cy="15" r="1"/></svg>
          <span className="mt-4 text-xl font-semibold text-[#1a2a49] my-auto">Payment Gateway</span>
        </div>

        {/* Location */}
        <div className="flex flex-col md:flex-row md:gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-15">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

          <span className="mt-4 text-xl font-semibold text-[#1a2a49] my-auto">Location</span>
        </div>
        {/* Online Classes */}
        <div className="flex flex-col md:flex-row md:gap-1 items-center">
          <svg width="64" height="64" fill="none" stroke="#1a2a49" strokeWidth="1" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M16 10l4 2-4 2v-4z"/></svg>
          <span className="mt-4 text-xl font-semibold text-[#1a2a49] my-auto">Online Classes</span>
        </div>
      </div>
      <button className="bg-[#f44d3c] hover:bg-[#d63b2b] text-white text-xl font-semibold px-8 py-4 rounded transition">
        See All Integration
      </button>
    </section>

    {/* ------------------------------------NEW FEATURE SECTION---------------------------- */}     
    
    <section className="py-12 bg-[#1a2d52] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10">
       <h2 className="text-xl md:text-2xl text-center text-[white]"><strong>Introducing Schoolynx 4.0</strong> – 4 New Features | 6 Upgrades</h2>

        <button className="mt-8 md:mt-0 px-10 py-4 bg-[#f4473e] text-white font-semibold rounded-md shadow-lg hover:bg-red-700 transition duration-300 text-lg">
          Find Out More
        </button>
      </div>
    </section>

    {/* ---------------------- TESTIMONIAL CAROUSEL SECTION ---------------------- */}
    <section className="w-full py-10 bg-[#fafafa] flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a49] text-center mb-12">
        Why Institutions Prefer the Schoolynx ERP System?
      </h2>
      <TestimonialCarousel />
    </section>
        </>
  );
}

// Carousel Component
const testimonials = [
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    quote: 'Schoolynx is a complete school management solution. It includes everything you need. It handles attendance, report cards, fee tracking, and even HR tasks.',
    school: '— Right Way School System.',
    schoolColor: 'text-[#f4473e]',
    button: false,
    buttonText: 'Read Full Story',
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    quote: 'Schoolynx streamlined all our operations and enhanced interaction with both parents and staff members.',
    school: '— The Academy School System.',
    schoolColor: 'text-[#1a2a49]',
    button: false,
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    quote: 'The technical staff is fantastic, and the software is very simple to operate for all members.',
    school: '— Unique School System',
    schoolColor: 'text-[#f4473e]',
    button: false,
    buttonText: 'Read Full Story',
  },
];

function TestimonialCarousel() {
  const [current, setCurrent] = React.useState(0);
  const total = testimonials.length;

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const t = testimonials[current];

  return (
    <div className="relative flex flex-col items-center w-full max-w-2xl mt-6">
      {/* Card */}
      <AnimatePresence mode="wait">
  <motion.div
    key={current}
    initial={{ opacity: 0, x: 100, scale: 0.95 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: -100, scale: 0.95 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="relative bg-white rounded-2xl shadow-lg mx-auto pt-12 flex flex-col items-center text-center min-w-[340px] max-w-xl border border-[#fff]"
    style={{ boxShadow: '0 0 32px 0 #f4473e22' }}
  >
        {/* Quotation mark */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md flex items-center justify-center w-16 h-16 z-10" style={{boxShadow:'0 4px 24px 0 #f4473e22'}}>
          <svg width="40" height="40" fill="#f4473e" viewBox="0 0 32 32"><text x="8" y="28" fontSize="32" fontWeight="bold">“</text></svg>
        </div>
        {/* Avatar */}
        <img src={t.avatar} alt="school logo" className="w-24 h-24 rounded-full border-1 border-[#b0b0b0] mx-auto my-6 bg-white object-cover" />
        {/* Quote */}
        <p className="text-xl text-[#1a2a49] mb-6 px-8">{t.quote}</p>
        {/* School name */}
        <div className={`font-semibold text-lg mb-2 ${t.schoolColor} px-8 ${t.button ? "pb-0" : "pb-6"}`}>{t.school}</div>
        {/* Optional button */}
        {t.button && (
          <button className="mt-2 px-8 py-3 bg-[#f4473e] text-white font-semibold rounded-tr-none rounded-br-xl rounded-bl-xl rounded-tl-none shadow hover:bg-red-700 transition text-base w-full">
            {t.buttonText}
          </button>
        )}
        </motion.div>
        </AnimatePresence>
      {/* Left Arrow */}
      <button onClick={prev} aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-[#e5e7eb] rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#f4473e] hover:text-white transition z-10 cursor-pointer">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      {/* Right Arrow */}
      <button onClick={next} aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-[#e5e7eb] rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#f4473e] hover:text-white transition z-10 cursor-pointer">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      </button>
      {/* Dots */}
      <div className="flex gap-3 mt-10 justify-center">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-[#f4473e] border-[#f4473e]' : 'bg-white border-[#e5e7eb]'} transition cursor-pointer`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 