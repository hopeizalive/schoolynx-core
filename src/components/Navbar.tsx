"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { IoChevronDown } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";


interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  // Removed 'Coding Classes'
  {
    label: 'Product',
    href: '#',
    children: [
      { label: 'Feature Tour', href: '#' },
      { label: 'Mobile App', href: '#' },
      { label: 'Multi-School', href: '#' },
      { label: 'Student Information System', href: '#' },
      { label: 'Integrations', href: '#' },
      { label: '101 Reasons', href: '#' },
      { label: 'Fedena Difference', href: '#' }, // Corrected typo from 'Differece'
      { label: 'FAQ', href: '#' },
    ],
  },
  {
    label: 'Partner',
    href: '#',
    children: [
      { label: 'Why Partner', href: '#' },
      { label: 'OEM Partner', href: '#' },
    ],
  },
  { label: 'Pricing', href: '#' },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Ebook', href: '#' },
    ],
  },
  {
    label: 'About',
    href: '#',
    children: [
      { label: 'Our Story', href: '#' },
      { label: 'Core Team', href: '#' },
      { label: 'Our Customers', href: '#' },
      { label: 'Media and Press', href: '#' },
      { label: 'Awards and Recognition', href: '#' },
      { label: 'Company Careers', href: '#' },
    ],
  },
  { label: 'Contact', href: '#' },
  // Removed 'Support docs' and 'Services'
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
      setOpenDropdown(openDropdown === label ? null : label);
    }
  };

  return (
    <nav className="bg-white fixed w-full z-30 top-0 left-0 border-b border-gray-200 shadow-sm">
      <div className="max-w-[95%] mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-3">
          <Link href="/" className="flex items-center">
          {/* <Image
    src="/assets/logo.png" // Public folder se relative path
    alt="Fedena Logo"
    width={90}
    height={90}
    className="mr-2"
  /> */}
            <span className="self-center text-2xl font-bold whitespace-nowrap text-red-600">
              fedena
              <span className="text-red-600 align-super text-xs">®</span>
            </span>
          </Link>
          
          <div className="flex md:gap-2 items-center md:order-2 space-x-2 md:space-x-3">
            <Link
              href="#" 
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md text-sm px-4 py-2 text-center"
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
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium text-xs lg:text-sm border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 lg:space-x-5 xl:space-x-6 md:mt-0 md:border-0 md:bg-white">
              {navItems.map((item) => (
                <li 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                  onMouseLeave={() => item.children && handleDropdownLeave()}
                >
                  <button
                    onClick={() => item.children && handleDropdownClick(item.label) }
                    className={`flex items-center w-full text-left py-2 px-1 text-gray-700 hover:text-red-600 md:hover:bg-transparent md:p-0 ${item.children ? 'md:cursor-default' : 'md:cursor-pointer'}`}
                  >
                    {item.children ? (
                      <span className='md:mr-1'>{item.label}</span>
                    ) : (
                      <Link href={item.href} className='w-full'>{item.label}</Link>
                    )}
                    {item.children && <IoChevronDown className={`w-3 h-3 ml-0.5 transition-transform duration-200 ${openDropdown === item.label && isOpen ? 'rotate-180' : ''} md:group-hover:rotate-180`} />}
                  </button>
                  {item.children && (
                    <div className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-20 ring-1 ring-black ring-opacity-5 ${openDropdown === item.label ? 'block' : 'hidden'} md:group-hover:block`}>
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