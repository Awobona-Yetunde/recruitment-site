import React from 'react';
import Header from '../landing-page/Header';
import ScamAlert from './ScamAlert';
import WhoWeAre from './WhoWeAre';
import Foooter from '../landing-page/Foooter';

const Employement = () => {
  return (
    <div>
      <Header />
      <section className="bg-[url('/images/scam-hero.jpg')] bg-cover bg-center bg-no-repeat h-[300px] lg:h-[400px] flex items-center justify-center text-white">
        <div className="bg-black h-[250px] w-[380px] -mt-14 opacity-70">
          <h1 className='text-2xl text-center md:text-4xl font-bold text-white  mb-4'>
            Employment
          </h1>
        </div>
      </section>
      <ScamAlert />
      <WhoWeAre/>
      <Foooter/>
    </div>
  );
}

export default Employement;
