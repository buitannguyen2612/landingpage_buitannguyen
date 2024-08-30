import React from "react";
import ThirdVideoCard from "./thirdVideoCard/page.jsx";
import SncVideoCard from "./secondVideoCard/page.jsx";
import ImageConvertFirst from "../../images/video-convert-first.webp";
import ImageConvertFour from "../../images/four-videomarker.webp";
import ImageConvertFive from "../../images/five-video-marker.webp";

const VideoConvert = () => {
  return (
    <div className="w-full h-auto flex justify-center mt-[7.5rem]">
      <div className="w-[1400px] lg:w-full xl:w-full md:w-full md:p-[0_1rem] lg:p-[0_1rem] xl:p-[0_1rem] h-auto flex flex-col items-center gap-[4rem]">
        <h3 className="text-6xl md:text-md text-dark font-markerBold text-center leading-[1] lg:text-lgg">
          Easy text-to-video converter
        </h3>
        <div className="w-full grid grid-cols-2 grid-rows-[repeat(3,37.5rem)] lg:grid-rows-[repeat(3,30.5rem)] md:grid-rows-[repeat(5,40.5rem)] md:grid-cols-1 gap-[2rem]">
          <div className="rounded-3xl flex flex-col bg-[#f5f5f5] p-[2.3rem]">
            <h3 className="font-markerBold text-dark text-5xl leading-[1.2] lg:text-4xl">
              Text to video <br /> generator
            </h3>
            <div className="w-full h-[40rem] overflow-hidden">
              <img
                src={ImageConvertFirst}
                alt="First render"
                className="object-contain h-full"
              />
            </div>
            <div>
              <button className="text-gray_dark font-bold text-base p-[0.2rem_1rem] rounded-full border-solid border-gray_dark border-[0.1rem]">
                Generate now!
              </button>
            </div>
          </div>

          {/* this is must handle in another component because it is very complexy */}
          <SncVideoCard />
          <ThirdVideoCard />
          {/* this is must handle in another component because it is very complexy */}

          <div className="flex flex-col gap-[5rem] light-blue rounded-3xl p-[2.3rem] overflow-hidden">
            <h3 className="font-markerBold text-dark text-5xl leading-[1.2] lg:text-3xl">
              Human-sounding voiceovers <br /> to bring your videos to life
            </h3>
            <div className="w-full">
              <img
                src={ImageConvertFour}
                alt="Four video marker"
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] rounded-3xl p-[2.3rem] overflow-hidden bg-dark">
            <h3 className="font-markerBold text-white text-5xl leading-[1.2] lg:text-3xl">
              Collaborate in real-time with
              <br />
              multiplayer editing
            </h3>
            <div className="w-full overflow-hidden">
              <img
                src={ImageConvertFive}
                alt="Five video marker"
                className="object-contain"
              />
            </div>
            <div className="mt-auto">
              <button className="text-white font-bold text-base p-[0.2rem_1rem] rounded-full border-solid border-white border-[0.1rem]">
                Comming soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoConvert;
