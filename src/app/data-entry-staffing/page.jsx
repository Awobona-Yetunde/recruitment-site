"use client"
import DataStaffing from '@/components/DataServices/DataStaffing';
import DataStaffingHero from '@/components/DataServices/DataStaffingHero';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import Header from '@/components/landing-page/Header';
import React from 'react';

const page = () => {
  return (
    <>
      <Header/>
      <DataStaffingHero/>
      <DataStaffing/>
      <EnquiryForm/>
      <Foooter/>
    </>
  );
}

export default page;
