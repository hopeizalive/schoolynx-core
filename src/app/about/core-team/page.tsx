"use client";

import Link from 'next/link'
import React, { Suspense } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import team member card component
const TeamMemberCard = dynamic(() => import('@/components/TeamMemberCard'), {
  loading: () => (
    <div className='bg-[#F4F5F7] rounded-xl p-8 flex justify-center items-center gap-12 animate-pulse'>
      <div className='flex flex-col gap-2'>
        <div className='w-[524px] h-[145px] bg-gray-200 rounded'></div>
        <div className='flex items-center gap-1'>
          <div className='w-10 h-10 bg-gray-200 rounded'></div>
          <div className='w-8 h-8 bg-gray-200 rounded'></div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='h-8 bg-gray-200 rounded w-1/3 mb-2'></div>
        <div className='h-4 bg-gray-200 rounded w-1/4 mb-4'></div>
        <div className='h-24 bg-gray-200 rounded'></div>
      </div>
    </div>
  ),
  ssr: false
});

// Team member data
const teamMembers = [
  {
    name: "Neelakantha Karinje",
    role: "Chief Executive Officer",
    image: "https://www.publicdomainpictures.net/pictures/200000/nahled/central-african-man.jpg",
    description: "Neelakantha Karinje leads the executive team for achieving the vision and mission of Foradian. Neel has 25 years of experience as CFO for startup companies as well as the well-established multinational corporation. Neel believes with innovative EdTech solution like Schoolynx we can bring automation in the institutes' daily operations and help the schools all around the world to run better."
  },
  {
    name: "Sharath Krishnan",
    role: "SVP - Sales",
    image: "https://cdn.pixabay.com/photo/2022/08/20/11/59/african-man-7398921_1280.jpg",
    description: "Sharath Krishnan leads the global sales and partner relationship at Foradian. Sharath focuses on building successful, long-term relationship with partners across the globe for Schoolynx implementation in their geography."
  }
];

export default function CoreTeamPage() {
  return (
    <div className="min-h-screen pt-12 pb-12 px-4">
      <h1 className='text-3xl md:text-4xl font-semibold mb-3 text-gray-800 text-center'>Our Story</h1>
      <p className='text-xl text-gray-400 font-semibold text-center max-w-3xl mx-auto'>Know the people who leads team Schoolynx to achieve the vision & goals</p>
      
      <div className="flex flex-col md:flex-row items-start gap-12 mt-20 px-4 max-w-6xl mx-auto">
  
  {/* Left: Text (takes 1/3rd space) */}
  <div className="md:w-1/4 w-full">
   <Link href="#" className='text-red-600 underline text-2xl'>Executive Team</Link>
  </div>

  {/* Right: Team Member Cards */}
  <div className="flex-1 space-y-8">
    {teamMembers.map((member, index) => (
      <Suspense key={index} fallback={
        <div className='bg-[#F4F5F7] rounded-xl p-8 flex justify-center items-center gap-12 animate-pulse'>
          <div className='flex flex-col gap-2'>
            <div className='w-[524px] h-[145px] bg-gray-200 rounded'></div>
            <div className='flex items-center gap-1'>
              <div className='w-10 h-10 bg-gray-200 rounded'></div>
              <div className='w-8 h-8 bg-gray-200 rounded'></div>
            </div>
          </div>
          <div className='flex-1'>
            <div className='h-8 bg-gray-200 rounded w-1/3 mb-2'></div>
            <div className='h-4 bg-gray-200 rounded w-1/4 mb-4'></div>
            <div className='h-24 bg-gray-200 rounded'></div>
          </div>
        </div>
      }>
        <TeamMemberCard {...member} />
      </Suspense>
    ))}
  </div>

</div>

    </div>
  )
}
