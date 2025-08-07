import DataSecurityHero from '@/components/DataServices/DataSecurityHero';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import Header from '@/components/landing-page/Header';
import React from 'react';

const page = () => {
  return (
    <>
      <Header/>
      <DataSecurityHero/>
      <EnquiryForm/>
      <Foooter/>
    </>
  );
}

export default page;
