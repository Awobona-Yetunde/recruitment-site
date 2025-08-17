import React from 'react';

const UsHero = () => {
  return (
    <>
      <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center relative">
        <div className="bg-black -mt-12 lg:-mt- opacity-70 p-6 rounded-lg text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[250px] lg:h-[300px]">
          <h1 className="text-3xl  md:text-5xl font-bold text-white leading-tight mt-15">
            US-Based Data Services
            <br />
            At Axion
          </h1>
        </div>
      </section>
      <div className="bg-gray-100 py-20 px-5 text-center  mb-12 ">
        <p className="text-black text-base md:text-lg mb-4">
          Since 1996, Axion Data Services has been an industry leader in
          providing data entry outsourcing services, data verification, and
          internet data research services to companies nationwide.
        </p>
        <button className="bg-orange-400 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors duration-300 ">
          GET STARTED
        </button>
      </div>
    </>
  );
}

export default UsHero;
