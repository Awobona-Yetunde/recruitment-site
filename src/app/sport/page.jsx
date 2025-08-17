"use client";
import React from 'react';
import Header from "@/components/landing-page/Header";
import EnquiryForm from "@/components/landing-page/EnquiryForm";
import Foooter from "@/components/landing-page/Foooter";

const page = () => {
  return (
    <>
      <Header />
      <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center text-white">
        <div className="bg-black h-[250px] w-[380px] -mt-14 opacity-70">
          <h1 className="text-2xl text-center md:text-4xl font-bold text-white  px-4">
            Sports
          </h1>
        </div>
      </section>

      <section className=" py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row  items-center justify-center ">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <img
                src="/images/sport.jpg"
                alt="Data Entry Services"
                className="w-full lg:w-1/2 rounded-lg shadow-md object-cover h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 mb-6 ">
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                Data Entry For Athletic Organizations
              </h3>
              <p className="text-black mb-4">
                Axion has compiled the results of in-game fan surveys, compiled
                a comprehensive database of on-field officials, assisted in the
                creation of physical artifacts implanted into the grounds of
                Heinz Field honoring all season ticket holders at the opening of
                Heinz Field, and built a comprehensive database of participants
                and statistics spanning 20 years of the Marine Corps Marathon..
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-12">
        <div className="flex gap-3 justify-center">
          <img className="h-[150px]" src="/images/steelers.jpg"></img>
          <img className="h-[150px]" src="/images/marine-corps.jpg"></img>
        </div>
      </section>
      <EnquiryForm />
      <Foooter />
    </>
  );
}

export default page;
