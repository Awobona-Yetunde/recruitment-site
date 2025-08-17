import React from 'react';

const ScamAlert = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl text-center md:text-4xl font-bold text-orange-400 mb-4">
          SCAM ALERT
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-4">
          We are aware of various scams in the U.S. and in India, where a person
          is fraudulently masquerading as a representative of Axion offering
          employment by Axion. They are imposters. They even use forms and
          contracts illegally displaying our logos. Please be aware, we have a
          single location near Pittsburgh, Pennsylvania, and in order to be
          employed by Axion you must be a U.S. Citizen residing in the U.S.
          Further, we outsource our human resource functions to a local HR firm,
          also located near Pittsburgh, PA.
        </p>
        <p className="text-gray-600 text-base md:text-lg mb-4">
          The only way to apply for a position with Axion is by clicking on the
          “Apply Now” links below and filling out the online application. We do
          NOT contact people who have not applied through this website, and if
          you are contacted, it will be by one of our staff having an email
          address something like someone@Axiondata.com. We do not reply to
          unsolicited employment inquiries.
        </p>
        <p className="text-gray-600 text-base md:text-lg mb-4">
          Please note that there is a $25 application fee when applying to Axion
          for employment.This fee helps us verify each application and ensures
          that we’re engaging with genuinely interested and serious candidates.
        </p>
        <button className=" text-orange-400 border border-orange-400 font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
          <a href="/apply-now">APPLY NOW</a>
        </button>
      </div>
    </section>
  );
}

export default ScamAlert;
