import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full object-cover rounded-lg shadow-md"
              src="/images/about-img.jpg"
            ></img>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Your Trusted Data Partner With A U.S. Only Staff
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              Since 1996, Axion Data Services has been an industry leader in
              providing data entry outsourcing services, data verification, and
              internet data research services to companies nationwide. Axion
              Data Services is a proud veteran-owned and operated U.S. based
              firm. Our U.S. only workforce is made up of long-tenured, skilled
              and experienced data entry operators, project managers, and
              administrative and IT professionals. Companies small and large
              rely on Axion Data Services for creative solutions to challenging
              requirements for accurate, fast and secure data entry!
            </p>
            <div className="flex justify-between">
              <img className="h-15 w-16" src="/images/veteran.png"></img>
              <button className=" text-orange-400 border border-orange-400 font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
                ABOUT AXION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
