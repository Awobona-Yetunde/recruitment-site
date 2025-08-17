"use client"
import Header from '@/components/landing-page/Header';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center text-white">
        <div className="bg-black h-[250px] w-[380px] -mt-14 opacity-70">
          <h1 className="text-2xl text-center md:text-4xl font-bold text-white  px-4">
            Not-For-Profit
          </h1>
        </div>
      </section>

      <section className=" py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row  items-center justify-center ">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img
                src="/images/notforprofit.jpg"
                alt="Data Entry Services"
                className="w-full lg:w-1/2 rounded-lg shadow-md object-cover h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 mb-6 ">
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                Data Entry Non-Profit Organizations
              </h3>
              <p className="text-black mb-4">
                Axion has supported the efforts of not-for-profit organizations
                over the years, providing data entry services of membership
                applications, contribution cards, surveys, and other forms.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-12">
        <div className="flex gap-3 justify-center">
          <img className="h-[150px]" src="/images/duck-unlimited.jpg"></img>
          <img className="h-[150px]" src="/images/dartmouth.jpg"></img>
        </div>
      </section>
      <EnquiryForm />
      <Foooter />
    </>
  );
}

export default page;
