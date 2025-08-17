"use client";
import React, { useState, useRef } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    ssn: "",
    dob: "",
    gender: "",
    education: "",
    workExperience: "",
    resume: null,
    licenseFront: null,
    licenseBack: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:5328/api/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form");
      }

      setSuccess(result.message);

      setFormData({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
        ssn: "",
        dob: "",
        gender: "",
        education: "",
        workExperience: "",
        resume: null,
        licenseFront: null,
        licenseBack: null,
      });

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Application Form
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="ssn"
              className="block text-sm font-medium text-gray-700"
            >
              SSN (9-Digit Number)
            </label>
            <input
              type="text"
              name="ssn"
              id="ssn"
              value={formData.ssn}
              onChange={handleInputChange}
              required
              pattern="\d{9}"
              maxLength="9"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="education"
              className="block text-sm font-medium text-gray-700"
            >
              Highest Level of Education
            </label>
            <select
              name="education"
              id="education"
              value={formData.education}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">Select Education Level</option>
              <option value="highschool">High School</option>
              <option value="associate">Associate Degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="doctorate">Doctorate</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="workExperience"
              className="block text-sm font-medium text-gray-700"
            >
              Work Experience (Years)
            </label>
            <input
              type="number"
              name="workExperience"
              id="workExperience"
              value={formData.workExperience}
              onChange={handleInputChange}
              required
              min="0"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Resume
            </label>
            <input
              type="file"
              name="resume"
              id="resume"
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx"
              required
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="licenseFront"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Driver's License (Front)
            </label>
            <input
              type="file"
              name="licenseFront"
              id="licenseFront"
              onChange={handleFileUpload}
              accept="image/*"
              required
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="licenseBack"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Driver's License (Back)
            </label>
            <input
              type="file"
              name="licenseBack"
              id="licenseBack"
              onChange={handleFileUpload}
              accept="image/*"
              required
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div className="text-sm text-gray-600">
            <p>
              <strong>Note:</strong> $25 application fee applies. Our agent will
              contact you after submission.
            </p>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
            >
              {isLoading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
