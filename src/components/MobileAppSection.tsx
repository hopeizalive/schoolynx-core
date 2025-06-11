import React from 'react';

const MobileAppSection = () => {
  return (
    <section
      className="w-full py-20 relative overflow-hidden"
      style={{ backgroundColor: '#f4473e' }}
    >
      {/* Doodle background image: left side */}
      {/* <img
        src="https://t4.ftcdn.net/jpg/07/74/32/99/360_F_774329935_sFVGRqnMaqJ1oQDC79qSeCo7mAdz7Awo.jpg"
        alt="ERP Doodle Background Left"
        className="absolute left-0 top-0 w-[500px] h-full object-cover opacity-10 pointer-events-none select-none"
        style={{ zIndex: 1 }}
      />
      <img
        src="https://t4.ftcdn.net/jpg/07/74/32/99/360_F_774329935_sFVGRqnMaqJ1oQDC79qSeCo7mAdz7Awo.jpg"
        alt="ERP Doodle Background Right"
        className="absolute right-0 bottom-0 w-[400px] h-[300px] object-contain opacity-10 pointer-events-none select-none"
        style={{ zIndex: 1 }}
      /> */}
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
          <h2 className="text-4xl font-bold mb-4">Schoolynx School Management Mobile App</h2>
          <h3 className="text-2xl font-semibold mb-4">To manage the institute's daily operations at your fingertips</h3>
          <p className="mb-4 text-lg font-medium">iOS & Android Apps In Your Brand for Parents, Teachers & Students</p>
          <p className="mb-8 text-lg">
            You can now enjoy the benefit of having a dedicated school management mobile app in your institution's name that will communicate with the school ERP and stay connected with everyone.
          </p>
          <button className="bg-white text-[#f4473e] font-bold px-8 py-4 rounded-md text-lg shadow hover:bg-gray-100 transition">Explore APP Features</button>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection; 