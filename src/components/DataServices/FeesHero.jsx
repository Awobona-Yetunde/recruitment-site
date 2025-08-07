import React from 'react';

const FeesHero = () => {
  return (
    <>
      <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center text-white">
        <div className="bg-black h-[250px] w-[380px] -mt-14 opacity-70">
          <h1 className="text-2xl text-center md:text-4xl font-bold text-white  mb-4">
            Data Entry Cost Factors At Axion
          </h1>
        </div>
      </section>
      <div className="bg-gray-100 py-20 px-5 text-center  mb-12 ">
        <p className="text-black text-base md:text-lg mb-4">
          In business since 1996, the many different types of projects we have
          worked on have proven there is no such thing as ”one-size-fits-all“
          and no quick answer to what it will cost to work on your project. Cost
          is a very important consideration in your selection of a data entry
          company, and the more information you are able to provide us the more
          reliable will be the quote you receive.
        </p>
        <button className="bg-orange-400 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors duration-300 ">
          GET STARTED
        </button>
      </div>
    </>
  );
}

export default FeesHero;
