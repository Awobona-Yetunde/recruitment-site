import React from 'react';

const Usbased = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col  items-start">
          <div className="flex flex-col gap-8 ">
            <div className="mb-4">
              <img
                src="/images/usbased.jpg"
                alt="Data Entry Services"
                className="w-full lg:w-1/2 rounded-lg shadow-md"
              />
            </div>
            <div className="w-full lg:w-3/4 mb-6 lg:mb-0">
              <div className="bg-orange-500 text-white p-4 rounded-r-lg py-8 mb-6">
                <h2 className="text-3xl font-bold">US Based Data Entry</h2>
              </div>
              <p className="text-black text-base md:text-lg mb-4">
                Our U.S. only workforce is made up of long-tenured, skilled, and
                experienced data entry operators, project managers, and
                administrative and IT professionals. No matter the size of your
                company, you can rely on Axion Data Services for accurate, fast,
                and secure data entry.
              </p>
              <p className="text-black text-base md:text-lg mb-4">
                Using a U.S. only workforce enhances many aspects critical to
                delivering quality work, on time. This includes hiring and
                training the right people, ongoing supervision, quality control,
                and security. Our staff is mature, experienced, and fully vetted
                by us through background checks. All staff work remotely,
                connecting either to Axion’s cloud-based network or clients’
                networks.
              </p>
              <p className="text-black text-base md:text-lg mb-4">
                Another advantage of having a U.S.-only workforce is that Axion
                implemented a cloud-based solution that helps protect staff
                workstations against various cyber threats including data
                breaches, ransomware, phishing, and more. Key features include
                patch management, mobile support, antivirus protection, and
                native device encryption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Usbased;
