import React from 'react';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Resources</h1>
        
        {/* Blog Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Latest Trends in School Management</h3>
              <p className="text-gray-600 mb-4">Discover the latest trends and innovations in school management technology.</p>
              <a href="#" className="text-red-600 hover:text-red-700 font-medium">Read More →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Transformation in Education</h3>
              <p className="text-gray-600 mb-4">How schools are embracing digital transformation for better management.</p>
              <a href="#" className="text-red-600 hover:text-red-700 font-medium">Read More →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Success Stories</h3>
              <p className="text-gray-600 mb-4">Real stories of how schools are achieving better results with Schoolynx.</p>
              <a href="#" className="text-red-600 hover:text-red-700 font-medium">Read More →</a>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Success Story: ABC School</h3>
              <p className="text-gray-600 mb-4">How ABC School transformed their management system and improved efficiency by 200%.</p>
              <a href="#" className="text-red-600 hover:text-red-700 font-medium">View Case Study →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Success Story: XYZ Academy</h3>
              <p className="text-gray-600 mb-4">XYZ Academy&apos;s journey to digital transformation with Schoolynx.</p>
              <a href="#" className="text-red-600 hover:text-red-700 font-medium">View Case Study →</a>
            </div>
          </div>
        </div>

        {/* Ebook Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Ebooks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Complete Guide to School Management</h3>
              <p className="text-gray-600 mb-4">A comprehensive guide to modern school management practices and tools.</p>
              <a href="#" className="text-red-600 hover:text-red-700 font-medium">Download Ebook →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Digital Transformation in Education</h3>
              <p className="text-gray-600 mb-4">Learn how to successfully implement digital transformation in your school.</p>
              <a href="#" className="text-red-600 hover:text-red-700 font-medium">Download Ebook →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 