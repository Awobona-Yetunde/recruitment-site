"use client"
import React from 'react';
import DataEntryServices from '@/components/DataServices/DataEntryServices';
import Header from '@/components/landing-page/Header';
import Foooter from '@/components/landing-page/Foooter';
import EnquiryForm from '@/components/landing-page/EnquiryForm';

const page = () => {
  return (
    <>
      <Header />
      <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center relative">
        <div className="bg-black -mt-12 lg:-mt- opacity-70 p-6 rounded-lg text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[250px] lg:h-[300px]">
          <h1 className="text-2xl text-center md:text-4xl font-bold text-white  mt-30">
            Data Entry Services
          </h1>
        </div>
      </section>
      <section className="bg-gray-100 py-12">
        <div lassName="container mx-auto px-4 md:px-6">
          <p className="text-black text-base md:text-lg mb-4 text-center">
            Discover the difference an experienced data entry team can make in
            the way you do business. Since our inception in the late 1990s, the
            nature and scope of our services have changed significantly. In 2000
            we were one of the first, if not the first, company to utilize an
            entirely remote data entry workforce doing work over the internet
            while connected to our private network. From that, we progressed to
            performing <strong>data verification</strong> and
            <strong>Internet research</strong>
            projects, as well as <strong>data entry staffing</strong> and
            management performing work on our client’s networks.
          </p>
          <button className=" text-white bg-orange-400 align-center border border-orange-400 font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
            GET STARTED
          </button>
        </div>
      </section>
      <DataEntryServices />
      <EnquiryForm />
      <Foooter />
    </>
  );
}

export default page;
