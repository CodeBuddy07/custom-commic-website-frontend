'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const DropDownMenu = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownHover = (menu: string) => {
    setOpenDropdown(menu);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="fixed top-22 left-0 right-0 bg-white w-screen z-50 ">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-start h-16 sm:h-20">
          {/* Raw Comics Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleDropdownHover('raw')}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="flex items-center gap-2 px-4 sm:px-6 py-2 text-gray-800 font-medium hover:text-red-500 transition-colors duration-300 text-sm sm:text-base">
              RAW COMICS
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openDropdown === 'raw' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg origin-top transition-all duration-300 ${
                openDropdown === 'raw'
                  ? 'opacity-100 visible scale-y-100 translate-y-0'
                  : 'opacity-0 invisible scale-y-95 -translate-y-2'
              }`}
            >
              <a
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 text-sm border-b border-gray-100 last:border-b-0"
              >
                Popular Comics
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 text-sm border-b border-gray-100 last:border-b-0"
              >
                Vintage Comics
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 text-sm border-b border-gray-100 last:border-b-0"
              >
                First Editions
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 text-sm"
              >
                New Arrivals
              </a>
            </div>
          </div>

          {/* Graded Comics Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleDropdownHover('graded')}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="flex items-center gap-2 px-4 sm:px-6 py-2 text-gray-800 font-medium hover:text-red-500 transition-colors duration-300 text-sm sm:text-base">
              GRADED COMICS
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  openDropdown === 'graded' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg origin-top transition-all duration-300 ${
                openDropdown === 'graded'
                  ? 'opacity-100 visible scale-y-100 translate-y-0'
                  : 'opacity-0 invisible scale-y-95 -translate-y-2'
              }`}
            >
              <a
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 text-sm border-b border-gray-100 last:border-b-0"
              >
                CGC Graded
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 text-sm border-b border-gray-100 last:border-b-0"
              >
                PGX Graded
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 text-sm border-b border-gray-100 last:border-b-0"
              >
                CBCS Graded
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 text-sm"
              >
                High Value Items
              </a>
            </div>
          </div>

          {/* Cleaning Service */}
          <button className="px-4 sm:px-6 py-2 text-gray-800 font-medium hover:text-red-500 transition-colors duration-300 text-sm sm:text-base">
            CLEANING SERVICE
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Smooth dropdown animation */
        div[class*='opacity-100']:not(.fixed) {
          animation: fadeInDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default DropDownMenu;