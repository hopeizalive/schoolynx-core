"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface TimelineCardProps {
  image: string;
  year: string;
  month: string;
  title: string;
  description: string;
  button?: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ image, year, month, title, description, button }) => {
  return (
    <div className="bg-[#f8f9fa] p-6 w-[300px] shadow-lg rounded-lg">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded"
          sizes="(max-width: 300px) 100vw, 300px"
          loading="lazy"
          quality={30}
        />
      </div>
      <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">{year}</h3>
      <h4 className="text-sm text-center mb-6 text-gray-600">{title}</h4>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      {button && (
        <Link 
          href="#" 
          className='mt-5 mb-2 text-center text-red-600 mx-auto flex justify-center text-lg hover:text-blue-600 hover:underline'
        >
          More Info
        </Link>
      )}
    </div>
  );
};

export default TimelineCard; 