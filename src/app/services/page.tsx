import React from 'react';
import Link from 'next/link';

const Services = () => {
  return (
    <div className="min-h-screen pt-12 pb-12 px-4">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8 text-center">Schoolynx Pro Services</h1>
      <p className='text-2xl text-gray-400 mb-12 text-center'>Checkout the expert services offered by the Schoolynx team</p>

      <div className="mb-12">
        <div className="max-w-3xl mx-auto">
       <p className='text-md text-gray-800 mb-5'>Your continued satisfaction with Schoolynx is our #1 Priority. We are proud of our customer support record and we aim to help you in every way we possibly can. Here are the services we offer to help you get started with Schoolynx school management information system – the most effective software resource for your institution.</p>

      <div className='mb-5'>
        <h2 className='text-xl text-gray-800 mb-3'>Online Training</h2>
      <p className='text-md text-gray-800'>Our online training modules are an ideal way for you or your staff to gain knowledge at your own pace. Essentials covers the basics to a good beginner level. Go on to become a Certified Schoolynx Professional.</p>
      </div>
      <div className='mb-5'>
        <h2 className='text-xl text-gray-800 mb-3'>Implementation Services</h2>
      <p className='text-md text-gray-800'>We provide assistance for implementing Schoolynx enterprise software in your institution.</p>
      </div>
      <div className='mb-5'>
        <h2 className='text-xl text-gray-800 mb-3'>Migration Services</h2>
      <p className='text-md text-gray-800'>We also offer a data migration services if you have another enterprise software or student information system running in your institution. Pricing depends on the complexity of the data.</p>
      </div>
      <div className='mb-8'>
        <h2 className='text-xl text-gray-800 mb-3'>Customization Services</h2>
      <p className='text-md text-gray-800'>Schoolynx management information system is open for customization to suit the needs and requirements of your institution. We offer customized plugin development for you.</p>
      </div>
          
          <Link href={"/contact"} className='bg-red-500 hover:bg-red-600 text-white font-bold text-xl px-6 py-2 rounded transition w-40'>
          Contact Us
          </Link>
         
        </div>
      </div>
    </div>
  </div>
  );
};

export default Services; 