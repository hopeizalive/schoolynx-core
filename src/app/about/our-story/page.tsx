"use client";

import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import TimelineCard with loading state
const TimelineCard = dynamic(() => import('@/components/TimelineCard'), {
  loading: () => (
    <div className="bg-[#f8f9fa] p-6 w-[300px] animate-pulse">
      <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
      <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-6"></div>
      <div className="h-20 bg-gray-200 rounded"></div>
    </div>
  )
});

const timelineData = [
  {
    side: 'left',
    year: '2024',
    month: "January",
    title: 'Launched Platform',
    description: 'We launched our main platform for everyone.We launched our main platform for everyone.We launched our main platform for everyone.We launched our main platform for everyone.',
    image: 'https://img.freepik.com/free-vector/erp-enterprise-resource-planning-isometric-banner_107791-700.jpg',
    button: true
  },
  {
    side: 'right',
    year: '2023',
    month: "Feb",
    title: 'Team Expanded',
    description: 'Grew our team across different regions.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7lAHzouvo3TV4E_KmiZ2ab1itC-W-MylHcg&s',
    button: true 
  },
  {
    side: 'left',
    year: '2022',
    month: "June",
    title: 'Reached 1M Users',
    description: 'BETTER 2018: Worlds first School Operations Development Virtual Summit, where our handpicked expert speakers shared their knowledge on how to operate schools efficiently.',
    image: 'https://www.rsiconcepts.com/blog/wp-content/uploads/2022/02/What-are-the-Key-Features-of-an-Enterprise-Resource-Planning-Software-ERP_-1.jpg',
    button: true
  },
  {
    side: 'right',
    year: '2021',
    month: "July",
    title: 'Secured Funding',
    description: 'celebrates 10 years of innovation, success & growth in education technology.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQG0SWnhiCZEEg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710424634642?e=2147483647&v=beta&t=udNxeDyoxtpFqV8lgWDcO49wAbctQHy8LHxUktaXqgs',
    button: true
  },
  {
    side: 'left',
    year: '2022',
    month: "June",
    title: 'Reached 1M Users',
    description: 'Introducing our new CEO Neelakantha Karinje. Neel has huge experience in growing and scaling-up startups. Also, since 2012 he has mentored and guided us in growing Foradian to the present level.',
    image: 'https://www.rsiconcepts.com/blog/wp-content/uploads/2022/02/What-are-the-Key-Features-of-an-Enterprise-Resource-Planning-Software-ERP_-1.jpg',
    button: true
  },
  {
    side: 'right',
    year: '2021',
    month: "July",
    title: 'Secured Funding',
    description: 'Raised Series A investment.',
    image: 'https://media.studentcrowd.net/q90/content/university-images/queens-university-belfast-adobestock-525837958.jpeg',
    button: true
  },
  {
    side: 'right',
    year: '2021',
    month: "July",
    title: 'Secured Funding',
    description: 'celebrates 10 years of innovation, success & growth in education technology.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQG0SWnhiCZEEg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710424634642?e=2147483647&v=beta&t=udNxeDyoxtpFqV8lgWDcO49wAbctQHy8LHxUktaXqgs',
    button: true
  },
  {
    side: 'left',
    year: '2022',
    month: "June",
    title: 'Reached 1M Users',
    description: 'Introducing our new CEO Neelakantha Karinje. Neel has huge experience in growing and scaling-up startups. Also, since 2012 he has mentored and guided us in growing Foradian to the present level.',
    image: 'https://bairesdev.mo.cloudinary.net/blog/2023/11/Web-2.0-vs.-Web-3.0.jpg?tx=w_1920,q_auto',
    button: true
  },
  {
    side: 'right',
    year: '2021',
    month: "July",
    title: 'Secured Funding',
    description: 'Raised Series A investment.',
    image: 'https://www.ramco.com/hs-fs/hubfs/Modern%20ERP-1.jpg?length=900&name=Modern%20ERP-1.jpg',
    button: true
  },
  {
    side: 'right',
    year: '2021',
    month: "July",
    title: 'Secured Funding',
    description: 'celebrates 10 years of innovation, success & growth in education technology.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQG0SWnhiCZEEg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710424634642?e=2147483647&v=beta&t=udNxeDyoxtpFqV8lgWDcO49wAbctQHy8LHxUktaXqgs',
    button: true
  },
  {
    side: 'left',
    year: '2022',
    month: "June",
    title: 'Reached 1M Users',
    description: 'Raised Series A investment. Introducing our new CEO Neelakantha Karinje. Neel has huge experience in growing and scaling-up startups. Also, since 2012 he has mentored and guided us in growing Foradian to the present level. Introducing our new CEO Neelakantha Karinje. Neel has huge experience in growing and scaling-up startups. Also, since 2012 he has mentored and guided us in growing Foradian to the present level. Introducing our new CEO Neelakantha Karinje. Neel has huge experience in growing and scaling-up startups. Also, since 2012 he has mentored and guided us in growing Foradian to the present level. Introducing our new CEO Neelakantha Karinje. Neel has huge experience in growing and scaling-up startups. Also, since 2012 he has mentored and guided us in growing Foradian to the present level',
    image: 'https://www.rsiconcepts.com/blog/wp-content/uploads/2022/02/What-are-the-Key-Features-of-an-Enterprise-Resource-Planning-Software-ERP_-1.jpg',
    button: true
  },
  {
    side: 'right',
    year: '2021',
    month: "July",
    title: 'Secured Funding',
    description: 'Raised Series A investment.',
    image: 'https://www.ramco.com/hs-fs/hubfs/Modern%20ERP-1.jpg?length=900&name=Modern%20ERP-1.jpg',
    button: true
  },
  {
    side: 'right',
    year: '2021',
    month: "July",
    title: 'Secured Funding',
    description: 'celebrates 10 years of innovation, success & growth in education technology.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQG0SWnhiCZEEg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710424634642?e=2147483647&v=beta&t=udNxeDyoxtpFqV8lgWDcO49wAbctQHy8LHxUktaXqgs',
    button: true
  },
  {
    side: 'left',
    year: '2022',
    month: "June",
    title: 'Reached 1M Users',
    description: 'Introducing our new CEO Neelakantha Karinje. Neel has huge experience in growing and scaling-up startups. Also, since 2012 he has mentored and guided us in growing Foradian to the present level.',
    image: 'https://www.rsiconcepts.com/blog/wp-content/uploads/2022/02/What-are-the-Key-Features-of-an-Enterprise-Resource-Planning-Software-ERP_-1.jpg',
    button: true
  },
  {
    side: 'right',
    year: '2021',
    month: "July",
    title: 'Secured Funding',
    description: 'Raised Series A investment.',
    image: 'https://www.ramco.com/hs-fs/hubfs/Modern%20ERP-1.jpg?length=900&name=Modern%20ERP-1.jpg',
    button: true
  },
  {
    side: 'right',
    year: '2021',
    month: "July",
    title: 'Secured Funding',
    description: 'celebrates 10 years of innovation, success & growth in education technology.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQG0SWnhiCZEEg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710424634642?e=2147483647&v=beta&t=udNxeDyoxtpFqV8lgWDcO49wAbctQHy8LHxUktaXqgs',
    button: true
  },
  {
    side: 'left',
    year: '2022',
    month: "June",
    title: 'Reached 1M Users',
    description: 'Introducing our new CEO Neelakantha Karinje. Neel has huge experience in growing and scaling-up startups. Also, since 2012 he has mentored and guided us in growing Foradian to the present level.',
    image: 'https://www.rsiconcepts.com/blog/wp-content/uploads/2022/02/What-are-the-Key-Features-of-an-Enterprise-Resource-Planning-Software-ERP_-1.jpg',
    button: true
  },
  {
    side: 'right',
    year: '2021',
    month: "July",
    title: 'Secured Funding',
    description: 'Raised Series A investment. Introducing our new CEO Neelakantha Karinje. Neel has huge experience in growing and scaling-up startups. Also, since 2012 he has mentored and guided us in growing Foradian to the present level. Introducing our new CEO Neelakantha Karinje. Neel has huge experience in growing and scaling-up startups. Also, since 2012 he has mentored and guided us in growing Foradian to the present level. Introducing our new CEO Neelakantha Karinje. Neel has huge experience in growing and scaling-up startups. Also, since 2012 he has mentored and guided us in growing Foradian to the present level. Introducing our new CEO Neelakantha Karinje. Neel has huge experience in growing and scaling-up startups. Also, since 2012 he has mentored and guided us in growing Foradian to the present level.',
    image: 'https://www.ramco.com/hs-fs/hubfs/Modern%20ERP-1.jpg?length=900&name=Modern%20ERP-1.jpg',
    button: true
  },
];

