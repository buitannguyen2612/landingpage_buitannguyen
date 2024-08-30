import React from "react";
import VideoConvert from "../../../videos/scnVideo-maker.mp4";
import FisttLogo from "../../../images/Istock-logo.svg";
import SndLogo from "../../../images/Storyblocks-logo.svg";
import FinalLogo from "../../../images/Shutterstock-logo.svg";

const SncVideoCard = () => {
  return (
    <div className="border_element rounded-3xl overflow-hidden relative">
      <video
        className="object-cover w-full h-full"
        src={VideoConvert}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 p-[2.3rem] flex flex-col justify-between">
        <h3 className="font-markerBold text-white text-5xl leading-[1.2] lg:text-3xl">
          8 million+ stock media
        </h3>
        <div className="w-full flex justify-start items-center gap-[2rem]">
          <div>
            <img src={FisttLogo} alt="First logo" height="33" width="94" />
          </div>
          <div>
            <img src={SndLogo} alt="First logo" height="31" width="134" />
          </div>
          <div>
            <img src={FinalLogo} alt="First logo" height="20" width="136" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SncVideoCard;
