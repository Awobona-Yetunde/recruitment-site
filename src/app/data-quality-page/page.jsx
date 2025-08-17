"use client"
import Header from '@/components/landing-page/Header';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import DataQualityHero from '@/components/DataServices/DataQualityHero';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <DataQualityHero />
      <section className=" py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col  items-start">
            <div className="w-full lg:w-3/4 lg:pl-6">
              <div className="flex flex-col gap-8 ">
                <div>
                  <div className="mb-4">
                    <img
                      src="/images/quality-pic.jpg"
                      alt="Data Entry Services"
                      className="w-full lg:w-1/2 rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-full lg:w-3/4 mb-6 lg:mb-0">
                    <div className="bg-orange-500 text-white p-4 rounded-r-lg py-8 mb-6">
                      <h2 className="text-3xl font-bold">
                        Quality Checking Processes
                      </h2>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                      Field Validation
                    </h3>
                    <p className="text-black mb-4">
                      When we design the data entry program for each project, we
                      use field validations extensively, along with table
                      lookups, formulas, and data-type restrictions. This
                      includes standard or custom check-digit formulas, city,
                      state, and zip code lookups from Postal Code tables, as
                      well as any type of customer-specific data (for example,
                      vendor or customer lists, and product or parts lists).
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                    Re-Key Verificationt
                  </h2>
                  <p className="text-black mb-4">
                    Over the years, we have determined initial accuracy ranges
                    from 96%-98% depending on the type of information (numeric
                    or alpha-numeric). When the nature of the application
                    demandes even higher levels of accuracy, selected fields or
                    entire documents can be verified. This applies to recognized
                    text from OCR/ICR/OMR engines, as well as data that is
                    keyed. After data has been keyed once (or recognized), it is
                    keyed again by a second independent operator. As each
                    keystroke is made, the system flags any differences, which
                    are then verified and corrected by the second operator, or
                    sent to a third, senior-level operator for resolution.
                  </p>

                  <div>
                    <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                      Address Correction & Verification
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Undeliverable mail is costly, especially for organizations
                      handling large direct mail programs. To reduce this cost
                      and assure the cleanest address data possible, we utilize
                      CorrectAddress® from Experian
                      (https://www.experian.com/small-business/address-validation)
                      to verify, correct, and format the addresses entered in
                      accordance with USPS CASS standards. As each address is
                      keyed, it is instantaneously validated against a database
                      of all current US addresses and normalized to USPS mailing
                      standards.
                    </p>
                    <p className="text-gray-600 mb-4">
                      As an add-on, be sure to ask how we can append latitude
                      and longitude to your address records based on the Zip+4.
                      This lets you determine which of your business locations
                      is closest to each person in your database, which is a
                      valuable tool for any business owner.
                    </p>
                  </div>
                  <div>
                    <div className="bg-orange-500 text-white p-4 rounded-r-lg py-8 mb-6">
                      <h2 className="text-3xl font-bold">
                        Skilled Data Entry Operators
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Axion carefully screens and trains proficient, experienced
                      data entry operators All work is performed exclusively by
                      domestic U.S. operators. We have a workforce ranging in
                      size from 40-100 operators at any given time, depending on
                      work volume. Most of our operators have been with us for
                      years; some since the beginning, resulting in a highly
                      skilled workforce, first-class service, and of course,
                      better data entry quality.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Contact us today to request more information about our
                      standards regarding data entry quality. We serve
                      businesses and other clients throughout the United States.
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
