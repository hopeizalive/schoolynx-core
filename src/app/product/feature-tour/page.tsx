"use client";

import Link from 'next/link';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

// Dynamically import icons
const BsCalendar4Event = dynamic(() => import('react-icons/bs').then(mod => mod.BsCalendar4Event), { ssr: false });
const CgProfile = dynamic(() => import('react-icons/cg').then(mod => mod.CgProfile), { ssr: false });
const CiLogin = dynamic(() => import('react-icons/ci').then(mod => mod.CiLogin), { ssr: false });
const GrCertificate = dynamic(() => import('react-icons/gr').then(mod => mod.GrCertificate), { ssr: false });
const GrMoney = dynamic(() => import('react-icons/gr').then(mod => mod.GrMoney), { ssr: false });
const IoBookOutline = dynamic(() => import('react-icons/io5').then(mod => mod.IoBookOutline), { ssr: false });
const LiaIdCardSolid = dynamic(() => import('react-icons/lia').then(mod => mod.LiaIdCardSolid), { ssr: false });
const LuBookKey = dynamic(() => import('react-icons/lu').then(mod => mod.LuBookKey), { ssr: false });
const LuLayoutDashboard = dynamic(() => import('react-icons/lu').then(mod => mod.LuLayoutDashboard), { ssr: false });
const LuMessageSquareMore = dynamic(() => import('react-icons/lu').then(mod => mod.LuMessageSquareMore), { ssr: false });
const MdAppRegistration = dynamic(() => import('react-icons/md').then(mod => mod.MdAppRegistration), { ssr: false });
const MdOutlineLibraryBooks = dynamic(() => import('react-icons/md').then(mod => mod.MdOutlineLibraryBooks), { ssr: false });
const MdOutlineManageAccounts = dynamic(() => import('react-icons/md').then(mod => mod.MdOutlineManageAccounts), { ssr: false });
const MdOutlineTextsms = dynamic(() => import('react-icons/md').then(mod => mod.MdOutlineTextsms), { ssr: false });
const PiExam = dynamic(() => import('react-icons/pi').then(mod => mod.PiExam), { ssr: false });
const PiNewspaperClippingLight = dynamic(() => import('react-icons/pi').then(mod => mod.PiNewspaperClippingLight), { ssr: false });
const PiStudent = dynamic(() => import('react-icons/pi').then(mod => mod.PiStudent), { ssr: false });
const RiTimelineView = dynamic(() => import('react-icons/ri').then(mod => mod.RiTimelineView), { ssr: false });
const TbReportAnalytics = dynamic(() => import('react-icons/tb').then(mod => mod.TbReportAnalytics), { ssr: false });

// Loading component for icons
const IconLoader = () => (
  <div className="w-8 h-8 bg-gray-200 animate-pulse rounded"></div>
);

// Module component with lazy loaded icon
const ModuleLink = ({ href, Icon, text }: { href: string; Icon: React.ComponentType<any>; text: string }) => (
  <Link href={href} className='flex items-center gap-6'>
    <Suspense fallback={<IconLoader />}>
      <Icon size={35} className='text-red-600' />
    </Suspense>
    <p className='text-gray-700 text-md hover:underline'>{text}</p>
  </Link>
);

