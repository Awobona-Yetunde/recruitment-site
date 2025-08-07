import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import DataQualityHero from '@/components/DataServices/DataQualityHero';
import React from 'react';

const page = () => {
  return (
    <>
    <Header/>
    <DataQualityHero/>
    <EnquiryForm/>
    <Foooter/>
    </>
  );
}

export default page;
