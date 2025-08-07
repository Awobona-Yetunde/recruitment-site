"use client"
import Verification from '@/components/DataServices/Verification';
import VerificationHero from '@/components/DataServices/VerificationHero';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import Header from '@/components/landing-page/Header';
import React from 'react';

const page = () => {
  return (
    <>
    <Header/>
    <VerificationHero/>
    <Verification/>
    <EnquiryForm/>
    <Foooter/>
    </>
  );
}

export default page;
