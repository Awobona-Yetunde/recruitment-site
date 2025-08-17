import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import ImageSwiper from '@/components/ImageSwiper';
import About from '../About';
import Benefits from '../Benefits';
import DataProcess from '../DataProcess';
import Reviews from '../Reviews';
import DataEntry from '../DataEntry';
import EnquiryForm from '../EnquiryForm';
import Foooter from '../Foooter';

const LandingPage = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <ImageSwiper/>
      <About/>
      <Benefits/>
      <DataProcess/>
      <Reviews/>
      <DataEntry/>
      <EnquiryForm/>
      <Foooter/>

    </>
  );
}

export default LandingPage;
