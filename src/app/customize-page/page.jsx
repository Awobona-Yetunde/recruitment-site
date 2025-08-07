"use client"
import Header from '@/components/landing-page/Header';
import Footer from '@/components/landing-page/Foooter';
import React from 'react';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import CustomizedHero from '@/components/DataServices/CustomizedHero';
import Customized from '@/components/DataServices/Customized';

const page = () => {
  return (
    <>
      <Header />
      <CustomizedHero />
      <Customized />
      <EnquiryForm />
      <Footer />
    </>
  );
}

export default page;
