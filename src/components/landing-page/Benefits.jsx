import React from 'react';
import Card from '../Card';
import {Security, Idea, People} from 'lucide-react'


const Benefits = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="bg-blue-950 h-[300px] py-12">
        <h1 className="text-white text-3xl md:text-2xl font-bold mb-6 text-center ">
          How Working With Axion Will Benefit Your Company
        </h1>
        <hr className="border-white w-[200px] mx-auto "></hr>
      </div>
      <div className="container mx-auto px-4 -mt-30">
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center  md:gap-6">
          <Card
            title="Data Quality"
            description={
              "We build quality into our processes, using a U.S. only staff to provide you with accurate and complete data entry services"
            }
            imageUrl={"/ima"}
            // to="/data-quality"
          />
          <Card
            title={"Data Security"}
            description={
              "Our technology infrastructure resides on the Google Cloud Platform that adheres to the best practices in physical and data security along with a comprehensive security system to protect your data"
            }
            imageUrl={"/"}
            // to="/data-security"
          />
          <Card
            title={"Creative Data Solutions"}
            description={
              "We have the flexibility to develop custom, creative solutions to meet your data entry needs"
            }
            imageUrl={"/"}
            // to="/creative-solutions"
          />
          <Card
            title={"Data Service Excellence"}
            description={
              "From top to bottom, our U.S.-only workforce is dedicated to the belief that the only we will be successful is if we help our clients be successful. Prompt and responsive attention to client needs is all we know. it's in our DNA"
            }
            imageUrl={"/"}
            // to="/service-excellence"
          />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
