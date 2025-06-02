import React from 'react';

export default function AboutPage() {
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

        {/* Core Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
              <p className="text-gray-600 mb-2">CEO & Founder</p>
              <p className="text-gray-500 text-sm">20+ years in education technology</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
              <p className="text-gray-600 mb-2">CTO</p>
              <p className="text-gray-500 text-sm">Former tech lead at major edtech companies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mike Johnson</h3>
              <p className="text-gray-600 mb-2">Head of Product</p>
              <p className="text-gray-500 text-sm">15+ years in product management</p>
            </div>
          </div>
        </div>

        {/* Our Customers Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Customers</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              We are proud to serve educational institutions of all sizes, from small private schools 
              to large international institutions. Our customers trust us to provide reliable, 
              innovative solutions for their school management needs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">School Logo 1</span>
              </div>
              <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">School Logo 2</span>
              </div>
              <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">School Logo 3</span>
              </div>
              <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">School Logo 4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Media and Press Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Media and Press</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Latest Press Releases</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-red-600 hover:text-red-700">
                    Schoolynx Launches New Mobile App →
                  </a>
                </li>
                <li>
                  <a href="#" className="text-red-600 hover:text-red-700">
                    Partnership with Leading Education Network →
                  </a>
                </li>
                <li>
                  <a href="#" className="text-red-600 hover:text-red-700">
                    Schoolynx Reaches 1000+ Schools Milestone →
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Media Coverage</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-red-600 hover:text-red-700">
                    Featured in Education Technology Magazine →
                  </a>
                </li>
                <li>
                  <a href="#" className="text-red-600 hover:text-red-700">
                    Interview with TechCrunch →
                  </a>
                </li>
                <li>
                  <a href="#" className="text-red-600 hover:text-red-700">
                    Coverage in Education Week →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Awards and Recognition Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Awards and Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2023</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Best School Management Software - EdTech Awards</li>
                <li>Innovation in Education Technology - Global Tech Awards</li>
                <li>Top 10 Education Startups - TechCrunch</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2022</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Excellence in Customer Service - SaaS Awards</li>
                <li>Best Mobile App - Education Technology Awards</li>
                <li>Rising Star in EdTech - Global Education Summit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 