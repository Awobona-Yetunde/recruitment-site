"use client"
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Header from '@/components/landing-page/Header';
import Footer from '@/components/landing-page/Foooter';
import React from 'react';
import UsHero from '@/components/DataServices/UsHero';
import Usbased from '@/components/DataServices/Usbased';

const page = () => {
  return (
    <div>
      <Header/>
      <UsHero/>
      <Usbased/>
      <EnquiryForm/>
      <Footer/>
    </div>
  );
}

export default page;
