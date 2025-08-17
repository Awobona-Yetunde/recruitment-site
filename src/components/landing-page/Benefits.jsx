import React from "react";
import { InView } from "react-intersection-observer";
import Card from "../Card";
import { Shield, Lightbulb, Users, UserPlus } from "lucide-react";

const Benefits = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="bg-blue-950 h-[300px] py-12">
        <h1 className="text-white text-3xl md:text-2xl font-bold mb-6 text-center">
          How Working With Axion Will Benefit Your Company
        </h1>
        <hr className="border-white w-[200px] mx-auto" />
      </div>
      <div className="container mx-auto px-4 -mt-[120px]">
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center md:gap-6 items-stretch">
          <InView triggerOnce threshold={0.2}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`transition-all duration-700 ease-in-out transform ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Card
                  title="Data Quality"
                  description="We build quality into our processes, using a U.S. only staff to provide you with accurate and complete data entry services"
                  pageUrl="/data-quality-page"
                  icon={Shield}
                />
              </div>
            )}
          </InView>
          <InView triggerOnce threshold={0.2}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`transition-all duration-700 ease-in-out transform ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Card
                  title="Data Security"
                  description="Our technology infrastructure resides on the Google Cloud Platform that adheres to the best practices in physical and data security along with a comprehensive security system to protect your data"
                  pageUrl="/data-security-page"
                  icon={Lightbulb}
                />
              </div>
            )}
          </InView>
          <InView triggerOnce threshold={0.2}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`transition-all duration-700 ease-in-out transform ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Card
                  title="Creative Data Solutions"
                  description="We have the flexibility to develop custom, creative solutions to meet your data entry needs"
                  pageUrl="/creative-data-page"
                  icon={Users}
                />
              </div>
            )}
          </InView>
          <InView triggerOnce threshold={0.2}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`transition-all duration-700 ease-in-out transform ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Card
                  title="Data Service Excellence"
                  description="From top to bottom, our U.S.-only workforce is dedicated to the belief that the only we will be successful is if we help our clients be successful. Prompt and responsive attention to client needs is all we know. it's in our DNA"
                  pageUrl="/data-service"
                  icon={UserPlus}
                />
              </div>
            )}
          </InView>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
