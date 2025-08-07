import React from 'react';

const DataProcess = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-auto rounded-lg shadow-md object-cover"
              src="/images/process-data.jpg"
            ></img>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              An Improved way to Process and Gather Data
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              Discover the difference our company can make in your approach to
              digital document processing. Our data entry company serves clients
              throughout the United States and abroad by providing them with a
              skilled, experienced team of highly motivated, seasoned project
              managers, programmers, and data entry operators. This combination
              of expertise allows you to more effectively input the necessary
              data you need to guide your company.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              Accuracy, timeliness, and security are the baseline minimums you
              should expect from a data entry company. What sets our team apart
              from the rest, however, is our commitment to responsiveness and
              flexibility and our ability to create new processes that resolve
              our client’s problems when issues arise. When you choose to
              outsource to our company, we will work with you to develop a data
              entry service plan that is tailored to your specific requirements.
              Allow us to improve upon your data entry projects, forms
              processing, and Internet data collection.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              Don’t have the data your business needs yet? Axion Data services
              offers internet research and data collection services to identify
              new business opportunities, gather market intelligence, and more
              to build a database of carefully curated information to help your
              business succeed.
            </p>
            <button className=" text-orange-400 border border-orange-400 font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
              DATA ENTRY SERVICES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataProcess;
