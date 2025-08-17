"use client"
import ContactHero from '@/components/DataServices/ContactHero';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import Header from '@/components/landing-page/Header';
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const page = () => {
  return (
    <>
      <Header />
      <ContactHero />
      <section className="bg-gray-100 flex flex-col gap-4 lg:flex-row py-12 px-7 justify-center">
        <div className="bg-orange-400 h-[200px] text-white flex flex-col font-bold text-3xl px-22 gap-3 justify-center w-[450px]">
          <Phone />
          <h5>Phone</h5>
        </div>
        <div className="bg-orange-400 h-[200px] text-white font-bold text-3xl flex flex-col gap-3 justify-center w-[450px] px-22">
          <Mail className="" />
          <h5>Email</h5>
        </div>
      </section>
      <EnquiryForm />
      <Foooter />
    </>
  );
}

export default page;
