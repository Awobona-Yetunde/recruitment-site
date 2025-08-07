"use client"
import DataCost from '@/components/DataServices/DataCost';
import FeesHero from '@/components/DataServices/FeesHero';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import Header from '@/components/landing-page/Header';
import React from 'react';

const page = () => {
  return (
    <>
    <Header/>
    <FeesHero/>
    <DataCost/>
    <EnquiryForm/>
    <Foooter/>
    </>
  );
}

export default page;
