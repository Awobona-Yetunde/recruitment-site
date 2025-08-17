import React from 'react';

const DataQualityHero = () => {
  return (
    <>
      <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center relative">
        <div className="bg-black -mt-12 lg:-mt- opacity-70 p-6 rounded-lg text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[250px] lg:h-[300px]">
          <h1 className="text-2xl text-center mt-[150px] md:text-4xl font-bold text-white  mb-4">
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
