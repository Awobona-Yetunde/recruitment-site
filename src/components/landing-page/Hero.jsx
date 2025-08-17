"use client"

import React from 'react';

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center text-white"
      style={{ backgroundColor: "#1a1a2e" }} // Dark background as fallback
    >
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-1/2">
          <img
            src="/images/hero-image.jpg"
            alt="Hero"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 p-5 text-center flex items-center justify-center">
          <div>
            <ul className="text-3xl font-bold space-y-4">
              <li>Data Entry Services</li>
              <li>Data Verification</li>
              <li>Online Research</li>
              <li className="text-4xl">
                And Data Solutions For Your Toughest Problems
              </li>
            </ul>
            <p className="mt-4 text-lg">
              Established in 1996, Specialists in Data Entry, Data Verification,
              Internet Research, Project Staffing, Custom Programming and more!
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              <a href='/apply-now'>Apply Now</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;



// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="bg-[url('/images/hero-image.jpg')] bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center text-white">
//       <div className='p-5 text-xl'>
//         <ul>
//           <li>Data Entry Services</li>
//           <li>Data Verification</li>
//           <li>Online Research and Data Solutions For Your Toughest Problems</li>
//         </ul>
//         <p>
//           Established in 1996, Specialist in Data Entry, Data Verification,
//           Internet Research, Project Staffing, Custom Programming and more!
//         </p>
//         <button>Get A Quote</button>
//       </div>
//     </section>
//   );
// }

// export default Hero;
