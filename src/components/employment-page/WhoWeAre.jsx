import React from 'react';

const WhoWeAre = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img src="/images/scam.jpg"></img>
          </div>
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold bg-orange-400 text-white py-5 px-6 mb-4">
              WHO WE ARE
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              We are a growing company that provides data entry services, data
              verification, and online research services to companies
              nationwide. Axion Data Services is a proud veteran-owned and
              operated U.S.-based firm.
            </p>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold  text-orange-400 mb-4">
                OUR WORKFORCE
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-4">
                We have a dedicated team of long-tenured, skilled, and
                experienced data entry operators who are independent
                contractors, along with a team of administrative professional
                staff. All staff are U.S. only.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold  text-orange-400 mb-4">
                WHAT IS AN INDEPENDENT CONTRACTOR?
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-4">
                Our data entry operators are independent contractors. As an
                independent contractor, you will be self-employed, use your own
                equipment which will be provided by us, work your own hours, and
                get paid at scheduled intervals. Our independent contractors
                work from home and have flexible work hours.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold  text-orange-400 mb-4">
                WHAT DOES IT PAY?
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-4">
                We offer a competitive compensation package that includes an
                hourly rate of $35, with weekly payments made via direct
                deposit. After a 60-day employment period, you'll become
                eligible for a comprehensive benefits package that encompasses a
                range of perks, including medical care reimbursement, doctor
                services, and employee wellness programs. You'll also receive
                life and AD&D insurance, 401(k) retirement plans, paid time off
                (PTO), and paid holidays. Additionally, you'll enjoy exclusive
                company discounts, providing you with a well-rounded and
                rewarding employment experience.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold  text-orange-400 mb-4">
                HOW DO I APPLY?
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-4">
                To proceed, we will need to register you in our database, which
                requires collecting some personal information. Rest assured, you
                will be contacted unless we have already filled all available
                positions at the time of your application, follow
                the link to apply!
              </p>
            </div>
          </div>
        </div>
        <div className='py-7'>
          <h2 className="text-3xl md:text-4xl font-bold  bg-orange-400 text-white py-6 px-7 mb-4">
            JOIN OUR TEAM
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-4">
            We are always looking for talented individuals to join our
            administrative staff team or preferred list of independent
            contractors to provide data entry services or online research
            services. If you think you might be a good fit for Axion Data
            Services, follow the link to apply!
          </p>
          <button className=" text-white border bg-orange-400 font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
            APPLY NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
