import React from 'react';

const DataQualityHero = () => {
  return (
    <>
      <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center text-white">
        <div className="bg-black h-[250px] w-[380px] -mt-14 opacity-70">
          <h1 className="text-2xl text-center md:text-4xl font-bold text-white  mb-4">
            Data Entry Quality
          </h1>
        </div>
      </section>
      <div className="bg-gray-100 py-20 px-5 text-center  mb-12 ">
        <p className="text-black text-base md:text-lg mb-4">
          No matter how big or small the project, quality is our first priority.
          Accuracy is essential and expected. After-the-fact sampling and
          proofreading (sight verification), is costly, slow, and equally
          subject to error. Instead, Axion’s data entry services builds quality
          into the process, using automated verification methodologies and
          programmed procedures. We strive to achieve the highest degree of
          accuracy possible using the methods best suited to our clients’
          project specifications, their personal requirements, and cost budget.
        </p>
        <button className="bg-orange-400 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors duration-300 ">
          GET STARTED
        </button>
      </div>
    </>
  );
}

export default DataQualityHero;
