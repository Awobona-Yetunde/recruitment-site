"use client"
import Header from "@/components/landing-page/Header";
import Hero from "@/components/landing-page/Hero";
import ImageSwiper from "@/components/ImageSwiper";
import About from "@/components/landing-page/About";
import Benefits from "@/components/landing-page/Benefits";
import DataProcess from "@/components/landing-page/DataProcess";
import Reviews from "@/components/landing-page/Reviews";
import DataEntry from "@/components/landing-page/DataEntry";
import Foooter from "@/components/landing-page/Foooter";
import EnquiryForm from "@/components/landing-page/EnquiryForm";


export default function Home() {
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
