"use client";
import { useState, useEffect } from "react";

const ReviewSlider = () => {
  const reviews = [
    {
      quote:
        "I was on the waitlist for a while, but once I started, the work was straightforward and the expectations were clear. Axion doesn’t promise quick money, but they’re honest and consistent. Payments always arrived on time.",
      author: "Mark Jefferson, Independent Contractor",
      date: "February 12, 2024",
    },
    {
      quote:
        "We’ve been using Axion for our high-volume data entry needs for over a year. Their accuracy rate and turnaround time are excellent. They’re a great long-term partner.",
      author: "Samuel Ortega, Data Operations Lead, NexaCorp Solutions",
      date: "September 8, 2024",
    },
    {
      quote:
        "Communication was smooth, and they were always responsive to feedback or changes. A dependable partner for administrative tasks.",
      author: "Lisa Hammond, Project Coordinator, BrightPath Consulting",
      date: "June 17, 2025",
    },
    {
      quote:
        "I understand why they charge a fee — it keeps unserious people out. This company values commitment, and the process was transparent.",
      author: "Jordan Mensah, Job Applicant",
      date: "June 25, 2025",
    },
    {
      quote:
        "Axion’s team impressed us with their attention to detail and professionalism. They handle sensitive data securely and deliver clean results every time.",
      author: "Emily Grant, Compliance Manager, Helix Financial Services",
      date: "June 27, 2025",
    },
    {
      quote:
        "I paid, got verified, interviewed, and now I’m working here. Great team, great culture. Worth every dollar.",
      author: "Renee Thompson, Remote Data Entry Specialist",
      date: "July 13, 2025",
    },
    {
      quote:
        "I paid the $25 verification fee and got a prompt response. The hiring process was smooth and professional. Glad I took the chance!",
      author: "David Morgan, Data Entry Contractor",
      date: "July 22, 2025",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto py-12">
      <div className="overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          What Clients Say
        </h2>
        <hr className="border-t-2 mx-auto w-[250px] border-gray-900 mb-8 "></hr>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentReview * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="w-full flex-shrink-0 p-4">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <cite className="text-orange-400 font-semibold">
                {review.author}
              </cite>
              <time className="text-orange-500 block text-sm">{review.date}</time>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevReview}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        &lt;
      </button>
      <button
        onClick={nextReview}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        &gt;
      </button>
      <div className="flex justify-center mt-4 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentReview(index)}
            className={`w-3 h-3 rounded-full ${
              currentReview === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
