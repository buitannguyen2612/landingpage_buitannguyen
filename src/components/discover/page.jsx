import React from "react";

const Discover = () => {
  const listDiscover = [
    "AI Video Generator",
    "AI Video Editor",
    "AI Faceless Video Generator",
    "Make Money Online",
    "YouTube Automation",
    "AI Script Generator",
    "Online Video Editor",
    "Promo Video Maker",
    "Video Collage Maker",
    "Clipmaker",
    "Instagram Video Editor",
    "Video Maker",
    "Invitation Maker",
    "Video Trimmer",
    "Crop Video",
    "Slideshow Video Templates",
    " Snapchat Video Templates",
  ];
  return (
    <div className="w-full flex justify-center mt-[7.5rem]">
      <div className="w-[1400px] md:w-full flex justify-center">
        <div className="w-[85%] p-[2.3rem] md:p-[2rem] bg-[#f5f5f5] min-h-[10rem] rounded-3xl flex flex-col justify-start items-start gap-[1rem]">
          <span className="text-dark font-markerBold text-5xl md:text-4xl">
            Discover more:
          </span>
          <div className="w-full h-auto flex flex-row gap-2 flex-wrap">
            {listDiscover.map((val, idx) => (
              <div
                className="text-gray_dark bg-[#e6e6e6] font-bold text-base p-[0.2rem_1rem] rounded-full md:text-sm"
                key={idx}
              >
                {val}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
