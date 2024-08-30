import React from "react";

const MarkerCard = ({ items }) => {
  return (
    <div className="w-full h-[34.375rem] flex flex-row md:flex-col rounded-3xl bg-[#f5f5f5] overflow-hidden">
      <div className="flex-[1] flex flex-col items-start p-[2.3rem_0_2.3rem_2.3rem]">
        <div className="w-[90%] flex flex-col items-start gap-[1rem]">
          <h3 className="text-dark text-5xl md:text-3xl lg:text-3xl font-markerBold ">
            {items.title}
          </h3>
          <p className="text-gray text-lg md:text-2xl lg:text-2xl font-bold ">
            {items.descriptions}
          </p>
        </div>
        <button className="p-[1rem_1rem] md:p-[0.2rem_1rem] rounded-full text-blue text-2xl font-subBold mt-auto border-solid border-blue border-[0.1rem] hover:bg-blue hover:text-white transition-all duration-150 ease-linear">
          Try now!
        </button>
      </div>

      <div className="flex-[1.2] overflow-hidden">
        <img
          src={items.image}
          alt={items.title}
          className="w-full h-full object-cover object-right"
        />
      </div>
    </div>
  );
};

export default MarkerCard;
