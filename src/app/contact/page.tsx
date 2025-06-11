"use client";

import React, { useState } from 'react';

type ResultType = { type: 'success' | 'error'; message: string } | null;

export default function ContactPage() {
  const [interest, setInterest] = useState('use');

  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    location: '',
    interest: 'use',
    message: '',
    captcha: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultType>(null);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleInterest = (value: any) => {
    setForm({ ...form, interest: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setResult({ type: 'success', message: 'Your message has been sent!' });
        setForm({
          name: '',
          email: '',
          contact: '',
          location: '',
          interest: 'use',
          message: '',
          captcha: '',
        });
      } else {
        setResult({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (err) {
      setResult({ type: 'error', message: 'Network error.' });
    }
    setLoading(false);
  };
  
  return (
    <div className="min-h-screen pt-12 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Interested in Schoolynx School Management System?</h1>
        <p className='text-2xl text-gray-400 mb-12 text-center'>We'd love to hear from you!</p>

        {/* Contact Us Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="bg-white p-8 col-span-2">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-base font-semibold text-gray-800 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
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
                    value={form.email}
                    onChange={handleChange}
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
                    value={form.contact}
                    onChange={handleChange}
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
                    value={form.location}
                    onChange={handleChange}
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
                        form.interest === 'use'
                          ? 'bg-gray-800 text-white border-gray-800'
                          : 'bg-white text-gray-800 border-gray-300'
                      }`}
                      onClick={() => handleInterest('use')}
                    >
                      I want to use Schoolynx
                      <div className={`block text-sm font-normal ${form.interest === 'use' ? 'text-gray-200' : 'text-gray-500'}`}>Manage my institution</div>
                    </button>
                    <button
                      type="button"
                      className={`cursor-pointer flex-1 px-6 py-4 rounded-lg border-2 font-bold text-lg focus:outline-none  transition-all duration-150 ${
                        form.interest === 'resell'
                          ? 'bg-gray-800 text-white border-gray-800 shadow-md'
                          : 'bg-white text-gray-800 border-gray-300'
                      }`}
                      onClick={() => handleInterest('resell')}
                    >
                      I want to resell Schoolynx
                      <div className={`block text-sm font-normal ${form.interest === 'resell' ? 'text-gray-200' : 'text-gray-500'}`}>Become a partner</div>
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
                    value={form.message}
                    onChange={handleChange}
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
                    id="captcha"
                    value={form.captcha}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md focus:ring-2 focus:ring-red-500 focus:bg-white focus:border-red-500 text-base"
                    placeholder="Captcha"
                  />
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold text-xl px-6 py-2 rounded transition w-40"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
                {result && (
                  <div className={`mt-4 text-lg font-semibold ${result.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {result.message}
                  </div>
                )}
              </form>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg col-span-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quick Contact</h3>
              <h3 className="text-xl font-semibold text-red-600 hover:underline cursor-pointer">+91-8047-0918-07</h3>
              <h3 className="text-lg font-semibold text-red-600 mb-4 hover:underline cursor-pointer">sales@Schoolynx.com</h3>
              <hr className='text-gray-300'/>
              <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Contacts</h3>
                <div className='flex items-center gap-4'>
                  <div>
                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740" alt=""  className='w-16 h-16 rounded-full'/>
                  </div>
                  <div>
                    <h3>Sharath Krishnan</h3>
                    <p className="text-md font-semibold text-red-600 hover:underline cursor-pointer">+91-8095-6716-02</p>
                    <p className="text-sm font-semibold text-red-600 mb-2 hover:underline cursor-pointer">sharath@foradian.com</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div>
                    <img src="https://img.freepik.com/free-photo/portrait-smiling-young-man-rubbing-his-hands_171337-10297.jpg?semt=ais_items_boosted&w=740" alt=""  className='w-16 h-16 rounded-full'/>
                  </div>
                  <div>
                    <h3>Arjun T.P</h3>
                    <p className="text-md font-semibold text-red-600 hover:underline cursor-pointer">+91-7349-1213-33</p>
                    <p className="text-sm font-semibold text-red-600 mb-4 hover:underline cursor-pointer">arjun@Schoolynx.com</p>
                  </div>
                </div>
               
                <hr className='text-gray-300'/>

                <div>

               
                  <h4 className="text-2xl font-semibold text-gray-800 mb-4">Address</h4>
                  <p className="text-gray-600">
                    Office No.108 Iqra IT Park defence View Phase II,<br />
                    Shaheed-i-Milat Road Karachi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 