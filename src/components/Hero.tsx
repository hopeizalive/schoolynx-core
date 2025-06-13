import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const images = [
  { id:1, src: '/assets/home1.png', alt: 'Schoolynx School Management Software Dashboard' },
  { id:2, src: '/assets/home2.png', alt: 'Schoolynx Attendance Tracking' },
  { id:3, src: '/assets/home3.png', alt: 'Schoolynx Mobile App View' },
  { id:4, src: '/assets/home4.png', alt: 'Schoolynx Student/Employee Management' },
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="bg-white pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative">
          <div className=" w-[40%] text-center lg:text-left">
            <span className="inline-block bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-md mb-3 lg:mb-4">All-In-One</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Comprehensive ERP School Management System
            </h1>
            <p className="text-base sm:text-xl text-gray-700 mb-6 md:mb-8">
            <strong>Streamline Daily Activities, Access Smart Reports, Enable Quick & Informed Decisions. </strong> Schoolynx is a web-based school management tool that smoothly handles academic and administrative workflows.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 items-center">
              <Link 
                href="/live-demo"
                className="px-6 py-2 sm:px-0 sm:py-2 bg-white text-red-600 border-2 border-red-600 font-semibold rounded-md hover:bg-red-50 transition duration-300 text-center text-base sm:text-lg w-full"
              >
                Request Live Demo
              </Link>
              <Link 
                href="/pricing"
                className="px-6 py-2 sm:px-0 sm:py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300 text-center text-base sm:text-lg w-full"
              >
                Pricing & Plans
              </Link>
            </div>
          </div>
          <div className="w-[83%] mt-8 lg:mt-0 absolute -right-[14%] -top-[45%]">
            <div className="aspect-[4/3] relative overflow-hidden">
              {images.map((image, index) => (
                <div key={index} className="relative w-full aspect-[4/3] overflow-hidden">
                {images.map((image, index) => (
                  <div 
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image 
                      src={image.src} 
                      alt={image.alt}
                      layout="fill"
                      objectFit="contain"
                      priority={index === 0}
                      className='overflow-hidden'
                    />
                  </div>
                ))}
              </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;