// Optimize timeline data
const optimizedTimelineData = timelineData.map(item => ({
  ...item,
  // image: item.image.replace('https://', 'https://images.unsplash.com/photo-') // Replace with optimized images
}));

export default function OurStoryPage() {
  const rows = [];
  for (let i = 0; i < timelineData.length; i += 2) {
    rows.push({
      left: timelineData[i],
      right: timelineData[i + 1] || null,
    });
  }

  return (
    <>
      {/* Banner Section */}
      <div className="relative h-[95vh] bg-cover bg-center">
        <Image
          src="/assets/banner1.jpg"
          alt="Schoolynx Banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Text content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-[20%] md:left-[10%] md:transform-none z-10 text-white md:translate-0 w-[90%]">
          <h1 className="text-5xl md:text-7xl w-full font-semibold md:max-w-[40%] drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">
            Education is the silver bullet.
          </h1>
          <p className="text-xl md:max-w-[50%] my-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] text-gray-100 leading-5">
            Education is everything.  
            Schools should be palaces.  
            Competition for the best teachers should be fierce; they should be making six figure salaries.  
            Schools should be incredibly expensive for government and absolutely free of charge to its citizens, just like national defense.
          </p>
          <p className="mt-4 text-xl md:max-w-[50%] drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] text-gray-200">
            – Aaron Sorkin (The West Wing, TV Series)
          </p>
        </div>
      </div>

      <div className='w-full bg-[#f8f9fa]'>
        <div className='max-w-7xl mx-auto py-12 px-8'>
          <h1 className='text-3xl md:text-4xl font-semibold mb-6 text-gray-800'>Every School, A Smart School</h1>
          <p className='text-md py-4 px-1'>Foradian builds educational software to simplify the life of institution administrators and teachers so that they can focus on the most important thing : educating our children. We are bridging the digital divide in education by offering Schoolynx product and services at affordable pricing.</p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto py-12 px-8'>
        <h1 className='text-3xl md:text-4xl font-semibold mb-3 text-gray-800 text-center'>Our Story</h1>
        <p className='text-md px-1 text-center'>Innovating education technologies since 2009</p>
      </div>

      {/* Timeline Section */}
      <div className="relative max-w-6xl mx-auto py-16 px-4 mb-16">
        {/* Center line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 bg-[#00ffff3c] h-full z-0" />

        {rows.map((row, index) => (
          <div key={index} className="relative flex items-start mb-6">
            {/* Left Card */}
            {row.left && (
              <div className="w-1/2 pr-10 flex justify-end">
                <div className="relative">
                  {/* Left Circle */}
                  <div className="absolute -right-10 top-8 transform -translate-y-1/2 w-7 h-7 rounded-full bg-[#00ffff3c] z-10" />
                  <TimelineCard {...row.left} />
                </div>
              </div>
            )}

            {/* Right Card */}
            {row.right && (
              <div className="w-1/2 pl-10">
                <div className="relative">
                  {/* Right Circle */}
                  <div className="absolute -left-10 top-14 transform -translate-y-1/2 w-7 h-7 rounded-full bg-[#00ffff3c] z-10" />
                  <TimelineCard {...row.right} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
