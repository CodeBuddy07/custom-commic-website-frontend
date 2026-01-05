'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { LuSettings2 } from 'react-icons/lu';
import { MdFavoriteBorder } from 'react-icons/md';
import { PiShoppingCart } from 'react-icons/pi';
import { HiMenu, HiX } from 'react-icons/hi';
import { useState } from 'react';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const navLinks = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="bg-red-600 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <div className="py-2 shrink-0">
              <Image
                src="/logo.png"
                alt="Logo"
                width={82}
                height={92}
                className="h-auto w-auto"
              />
            </div>

            <div className="hidden md:flex max-w-md bg-white text-black rounded-md items-center px-2 py-1 flex-1 mx-4 lg:mx-8">
              <IoSearchOutline size={20} className="text-gray-600 shrink-0" />
              <input
                type="text"
                placeholder="search here..."
                className="px-2 py-1 w-full focus:outline-none text-sm"
              />
              <button className="m-2 px-1 cursor-pointer border-l-2 border-gray-200 shrink-0">
                <LuSettings2 size={18} className="text-gray-600" />
              </button>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex gap-2 sm:gap-4 items-center">
                <div className="relative font-normal cursor-pointer hover:opacity-80 transition">
                  <MdFavoriteBorder size={24} className="sm:size-8" />
                  <span className="absolute bg-blue-600 rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs -top-1 -right-2">
                    0
                  </span>
                </div>

                <div className="relative font-normal cursor-pointer hover:opacity-80 transition">
                  <PiShoppingCart size={24} className="sm:size-8" />
                  <span className="absolute bg-blue-600 rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs -top-1 -right-2">
                    0
                  </span>
                </div>
              </div>

              <div className="hidden lg:flex gap-6 items-center ml-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white font-semibold hover:text-gray-200 transition"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link href="/signup">
                  <button className="rounded-full border border-white bg-transparent hover:bg-white hover:text-black px-3 py-1.5 text-white font-semibold transition">
                    Sign Up
                  </button>
                </Link>

                <Link href="/login">
                  <button className="rounded-full border border-blue-600 bg-blue-600 hover:bg-white hover:text-black px-5 py-1.5 text-white font-semibold transition">
                    Login
                  </button>
                </Link>
              </div>

              <button
                onClick={toggleSidebar}
                className="lg:hidden text-white ml-2 sm:ml-4 p-1 hover:opacity-80 transition"
                aria-label="Toggle menu"
              >
                <HiMenu size={28} />
              </button>
            </div>
          </div>

          <div className="md:hidden pb-3">
            <div className="bg-white text-black rounded-md flex items-center px-2 py-1.5">
              <IoSearchOutline size={18} className="text-gray-600 shrink-0" />
              <input
                type="text"
                placeholder="search here..."
                className="px-2 py-1 w-full focus:outline-none text-sm"
              />
              <button className="m-1 px-1 cursor-pointer border-l-2 border-gray-200 shrink-0">
                <LuSettings2 size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-red-600 shadow-lg z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeSidebar}
            className="text-white hover:opacity-80 transition"
            aria-label="Close menu"
          >
            <HiX size={28} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeSidebar}
              className="text-white font-semibold hover:text-gray-200 transition py-2 border-b border-red-500"
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 flex flex-col gap-3 border-t border-red-500">
            <Link href="/signup" onClick={closeSidebar}>
              <button className="w-full rounded-full border border-white bg-transparent hover:bg-white hover:text-black text-white font-semibold py-2 transition">
                Sign Up
              </button>
            </Link>

            <Link href="/login" onClick={closeSidebar}>
              <button className="w-full rounded-full border border-blue-600 bg-blue-600 hover:bg-white hover:text-black text-white font-semibold py-2 transition">
                Login
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;