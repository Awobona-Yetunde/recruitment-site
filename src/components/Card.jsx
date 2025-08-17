import React from "react";

const Card = ({ title, description, pageUrl, icon: Icon }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-orange-400 m-4 w-[300px] h-[400px] flex flex-col justify-between">
      {Icon && <Icon className="w-12 h-12 mx-auto mt-4 text-white" />}
      <div className="px-6 py-4 text-center flex-1">
        <h2 className="font-bold text-xl mb-2 text-white">{title}</h2>
        <p className="text-white text-base">{description}</p>
      </div>
      <div className="flex justify-center pb-4">
        <button className="border border-white rounded px-4 py-2 text-white hover:bg-white hover:text-orange-400 transition-colors inline-block">
          <a href={pageUrl}>Learn More</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
