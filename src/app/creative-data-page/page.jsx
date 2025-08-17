"use client"
import Header from '@/components/landing-page/Header';
import CreativeDataHero from '@/components/DataServices/CreativeDataHero';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <CreativeDataHero />
      <section className=" py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col  items-start">
            <div className="w-full lg:w-3/4 lg:pl-6">
              <div className="flex flex-col gap-8 ">
                <div>
                  <div className="mb-4">
                    <img
                      src="/images/creative-pic.jpg"
                      alt="Data Entry Services"
                      className="w-full lg:w-1/2 rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-full lg:w-3/4 mb-6 lg:mb-0">
                    <div className="bg-orange-500 text-white p-4 rounded-r-lg py-8 mb-6">
                      <h2 className="text-3xl font-bold">
                        Specialized Processes to Solve Data Issues
                      </h2>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                      Protecting PII
                    </h3>
                    <p className="text-black mb-4">
                      For the protection of our clients’ and their customers’,
                      Axion has developed a method to prevent a single data
                      operator from keying all of the data for a specific form
                      by separating individual pages into sub-sections which are
                      then keyed by separate operators.
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                    Validating Address Information
                  </h2>
                  <p className="text-black mb-4">
                    Once an address has been keyed into the system, Axion’s data
                    entry system validates the address against the most recently
                    available USPS database. If the address is valid, the zip+4
                    is automatically appended to the zip code and the address is
                    normalized to USPS standards.
                  </p>

                  <div>
                    <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                      Customized Workflow
                    </h2>
                    <p className="text-black mb-4">
                      Axion creates a customized workflow for each client and
                      form. In one example, to accommodate a client’s
                      requirement of 20-hour continuous daily processing with
                      delivery requirements every 30-minutes Axion developed a
                      unique scheduling tool to establish five 4-hour shifts
                      based on the historical traffic volumes per shift to
                      determine the number of staff needed for each shift.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                      Axion File Express
                    </h2>
                    <p className="text-black mb-4">
                      Axion is developing a secure proprietary file transfer
                      process that allows files to be transferred to and from
                      Axion by placing files into a unique folder. Once the
                      files are picked up, the files are split into individual
                      bytes, encrypted, and sent via HTTPS to the destination
                      where the file is un-encrypted and stored as the original
                      file. The process runs continuously in the background
                      without any human interaction required once the files have
                      been placed into the folder. This eliminates the need to
                      create Zip files, encrypt them, password protect them, and
                      set up and execute an FTP file transfer.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                      Text Layer Data Extraction
                    </h2>
                    <p className="text-black mb-4">
                      Axion is developing a process enabling typewritten data to
                      be extracted exactly as it was typed from digitally
                      created PDF files.
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
