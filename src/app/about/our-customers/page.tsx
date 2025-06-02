import React from 'react'

export default function OurCustomersPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
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
    </div>
  )
}
