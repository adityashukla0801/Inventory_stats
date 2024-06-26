import React from "react";

const Cards = ({ label, value, icon }) => {
  return (
    <div className="flex gap-4 w-full h-[120px] px-8 p-4 bg-[#243325] rounded-xl">
      <div className="">{icon}</div>
      <div>
        <div>{label}</div>
        <div className="text-4xl font-bold mt-4">{value}</div>
      </div>
    </div>
  );
};

export default Cards;
