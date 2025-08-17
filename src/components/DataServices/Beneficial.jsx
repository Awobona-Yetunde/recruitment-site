import React from 'react';

const Beneficial = () => {
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
                <h2 className="text-3xl font-bold">Beneficial Features</h2>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Service Excellence
                </h3>
                <p className="text-black mb-4">
                  At Axion, we believe if we can help our clients to be
                  successful, we will be successful as well. We view all our
                  business relationships, with clients, vendors, and each other
                  at Axion, as partnerships. We are in this together – to help
                  each other be successful. It’s an attitude. A way of thinking
                  that permeates our organization. It’s in our DNA.
                </p>
                <p className="text-black mb-4">
                  We never make promises we know we can’t keep but promise we
                  will do whatever it takes to meet, and even exceed mutual
                  expectations. When two people or organizations share the same
                  goals, good things happen. But words are cheap, and as they
                  say, actions speak louder than words. So here are a few
                  examples:
                  <a>
                    30 Minute Turnaround 20 Hours Daily: Retail Receipt
                    Processing App
                  </a>
                  <a>
                    Custom Programming & Workflow: Department of Homeland
                    Security Form I-9
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Quality
                </h3>
                <p className="text-black mb-4">
                  We create a custom application matching the project
                  requirements, building in programmed procedures to enhance
                  accuracy and efficiency (e.g. look-up tables, field
                  validations against allowable values). When requested we will
                  double-key the entire document or selected fields. We have a
                  U.S.-only workforce. We also build an administrative program
                  to, among other things, perform programmed procedures to
                  identify potential errors, as well as ensure all documents
                  were processed.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Turnaround Time
                </h3>
                <p className="text-black mb-4">
                  As a general rule, we use a piece-rate model to compensate
                  data entry operators, providing incentives for efficient work.
                  Companies having their own in-house operations typically pay
                  an hourly rate and stipulate a minimum hourly production rate.
                  Our largest volume project was for a company that set the
                  hourly minimum at 50 forms per hour, which (not
                  coincidentally) was the average achieved by their in-house
                  staff for many years. When Axion won the account, our
                  operators averaged 100 forms per hour, allowing us to reduce
                  turnaround time from 7 days to 2.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Security
                </h3>
                <p className="text-black mb-4">
                  When the work is performing the work on our network, our
                  systems reside on the Google Cloud Platform (GCP), which
                  adheres to best practices in physical and data security. In
                  addition, we recently implemented a comprehensive security
                  system that not only projects our cloud-based network but also
                  safeguards the remote operator workstations and includes an
                  automated patch management system. Further, we perform
                  background checks on all staff, and each operator signs a
                  contractor service agreement which includes clauses regarding
                  confidentiality and privacy.{" "}
                  <a
                    href="/data-security-page"
                    className="text-orange-400 underline"
                  >
                    Learn more about our security practices here.
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Creative Solutions
                </h3>
                <p className="text-black mb-4">
                  No two customer projects are alike, and no matter how
                  difficult the requirements may be, we work very hard to find
                  solutions. Whether a workflow issue or technical requirement,
                  we respond. Two examples are referenced above under Service
                  Excellence. Integrating automated address validation and
                  correction is another, and soon we will add automated email
                  address validation.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Cost
                </h3>
                <p className="text-black mb-4">
                  We do not compete as a low-cost provider; rather, we emphasize
                  the five items discussed above. As mentioned, we only use U.S.
                  people which carries a higher price tag than going offshore.
                  Our clients know they can always find another firm to do the
                  work for less, but they sleep better at night knowing they
                  have a trusted business partner. Find out more about{" "}
                  <a href='/fees' className='text-orange-400 underline'>data entry fees</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Beneficial;
