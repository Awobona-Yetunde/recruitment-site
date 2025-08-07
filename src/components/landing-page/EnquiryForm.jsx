import React, { useState } from "react";

const EnquiryForm = () => {
  const [findUs, setFindUs] = useState("");
  const [otherSource, setOtherSource] = useState("");

  const handleFindUsChange = (e) => {
    setFindUs(e.target.value);
    if (e.target.value !== "Other") {
      setOtherSource("");
    }
  };

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Text Section */}
          <div className="lg:w-1/2 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 text-orange-400">
              Get Started
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              Have pre-sales questions about our data entry services, data
              verification, Internet research, or data entry staffing &
              management services? Simply give us a call at{" "}
              <a
                href="tel:8004932630"
                className="text-orange-300 hover:underline"
              >
                800-493-2630
              </a>{" "}
              or fill out our form!
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              We are proud to serve businesses throughout the entire United
              States.
            </p>
            <p className="text-lg leading-relaxed">
              We are not currently hiring. Visit our{" "}
              <a
                href="/employment-page"
                className="text-orange-300 hover:underline"
              >
                employment page
              </a>{" "}
              to apply when we are looking for operators.
            </p>
          </div>
          {/* Form Section */}
          <div className="lg:w-1/2 relative">
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg mx-auto lg:mx-0 transform translate-y-8 lg:translate-y-12">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-400 text-center mb-6">
                BUSINESS INQUIRIES ONLY
              </h2>
              <div className="text-center mb-8">
                <a
                  href="/employment-page"
                  className="inline-block bg-orange-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors duration-300"
                >
                  Employment Click Here
                </a>
              </div>
              <form>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block text-orange-400 font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="company"
                    className="block text-orange-400 font-semibold mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
                    placeholder="Your Company"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="title"
                    className="block text-orange-400 font-semibold mb-2"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
                    placeholder="Your Title"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="block text-orange-400 font-semibold mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-orange-400 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="services"
                    className="block text-orange-400 font-semibold mb-2"
                  >
                    What Services Can We Provide?
                  </label>
                  <textarea
                    id="services"
                    name="services"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
                    placeholder="Describe the services you need"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="mb-5">
                  <p className="block text-gray-700 font-semibold mb-2 text-center">
                    Where Did You Find Us?
                  </p>
                  <div className="flex flex-col space-y-2">
                    {["Google", "Bing", "LinkedIn", "Other"].map((option) => (
                      <label
                        key={option}
                        className="flex items-center text-gray-700"
                      >
                        <input
                          type="radio"
                          name="findUs"
                          value={option}
                          checked={findUs === option}
                          onChange={handleFindUsChange}
                          className="mr-2 accent-orange-400"
                          required
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  {findUs === "Other" && (
                    <input
                      type="text"
                      name="otherSource"
                      value={otherSource}
                      onChange={(e) => setOtherSource(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
                      placeholder="Please specify"
                      required
                    />
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => alert("Form submitted!")} // Replaced type="submit" to avoid sandboxed form issues
                    className="bg-orange-400 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors duration-300"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto px-4 md:px-8 lg:px-12 text-white">
        <div className="flex">
          <div className="w-1/2">
            <h2>Get Started</h2>
            <p>
              Have pre-sales questions about our data entry services, data
              verification, Internet research, or data entry staffing &
              management services? Simply give us a call at 800-493-2630, fill
              out our form!
            </p>
            <p>
              We are proud to serve businesses throughout the entire United
              States.
            </p>
            <p>
              We are not currently hiring. Visit our employment page to apply
              when we are looking for operators.
            </p>
          </div>
          <div>
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-orange-400 text-center mb-8">
                  BUSINESS INQUIRIES ONLY
                </h2>
                <button className="bg-white text-orange-400 border font-semibold px-6 py-3 rounded-lg hover:bg-orange-800 transition-colors">
                  <a href="/employment-page">Employment Click Here</a>
                </button>
              </div>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-orange-400 font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 "
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="company"
                    className="block text-orange-400 font-semibold mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none border-black focus:ring-2 focus:ring-blue-950"
                    placeholder="Your Company"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-orange-400 font-semibold mb-2"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none border-black focus:ring-2 focus:ring-blue-950"
                    placeholder="Your Title"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-orange-400 font-semibold mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border rounded-lg  border-black focus:outline-none focus:ring-2 focus:ring-blue-950"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-orange-400 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-lg border-black focus:outline-none focus:ring-2 focus:ring-blue-950"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="services"
                    className="block text-orange-400 font-semibold mb-2"
                  >
                    What Services Can We Provide?
                  </label>
                  <textarea
                    id="services"
                    name="services"
                    className="w-full px-4 py-2 border rounded-lg border-black focus:outline-none focus:ring-2 focus:ring-blue-950"
                    placeholder="Describe the services you need"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <p className="block text-gray-700 font-semibold mb-2 text-center">
                    Where Did You Find Us?
                  </p>
                  <div className="flex flex-col lg:flex gap-2">
                    {["Google", "Bing", "LinkedIn", "Other"].map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          name="findUs"
                          value={option}
                          checked={findUs === option}
                          onChange={handleFindUsChange}
                          className="mr-2"
                          required
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  {findUs === "Other" && (
                    <input
                      type="text"
                      name="otherSource"
                      value={otherSource}
                      onChange={(e) => setOtherSource(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-950"
                      placeholder="Please specify"
                      required
                    />
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-orange-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default EnquiryForm;
