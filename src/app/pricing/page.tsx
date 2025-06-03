import Link from 'next/link';
import React from 'react';
import { BsCalendar4Event } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { CiLogin } from 'react-icons/ci';
import { GrCertificate, GrMoney } from 'react-icons/gr';
import { IoBookOutline } from 'react-icons/io5';
import { LiaIdCardSolid } from 'react-icons/lia';
import { LuBookKey, LuLayoutDashboard, LuMessageSquareMore } from 'react-icons/lu';
import { MdAppRegistration, MdOutlineLibraryBooks, MdOutlineManageAccounts, MdOutlineTextsms } from 'react-icons/md';
import { PiExam, PiNewspaperClippingLight, PiStudent } from 'react-icons/pi';
import { RiTimelineView } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';

export default function PricingPage() {
  return (
    <>
    <div className='w-full bg-[#f2f2f2] py-22 relative'>
   <div className='flex- items-center justify-center w-full h-full'>
   <h1 className="text-4xl font-semibold text-gray-700 mb-2 text-center">Affordable Plans for Smart Institutes</h1>
        <p className="text-xl text-red-600 font-semibold text-center max-w-3xl mx-auto">
        All plans include free cloud hosting with encrypted security.
        </p>
   </div>

   {/* Pricing Toggle */}
   <div className="flex justify-center items-center space-x-4 absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white py-2 px-12 rounded-2xl shadow-md">
          <span className="text-gray-700 text-xl font-semibold">Monthly</span>
          <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
            <span className="sr-only ">Toggle pricing period</span>
            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
          </button>
          <span className="text-gray-700 text-xl font-semibold">Annual <span className="text-red-600 text-xl font-semibold">(Save 20%)</span></span>
        </div>
    </div>
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto ">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Standard Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl text-center text-[#674FE4] mb-6 font-semibold">STANDARD</h2>
              <div className="mb-6">
                <span className="text-2xl text-gray-900 font-semibold flex justify-center">$ 999</span>
                <p className="text-sm text-gray-700 flex justify-center pt-2">(billed yearly)</p>
              </div>
              <Link href="/" className='font-medium text-gray-700 cursor-pointer flex justify-center items-center border-2 border-[#674FE4] rounded-full px-6 py-1 w-fit mx-auto text-[#674FE4] text-xl mb-6'>Buy Standard</Link>

              <div className='border-b-2 border-gray-200'></div>
             
              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">21 Core Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">17 Standard Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
            
                  <span className="text-gray-600 line-through">10 Premium Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                 
                  <span className="text-gray-600 line-through">12 Ultimate Modules</span>
                </li>
              </ul>

              <div className='border-b-2 border-gray-200'></div>

              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Unlimited Users</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">One to one Online training</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Automatic Updates</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Email & Phone support</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Onboarding data & configuration</span>
                </li>
                
              </ul>
            </div>
            <Link href="/" className='font-medium cursor-pointer flex justify-center items-center rounded-xl px-6 py-1 w-[80%] mx-auto bg-[#674FE4] text-white text-xl mb-6'>Contact Us</Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl text-center text-[#ff8b00] mb-6 font-semibold uppercase">Premium</h2>
              <div className="mb-6">
                <span className="text-2xl text-gray-900 font-semibold flex justify-center">$ 1399</span>
                <p className="text-sm text-gray-700 flex justify-center pt-2">(billed yearly)</p>
              </div>
              <Link href="/" className='font-medium cursor-pointer flex justify-center items-center border-2 border-[#ff8b00] rounded-full px-6 py-1 w-fit mx-auto text-[#ff8b00] text-xl mb-6'>Buy Standard</Link>

              <div className='border-b-2 border-gray-200'></div>
             
              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">21 Core Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">17 Standard Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">10 Premium Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                 
                  <span className="text-gray-600 line-through">12 Ultimate Modules</span>
                </li>
              </ul>

              <div className='border-b-2 border-gray-200'></div>

              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Unlimited Users</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">One to one Online training</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Automatic Updates</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Email & Phone support</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Onboarding data & configuration</span>
                </li>
                
              </ul>
            </div>
            <Link href="/" className='font-medium cursor-pointer flex justify-center items-center rounded-xl px-6 py-1 w-[80%] mx-auto bg-[#ff8b00] text-white text-xl mb-6'>Contact Us</Link>
          </div>

          {/* Ultimate Plan */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl text-center text-[#E84C3D] mb-6 font-semibold uppercase">Ultimate</h2>
              <div className="mb-6">
                <span className="text-2xl text-gray-900 font-semibold flex justify-center">$ 1699</span>
                <p className="text-sm text-gray-700 flex justify-center pt-2">(billed yearly)</p>
              </div>
              <Link href="/" className='font-medium cursor-pointer flex justify-center items-center border-2 border-[#E84C3D] rounded-full px-6 py-1 w-fit mx-auto text-[#E84C3D] text-xl mb-6'>Buy Ultimate</Link>

              <div className='border-b-2 border-gray-200'></div>
             
              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">21 Core Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">17 Standard Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">10 Premium Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">12 Ultimate Modules</span>
                </li>
              </ul>

              <div className='border-b-2 border-gray-200'></div>

              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Unlimited Users</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">One to one Online training</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Automatic Updates</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Email & Phone support</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Onboarding data & configuration</span>
                </li>
                
              </ul>
            </div>
            <Link href="/" className='font-medium cursor-pointer flex justify-center items-center rounded-xl px-6 py-1 w-[80%] mx-auto bg-[#E84C3D] text-white text-xl mb-6'>Contact Us</Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl text-center text-[#08AD69] mb-6 font-semibold uppercase">Enterprise</h2>
              <div className="mb-6">
              <Link href="/" className='font-medium cursor-pointer flex justify-center items-center bg-[#08AD69] rounded-full px-6 py-1 w-fit mx-auto text-white text-xl mb-6'>Contact Sales</Link>
              </div>
              <Link href="/" className='font-medium cursor-pointer flex justify-center items-center border-2 border-[#08AD69] rounded-full px-6 py-1 w-fit mx-auto text-[#08AD69] text-xl mb-6'>Buy Enterprise</Link>

              <div className='border-b-2 border-gray-200'></div>
             
              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">21 Core Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">17 Standard Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">10 Premium Modules</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">12 Ultimate Modules</span>
                </li>
              </ul>

              <div className='border-b-2 border-gray-200'></div>

              <ul className="space-y-4 py-8">
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Unlimited Users</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">One to one Online training</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Automatic Updates</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Email & Phone support</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Onboarding data & configuration</span>
                </li>
                <li className="flex items-center font-semibold text-lg">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600">Product source code</span>
                </li>
                
              </ul>
            </div>
            <Link href="/" className='font-medium cursor-pointer flex justify-center items-center rounded-xl px-6 py-1 w-[80%] mx-auto bg-[#E84C3D] text-white text-xl mb-6'>Contact Us</Link>
          </div>

        </div>

        {/* Modules Section */}
        <section className="py-12  w-[100%] mx-auto mt-12 bg-white">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-6">
          Core Modules (21)
          </h2>
          
          <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-between px-4 gap-8">

     <Link href={"#"} className='flex items-center gap-6'>
     <IoBookOutline size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Courses and Batches</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <GrCertificate  size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Certificate Generator</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Student Information</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CgProfile size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Human Resources</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuLayoutDashboard size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Multiple Dashboards</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuBookKey size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
Employee / Teacher Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdAppRegistration size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Attendance</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Admission</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CiLogin size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Students / Parents Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <RiTimelineView size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Timetable</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiNewspaperClippingLight size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      News Management</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuMessageSquareMore size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Messaging System</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineLibraryBooks size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Gradebook</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiExam size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>   
Examination</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineManageAccounts size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      User Management</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineTextsms size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      SMS Integration</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineManageAccounts size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      User Management</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <BsCalendar4Event size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      School / Events Calendar</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <TbReportAnalytics size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Report Center</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LiaIdCardSolid size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      ID Card Generator</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <GrMoney size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
Finance</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Custom Student Remarks</p>
     </Link>
      </div>
    </section>

    <section className="py-12 bg-white w-[100%] mx-auto ">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-6">
          Standard Modules (17)
          </h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-between px-4 gap-8">

     <Link href={"#"} className='flex items-center gap-6'>
     <IoBookOutline size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Courses and Batches</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <GrCertificate  size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Certificate Generator</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Student Information</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CgProfile size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Human Resources</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuLayoutDashboard size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Multiple Dashboards</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuBookKey size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
Employee / Teacher Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdAppRegistration size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Attendance</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Admission</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CiLogin size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Students / Parents Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <RiTimelineView size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Timetable</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiNewspaperClippingLight size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      News Management</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuMessageSquareMore size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Messaging System</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineLibraryBooks size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Gradebook</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiExam size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>   
Examination</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineManageAccounts size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      User Management</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineTextsms size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      SMS Integration</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdOutlineManageAccounts size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      User Management</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <BsCalendar4Event size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      School / Events Calendar</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <TbReportAnalytics size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Report Center</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LiaIdCardSolid size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      ID Card Generator</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <GrMoney size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
Finance</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Custom Student Remarks</p>
     </Link>
      </div>
    </section>

    <section className="py-12 bg-white [100%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-6">
          Premium Modules (10)
          </h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-between px-4 gap-8">

     <Link href={"#"} className='flex items-center gap-6'>
     <IoBookOutline size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Courses and Batches</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <GrCertificate  size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Certificate Generator</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Student Information</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CgProfile size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Human Resources</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuLayoutDashboard size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Multiple Dashboards</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuBookKey size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
Employee / Teacher Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdAppRegistration size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Attendance</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Admission</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CiLogin size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Students / Parents Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <RiTimelineView size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Timetable</p>
     </Link>
     
      </div>
    </section>

    <section className="py-12 bg-white w-[100%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-6">
          Ultimate Modules (12)
          </h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-between px-4 gap-8">

     <Link href={"#"} className='flex items-center gap-6'>
     <IoBookOutline size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Courses and Batches</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <GrCertificate  size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Certificate Generator</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Student Information</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CgProfile size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>Human Resources</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuLayoutDashboard size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Multiple Dashboards</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <LuBookKey size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
Employee / Teacher Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <MdAppRegistration size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Attendance</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <PiStudent size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Student Admission</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <CiLogin size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Students / Parents Login</p>
     </Link>
     <Link href={"#"} className='flex items-center gap-6'>
     <RiTimelineView size={35} className='text-red-600'/>
      <p className='text-gray-700 text-md hover:underline'>
      Timetable</p>
     </Link>
     
      </div>
    </section>
      </div>
    </div>

    {/* --- Custom Section from Screenshot --- */}
    {/* CTA Bar */}
    <div className="w-full bg-[#1a2d52] py-10 flex flex-col items-center justify-center">
      <h2 className="text-white text-2xl md:text-2xl font-semibold mb-6 text-center">Can't decide which plan is right for you?</h2>
      <div className="flex gap-4 mb-2">
        <button className="bg-[#ff5c4d] hover:bg-[#e84c3d] text-white font-semibold px-8 py-2 rounded-md text-lg transition">Book A Demo</button>
        <button className="border border-[#ff5c4d] text-[#ff5c4d] hover:bg-[#ff5c4d] hover:text-white font-semibold px-8 py-2 rounded-md text-lg transition">Connect With Expert</button>
      </div>
    </div>

    {/* Logos Section */}
    <div className="w-full bg-[#fff5f5] py-10 flex flex-col items-center">
      <h3 className="text-xl md:text-2xl font-semibold text-[#1a2d52] mb-8 text-center">Loved by 40,000+ Institutes Around the World!</h3>
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {[...Array(14)].map((_, i) => (
          <img key={i} src={`https://via.placeholder.com/80?text=Logo+${i+1}`} alt={`Institute Logo ${i+1}`} className="rounded-full bg-white shadow-md p-2 w-20 h-20 object-contain" />
        ))}
      </div>
    </div>

    {/* Testimonials Section */}
    <div className="w-full bg-white py-10 flex flex-col items-center">
      <h3 className="text-xl md:text-2xl font-semibold text-[#1a2d52] mb-8 text-center">Customer Testimonials</h3>
      <div className="flex flex-col md:flex-row gap-8 justify-center w-full max-w-4xl">
        <div className="border-2 border-[#ff5c4d] rounded-lg p-6 flex-1 bg-[#fff] relative">
          <svg className="absolute -top-6 left-6 w-10 h-10 text-[#ff5c4d]" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 002 11v1a5 5 0 005 5h.17A3.001 3.001 0 0110 14v-1a3 3 0 00-2.83-3H7.17z" /></svg>
          <p className="text-gray-700 mb-4">This system is a great boon for us. Thank you, Team Foradian, for making us successful! In terms of administrative reforms, we were able to run in no time that in a brick-and-mortar way may have taken so many years. Schoolynx is a true disruption in the education world.</p>
          <div className="flex items-center gap-2 mt-4">
            <img src="https://via.placeholder.com/32x32?text=L" alt="Laksh Career Academy" className="w-8 h-8 rounded-full" />
            <span className="font-semibold text-[#1a2d52]">Laksh Career Academy</span>
          </div>
        </div>
        <div className="border-2 border-[#ff5c4d] rounded-lg p-6 flex-1 bg-[#fff] relative">
          <svg className="absolute -top-6 left-6 w-10 h-10 text-[#ff5c4d]" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 002 11v1a5 5 0 005 5h.17A3.001 3.001 0 0110 14v-1a3 3 0 00-2.83-3H7.17z" /></svg>
          <p className="text-gray-700 mb-4">Schoolynx is an all-in-one school management software. You have got everything in it. It manages attendance, grade book, fees collection, and even HR.</p>
          <div className="flex items-center gap-2 mt-4">
            <img src="https://via.placeholder.com/32x32?text=W" alt="Wellspring International School, Vietnam" className="w-8 h-8 rounded-full" />
            <span className="font-semibold text-[#1a2d52]">Wellspring International School, Vietnam</span>
          </div>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="w-full bg-white py-10 flex flex-col items-center">
      <h3 className="text-xl md:text-2xl font-semibold text-[#1a2d52] mb-8 text-center">Frequently Asked Questions</h3>
      <div className="w-full max-w-3xl mx-auto">
        <details className="mb-4 border rounded-lg">
          <summary className="cursor-pointer px-6 py-4 font-semibold text-[#1a2d52]">What is Schoolynx?</summary>
          <div className="px-6 pb-4 text-gray-700">Schoolynx is a comprehensive school management software for educational institutions.</div>
        </details>
        <details className="mb-4 border rounded-lg">
          <summary className="cursor-pointer px-6 py-4 font-semibold text-[#1a2d52]">How is Schoolynx different from other school management software?</summary>
          <div className="px-6 pb-4 text-gray-700">Schoolynx offers a wide range of modules, cloud hosting, and excellent support, making it unique.</div>
        </details>
        <details className="mb-4 border rounded-lg">
          <summary className="cursor-pointer px-6 py-4 font-semibold text-[#1a2d52]">What kind of software programs do I require to run Schoolynx?</summary>
          <div className="px-6 pb-4 text-gray-700">Schoolynx is cloud-based and requires only a web browser and internet connection.</div>
        </details>
        <details className="mb-4 border rounded-lg">
          <summary className="cursor-pointer px-6 py-4 font-semibold text-[#1a2d52]">Can Schoolynx ERP software be customized for my Institute?</summary>
          <div className="px-6 pb-4 text-gray-700">Yes, Schoolynx can be customized to fit your institute's needs.</div>
        </details>
        <details className="mb-4 border rounded-lg">
          <summary className="cursor-pointer px-6 py-4 font-semibold text-[#1a2d52]">Does Schoolynx provide data backup facility?</summary>
          <div className="px-6 pb-4 text-gray-700">Yes, Schoolynx provides data backup storage facility. Hassle-free customers can easily retrieve their data.</div>
        </details>
        <div className="px-6 pt-2 text-[#ff5c4d] cursor-pointer text-right text-sm hover:underline">Read more questions and answers &gt;</div>
      </div>
    </div>

    {/* Bottom CTA with Rocket */}
    <div className="w-full bg-[#f9fafc] py-12 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="flex-shrink-0 flex justify-center items-center">
        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80" alt="Rocket" className="w-48 h-48 object-contain" />
      </div>
      <div className="max-w-lg">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-4">Kickstart your school automation today with Schoolynx.</h3>
        <p className="text-lg text-gray-700 mb-2">Book a one-on-one demo or start <span className="font-bold">14 days free trial today</span></p>
      </div>
    </div>
    {/* --- End Custom Section --- */}
    </>
  );
} 