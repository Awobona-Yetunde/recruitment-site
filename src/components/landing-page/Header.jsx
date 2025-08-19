import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 bg-black shadow-md z-10">
      {/* <div className="flex justify-between items-center py-2 px-4">
        <a
          href="tel:800-493-2630"
          className="text-orange-500 text-sm font-semibold hover:text-orange-300 transition-colors"
        >
          Call Us: 800-493-2630
        </a>
      </div> */}
      <div className="flex justify-between items-center py-3 px-4 text-white">
        <div className="flex gap-3 items-center">
          <a href="/Landing-page">
            <img
              className="w-[60px] h-[60px] rounded-md"
              src="/images/logo.png"
              alt="Axion Logo"
            />
          </a>
          <h1 className="text-base font-bold tracking-tight text-gray-400">
            DATA SERVICES
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-full bg-white/95 backdrop-blur-sm border border-orange-400 rounded-lg shadow-lg p-4 flex flex-col gap-5 text-black">
                <div>
                  <button
                    onClick={() => toggleDropdown("dataServices")}
                    className="w-full text-left font-semibold hover:text-orange-500 flex items-center justify-between"
                  >
                    Data Services
                    {activeDropdown === "dataServices" ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {activeDropdown === "dataServices" && (
                    <div className="pl-4 mt-2 flex flex-col gap-5 text-sm">
                      <a
                        href="/DataEntryServices"
                        className="hover:text-orange-500 border border-orange-400 p-4"
                      >
                        Data Entry Services
                      </a>
                      <a
                        href="/data-verification-page"
                        className="hover:text-orange-500 border border-orange-400 p-4"
                      >
                        Data Entry Verification
                      </a>
                      <a
                        href="/ai-processing"
                        className="hover:text-orange-500 border border-orange-400 p-4"
                      >
                        AI Processing and Verification
                      </a>
                      <a
                        href="/data-research"
                        className="hover:text-orange-500 border border-orange-400 p-4"
                      >
                        Web Research Services
                      </a>
                      <a
                        href="/us-based-page"
                        className="hover:text-orange-500 border border-orange-400 p-4"
                      >
                        US Based Data Entry
                      </a>
                      <a
                        href="/customize-page"
                        className="hover:text-orange-500 border border-orange-400 p-4"
                      >
                        Customized Service Approach
                      </a>
                      <a
                        href="/data-entry-staffing"
                        className="hover:text-orange-500 border border-orange-400 p-4"
                      >
                        Data Entry Staffing & Management
                      </a>
                    </div>
                  )}
                </div>
                <a
                  href="/client-projects"
                  className="font-semibold hover:text-orange-500"
                >
                  Sample Client Projects
                </a>
                <a
                  href="/data-security-page"
                  className="font-semibold hover:text-orange-500"
                >
                  Data Security
                </a>
                <div>
                  <button
                    onClick={() => toggleDropdown("about")}
                    className="w-full text-left font-semibold hover:text-orange-500 flex items-center justify-between"
                  >
                    About
                    {activeDropdown === "about" ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {activeDropdown === "about" && (
                    <div className="pl-4 mt-2 flex flex-col gap-5 text-sm">
                      <a
                        href="/about-axion"
                        className="hover:text-orange-500 border border-orange-400 p-4"
                      >
                        About Axion
                      </a>
                      <a
                        href="/fees"
                        className="hover:text-orange-500 border border-orange-400 p-4"
                      >
                        Fees
                      </a>
                      <a
                        href="/faqs"
                        className="hover:text-orange-500 border border-orange-400 p-4"
                      >
                        FAQs
                      </a>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    onClick={() => toggleDropdown("contact")}
                    className="w-full text-left font-semibold hover:text-orange-500 flex items-center justify-between"
                  >
                    Contact
                    {activeDropdown === "contact" ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {activeDropdown === "contact" && (
                    <div className="pl-4 mt-2 flex flex-col gap-5 text-sm">
                      <a
                        href="/contact"
                        className="hover:text-orange-500 border border-orange-400 p-4"
                      >
                        Contact
                      </a>
                      <a
                        href="/employment-page"
                        className="hover:text-orange-500 border border-orange-400 p-4"
                      >
                        Employment
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <nav className="hidden md:flex items-center gap-4 text-xs">
            <div className="relative">
              <button
                onClick={() => toggleDropdown("dataServices")}
                className="hover:text-orange-500 flex items-center gap-1 whitespace-nowrap"
              >
                Data Services
                {activeDropdown === "dataServices" ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {activeDropdown === "dataServices" && (
                <div className="absolute top-full left-0 mt-2 w-[250px] bg-white border border-orange-400 rounded-lg shadow-lg p-2 text-black text-xs">
                  <a
                    href="/DataEntryServices"
                    className="block px-3 py-1 hover:bg-orange-200 rounded whitespace-nowrap"
                  >
                    Data Entry Services
                  </a>
                  <a
                    href="/data-verification-page"
                    className="block px-3 py-1 hover:bg-orange-200 rounded whitespace-nowrap"
                  >
                    Data Entry Verification
                  </a>
                  <a
                    href="/ai-processing"
                    className="block px-3 py-1 hover:bg-orange-200 rounded whitespace-nowrap"
                  >
                    AI Processing and Verification
                  </a>
                  <a
                    href="/data-research"
                    className="block px-3 py-1 hover:bg-orange-200 rounded whitespace-nowrap"
                  >
                    Web Research Services
                  </a>
                  <a
                    href="/us-based-page"
                    className="block px-3 py-1 hover:bg-orange-200 rounded whitespace-nowrap"
                  >
                    US Based Data Entry
                  </a>
                  <a
                    href="/customize-page"
                    className="block px-3 py-1 hover:bg-orange-200 rounded whitespace-nowrap"
                  >
                    Customized Service Approach
                  </a>
                  <a
                    href="/data-entry-staffing"
                    className="block px-3 py-1 hover:bg-orange-200 rounded whitespace-nowrap"
                  >
                    Data Entry Staffing & Management
                  </a>
                </div>
              )}
            </div>
            <a
              href="/client-projects"
              className="hover:text-orange-500 whitespace-nowrap"
            >
              Sample Client Projects
            </a>
            <a
              href="/data-security-page"
              className="hover:text-orange-500 whitespace-nowrap"
            >
              Data Security
            </a>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="hover:text-orange-500 flex items-center gap-1 whitespace-nowrap"
              >
                About
                {activeDropdown === "about" ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {activeDropdown === "about" && (
                <div className="absolute top-full right-0 mt-2 w-[180px] bg-white border border-orange-400 rounded-lg shadow-lg p-2 text-black text-xs">
                  <a
                    href="/about-axion"
                    className="block px-3 py-1 hover:bg-orange-200 rounded whitespace-nowrap"
                  >
                    About Axion
                  </a>
                  <a
                    href="/fees"
                    className="block px-3 py-1 hover:bg-orange-200 rounded whitespace-nowrap"
                  >
                    Fees
                  </a>
                  <a
                    href="/faqs"
                    className="block px-3 py-1 hover:bg-orange-200 rounded whitespace-nowrap"
                  >
                    FAQs
                  </a>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("contact")}
                className="hover:text-orange-500 flex items-center gap-1 whitespace-nowrap"
              >
                Contact
                {activeDropdown === "contact" ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {activeDropdown === "contact" && (
                <div className="absolute top-full right-0 mt-2 w-[180px] bg-white border border-orange-400 rounded-lg shadow-lg p-2 text-black text-xs">
                  <a
                    href="/contact"
                    className="block px-3 py-1 hover:bg-orange-200 rounded whitespace-nowrap"
                  >
                    Contact
                  </a>
                  <a
                    href="/employment-page"
                    className="block px-3 py-1 hover:bg-orange-200 rounded whitespace-nowrap"
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
