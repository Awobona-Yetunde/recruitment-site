import React from 'react';

const DataCost = () => {
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
                  Determining Data Entry Cost
                </h2>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Flat Fees with No Surprises
                </h3>
                <p className="text-gray-600 mb-4">
                  We typically charge a flat fee per data record, which is
                  generally comprised of all the fields identified by the client
                  as representing a complete, identifiable (and billable) string
                  of information. It could be a document, a line item on a
                  document, a website entry; whatever makes the most sense to
                  provide a logical basis for billing.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Fees Driven by Cost
                </h3>
                <p className="text-gray-600 mb-4">
                  Fees for data entry services are driven by cost, principally
                  the labor cost of the data entry operators (all U.S.) and the
                  project managers who train the operators, schedule and monitor
                  their work, and interface with the customer regarding goals,
                  deadlines, and processing issues.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  How Costs are Estimated
                </h3>
                <p className="text-gray-600 mb-4">
                  To estimate cost, the project manager will gain an
                  understanding of the work, the source document, business
                  rules, and customer requirements regarding workflow,
                  turnaround time, and requirements to control accuracy.
                </p>
                <p className="text-gray-600 mb-4">
                  For the majority of our data entry projects, fees have ranged
                  from $0.25 (25 cents) to $2.00 per data record; however, fees
                  have been as high as $22 for a complex document, and as low as
                  10 cents per record.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataCost;
