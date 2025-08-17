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
            Reatail
          </h1>
        </div>
      </section>

      <section className=" py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row  items-center justify-center ">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img
                src="/images/retail.jpg"
                alt="Data Entry Services"
                className="w-full lg:w-1/2 rounded-lg shadow-md object-cover h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 mb-6 ">
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                Retail & Restaurant Chains
              </h3>
              <p className="text-black mb-4">
                For many years, Axion specialized in providing data entry for
                large retail and restaurant chains supporting those companies
                customer loyalty programs. In one notable case, we processed an
                average of 200,000 loyalty card applications monthly for 14
                years. We have processed contest entries, product registrations,
                product promotions, and updated inventory information Using
                programmed procedures we are able to validate addresses against
                the USPS database of U.S. addresses, appending the Zip+4 when
                available. As well, we use formula validations to validate
                barcords using the built in check-digit algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-12">
        <div className="flex flex-col lg:flex-row gap-3 justify-center items-center">
          <img
            className="h-[150px]  w-[150px]"
            src="/images/benihana.jpg"
          ></img>
          <img className="h-[150px] w-[150px]" src="/images/gnc.jpg"></img>
          <img
            className="h-[150px] w-[150px]"
            src="/images/tag-heuer.jpg"
          ></img>
          <img
            className="h-[150px] w-[150px]"
            src="/images/build-a-bear.jpg"
          ></img>
        </div>
      </section>
      <EnquiryForm />
      <Foooter />
    </>
  );
}

export default page;
