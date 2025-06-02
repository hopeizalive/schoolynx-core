import React from 'react';

export default function PartnerPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Partner With Us</h1>
        
        {/* Why Partner Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Partner With Schoolynx?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Benefits of Partnership</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access to cutting-edge school management technology</li>
                <li>Revenue sharing opportunities</li>
                <li>Dedicated partner support</li>
                <li>Marketing and sales enablement</li>
                <li>Training and certification programs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Partner Requirements</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Experience in education technology</li>
                <li>Strong market presence</li>
                <li>Technical expertise</li>
                <li>Commitment to customer success</li>
                <li>Alignment with our values</li>
              </ul>
            </div>
          </div>
        </div>

        {/* OEM Partner Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">OEM Partnership</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">White Label Solutions</h3>
            <p className="text-gray-600 mb-6">
              Customize and rebrand Schoolynx to match your brand identity while leveraging our powerful school management platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Custom Branding</h4>
                <p className="text-gray-600">Fully customizable interface with your brand elements</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">API Access</h4>
                <p className="text-gray-600">Complete API access for seamless integration</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Dedicated Support</h4>
                <p className="text-gray-600">24/7 technical support for your customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 