import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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

  {/* Right: Card (takes 2/3rd space) */}
  <div className="md:w-3/4 w-full flex flex-col gap-4">
      <div className='bg-[#F4F5F7] rounded-xl p-8 flex justify-center items-center gap-12'>
        <div className='flex flex-col gap-2'>
          <img src="https://www.publicdomainpictures.net/pictures/200000/nahled/central-african-man.jpg" alt="" className='w-[524px] h-[145px]'/>
          <div className='flex items-center gap-1'><MdEmail className='text-gray-500 text-4xl'/><FaLinkedin className='text-gray-500 text-3xl'/></div>

        </div>
        <div>
        <h3 className="text-2xl font-semibold mb-1">Neelakantha Karinje</h3>
      <p className="text-gray-800 mb-2 pb-1 border-b-1 border-gray-800 w-fit">
      Chief Executive Officer
      </p>
      <p className="text-gray-600">
      Neelakantha Karinje leads the executive team for achieving the vision and mission of Foradian. Neel has 25 years of experience as CFO for startup companies as well as the well-established multinational corporation. Neel believes with innovative EdTech solution like Schoolynx we can bring automation in the institutes' daily operations and help the schools all around the world to run better.
      </p>
        </div>
     
      </div>
      <div className='bg-[#F4F5F7] rounded-xl p-8 flex justify-center items-center gap-12'>
        <div className='flex flex-col gap-2'>
          <img src="https://cdn.pixabay.com/photo/2022/08/20/11/59/african-man-7398921_1280.jpg" alt="" className='w-[524px] h-[145px]'/>
          <div className='flex items-center gap-1'><MdEmail className='text-gray-500 text-4xl'/><FaLinkedin className='text-gray-500 text-3xl'/></div>

        </div>
        <div>
        <h3 className="text-2xl font-semibold mb-1">Sharath Krishnan</h3>
      <p className="text-gray-800 mb-2 pb-1 border-b-1 border-gray-800 w-fit">
      SVP - Sales
      </p>
      <p className="text-gray-600">
      Sharath Krishnan leads the global sales and partner relationship at Foradian. Sharath focuses on building successful, long-term relationship with partners across the globe for Schoolynx implementation in their geography.
      </p>
        </div>
     
      </div>
    
  </div>

</div>

    </div>
  )
}
