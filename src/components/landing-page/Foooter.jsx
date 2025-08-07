import React from 'react';

const Foooter = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col justify-center items-center gap-4 mb-7">
          <div className="flex gap-3  text-blue-800">
            <h1>DETA</h1>
            <h1 className="text-gray-600 text-base">DATA SERVICES</h1>
          </div>
          <p className="font-semibold">PITTSBURGH, PA</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-5 ">
          <div>
            <h3 className="font-bold text-orange-500 mb-3">DATA SERVICES</h3>
            <div className="flex flex-col gap-3 ">
              <a href="/DataEntryServices">Data Entry Services</a>
              <a href='us-based-page'>US Based Data Entry</a>
              <a href="/customize-page">Customized Service Approach</a>
              <a href='/data-research'>Data Research and Collection</a>
              <a href='/data-verification-page'>Data Entry Verification</a>
              <a href='/data-entry-staffing'>Data Entry Staffing & Management Services</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-orange-500 mb-3">
              INDUSTRY SOLUTIONS
            </h3>
            <div className="flex flex-col gap-3 ">
              <a>Healthcare</a>
              <a>Finance</a>
              <a>Retail</a>
              <a>Government</a>
              <a>Not-For-Profit</a>
              <a>Sports</a>
              <a>Social Media</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-orange-500 mb-3">ABOUT</h3>
            <div className="flex flex-col gap-3 ">
              <a href='fees'>Data Entry Cost Factors At Axion</a>
              <a href='contact'>Contact</a>
              <a>Employment</a>
              <a>Faqs</a>
              <a>Blog</a>
              <a>Privacy Policy</a>
              <a>Terms and conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Foooter;
