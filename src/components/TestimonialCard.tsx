"use client";

import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  text: string;
  logo: string;
  name?: string;
  midName?: string;
  org: string;
}

export default function TestimonialCard({ text, logo, name, midName, org }: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-xl px-8 py-8 w-full shadow-md">
        <p className="text-gray-600 italic text-center mb-6">"{text}"</p>
        <div className="relative w-32 h-16 mx-auto">
          <Image
            src={logo}
            alt={org}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      {(name || midName || org) && (
        <div className="text-center mt-8">
          {name && <p className="text-lg font-semibold text-gray-900">{name}</p>}
          {midName && <p className="text-sm text-gray-600 mt-1">{midName}</p>}
          {org && <p className="text-sm text-gray-500 mt-1">{org}</p>}
        </div>
      )}
    </div>
  );
} 