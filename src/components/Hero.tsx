import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-blue-600 dark:text-blue-400">Smart School Management</span> for the Digital Age
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Revolutionize the way your school operates. SchooLnyx is a powerful, all-in-one school management ERP system that streamlines academics, administration, finance, attendance, communication, and more — all from one unified platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#features" 
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 text-center"
              >
                Explore Features
              </Link>
              <Link 
                href="#contact" 
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300 text-center"
              >
                Request Demo
              </Link>
            </div>
            <div className="mt-8 flex items-center text-gray-500 dark:text-gray-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800"></div>
                ))}
              </div>
              <span className="ml-3">Trusted by schools worldwide</span>
            </div>
          </div>
          <div className="relative w-full max-w-lg lg:max-w-xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-30 animate-pulse"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="p-5 bg-gray-50 dark:bg-gray-700">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-auto font-medium text-sm text-gray-500 dark:text-gray-400">SchoolNyx Dashboard</div>
                </div>
              </div>
              <div className="p-6">
                <div className="bg-gray-100 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-center text-gray-500 dark:text-gray-400">Dashboard Preview Image</p>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 