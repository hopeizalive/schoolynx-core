import React from 'react';

export default function FaqPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Help & Support</h1>

        {/* Contact Us Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Office Address</h4>
                  <p className="text-gray-600">
                    Office No.108 Iqra IT Park defence View Phase II,<br />
                    Shaheed-i-Milat Road Karachi
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Phone</h4>
                  <p className="text-gray-600">+92-315-5814609</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-600">support@schoolynx.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Support</h3>
              <p className="text-gray-600 mb-4">Get help with technical issues and system-related queries.</p>
              <a href="#" className="text-red-600 hover:text-red-700 font-medium">Contact Support →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Training</h3>
              <p className="text-gray-600 mb-4">Access training materials and schedule training sessions.</p>
              <a href="#" className="text-red-600 hover:text-red-700 font-medium">View Training →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Services</h3>
              <p className="text-gray-600 mb-4">Explore our professional services and consulting options.</p>
              <a href="#" className="text-red-600 hover:text-red-700 font-medium">View Services →</a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How do I get started with Schoolynx?</h3>
              <p className="text-gray-600">
                Getting started is easy! Simply sign up for a free trial, and our team will guide you through the setup process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What kind of support do you offer?</h3>
              <p className="text-gray-600">
                We offer 24/7 technical support, training sessions, and comprehensive documentation to help you make the most of Schoolynx.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can I customize Schoolynx for my school?</h3>
              <p className="text-gray-600">
                Yes! Schoolynx is highly customizable to meet your school's specific needs. Contact our team to discuss your requirements.
              </p>
            </div>
          </div>
        </div>

        {/* API Playground Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">API Playground</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Developer Resources</h3>
            <p className="text-gray-600 mb-6">
              Explore our API documentation and test endpoints in our interactive API playground.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">API Documentation</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-red-600 hover:text-red-700">Getting Started Guide →</a>
                  </li>
                  <li>
                    <a href="#" className="text-red-600 hover:text-red-700">API Reference →</a>
                  </li>
                  <li>
                    <a href="#" className="text-red-600 hover:text-red-700">Authentication Guide →</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Tools</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-red-600 hover:text-red-700">API Playground →</a>
                  </li>
                  <li>
                    <a href="#" className="text-red-600 hover:text-red-700">SDK Downloads →</a>
                  </li>
                  <li>
                    <a href="#" className="text-red-600 hover:text-red-700">Postman Collection →</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 