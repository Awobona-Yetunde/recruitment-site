"use client"
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import Header from '@/components/landing-page/Header';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center text-white">
        <div className="bg-black h-[250px] w-[380px] -mt-14 opacity-70">
          <h1 className="text-2xl text-center md:text-4xl font-bold text-white  mb-4">
            Privacy Policy
          </h1>
        </div>
      </section>
      <section className=" py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-8 ">
            <div>
              <p className="text-black mb-4">Last updated: 12/12/2022</p>
              <p className="text-black mb-4">
                Axion receives Personal Data from two sources, as follows:
              </p>
              <ul className="mb-4 list-decimal">
                <li>
                  Clients of Axion that submit documents for data entry
                  including Personal Data; and
                </li>
                <li>
                  Individuals voluntarily registering for inclusion in a private
                  database maintained by our payroll company for future
                  consideration of becoming an independent data entry
                  contractor.
                </li>
              </ul>
              <p className="text-black mb-4">
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of such Personal Data and
                describes Your privacy rights and those of the individuals
                included on Client-supplied documents and how the law protects
                You and the individuals included on Client-supplied documents.
              </p>
              <p className="text-black mb-4">
                For individuals included on documents provided by Clients of
                Axion, we do not use the Personal Data for any purpose
                whatsoever, other than to collect the Personal Data in the
                manner and format defined by the Client and to send the
                collected Personal Data back to the Client using the method and
                format defined by the Client.
              </p>
              <p className="text-black mb-4">
                For individuals registering in the external database for
                consideration as a data entry contractor, we use Your Personal
                Data solely for the purpose of identifying potential data entry
                contractors.
              </p>
              <p className="text-black mb-4">
                By using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy. This Privacy
                Policy has been created with the help of the TermsFeed Privacy
                Policy Generator.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-orange-400 leading-tight">
                Interpretations and Definitions
              </h2>
              <h4 className="font-bold ">Interpretation</h4>
              <p className="text-blac mb-4">
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or plural.
              </p>
              <h4 className="font-bold ">Definitions</h4>
              <p className="text-blac mb-4">
                For the purposes of this Privacy Policy:
              </p>
              <p className="text-blac mb-4">
                Client means a company organization or individual that hires
                Axion to provide data entry services.
              </p>
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
