import React from 'react';

const AboutHero = () => {
  return (
    <>
      <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center relative">
        <div className="bg-black -mt-12 lg:-mt- opacity-70 p-6 rounded-lg text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[250px] lg:h-[300px]">
          <h1 className="text-3xl text-center md:text-5xl font-bold text-white  mt-30">
            About Axion
          </h1>
        </div>
      </section>
      <div className="bg-gray-100 py-20 px-5 text-center  mb-12 ">
        <p className="text-black text-base md:text-lg mb-4">
          In business since 1996, Axion serves a national market with
          high-quality, experienced data entry solutions. Here is what
          distinguishes Axion from other data firms and why our customers like
          us.
        </p>
        <button className="bg-orange-400 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors duration-300 ">
          GET STARTED
        </button>
      </div>
    </>
  );
}

export default AboutHero;
