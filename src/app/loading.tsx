"use client";

import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Animated circles */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-[#f4473e] rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute inset-2 border-4 border-[#00ffff3c] rounded-full animate-spin border-b-transparent" style={{ animationDirection: 'reverse' }}></div>
        </div>
        
        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading Schoolynx</h2>
          <p className="text-gray-600 text-sm">Please wait while we prepare your experience...</p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#f4473e] to-[#00ffff3c] animate-[loading_1.5s_ease-in-out_infinite] rounded-full" />
        </div>
      </div>
    </div>
  );
} 