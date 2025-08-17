
import React, { useState } from "react";


const Faqs = () => {
   const [activeIndex, setActiveIndex] = useState(null);

   const faqData = [
     {
       question: "How much does data entry cost?",
       answer:
         "Each project is priced from the ground up. No two projects are the same and many variables affect our cost, hence the fee we would charge. Some of those variables include: whether we will use our system to key the data or connect to your system; how many entries can be processed on average per hour; whether you require any or all fields to be verified by a second operator (double-key); whether you are providing scanned images or hard copy; turnaround requirements; the volume of transactions/documents; whether the project is ongoing or a one-time project; the amount of manager time needed to train operators and manage production; the complexity of the project; and others. Unit prices have been as low as 25 cents per record and as high as $22 per document.",
     },
     {
       question: "How quickly can Axion start a new data project?",
       answer:
         "This depends on the nature and complexity of the project, the number of people needed, and the amount of programming required if any. In some cases, we have been able to start a project within 3 days of signing a contract; in others perhaps 2-3 weeks, but for very large projects, we may be able to get started after 2-3 weeks, but require a reasonable ramp-up period to allow for the addition and training of staff to assure an orderly transition.",
     },
     {
       question: "Are there any data project size limits or restrictions?",
       answer:
         "We will consider all data projects, regardless of size. Naturally we prefer ongoing projects but will also undertake one-time projects of size.",
     },
     {
       question: "Does Axion Data Services work on weekends and holidays??",
       answer:
         "Yes. Our data entry operators work different schedules, and many of them prefer weekends. Some holidays, particularly Thanksgiving and Christmas, are more challenging to achieve full production and may entail a surcharge to incentivize the operators.",
     },
     {
       question:
         "What are the cost factors for data entry in the clients system?",
       answer:
         "In this type of data entry, the cost is not affected by document handling, scanning or programming, but labor, startup and ongoing management costs.",
     },
   ];

   return (
     <div className="my-0 mx-auto max-w-[600px] ">
       {faqData.map((faq, index) => (
         <div key={index} className="mb-7">
           <div
             className="p-4 bg-gray-100 border border-orange-400 pointer flex justify-between items-center"
             onClick={() =>
               setActiveIndex(activeIndex === index ? null : index)
             }
           >
             {faq.question}
             <span
               className={activeIndex === index ? "arrow up" : "arrow down"}
             >
               &#9660;
             </span>
           </div>
           {activeIndex === index && (
             <div className="bg-white block p-5">{faq.answer}</div>
           )}
         </div>
       ))}
     </div>
   );
}

export default Faqs;
