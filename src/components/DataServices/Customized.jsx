import React from 'react';

const Customized = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col  items-start">
          <div className="flex flex-col gap-8 ">
            <div className="mb-4">
              <img
                src="/images/customized.jpg"
                alt="Data Entry Services"
                className="w-full lg:w-1/2 rounded-lg shadow-md"
              />
            </div>
            <div className="w-full lg:w-3/4 mb-6 lg:mb-0">
              <div className="bg-orange-500 text-white p-4 rounded-r-lg py-8 mb-6">
                <h2 className="text-3xl font-bold">
                  Customized Service Approach
                </h2>
              </div>
              <p className="text-black text-base md:text-lg mb-4">
                We create custom applications that match that project
                requirements. This allows us to build in programmed procedures
                that enhance the accuracy and efficiency of your project. Some
                of these procedures include field validations against allowable
                values, look-up tables, formula validations, and address
                validation, among others.
              </p>
              <p className="text-black text-base md:text-lg mb-4">
                Every client project is different, often requiring us to develop
                a unique way of getting the job done right. To meet your
                specific requirements for project completion and data delivery,
                we will develop a custom workflow design and staffing schedule.
                Click on this link for an example of what we did to provide a
                30-minute turnaround for 20 hours daily.
              </p>
              <p className="text-black text-base md:text-lg mb-4">
                Click on this link for an example of custom programming to
                protect Private Identifiable Information (PII) and to apply
                specialized business rules, and ensure accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customized;
