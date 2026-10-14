"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: "Product",
    href: "/product/feature-tour",
    children: [
      { label: "Feature Tour", href: "/product/feature-tour" },
      { label: "FAQ", href: "/product/faq" },
    ],
  },
  { label: "Partner", href: "/partner" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setMobileDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80">
      <nav
        aria-label="Main navigation"
        className="relative h-[76px] bg-white text-[#172d50] shadow-sm sm:h-[88px]"
      >
        <div className="mx-auto flex h-full max-w-[1720px] items-center justify-between gap-3 px-4 sm:px-7 lg:px-10">
          <Link
            href="/"
            aria-label="Schoolynx home"
            className="relative h-[58px] w-[125px] shrink-0 overflow-hidden sm:h-[72px] sm:w-[190px]"
          >
            <Image
              src="/assets/logo2.png"
              alt="Schoolynx School ERP"
              fill
              priority
              sizes="(max-width: 640px) 125px, 190px"
              className="object-cover"
            />
          </Link>

          <div className="hidden h-full items-center gap-6 xl:flex 2xl:gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="group relative flex h-full items-center">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 py-3 text-sm font-medium text-[#263957] transition-colors hover:text-[#e3443b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-4 2xl:text-base"
                >
                  {item.label}
                  {item.children && <IoChevronDown aria-hidden="true" className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-[calc(100%-0.75rem)] z-50 min-w-48 translate-y-2 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl shadow-[#172d50]/10 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-[#fff4f3] hover:text-[#c7342e] focus-visible:bg-[#fff4f3] focus-visible:text-[#c7342e] focus-visible:outline-none"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 xl:ml-0">
            <Link
              href="/live-demo"
              className="inline-flex h-[40px] items-center justify-center whitespace-nowrap rounded-lg bg-[#f4473e] px-3 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#d93630] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-2 sm:h-[48px] sm:px-5 sm:text-sm md:text-base"
            >
              Book a Live Demo
            </Link>
            <a
              href="tel:+923155814609"
              aria-label="Call Schoolynx"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#f4473e]/25 bg-[#fff8f7] text-[#e3443b] transition hover:bg-[#fff0ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4473e] focus-visible:ring-offset-2 sm:inline-flex"
            >
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 4 3.5-.8L11 7l-2 2a15 15 0 0 0 6 6l2-2 3.8 2.5L20 19c-.3 1-1.3 1.5-2.3 1.2A18 18 0 0 1 3.8 6.3C3.5 5.3 4 4.3 5 4Z" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open main menu"
              aria-expanded={isOpen}
              aria-controls="site-menu"
              className="inline-flex h-[42px] w-[46px] items-center justify-center rounded-lg border border-gray-300 transition-colors hover:border-red-600 hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 sm:h-[48px] sm:w-[54px] xl:hidden"
            >
              <span className="flex w-6 flex-col gap-[5px] sm:w-7" aria-hidden="true">
                <span className="h-[2px] w-full rounded bg-[#173b68]" />
                <span className="h-[2px] w-full rounded bg-[#173b68]" />
                <span className="h-[2px] w-full rounded bg-[#173b68]" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/55"
        />
      )}

      <aside
        id="site-menu"
        aria-label="Site menu"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(88vw,380px)] flex-col bg-white text-[#172338] shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[76px] items-center justify-between border-b border-gray-200 bg-white px-5 sm:h-[88px]">
          <Link href="/" onClick={closeMenu} aria-label="Schoolynx home" className="relative h-[58px] w-[130px] overflow-hidden">
            <Image
              src="/assets/logo2.png"
              alt="Schoolynx School ERP"
              fill
              sizes="130px"
              className="object-cover"
            />
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close main menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-2xl leading-none text-gray-700 transition-colors hover:bg-gray-100"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          <ul>
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-gray-200">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.label ? null : item.label,
                        )
                      }
                      aria-expanded={mobileDropdown === item.label}
                      className="flex w-full items-center justify-between py-5 text-left text-lg font-medium transition-colors hover:text-red-600"
                    >
                      {item.label}
                      <IoChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        mobileDropdown === item.label
                          ? "max-h-40 pb-3 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeMenu}
                          tabIndex={mobileDropdown === item.label ? 0 : -1}
                          className="block rounded-md px-3 py-3 text-base text-gray-600 transition-colors hover:bg-gray-50 hover:text-red-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-5 text-lg font-medium transition-colors hover:text-red-600"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 p-6">
          <Link
            href="/live-demo"
            onClick={closeMenu}
            className="block rounded-md bg-red-600 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Request Live Demo
          </Link>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