export default function ProductPage() {
  return (
    <div className='w-full'>
        <section className="py-12 bg-white w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2d52] mb-8 text-center">
          Ultimate School ERP Software for all kind of Institutes
          </h2>
          <p className="text-xl md:text-2xl text-[#6d6e6f] mb-8 text-center">
          Schoolynx School ERP system has every feature you will ever need to run your institution efficiently
          </p>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8">
        {/* Left: Text */}
        <div className="flex-1 text-left">
          <p className="text-md text-gray-700 mb-6">
          School ERP Software is a platform which helps in managing the day to day academic and administrative activities from a single platform. Schoolynx provides user-friendly dashboards with login access for teachers, non-teaching staff, students, parents, and management personnel of your institution. The various modules available in school ERP software automate daily operations of your institution such as from students' admission to generating transfer certificates to digitizing the online learning experience all can be managed effortlessly .
          </p>
          <p className="text-md text-gray-700 mb-6">
          Schoolynx School ERP has modules to manage Timetable, Attendance, Online Class, Examinations, Gradebooks, Mobile Learning, Hostel, Library, Transportation, School Calendar, Events, and many more. It has a fully-fledged Human Resource module to manage the payroll and employee pay slips. The Finance module helps you to plan and allot different fee structures to students. Schoolynx School ERP System is also an excellent collaboration tool using its Task, Discussion, Poll, Blog, and Videoconference plugins. There is an internal messaging system within Schoolynx, but you can also integrate it with external communication tools like email and texting. To find out more about the school ERP system, scroll through the following descriptions, try the .
          </p>
        
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/assets/feature-product/1.png"
            alt="School Management Illustration"
            className="max-w-[500px] w-full h-auto"
          />
        </div>
      </div>
    </section>

    <section className="py-12 bg-white max-w-[85%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-6">
          Core Modules (21)
          </h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-between px-4 gap-8">

     <ModuleLink href="#" Icon={IoBookOutline} text="Courses and Batches" />
     <ModuleLink href="#" Icon={GrCertificate} text="Certificate Generator" />
     <ModuleLink href="#" Icon={PiStudent} text="Student Information" />
     <ModuleLink href="#" Icon={CgProfile} text="Human Resources" />
     <ModuleLink href="#" Icon={LuLayoutDashboard} text="Multiple Dashboards" />
     <ModuleLink href="#" Icon={LuBookKey} text="Employee / Teacher Login" />
     <ModuleLink href="#" Icon={MdAppRegistration} text="Student Attendance" />
     <ModuleLink href="#" Icon={PiStudent} text="Student Admission" />
     <ModuleLink href="#" Icon={CiLogin} text="Students / Parents Login" />
     <ModuleLink href="#" Icon={RiTimelineView} text="Timetable" />
     <ModuleLink href="#" Icon={PiNewspaperClippingLight} text="News Management" />
     <ModuleLink href="#" Icon={LuMessageSquareMore} text="Messaging System" />
     <ModuleLink href="#" Icon={MdOutlineLibraryBooks} text="Gradebook" />
     <ModuleLink href="#" Icon={PiExam} text="Examination" />
     <ModuleLink href="#" Icon={MdOutlineManageAccounts} text="User Management" />
     <ModuleLink href="#" Icon={MdOutlineTextsms} text="SMS Integration" />
     <ModuleLink href="#" Icon={BsCalendar4Event} text="School / Events Calendar" />
     <ModuleLink href="#" Icon={TbReportAnalytics} text="Report Center" />
     <ModuleLink href="#" Icon={LiaIdCardSolid} text="ID Card Generator" />
     <ModuleLink href="#" Icon={GrMoney} text="Finance" />
     <ModuleLink href="#" Icon={PiStudent} text="Custom Student Remarks" />
      </div>
    </section>

    <section className="py-12 bg-white max-w-[85%] mx-auto ">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-6">
          Standard Modules (17)
          </h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-between px-4 gap-8">

     <ModuleLink href="#" Icon={IoBookOutline} text="Courses and Batches" />
     <ModuleLink href="#" Icon={GrCertificate} text="Certificate Generator" />
     <ModuleLink href="#" Icon={PiStudent} text="Student Information" />
     <ModuleLink href="#" Icon={CgProfile} text="Human Resources" />
     <ModuleLink href="#" Icon={LuLayoutDashboard} text="Multiple Dashboards" />
     <ModuleLink href="#" Icon={LuBookKey} text="Employee / Teacher Login" />
     <ModuleLink href="#" Icon={MdAppRegistration} text="Student Attendance" />
     <ModuleLink href="#" Icon={PiStudent} text="Student Admission" />
     <ModuleLink href="#" Icon={CiLogin} text="Students / Parents Login" />
     <ModuleLink href="#" Icon={RiTimelineView} text="Timetable" />
     <ModuleLink href="#" Icon={PiNewspaperClippingLight} text="News Management" />
     <ModuleLink href="#" Icon={LuMessageSquareMore} text="Messaging System" />
     <ModuleLink href="#" Icon={MdOutlineLibraryBooks} text="Gradebook" />
     <ModuleLink href="#" Icon={PiExam} text="Examination" />
     <ModuleLink href="#" Icon={MdOutlineManageAccounts} text="User Management" />
     <ModuleLink href="#" Icon={MdOutlineTextsms} text="SMS Integration" />
     <ModuleLink href="#" Icon={MdOutlineManageAccounts} text="User Management" />
     <ModuleLink href="#" Icon={BsCalendar4Event} text="School / Events Calendar" />
     <ModuleLink href="#" Icon={TbReportAnalytics} text="Report Center" />
     <ModuleLink href="#" Icon={LiaIdCardSolid} text="ID Card Generator" />
     <ModuleLink href="#" Icon={GrMoney} text="Finance" />
     <ModuleLink href="#" Icon={PiStudent} text="Custom Student Remarks" />
      </div>
    </section>

    <section className="py-12 bg-white max-w-[85%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-6">
          Premium Modules (10)
          </h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-between px-4 gap-8">

     <ModuleLink href="#" Icon={IoBookOutline} text="Courses and Batches" />
     <ModuleLink href="#" Icon={GrCertificate} text="Certificate Generator" />
     <ModuleLink href="#" Icon={PiStudent} text="Student Information" />
     <ModuleLink href="#" Icon={CgProfile} text="Human Resources" />
     <ModuleLink href="#" Icon={LuLayoutDashboard} text="Multiple Dashboards" />
     <ModuleLink href="#" Icon={LuBookKey} text="Employee / Teacher Login" />
     <ModuleLink href="#" Icon={MdAppRegistration} text="Student Attendance" />
     <ModuleLink href="#" Icon={PiStudent} text="Student Admission" />
     <ModuleLink href="#" Icon={CiLogin} text="Students / Parents Login" />
     <ModuleLink href="#" Icon={RiTimelineView} text="Timetable" />
     
      </div>
    </section>

    <section className="py-12 bg-white max-w-[85%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-6">
          Ultimate Modules (12)
          </h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-between px-4 gap-8">

     <ModuleLink href="#" Icon={IoBookOutline} text="Courses and Batches" />
     <ModuleLink href="#" Icon={GrCertificate} text="Certificate Generator" />
     <ModuleLink href="#" Icon={PiStudent} text="Student Information" />
     <ModuleLink href="#" Icon={CgProfile} text="Human Resources" />
     <ModuleLink href="#" Icon={LuLayoutDashboard} text="Multiple Dashboards" />
     <ModuleLink href="#" Icon={LuBookKey} text="Employee / Teacher Login" />
     <ModuleLink href="#" Icon={MdAppRegistration} text="Student Attendance" />
     <ModuleLink href="#" Icon={PiStudent} text="Student Admission" />
     <ModuleLink href="#" Icon={CiLogin} text="Students / Parents Login" />
     <ModuleLink href="#" Icon={RiTimelineView} text="Timetable" />
     
      </div>
    </section>

    <section className="py-12 bg-white max-w-[85%] mx-auto">
        
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between px-4 gap-8">
          <div className='bg-[#D1EDFF] p-8 rounded-lg shadow-md'>
            <h2 className='text-2xl md:text-3xl font-semibold'>Resell Schoolynx</h2>
            <p className='my-4'>Embed Schoolynx in your application and sell it in your market, under your terms and pricing.</p>
            <button className='border-2 border-red-600 cursor-pointer px-4 py-2 rounded-md text-red-700 hover:bg-red-600 hover:text-white'>
              Partner
            </button>
          </div>
          <div className='bg-[#D1EDFF] p-8 rounded-lg shadow-md'>
          <h2 className='text-2xl md:text-3xl font-semibold'>
            Buy Schoolynx
            </h2>
            <p className='my-4'>
            All our plans include unlimited students, unlimited courses, priority support with no hidden fee.
            </p>
            <Link href={"/pricing"} className='border-2 border-red-600 cursor-pointer px-4 py-2 rounded-md text-red-700 hover:bg-red-600 hover:text-white'>
              Pricing and plans
            </Link>
          </div>
     
      </div>
    </section>

    <section id="feature-tour" className="py-16 bg-[#1a2d52]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Efficient and Effective School ERP Software
          </h2>
          <p className="text-lg text-white mb-10 mx-auto">
          Suitable for all types of institutes such as K12, Universities, Higher-Ed, Training Institutes and more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href={"/live-demo"} className="mt-8 md:mt-0 px-10 py-3 bg-[#f4473e] text-white font-semibold rounded-md shadow-lg hover:bg-red-700 transition duration-300 text-lg">
          Book a demo
        </Link>
          <Link href={"/product/faq"} className="mt-8 md:mt-0 px-10 py-3 border-2 border-[#f4473e] text-[#f4473e] font-semibold rounded-md shadow-lg hover:bg-red-700 hover:text-white transition duration-300 text-lg">
          Frequently asked questions
        </Link>
           
          </div>
        </div>
      </div>
    </section>
    </div>
  );
} 