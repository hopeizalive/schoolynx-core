"use client";

import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export default function TeamMemberCard({ name, role, image, description }: TeamMemberCardProps) {
  return (
    <div className="bg-[#F4F5F7] p-8">
    <div className="flex flex-col md:flex-row gap-8 items-center">
      
      <div className="flex flex-col gap-4">
        <div className="relative w-48 h-48 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 192px"
            priority
            quality={40}
          />
        </div>
  
        {/* Moved icons outside image */}
        <div className="flex gap-2 ml-2 items-center">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-red-600 transition-colors"
            aria-label="Email"
          >
            <MdEmail className="w-9 h-9" />
          </a>
        </div>
      </div>
  
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-lg text-gray-600 mb-4">{role}</p>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>
    </div>
  </div>
  
  );
} 