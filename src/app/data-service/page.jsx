"use client"
import DataExcellenceHero from '@/components/DataServices/DataExcellenceHero';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import Header from '@/components/landing-page/Header';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <DataExcellenceHero />
      <section className=" py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col  items-start">
            <div className="w-full lg:w-3/4 lg:pl-6">
              <div className="flex flex-col gap-8 ">
                <div>
                  <div className="mb-4">
                    <img
                      src="/images/excellence-shake.jpg"
                      alt="Data Entry Services"
                      className="w-full lg:w-1/2 rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-full lg:w-3/4 mb-6 lg:mb-0">
                    <div className="bg-orange-500 text-white p-4 rounded-r-lg py-8 mb-6">
                      <h2 className="text-3xl font-bold">
                        Working for Your Success
                      </h2>
                    </div>
                  </div>
                  <div>
                    <p className="text-black mb-4">
                      Some say attitude affects behavior, and others say
                      behavior affects attitude. We think both are true.
                    </p>
                    <p className="text-black mb-4">
                      At Axion, we believe if we can help our clients to be
                      successful, we will be successful as well. We view all our
                      business relationships, with clients, vendors, and each
                      other at Axion, as partnerships. We are in this together –
                      to help each other be successful. It’s an attitude. A way
                      of thinking that permeates our organization. It’s in our
                      DNA.
                    </p>
                    <p className="text-black mb-4">
                      We never make promises know we can’t keep, but promise we
                      will do whatever it takes to meet, and even exceed, mutual
                      expectations. When two people or organiations share the
                      same goal, good things happen. But words are cheap, and as
                      they say actions speak louder than words.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EnquiryForm />
      <Foooter />
    </>
  );
}

export default page;
