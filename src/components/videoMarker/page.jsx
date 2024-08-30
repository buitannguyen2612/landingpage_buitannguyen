import React from "react";
import { listMarker } from "../../mockData/mocker.js";
import MarkerCard from "./card/page.jsx";

const VideoMarker = () => {
  return (
    <div className="w-full h-auto flex justify-center mt-[7.5rem]">
      <div className="w-[1400px] xl:w-full lg:w-full md:w-full md:p-[0_1rem] xl:p-[0_1rem] lg:p-[0_1rem] h-auto flex flex-col items-center gap-[4rem]">
        <span className="text-6xl lg:text-lgg md:text-md text-dark font-extrabold text-center leading-[1] tracking-wide">
          AI powered
          <span className="special-text">
            <br />
            text-to-video maker
          </span>
        </span>

        {/* list box */}
        <div className="w-full flex flex-col gap-[2rem]">
          {listMarker.map((val) => (
            <MarkerCard key={val.id} items={val} />
          ))}
        </div>
        {/* Ending list box */}
      </div>
    </div>
  );
};

export default VideoMarker;
