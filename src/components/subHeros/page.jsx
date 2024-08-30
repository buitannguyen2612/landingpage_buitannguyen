import React from "react";
import ProductHunt from "../../images/product-hunt.svg";
import Rating from "../../images/rating.svg";
import Captera from "../../images/captera.svg";
import TrustPilot from "../../images/trustpilot.svg";

const SubHeros = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[6rem]">
      <div className="w-[1390px] h-[650px] ">
        <img
          src="https://assets-static.invideo.io/images/large/Simplified_Editor_UI_7d2075fd30.webp"
          alt="Introduction"
          className="w-full h-full object-contain"
        />
      </div>
      {/* Grid layout */}
      <div className="w-[1440px] lg:w-full md:w-full h-auto p-[0_5rem] lg:p-0 md:p-[0] grid grid-cols-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-center">
        <div className="grid-sup-element">
          <span className="text-[3.438rem] font-extrabold text-dark">25M</span>
          <span className="text-[1rem] font-bold text-dark">Customers</span>
          <div className="w-max flex items-center gap-1">
            <p className="font-subBold text-dark text-[1.625rem]">190</p>
            <p className="font-subBold text-dark text-[0.75rem]">countries</p>
          </div>
        </div>
        <div className="grid-sup-element">
          <div className="w-full flex items-center justify-center">
            <img
              src={Rating}
              alt="Rating"
              width="108"
              height="60"
              className="object-contain"
            />
          </div>
          <span className="text-[1rem] font-bold text-dark">
            Product of the month
          </span>
          <div className="w-full flex justify-center">
            <img
              src={ProductHunt}
              alt="Product"
              width="110"
              height="27"
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid-sup-element">
          <span className="text-[3.438rem] font-extrabold text-dark">4.8</span>
          <span className="star_rating"></span>
          <div className="w-full flex justify-center">
            <img
              src={Captera}
              alt="Product"
              width="110"
              height="27"
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid-sup-element">
          <span className="text-[3.438rem] font-extrabold text-dark">4.6</span>
          <span className="star_rating_blue"></span>
          <div className="w-full flex justify-center">
            <img
              src={TrustPilot}
              alt="Product"
              width="110"
              height="27"
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid-sup-element md:col-span-2 lg:col-span-2 xl:col-span-2">
          <span className="text-[3.438rem] font-extrabold text-dark">4.8</span>
          <span className="star_rating_orange"></span>
          <div className="w-full flex justify-center">
            <img
              src={ProductHunt}
              alt="Product"
              width="110"
              height="27"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      {/*Ending grid layout */}
    </div>
  );
};

export default SubHeros;
