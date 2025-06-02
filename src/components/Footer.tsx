import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Placeholder SVGs for social icons - replace with your actual icons or a library
const FacebookIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" clipRule="evenodd" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-10 pb-4 border-t border-gray-200">
      <div className="max-w-[95%] mx-auto px-4">
        <div className="flex flex-wrap -mx-4 justify-center">
          {/* Column 0 - Logo - Adjusted to take less space and align left */}
          <div className="w-full md:w-1/6 px-4 mb-8 md:mb-0 flex items-start justify-center">
            <Link href="/" className="text-red-500 text-2xl font-bold">
              <Image
    src="/assets/logo.png" // Public folder se relative path
    alt="Fedena Logo"
    width={80}
    height={80}
    className="mr-2"
  />
            </Link>
          </div>

          {/* Column 1 - Product */}
          <div className="w-full md:w-1/6 px-4 mb-8 md:mb-0">
            <h3 className="text-gray-800 font-semibold text-sm mb-3">Product</h3>
            <ul className="space-y-1.5">
              <li><Link href="/product#feature-tour" className="text-red-500 hover:underline text-xs">Feature Tour</Link></li>
             
              <li><Link href="/pricing" className="text-gray-600 hover:underline text-xs">Pricing & Plans</Link></li>
              <li><Link href="/partner" className="text-gray-600 hover:underline text-xs">Partner Program</Link></li>
            </ul>
          </div>
          
          {/* Column 2 - Why Fedena? */}
          <div className="w-full md:w-1/6 px-4 mb-8 md:mb-0">
            <h3 className="text-gray-800 font-semibold text-sm mb-3">Why Schoolynx?</h3>
            <ul className="space-y-1.5">
              <li><Link href="/product#reasons" className="text-gray-600 hover:underline text-xs">101 Reasons</Link></li>
              <li><Link href="/product#difference" className="text-gray-600 hover:underline text-xs">Schoolynx Differences</Link></li>
              <li><Link href="/product#custom-erp" className="text-gray-600 hover:underline text-xs">Custom ERP</Link></li>
              <li><Link href="/product#why-software" className="text-gray-600 hover:underline text-xs">Why School Management Software?</Link></li>
              <li><Link href="/about#customers" className="text-gray-600 hover:underline text-xs">Our Customers</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Help */}
          <div className="w-full md:w-1/6 px-4 mb-8 md:mb-0">
            <h3 className="text-gray-800 font-semibold text-sm mb-3">Help</h3>
            <ul className="space-y-1.5">
              <li><Link href="/help#contact" className="text-gray-600 hover:underline text-xs">Contact Us</Link></li>
             
              <li><Link href="/help#services" className="text-gray-600 hover:underline text-xs">Services</Link></li>
              <li><Link href="/help#faq" className="text-gray-600 hover:underline text-xs">FAQ</Link></li>
              <li><Link href="/help#api" className="text-gray-600 hover:underline text-xs">API Playground</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact Info & App Download - Adjusted width */}
          <div className="w-full md:w-2/6 px-4">
            <div className="mb-3">
              <p className="text-gray-600 text-xs leading-snug">Office No.108 Iqra IT Park defence View Phase II, Shaheed-i-Milat Road Karachi</p>
              {/* <p className="text-gray-600 text-xs leading-snug">First Floor, Hustlehub Tech Park,</p>
              <p className="text-gray-600 text-xs leading-snug">Somasundarapalya Main Rd, Sector 2,</p>
              <p className="text-gray-600 text-xs leading-snug">HSR Layout, Bengaluru-560102,</p>
              <p className="text-gray-600 text-xs leading-snug mb-2">Karnataka, India</p> */}
            </div>
            
            <div className="mb-3">
              <p className="text-gray-800 font-bold text-xs mb-0.5">Contact us @</p>
              <p className="text-gray-600 font-bold text-xs mb-2">+92-315-5814609</p>
            </div>
            
            <div>
              <p className="text-gray-800 font-bold text-xs mb-1">Download App</p>
              <div className="flex space-x-2">
                <a href="#" className="block">
                  {/* Replace with actual Next/Image if you have the images */}
                  <img 
                    src="/app-store.png" 
                    alt="Download on the App Store" 
                    className="h-8 md:h-9" 
                    // onError={(e) => { 
                    //   e.currentTarget.style.display = 'none'; 
                    //   const placeholder = document.createElement('div');
                    //   placeholder.className = 'w-28 h-8 md:h-9 bg-gray-300 flex items-center justify-center text-xs text-gray-500';
                    //   placeholder.textContent = 'App Store';
                    //   e.currentTarget.parentNode?.insertBefore(placeholder, e.currentTarget.nextSibling);
                    // }}
                  />
                </a>
                <a href="#" className="block">
                  <img 
                    src="/google-play.png" 
                    alt="Get it on Google Play" 
                    className="h-8 md:h-9" 
                    // onError={(e) => { 
                    //   e.currentTarget.style.display = 'none'; 
                    //   const placeholder = document.createElement('div');
                    //   placeholder.className = 'w-28 h-8 md:h-9 bg-gray-300 flex items-center justify-center text-xs text-gray-500';
                    //   placeholder.textContent = 'Google Play';
                    //   e.currentTarget.parentNode?.insertBefore(placeholder, e.currentTarget.nextSibling);
                    // }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar: Copyright and Social Icons */}
        <div className="border-t border-gray-200 mt-8 pt-4 flex flex-wrap justify-between items-center">
          <div className="text-gray-500 text-xs">
            <p>©2025 Schoolynx. All Rights Reserved. <Link href="#" className="text-gray-500 hover:underline">Terms</Link> & <Link href="#" className="text-gray-500 hover:underline">Privacy</Link></p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-600"><FacebookIcon /></a>
            <a href="#" className="text-gray-500 hover:text-blue-400"><TwitterIcon /></a>
            <a href="#" className="text-gray-500 hover:text-blue-700"><LinkedInIcon /></a>
            <a href="#" className="text-gray-500 hover:text-red-600"><YouTubeIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;