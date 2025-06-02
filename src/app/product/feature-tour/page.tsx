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

export default function ProductPage() {
  return (
    <div className='w-full'>
        <section className="py-12 bg-white w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2d52] mb-8 text-center">
          Ultimate School ERP Software for all kind of Institutes
          </h2>
          <p className="text-xl md:text-2xl text-[#6d6e6f] mb-8 text-center">
          Fedena School ERP system has every feature you will ever need to run your institution efficiently
          </p>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8">
        {/* Left: Text */}
        <div className="flex-1 text-left">
          <p className="text-md text-gray-700 mb-6">
          School ERP Software is a platform which helps in managing the day to day academic and administrative activities from a single platform. Fedena provides user-friendly dashboards with login access for teachers, non-teaching staff, students, parents, and management personnel of your institution. The various modules available in school ERP software automate daily operations of your institution such as from students’ admission to generating transfer certificates to digitizing the online learning experience all can be managed effortlessly .
          </p>
          <p className="text-md text-gray-700 mb-6">
          Fedena School ERP has modules to manage Timetable, Attendance, Online Class, Examinations, Gradebooks, Mobile Learning, Hostel, Library, Transportation, School Calendar, Events, and many more. It has a fully-fledged Human Resource module to manage the payroll and employee pay slips. The Finance module helps you to plan and allot different fee structures to students. Fedena School ERP System is also an excellent collaboration tool using its Task, Discussion, Poll, Blog, and Videoconference plugins. There is an internal messaging system within Fedena, but you can also integrate it with external communication tools like email and texting. To find out more about the school ERP system, scroll through the following descriptions, try the .
          </p>
        
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_640.jpg"
            alt="School Management Illustration"
            className="max-w-[400px] w-full h-auto"
          />
        </div>
      </div>
    </section>

    <section className="py-12 bg-white max-w-[85%] mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a2d52] mb-6">
          Core Modules (21)
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

    <section className="py-12 bg-white max-w-[85%] mx-auto ">
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

    <section className="py-12 bg-white max-w-[85%] mx-auto">
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

    <section className="py-12 bg-white max-w-[85%] mx-auto">
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

    <section className="py-12 bg-white max-w-[85%] mx-auto">
        
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between px-4 gap-8">
          <div className='bg-[#D1EDFF] p-8 rounded-lg shadow-md'>
            <h2 className='text-2xl md:text-3xl font-semibold'>Resell Fedena</h2>
            <p className='my-4'>Embed Fedena in your application and sell it in your market, under your terms and pricing.</p>
            <button className='border-2 border-red-600 cursor-pointer px-4 py-2 rounded-md text-red-700 hover:bg-red-600 hover:text-white'>
              Partner
            </button>
          </div>
          <div className='bg-[#D1EDFF] p-8 rounded-lg shadow-md'>
          <h2 className='text-2xl md:text-3xl font-semibold'>
            Buy Fedena
            </h2>
            <p className='my-4'>
            All our plans include unlimited students, unlimited courses, priority support with no hidden fee.
            </p>
            <button className='border-2 border-red-600 cursor-pointer px-4 py-2 rounded-md text-red-700 hover:bg-red-600 hover:text-white'>
              Pricing and plans
            </button>
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
          <Link href={"/"} className="mt-8 md:mt-0 px-10 py-3 bg-[#f4473e] text-white font-semibold rounded-md shadow-lg hover:bg-red-700 transition duration-300 text-lg">
          Book a demo
        </Link>
          <Link href={"/"} className="mt-8 md:mt-0 px-10 py-3 border-2 border-[#f4473e] text-[#f4473e] font-semibold rounded-md shadow-lg hover:bg-red-700 hover:text-white transition duration-300 text-lg">
          Frequently asked questions
        </Link>
           
          </div>
        </div>
      </div>
    </section>
    </div>
  );
} 