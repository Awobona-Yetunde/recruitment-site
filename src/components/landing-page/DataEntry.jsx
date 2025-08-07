import React from 'react';

const DataEntry = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full object-cover rounded-lg shadow-md"
              src="/images/data-entry.jpg"
            ></img>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold  text-gray-800 mb-4">
              The Right Team for Your Data Entry Needs
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              No matter the nature of your data entry project, our team has the
              knowledge, skills, and technology necessary to help you get the
              results you are after. We are capable of using either our own
              system to assist you or can connect onto yours for a smooth data
              entry process. No matter how you choose to connect with us,
              however, you can rest easy knowing that we will craft an approach
              to meet your specific data entry needs.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              Worried about the cost of outsourcing? Don’t be. We make sure that
              all of our prices are very affordable and competitive. In many
              ways, using our team is a smart way to not only save time, but
              also save money.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              When you spread your resources too thin, like having untrained
              employees try and perform complex data entry services, you are no
              longer able to take advantage of that employee’s talent in their
              designated position while also not getting efficient data
              processing. Furthermore, hiring dedicated on-site data processors
              not only adds the cost of their salaries to your bottom-line, it
              also adds other new hire costs, including desk space, office
              equipment, health care costs, and more.
            </p>
            <button className=" text-orange-400 border border-orange-400 font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
              DATA ENTRY STAFFING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataEntry;
