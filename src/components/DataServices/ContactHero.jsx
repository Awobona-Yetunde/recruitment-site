import React from 'react';

const ContactHero = () => {
  return (
    <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center relative">
      <div className="bg-black -mt-12 lg:-mt- opacity-70 p-6 rounded-lg text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[250px] lg:h-[300px]">
        <h1 className="text-2xl text-center md:text-4xl font-bold text-white  mb-4">
          US-Based Data Services
        </h1>
      </div>
    </section>
  );
}

export default ContactHero;
