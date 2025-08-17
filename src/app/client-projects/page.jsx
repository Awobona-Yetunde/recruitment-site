"use client"
import ImageSwiper from '@/components/ImageSwiper';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import Header from '@/components/landing-page/Header';
import ImageSwippers from '@/components/landing-page/ImageSwippers';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <>
        <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center relative">
          <div className="bg-black -mt-12 lg:-mt- opacity-70 p-6 rounded-lg text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[250px] lg:h-[300px]">
            <h1 className="text-3xl text-center md:text-5xl font-bold text-white  mt-24">
              Sample Client Projects
            </h1>
          </div>
        </section>
        <div className="bg-gray-100 py-20 px-5 text-center  mb-12 ">
          <p className="text-black text-base md:text-lg mb-4">
            The types of data entry projects we have undertaken range from
            simple to complex, providing us with broad experience in various
            industries. Each project is different, with its own unique set of
            requirements, but our expertise in navigating challenging data entry
            problems has given us a foothold in many industries.
          </p>
          <button className="bg-orange-400 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors duration-300 ">
            GET STARTED
          </button>
        </div>
      </>
      <section className=" py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col  items-start">
            <div className="w-full lg:w-3/4 lg:pl-6">
              <div className="flex flex-col gap-8 ">
                <div>
                  <div className="mb-4">
                    <img
                      src="/images/dataeservices.jpg"
                      alt="Data Entry Services"
                      className="w-full lg:w-1/2 rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-full lg:w-3/4 mb-6 lg:mb-0">
                    <div className="bg-orange-500 text-white p-4 rounded-r-lg py-8 mb-6">
                      <h2 className="text-3xl font-bold">
                        Data Entry Service Examples
                      </h2>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                      Axion Data Services Offers Data Entry Services To Your
                      Industries
                    </h3>
                    <p>
                      <a
                        href="/healthcare"
                        className="text-orange-400 underline hover:decoration-0"
                      >
                        Healthcare,
                      </a>
                      <a
                        href="/finance"
                        className="text-orange-400 underline hover:decoration-0"
                      >
                        Finance,
                      </a>
                      <a
                        href="/retail"
                        className="text-orange-400 underline hover:decoration-0"
                      >
                        Retail,
                      </a>
                      <a
                        href="/government"
                        className="text-orange-400 underline hover:decoration-0"
                      >
                        Government,
                      </a>
                      <a
                        href="/not-for-profit"
                        className="text-orange-400 underline hover:decoration-0"
                      >
                        Non-Profit,
                      </a>
                      <a
                        href="sport"
                        className="text-orange-400 underline hover:decoration-0"
                      >
                        Sports,
                      </a>
                      and
                      <a
                        href="social-media"
                        className="text-orange-400 underline hover:decoration-0"
                      >
                        Social Media
                      </a>
                      are just a few of the industries we assisted through our
                      data entry services over the years.
                    </p>
                    <p className="text-black mb-4">
                      Here is a partial list of the types of data entry projects
                      we have undertaken across many industries since 1996:
                    </p>
                  </div>
                </div>
                <div>
                  <ul className="list-disc pl-5 text-black mb-4 justify-between flex space-y-2">
                    <div>
                      <li>Commercial Property Insurance Certificates</li>
                      <li>Contribution/Donation Cards</li>
                      <li>Customer/Fan Survey Forms</li>
                      <li>I-9 Employment Eligibility Forms</li>
                      <li>Membership Registration Forms</li>
                      <li>Patient Entries for Anesthesia Procedures</li>
                      <li>Property Appraisals</li>
                      <li>Sales & Marketing Lead Documents</li>
                    </div>
                    <div>
                      <li>Contest Entry Forms</li>
                      <li>Creditor Judgments</li>
                      <li>Historical Financial Transactions</li>
                      <li>Loyalty Card Applications</li>
                      <li>Patient Documents for Clinical Trials</li>
                      <li>Product Registrations</li>
                      <li>Research Study Documentation</li>
                      <li>Utility Bills</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ImageSwippers />
      <EnquiryForm />
      <Foooter />
    </>
  );
}

export default page;
