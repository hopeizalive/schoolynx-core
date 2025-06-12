import React from 'react';

const MobileAppSection = () => {
  return (
    <section
      className="w-full py-20 relative overflow-hidden"
      style={{ backgroundColor: '#f4473e' }}
    >
      {/* Doodle background image: left side */}
       <img
        src="/assets/doodle_bg.png"
        alt="ERP Doodle Background Left"
        className="absolute left-0 top-0 w-full h-full object-cover opacity-10 pointer-events-none select-none"
        style={{ zIndex: 1 }}
      />
     
      {/* Solid red overlay in the center */}
      <div className="absolute left-1/4 right-1/4 top-0 bottom-0 bg-[#f4473e] z-10" />
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 z-20">
        {/* Left: Single Mobile Image */}
        <div className="flex-1 flex items-center justify-center mb-10 md:mb-0">
          <img
            src="/assets/mobile_app.png"
            alt="Schoolynx Mobile App UI"
            className="w-[822px] h-[520px] object-contain absolute"
            // style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
          />
        </div>
        {/* Right: Text Content */}
        <div className="flex-1 text-white md:pl-16">
          <h2 className="text-4xl font-bold mb-4">Schoolynx Educational Management Mobile App</h2>
          <h3 className="text-2xl font-semibold mb-4">Effortlessly handle daily institutional tasks from your fingertips</h3>
          <p className="mb-4 text-lg font-medium">Branded iOS & Android Apps for Parents, Teachers & Students</p>
          <p className="mb-8 text-lg">
            Experience the convenience of a dedicated school management app, fully customized with your institution’s name, seamlessly integrated with the ERP system to ensure constant connectivity for all stakeholders.
          </p>
          <button className="bg-white text-[#f4473e] font-bold px-8 py-4 rounded-md text-lg shadow hover:bg-gray-100 transition">Explore APP Features</button>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection; 