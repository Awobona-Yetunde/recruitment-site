"use client"
import EnquiryForm from '@/components/landing-page/EnquiryForm'
import Faqs from '@/components/landing-page/Faqs'
import Foooter from '@/components/landing-page/Foooter'
import { Phone, Calendar } from 'lucide-react'
import Header from '@/components/landing-page/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center text-white">
        <div className="bg-black h-[250px] w-[380px] -mt-14 opacity-70">
          <h1 className="text-2xl text-center md:text-4xl font-bold text-white mb-4">
            Data Entry FAQS
          </h1>
        </div>
      </section>
      <section className="bg-gray-100 flex flex-col gap-4 lg:flex-row py-12 px-7 justify-center">
        <div className="bg-orange-400 h-[200px] text-white flex flex-col font-bold text-3xl px-22 gap-3 justify-center w-[450px]">
          <Phone />
          <h5>Phone</h5>
        </div>
        <div className="bg-orange-400 h-[200px] text-white flex flex-col gap-3 justify-center w-[450px] font-bold text-3xl px-22">
          <Calendar />
          <h5>Consultation</h5>
        </div>
      </section>
      <Faqs />
      <EnquiryForm />
      <Foooter />
    </div>
  );
}

export default page
