import React from 'react';

const DataStaffingHero = () => {
  return (
    <>
      <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center text-white">
        <div className="bg-black h-[250px] w-[380px] -mt-14 opacity-70">
          <h1 className="text-2xl text-center md:text-4xl font-bold text-white  mb-4">
            Data Entry Staffing & Management Services
          </h1>
        </div>
      </section>
      <div className="bg-gray-100 py-20 px-5 text-center  mb-12 ">
        <p className="text-black text-base md:text-lg mb-4">
          As an alternative to Axion developing a custom application and
          performing the work on its network, a growing trend is for companies
          having their own in-house data entry system to outsource the staffing
          and management to Axion. Axion staff connect remotely to the client
          network and use the client system. There are a number of advantages to
          this approach, most notably security, turnaround time, and sometimes
          cost.
        </p>
        <button className="bg-orange-400 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors duration-300 ">
          GET STARTED
        </button>
      </div>
    </>
  );
}

export default DataStaffingHero;
