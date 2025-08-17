import React from 'react';

const DataStaffing = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col  items-start">
          <div className="flex flex-col gap-8 ">
            <div className="mb-4">
              <img
                src="/images/management.jpg"
                alt="Data Entry Services"
                className="w-full lg:w-1/2 rounded-lg shadow-md"
              />
            </div>
            <div className="w-full lg:w-3/4 mb-6 lg:mb-0">
              <div className="bg-orange-500 text-white p-4 rounded-r-lg py-8 mb-6">
                <h2 className="text-3xl font-bold">
                  Data Entry Staffing & Management Services
                </h2>
              </div>
              <p className="text-black text-base md:text-lg mb-4">
                Using this approach, all source documents, processing, and
                resulting data are retained on the client network, eliminating
                the risks associated with transferring documents and data
                between companies.
              </p>
              <p className="text-black text-base md:text-lg mb-4">
                The client provides login IDs for selected Axion staff who
                perform the necessary tasks required. Sometimes, the process
                requires simple data entry from images displayed within the
                client system. In other cases, Axion staff are required to find
                the data based on client instructions and to then enter or
                correct data in the client system. Once a record is complete,
                the data is immediately available to the client.
              </p>
              <p className="text-black text-base md:text-lg mb-4">
                As with all client engagements, a dedicated Axion Project
                Manager is assigned to fully understand the project
                requirements, train Axion staff, and manage the work. In some
                cases, the client prefers to train not only the Project Manager
                but also participate in data entry staff training. If not
                available from the client, the Project Manager prepares written
                instructions, which are approved by the client and then used for
                staff training and reference.
              </p>
              <p className="text-black text-base md:text-lg mb-4">
                The Project Manager communicates regularly, sometimes daily,
                with the client’s primary point of contact on such matters as
                expected workloads, progress, unexpected problems, and quality
                or turnaround issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataStaffing;
