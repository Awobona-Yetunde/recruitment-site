"use client"
import DataSecurityHero from '@/components/DataServices/DataSecurityHero';
import EnquiryForm from '@/components/landing-page/EnquiryForm';
import Foooter from '@/components/landing-page/Foooter';
import Header from '@/components/landing-page/Header';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <DataSecurityHero />
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
                    Keeping Your Data Secure
                  </h2>
                </div>
                <p className="text-black text-base md:text-lg mb-4">
                  When we are not performing the work on the client’s network,
                  our systems reside on the Google Cloud Platform (GCP), which
                  adheres to best practices in physical and data security.
                </p>
                <p className="text-black text-base md:text-lg mb-4">
                  For example, we recently implemented a comprehensive security
                  system that not only protects our cloud-based network but also
                  safeguards the remote operator workstations and includes an
                  automated patch management system.
                </p>
                <p className="text-black text-base md:text-lg mb-4">
                  Further, we perform background checks on all staff, and each
                  operator signs a contractor service agreement which includes
                  clauses regarding confidentiality and privacy to keep your
                  data safe.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 ">
            <div className="w-full lg:w-3/4 mb-6 lg:mb-0">
              <div className="bg-orange-500 text-white p-4 rounded-r-lg py-8 mb-6">
                <h2 className="text-3xl font-bold">
                  Secure Data Entry Practices
                </h2>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-orange-400">
                  Google Cloud Platform
                </h2>
                <p className="text-black text-base md:text-lg mb-4">
                  Axion’s entire computing infrastructure resides on the Google
                  Cloud Platform (GCP) which offers the most secure environment
                  possible. All data is encrypted in-transit and data stored on
                  persistent disks is encrypted under 256-bit AES and each
                  encryption key is also encrypted.
                </p>
                <p className="text-black text-base md:text-lg mb-4">
                  Google maintains certifications with regular audits for
                  SSAE16, ISO 21017, ISO 21018, PCI, FedRAMP, and HIPAA
                  compliance. According to Google, “Certifications such as these
                  provide independent third-party validations of our ongoing
                  commitment to world-class security and privacy, while also
                  helping our customers with their own compliance efforts.”
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-orange-400">
                  Redundancy & Backup
                </h2>
                <p className="text-black text-base md:text-lg mb-4">
                  As of 2022, there are 44 Google Cloud Platform data centers
                  <span className="font-bold">(13 in the U.S.)</span>
                  across 15 cities throughout the world, and data is stored
                  redundantly in at least two regions. “Snapshots” of Axion’s
                  entire network are created nightly and retained for 7 days. In
                  addition, all of Axion’s data is backed up once each hour and
                  maintained on a separate cloud platform.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-orange-400">
                  Restricted Access
                </h2>
                <p className="text-black text-base md:text-lg mb-4">
                  Axion’s firewall rules allow access only to devices whose IP
                  addresses are stored in Axion’s firewalls. Data entry
                  operators have only browser access to published applications
                  and no access whatsoever to a desktop.
                </p>
                <p className="text-black text-base md:text-lg mb-4">
                  Nothing Leaves our Network: Axion’s data entry systems employ
                  a thin client model, which means all processing is done on the
                  server side. All images, data, and processing remain within
                  the secure GCP network. Data entry operators cannot print or
                  download images or data.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-orange-400">Privacy</h2>
                <p className="text-black text-base md:text-lg mb-4">
                  When privacy requirements demand it, we can “split” the image
                  and have different parts of the document keyed by different
                  data entry teams. This means that a single data entry operator
                  would never have access to an entire document. This is a
                  complex process, requiring additional programming, and is
                  employed in only a few rare circumstances.
                </p>
                <p className="text-black text-base md:text-lg mb-4">
                  Contact us today to request more information about our
                  standards regarding data entry quality. We serve businesses
                  and other clients throughout the United States.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EnquiryForm />
      <Foooter />
    </>
  );
}

export default page;
