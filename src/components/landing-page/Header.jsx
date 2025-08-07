import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDataServicesOpen, setIsDataServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <header className="sticky top-0 right-0 bg-black z-10">
      <div className="flex justify-between items-center p-4 text-white">
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-bold text-orange-500">AXION</h1>
          <h1 className="text-lg font-medium text-gray-400">DATA SERVICES</h1>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="tel:800-493-2630"
            className="text-orange-500 text-xl font-semibold"
          >
            800-493-2630
          </a>
          <div className="md:hidden">
            <button
              className="relative text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="transition-transform duration-300 h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
            {isMenuOpen && (
              <div className="absolute top-full right-0 rounded-lg p-3 flex flex-col gap-4 px-6 bg-black border border-gray-700 shadow-xl text-white w-[200px]">
                <div>
                  <button
                    onClick={() => {
                      setIsDataServicesOpen(!isDataServicesOpen);
                      setIsAboutOpen(false);
                      setIsContactOpen(false);
                    }}
                    className="w-full text-left hover:text-orange-500"
                  >
                    Data Services
                  </button>
                  {isDataServicesOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      <a
                        href="/DataEntryServices"
                        className="hover:text-orange-500"
                      >
                        Data Entry Services
                      </a>
                      <a
                        href="/data_verification-page"
                        className="hover:text-orange-500"
                      >
                        Data Entry Verification
                      </a>
                      <a href="#" className="hover:text-orange-500">
                        Ai Processing and Verification
                      </a>
                      <a href="#" className="hover:text-orange-500">
                        Web Research Services
                      </a>
                      <a href="#" className="hover:text-orange-500">
                        1-9 Support Services
                      </a>
                      <a href="#" className="hover:text-orange-500">
                        US Based Data Entry
                      </a>
                      <a href="#" className="hover:text-orange-500">
                        Customized Service Approach
                      </a>
                      <a href="#" className="hover:text-orange-500">
                        Data Entry Staffing & Management
                      </a>
                    </div>
                  )}
                </div>
                <a href="#" className="hover:text-orange-500">
                  Sample Client Projects
                </a>
                <div>
                  <button
                    onClick={() => {
                      setIsAboutOpen(!isAboutOpen);
                      setIsDataServicesOpen(false);
                      setIsContactOpen(false);
                    }}
                    className="w-full text-left hover:text-orange-500"
                  >
                    About
                  </button>
                  {isAboutOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      <a href="#" className="hover:text-orange-500">
                        About Axion
                      </a>
                      <a href="#" className="hover:text-orange-500">
                        Fees
                      </a>
                      <a href="#" className="hover:text-orange-500">
                        Faqs
                      </a>
                      <a href="#" className="hover:text-orange-500">
                        Review Us
                      </a>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    onClick={() => {
                      setIsContactOpen(!isContactOpen);
                      setIsDataServicesOpen(false);
                      setIsAboutOpen(false);
                    }}
                    className="w-full text-left hover:text-orange-500"
                  >
                    Contact
                  </button>
                  {isContactOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      <a href="#" className="hover:text-orange-500">
                        Contact
                      </a>
                      <a href="#" className="hover:text-orange-500">
                        Employment
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <div className="relative">
              <button
                onClick={() => setIsDataServicesOpen(!isDataServicesOpen)}
                className="hover:text-orange-500"
              >
                Data Services
              </button>
              {isDataServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-700 rounded-lg shadow-xl text-white p-2">
                  <a
                    href="/DataEntryServices"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Data Entry Services
                  </a>
                  <a
                    href="/data-verification-page"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Data Entry Verification
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Ai Processing and Verification
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Web Research Services
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    1-9 Support Services
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    US Based Data Entry
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Customized Service Approach
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Data Entry Staffing & Management
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-orange-500">
              Sample Client Projects
            </a>
            <div className="relative">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="hover:text-orange-500"
              >
                About
              </button>
              {isAboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-700 rounded-lg shadow-xl text-white p-2">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    About Axion
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Fees
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Faqs
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Review Us
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="hover:text-orange-500"
              >
                Contact
              </button>
              {isContactOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-700 rounded-lg shadow-xl text-white p-2">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Contact
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Employment
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React from 'react';
// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const[isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <header className="sticky top-0 right-0 bg-white z-10">
//       <div className="flex justify-between items-center p-4">
//         <div className="flex gap-3 text-blue-800">
//           <h1>DETA</h1>
//           <h1 className="font-bold tracking-tight">DATA SERVICES</h1>
//         </div>
//         <div className="md:hidden">
//           <button
//             className="relative"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? (
//               <X className="transition-transform duration-300 h-8 w-8" />
//             ) : (
//               <Menu className="h-8 w-8 md:hidden" />
//             )}
//           </button>
//           {isMenuOpen && (
//             <div className='absolute top-full right-0 rounded-lg p-3 flex flex-col gap-6 px-8 group-focus:scale-y-100 origin-top w-[100%] h-[300px] bg-white border shadow-xl text-blue-500'>
//               <a>Data Services</a>
//               <a>Data Security</a>
//               <a>About</a>
//               <a>Contact</a>
//             </div>
//           )}
//         </div>

//         <nav className="hidden md:flex gap-3">
//           <a>Data Services</a>
//           <a>Data Security</a>
//           <a>About</a>
//           <a>Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;
