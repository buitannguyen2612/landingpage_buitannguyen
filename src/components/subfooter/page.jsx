import React from "react";
import hert from "../../images/heart.svg";

const SubFoot = () => {
  return (
    <div className="w-full h-svh bg-dark flex flex-col justify-center items-center gap-[4rem]">
      <div>
        <img
          src={hert}
          alt="Heart"
          width="55"
          height="55"
          className="object-contain"
        />
      </div>
      <span className="text-6xl text-white font-extrabold text-center leading-[1] tracking-wide md:text-md lg:text-lgg">
        Start creating videos.
        <br />
        <span className="special-text">No experience needed.</span>
      </span>
      <button className="p-[1rem_1rem] rounded-full bg-blue text-white text-2xl font-subBold hover:bg-hoverBtn transition-all duration-150 ease-linear">
        Get Started - Its free!
      </button>
    </div>
  );
};

export default SubFoot;
