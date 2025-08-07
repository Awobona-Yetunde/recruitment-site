"use client"
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import Header from '@/components/landing-page/Header';
import React from 'react';
import ResearchHero from '@/components/DataServices/ResearchHero';
import InternetResearch from '@/components/DataServices/InternetResearch';

const page = () => {
  return (
    <>
    <Header/>
    <ResearchHero/>
    <InternetResearch/>
    <EnquiryForm/>
    <Foooter/>
    </>
  );
}

export default page;
