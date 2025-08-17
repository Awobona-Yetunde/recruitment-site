"use client"
import Header from '@/components/landing-page/Header';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import React from 'react';
import AboutHero from '@/components/DataServices/AboutHero';
import Beneficial from '@/components/DataServices/Beneficial';

const page = () => {
  return (
    <>
      <Header/>
      <AboutHero/>
      <Beneficial/>
      <EnquiryForm/>
      <Foooter/>
    </>
  );
}

export default page;
