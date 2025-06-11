import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const images = [
  { src: '/assets/home_image_1.png', alt: 'Fedena School Management Software Dashboard' },
  { src: '/assets/home_image_2.png', alt: 'Fedena Attendance Tracking' },
  { src: '/assets/home_image_3.png', alt: 'Fedena Mobile App View' },
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
    <div className="bg-white pt-12 pb-20 md:pt-16 md:pb-28">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative">
          <div className=" w-[40%] text-center lg:text-left">
            <span className="inline-block bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-md mb-3 lg:mb-4">All-In-One</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              College and School Management Software
            </h1>
            <p className="text-base sm:text-xl text-gray-700 mb-6 md:mb-8">
            <strong>Automate Institute Daily Operations, Generate Insightful Reports, Make Better & Faster Decisions.</strong> Schoolynx is an online school management system software that simplifies the institute's academic & administrative process effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 items-center">
              <Link 
                href="#"
                className="px-6 py-2 sm:px-0 sm:py-2 bg-white text-red-600 border-2 border-red-600 font-semibold rounded-md hover:bg-red-50 transition duration-300 text-center text-base sm:text-lg w-full"
              >
                Request Live Demo
              </Link>
              <Link 
                href="#"
                className="px-6 py-2 sm:px-0 sm:py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300 text-center text-base sm:text-lg w-full"
              >
                Pricing & Plans
              </Link>
            </div>
          </div>
          <div className="w-[85%] mt-8 lg:mt-0 absolute -right-[16%] -top-[52%]">
            <div className="aspect-[4/3] relative overflow-hidden">
              {images.map((image, index) => (
                <div className="relative w-full aspect-[4/3]">
                {images.map((image, index) => (
                  <div 
                    key={image.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image 
                      src={image.src} 
                      alt={image.alt}
                      layout="fill"
                      objectFit="contain"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
              ))}
            </div>
             {/* Navigation dots for slider (optional) */}
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-red-600' : 'bg-gray-300 hover:bg-gray-400'} transition-colors`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;