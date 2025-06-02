import React from 'react'

export default function OurStoryPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Schoolynx</h1>

        {/* Our Story Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Schoolynx was founded with a vision to revolutionize school management through technology. 
              Our journey began when a group of educators and technologists came together to solve the 
              challenges faced by modern educational institutions.
            </p>
            <p className="text-gray-600">
              Today, we are proud to serve thousands of schools worldwide, helping them streamline their 
              operations and focus on what matters most - providing quality education to students.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
