import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-orange-400 m-4 w-[300px]">
      {imageUrl && (
        <img className="w-12 h-12 mx-auto mt-4" src={imageUrl} alt={title} />
      )}
      <div className="px-6 py-4 text-center">
        <h2 className="font-bold text-xl mb-2 text-white">{title}</h2>
        <p className="text-white text-base mb-6">{description}</p>
      </div>
      <div className="flex justify-center pb-4">
          <button
            // to={to}
            className="border border-white rounded px-4 py-2 text-white hover:bg-white hover:text-orange-400 transition-colors inline-block"
          >
            Learn More
          </button>

      </div>
    </div>
  );
};

export default Card;

// import React from 'react';

// const Card = ({title, description, imageUrl}) => {
//   return (
//     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-orange-400 m-4 w-[300px]">
//       {imageUrl && (
//         <img className="w-12 h-12 mx-auto mt-4 " src={imageUrl} alt={title} />
//       )}
//       <div className="px-6 py-4 text-center">
//         <h2 className="font-bold text-xl mb-2 text-white text-center">
//           {title}
//         </h2>
//         <p className="text-white text-base mb-4">{description}</p>
//         <div className="flex justify-end">
//           <button className="border border-white rounded px-4 py-2 text-white hover:bg-white hover:text-orange-400 transition-colors ">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
