"use client";

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

export default function TimelineCard({ image, year, month, title, description, button }: TimelineCardProps) {
  return (
    <div className="bg-[#f8f9fa] p-6 w-[300px]">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded"
          sizes="(max-width: 300px) 100vw, 300px"
          loading="lazy"
        />
      </div>
      <h3 className="text-3xl font-semibold text-center">{year}</h3>
      <p className="text-gray-600 text-center text-lg mt-1 mb-6">{month}</p>
      <p className="text-gray-600 text-center">{description}</p>
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
} 