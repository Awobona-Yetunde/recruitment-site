"use client"
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import Header from '@/components/landing-page/Header';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center relative">
        <div className="bg-black -mt-12 lg:-mt- opacity-70 p-6 rounded-lg text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[250px] lg:h-[300px]">
          <h1 className="text-2xl text-center md:text-4xl font-bold text-white  mt-30">
            AI Processing and Verification
          </h1>
        </div>
      </section>
      <section className=" py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-8 ">
            <div className="w-full lg:w-3/4 mb-6 lg:mb-0">
              <div className="bg-orange-500 text-white p-4 rounded-r-lg py-8 mb-6">
                <h2 className="text-3xl font-bold">
                  Determining Data Entry Cost
                </h2>
              </div>
              <div className="flex flex-col gap-5 mb-5">
                <p>
                  In addition to traditional data entry, Axion now offers AI
                  (Artificial Intelligence) data services to support
                  large-volume projects.
                </p>
                <p>
                  AI processing can be used to expedite data extraction,
                  including human verification for client’s projects. These
                  services include the following:
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Template Development
                </h3>
                <p className="text-black mb-4">
                  Developing and testing an AI processor to identify and extract
                  the specific data points in your document set.
                </p>
                <p className="text-black mb-4">
                  Training the AI processor through machine learning algorithms
                  improves data accuracy. This involves processing and verifying
                  multiple training datasets to achieve the desired level of
                  accuracy.
                </p>
                <p className="text-black mb-4">
                  Development of a user interface allowing for the efficient
                  verification of data accuracy.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4 mb-4">
                  Data Extraction
                </h3>
                <p className="text-black mb-4">
                  <span className="font-bold">Entity Recognition</span>:
                  Identifying and classifying key entities (fields) in text.
                </p>
                <p className="text-blac mb-4">
                  <span className="font-bold">
                    Natural Language Processing (NLP)
                  </span>
                  : AI field focused on human language interaction.
                </p>
                <p className="text-black mb-4">
                  <span className="font-bold">Text Mining</span>: Extracting
                  useful information from unstructured text.
                </p>
                <p className="text-black mb-4">
                  <span className="font-bold">
                    Optical Character Recognition (OCR)
                  </span>
                  : Converting scanned documents into editable data.
                </p>
                <p className="text-black mb-4">
                  <span className="font-bold">Data Normalization</span>:
                  Standardizing data formats for consistency.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4 mb-4">
                  Data Verification (“Human-in-the-Loop”)
                </h3>
                <p className="text-black mb-4">
                  This can be a stand-alone service for those clients already
                  performing data extraction using their own AI processor. Data
                  Quality Assessment: Evaluating data accuracy and reliability.
                  Validation: Checking if data meets specified criteria. Data
                  Cleansing: Correcting errors and inconsistencies in data.
                </p>
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
