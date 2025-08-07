"use client"
import ContactHero from '@/components/DataServices/ContactHero';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import Header from '@/components/landing-page/Header';
import React from 'react';

const page = () => {
  return (
    <>
      <Header/>
      <ContactHero/>
      <EnquiryForm/>
      <Foooter/>
    </>
  );
}

export default page;
