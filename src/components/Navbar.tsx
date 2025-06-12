"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { IoChevronDown } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import Image from 'next/image';


interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  // Removed 'Coding Classes'
  {
    label: 'Product',
    href: '/product',
    children: [
      { label: 'Feature Tour', href: '/product/feature-tour' },
      { label: 'FAQ', href: '/product/faq' },
    ],
  },
  
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about/our-story' },
      { label: 'Core Team', href: '/about/core-team' },
      { label: 'Our Customers', href: '/about/our-customers' },
    ],
  },
  { label: 'Contact', href: '/contact' },
  // Removed 'Support docs' and 'Services'
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownEnter = (label: string) => {
    if (window.innerWidth >= 768) { 
      setOpenDropdown(label);
    }
  };

  const handleDropdownLeave = () => {
    if (window.innerWidth >= 768) {
      setOpenDropdown(null);
    }
  };

  const handleDropdownClick = (label: string) => {
    if (window.innerWidth < 768) { 
      setMobileDropdown(mobileDropdown === label ? null : label);
    }
  };

  return (
    <nav className="bg-white sticky w-full z-30 top-0 left-0 border-b border-gray-200 shadow-sm">
      <div className="max-w-[95%] mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
          <Image
    src="/assets/logo.png" // Public folder se relative path
    alt="Schoolynx Logo"
    width={80}
    height={80}
    className="mr-2"
  />
            {/* <span className="self-center text-2xl font-bold whitespace-nowrap text-red-600">
              Schoolynx
              <span className="text-red-600 align-super text-xs">®</span>
            </span> */}
          </Link>
          
          <div className="flex md:gap-2 items-center md:order-2 space-x-2 md:space-x-3">
            <Link
              href="/live-demo" 
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md text-sm px-4 py-2 text-center hidden md:block"
            >
              Request Live Demo
            </Link>
            {/* Changed to PhoneIcon and added a subtle border like in the image */}
            <button className="text-gray-600 hover:text-red-600 p-1.5 border border-gray-300 rounded-full">
              <FaPhone className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300"
              aria-controls="navbar-default"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <span className="relative w-6 h-6 block">
                <span
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}
                  style={{transitionProperty:'all'}}
                />
                <span
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
                  style={{transitionProperty:'all'}}
                />
                <span
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}
                  style={{transitionProperty:'all'}}
                />
              </span>
            </button>
          </div>
          
          {/* Desktop Nav */}
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`}
            id="navbar-default"
          >
            <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 font-medium text-xs lg:text-sm border border-gray-100 rounded-lg bg-gray-50 md:bg-white md:mt-0 md:border-0 md:space-x-4 lg:space-x-5 xl:space-x-6">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                  onMouseLeave={() => item.children && handleDropdownLeave()}
                >
                  {/* Desktop Dropdown */}
                  <div className="hidden md:block">
                    <button
                      onClick={() => {}}
                      className={`flex items-center w-full text-left py-2 px-1 text-gray-700 hover:text-red-600 md:hover:bg-transparent md:p-0 ${item.children ? 'md:cursor-default' : 'md:cursor-pointer'}`}
                    >
                      {item.children ? (
                        <span className='md:mr-1'>{item.label}</span>
                      ) : (
                        <Link href={item.href} className='w-full'>{item.label}</Link>
                      )}
                      {item.children && <IoChevronDown className={`w-3 h-3 ml-0.5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''} md:group-hover:rotate-180`} />}
                    </button>
                    {item.children && (
                      <div className={`absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg py-1 z-20 ring-1 ring-black ring-opacity-5 ${openDropdown === item.label ? 'block' : 'hidden'} md:group-hover:block transition-all duration-300`}>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                            className="block px-4 py-2 text-xs lg:text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Mobile Dropdown */}
                  <div className="md:hidden">
                    {item.children ? (
                      <>
                        <button
                          onClick={() => handleDropdownClick(item.label)}
                          className="flex items-center w-full justify-between py-2 px-1 text-gray-700 hover:text-red-600 focus:outline-none"
                        >
                          <span>{item.label}</span>
                          <IoChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${mobileDropdown === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`pl-4 border-l border-gray-200 bg-gray-50 transition-all duration-300 overflow-hidden ${mobileDropdown === item.label ? 'max-h-40 py-1' : 'max-h-0 py-0'} ${mobileDropdown === item.label ? 'opacity-100' : 'opacity-0'}`}
                          style={{ transition: 'all 0.3s', pointerEvents: mobileDropdown === item.label ? 'auto' : 'none' }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => { setIsOpen(false); setMobileDropdown(null); }}
                              className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-red-600"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 px-1 text-gray-700 hover:text-red-600"
                      >
                        {item.label}
                      </Link>
                    )}
                    
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;