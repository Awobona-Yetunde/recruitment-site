"use client"
import React from 'react';
import Header from '@/components/landing-page/Header';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';

const page = () => {
  return (
    <>
      <Header />
      <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center text-white">
        <div className="bg-black h-[250px] w-[380px] -mt-14 opacity-70">
          <h1 className="text-2xl text-center md:text-4xl font-bold text-white  px-4">
            Government Data Entry
          </h1>
        </div>
      </section>

      <section className=" py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row  items-center justify-center ">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img
                src="/images/government.jpg"
                alt="Data Entry Services"
                className="w-full lg:w-1/2 rounded-lg shadow-md object-cover h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 mb-6 ">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Government
              </h3>
              <p className="text-gray-600 mb-4">
                Axion is actively looking to expand its business in Federal,
                State, and City government activities. To date, Axion has
                provided data entry support to the US EEOC involving
                investigations in two states and is currently serving the State
                of Alaska Department of Transportation & Public Facilities,
                recording the details of approximately 12,000 vehicle crashes
                per year.
              </p>
            </div>
          </div>

        </div>
      </section>
      <section className=" py-12">
        
        <div className="flex gap-3 justify-center">
          <img className="h-[150px]" src="/images/nyu.jpg"></img>
          <img className="h-[150px]" src="/images/dartmouth.jpg"></img>
        </div>
      </section>
      <EnquiryForm />
      <Foooter />
    </>
  );
}

export default page;
