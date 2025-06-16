"use client";

import React, { useState } from 'react';

type FormData = {
  fullName: string;
  role: 'owner' | 'principal' | 'admin' | 'itStaff' | 'other';
  phoneNumber: string;
  whatsapp: string;
  email: string;
  schoolName: string;
  location: string;
  totalStudents: string;
  totalStaff: string;
  interests: string[];
  otherInterest: string;
  preferredDate: string;
  preferredTime: string;
  additionalNotes: string;
};

export default function LiveDemo() {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    role: 'owner',
    phoneNumber: '',
    whatsapp: '',
    email: '',
    schoolName: '',
    location: '',
    totalStudents: '',
    totalStaff: '',
    interests: [],
    otherInterest: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: ''
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleRoleChange = (role: FormData['role']) => {
    setForm({ ...form, role });
  };

  const handleInterestChange = (interest: string) => {
    setForm(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/live-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setResult({ type: 'success', message: 'Your demo request has been sent!' });
        setForm({
          fullName: '',
          role: 'owner',
          phoneNumber: '',
          whatsapp: '',
          email: '',
          schoolName: '',
          location: '',
          totalStudents: '',
          totalStaff: '',
          interests: [],
          otherInterest: '',
          preferredDate: '',
          preferredTime: '',
          additionalNotes: ''
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
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Request a Live Demo</h1>
        <p className='text-2xl text-gray-400 mb-12 text-center'>Experience Schoolynx in action!</p>

        <div className="mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white p-8 col-span-2">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Contact Person Section */}
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-800">👤 Contact Person</h2>
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-base font-semibold text-gray-800 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Role Selection */}
                  <div>
                    <label className="block text-base font-semibold text-gray-800 mb-3">
                      Role <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { value: 'owner', label: 'Owner' },
                        { value: 'principal', label: 'Principal' },
                        { value: 'admin', label: 'Admin' },
                        { value: 'itStaff', label: 'IT Staff' },
                        { value: 'other', label: 'Other' }
                      ].map((role) => (
                        <label 
                          key={role.value} 
                          className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                            form.role === role.value 
                              ? 'bg-red-50 border-red-500 text-red-700' 
                              : 'bg-white border-gray-200 hover:border-red-300'
                          }`}
                        >
                          <input
                            type="radio"
                            checked={form.role === role.value}
                            onChange={() => handleRoleChange(role.value as FormData['role'])}
                            className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
                          />
                          <span className="ml-3 font-medium">{role.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-base font-semibold text-gray-800 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base transition-colors"
                      placeholder="Enter your phone number with country code"
                      required
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label htmlFor="whatsapp" className="block text-base font-semibold text-gray-800 mb-1">
                      WhatsApp (if any)
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base transition-colors"
                      placeholder="Enter your WhatsApp number (optional)"
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base transition-colors"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                {/* School Info Section */}
                <div className="space-y-6 pt-8">
                  <h2 className="text-xl font-bold text-gray-800 border-b pb-2">🏫 School Info</h2>
                  
                  {/* School Name */}
                  <div>
                    <label htmlFor="schoolName" className="block text-base font-semibold text-gray-800 mb-1">
                      School Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      value={form.schoolName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base transition-colors"
                      placeholder="Enter your school name"
                      required
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block text-base font-semibold text-gray-800 mb-1">
                      City / Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      value={form.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base transition-colors"
                      placeholder="Enter your city name"
                      required
                    />
                  </div>

                  {/* Total Students */}
                  <div>
                    <label htmlFor="totalStudents" className="block text-base font-semibold text-gray-800 mb-1">
                      Total Students <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="totalStudents"
                      value={form.totalStudents}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base transition-colors"
                      placeholder="Enter total number of students"
                      min="0"
                      required
                    />
                  </div>

                  {/* Total Staff */}
                  <div>
                    <label htmlFor="totalStaff" className="block text-base font-semibold text-gray-800 mb-1">
                      Total Staff <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="totalStaff"
                      value={form.totalStaff}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base transition-colors"
                      placeholder="Enter total number of staff"
                      min="0"
                      required
                    />
                  </div>
                </div>

                {/* Interests Section */}
                <div className="space-y-4 pt-8">
                  <h2 className="text-xl font-bold text-gray-800 border-b pb-2">✅ Interested In (Select all that apply)</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Student Admission',
                      'Fee Management',
                      'Attendance',
                      'Exams & Result Cards',
                      'Timetable',
                      'Parent App',
                      'Daily Homework / Diary',
                      'SMS Alerts',
                      'Online Classes'
                    ].map((interest) => (
                      <label 
                        key={interest} 
                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                          form.interests.includes(interest)
                            ? 'bg-red-50 border-red-500 text-red-700'
                            : 'bg-white border-gray-200 hover:border-red-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={form.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                        />
                        <span className="ml-3 font-medium">{interest}</span>
                      </label>
                    ))}
                  </div>
                  
                  {/* Other Interest */}
                  <div className="mt-4">
                    <label htmlFor="otherInterest" className="block text-base font-semibold text-gray-800 mb-1">
                      Other:
                    </label>
                    <input
                      type="text"
                      id="otherInterest"
                      value={form.otherInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base transition-colors"
                      placeholder="Please specify if you have other interests"
                    />
                  </div>
                </div>

                {/* Preferred Contact Time */}
                <div className="space-y-6 pt-8">
                  <h2 className="text-xl font-bold text-gray-800 border-b pb-2">📅 When Should We Contact You?</h2>
                  
                  {/* Date */}
                  <div>
                    <label htmlFor="preferredDate" className="block text-base font-semibold text-gray-800 mb-1">
                      Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      value={form.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base transition-colors"
                      required
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-base font-semibold text-gray-800 mb-1">
                      Time <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="time"
                      id="preferredTime"
                      value={form.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="pt-8">
                  <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">💬 Anything Else?</h2>
                  <textarea
                    id="additionalNotes"
                    value={form.additionalNotes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base resize-none transition-colors"
                    placeholder="Please share any additional information or questions you may have..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold text-lg px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Request Demo'
                  )}
                </button>

                {result && (
                  <div className={`mt-4 text-lg font-semibold ${result.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {result.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 