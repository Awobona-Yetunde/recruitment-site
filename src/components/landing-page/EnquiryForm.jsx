import React, { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    title: "",
    phone: "",
    email: "",
    services: "",
    findUs: "",
    otherSource: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "findUs" && value !== "Other" ? { otherSource: "" } : {}),
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://axiondatarecruitment.com/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(formData)
      if (response.ok) {
        alert("Enquiry submitted successfully!");
        setFormData({
          name: "",
          company: "",
          title: "",
          phone: "",
          email: "",
          services: "",
          findUs: "",
          otherSource: "",
        });
      } else {
        alert("Error submitting enquiry. Please try again.");
      }
    } catch (error) {
      alert("Error submitting enquiry. Please try again.");
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
              Have pre-sales questions about our data entry services,data
              verification,internet research,or data entry staffing & management
              services? Simply fill out our form!
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              We are proud to serve businesses throughout the entire United
              States.
            </p>
            <div className="text-lg leading-relaxed flex gap-2">
              <p>We are currently hiring. Visit our</p>
              <a
                href="/employment-page"
                className="text-orange-300 hover:underline"
              >
                employment page
              </a>
              <p>to apply.</p>
            </div>
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
              <form action="http://localhost:5328/api/enquiry" method="POST">
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
                    value={formData.name}
                    onChange={handleInputChange}
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
                    value={formData.company}
                    onChange={handleInputChange}
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
                    value={formData.title}
                    onChange={handleInputChange}
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
                    value={formData.phone}
                    onChange={handleInputChange}
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
                    value={formData.email}
                    onChange={handleInputChange}
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
                    value={formData.services}
                    onChange={handleInputChange}
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
                          id="findUs"
                          type="radio"
                          name="findUs"
                          value={option}
                          checked={formData.findUs === option}
                          onChange={handleInputChange}
                          className="mr-2 accent-orange-400"
                          required
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  {formData.findUs === "Other" && (
                    <input
                      type="text"
                      name="otherSource"
                      value={formData.otherSource}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
                      placeholder="Please specify"
                      required
                    />
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleSubmit}
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
    </section>
  );
};

export default EnquiryForm;
