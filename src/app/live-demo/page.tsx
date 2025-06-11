"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const LiveDemo = () => {
  const [interest, setInterest] = useState('use');
  return (
    <div className="min-h-screen pt-12 pb-12 px-4">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Interested in Schoolynx School Management System?</h1>
      <p className='text-2xl text-gray-400 mb-12 text-center'>We'd love to hear from you!</p>

      {/* Contact Us Section */}
      <div className="mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-8 col-span-2">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-base font-semibold text-gray-800 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md focus:ring-2 focus:ring-red-500 focus:bg-white focus:border-red-500 text-base"
                  placeholder="Your Name"
                  required
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-base font-semibold text-gray-800 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md focus:ring-2 focus:ring-red-500 focus:bg-white focus:border-red-500 text-base"
                  placeholder="Email"
                  required
                />
              </div>
              {/* Contact Number */}
              <div>
                <label htmlFor="contact" className="block text-base font-semibold text-gray-800 mb-1">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact"
                  className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md focus:ring-2 focus:ring-red-500 focus:bg-white focus:border-red-500 text-base"
                  placeholder="Contact Number with Country Code"
                  required
                />
              </div>
              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-base font-semibold text-gray-800 mb-1">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md focus:ring-2 focus:ring-red-500 focus:bg-white focus:border-red-500 text-base"
                  placeholder="City Name"
                  required
                />
              </div>
              {/* Interest Selection */}
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-2">
                  Please Select Your Interest <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    className={`flex-1 px-6 py-4 rounded-lg border-2 font-bold text-lg focus:outline-none transition-all duration-150 cursor-pointer ${
                      interest === 'use'
                        ? 'bg-gray-800 text-white border-gray-800'
                        : 'bg-white text-gray-800 border-gray-300'
                    }`}
                    onClick={() => setInterest('use')}
                  >
                    I want to use Schoolynx
                    <div className={`block text-sm font-normal ${interest === 'use' ? 'text-gray-200' : 'text-gray-500'}`}>Manage my institution</div>
                  </button>
                  <button
                    type="button"
                    className={`cursor-pointer flex-1 px-6 py-4 rounded-lg border-2 font-bold text-lg focus:outline-none  transition-all duration-150 ${
                      interest === 'resell'
                        ? 'bg-gray-800 text-white border-gray-800 shadow-md'
                        : 'bg-white text-gray-800 border-gray-300'
                    }`}
                    onClick={() => setInterest('resell')}
                  >
                    I want to resell Schoolynx
                    <div className={`block text-sm font-normal ${interest === 'resell' ? 'text-gray-200' : 'text-gray-500'}`}>Become a partner</div>
                  </button>
                </div>
              </div>
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-base font-semibold text-gray-800 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md focus:ring-2 focus:ring-red-500 focus:bg-white focus:border-red-500 text-base resize-none"
                  placeholder="If you have any specific message about Schoolynx"
                ></textarea>
              </div>
              {/* Captcha Section */}
              <div className="mt-6">
                <label className="block text-base font-semibold text-[#15315b] mb-2">Enter Captcha:</label>
                <div className="mb-2">
                  <div className="inline-block bg-white px-3 py-1 rounded select-none" style={{ fontFamily: 'monospace', fontSize: '2rem', letterSpacing: '2px', fontWeight: 'bold', color: '#222', textShadow: '1px 1px 0 #aaa' }}>
                    mE!hW$
                  </div>
                </div>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md focus:ring-2 focus:ring-red-500 focus:bg-white focus:border-red-500 text-base"
                  placeholder="Captcha"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold text-xl px-6 py-2 rounded transition w-40"
              >
                Submit
              </button>
            </form>
          </div>
          
         
        </div>
      </div>
    </div>
  </div>
  );
};

export default LiveDemo; 