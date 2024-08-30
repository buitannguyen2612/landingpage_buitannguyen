import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./page.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const ConvertSlide = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[4rem] mt-[7.5rem]">
      <span className="text-6xl text-dark font-extrabold text-center leading-[1] md:text-md lg:text-lgg">
        How to convert{" "}
        <span className="special-text">
          text to video with
          <br /> invideo AI?
        </span>
      </span>
      <div className="w-full h-[32.625rem]">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          modules={[Pagination, Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide className=" bg-[#f5f5f5] rounded-3xl p-[2.3rem] min-h-[30rem] flex">
            <div className="flex-1 flex flex-col items-start gap-2">
              <p className="text-dark text-[2.25rem] leading-[1.1] font-markerBold">
                Prompt your <br />
                idea
              </p>
              <span className="text-[22px] text-gray font-semibold">
                <span className="text-dark">
                  Choose a workflow from the dropdown,
                </span>
                describe your video idea. Share details about how you want your
                video to be. Hit generate now!
              </span>
            </div>
            <div className="flex-shrink-0 font-markerBold text-[150px] text-gray opacity-20">
              1
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-[#f5f5f5] rounded-3xl p-[2.3rem] min-h-[30rem] flex">
            <div className="flex-1 flex flex-col items-start gap-2">
              <p className="text-dark text-[2.25rem] leading-[1.1] font-markerBold">
                Select your
                <br /> audience
              </p>
              <span className="text-[22px] text-gray font-semibold">
                <span className="text-dark">
                  Select the audience, platform, and appearance for your video.
                </span>
                This enables invideo AI to set the tone for the title, script,
                background music, and so on.
              </span>
            </div>
            <div className="flex-shrink-0 font-markerBold text-[150px] text-gray opacity-20">
              2
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-[#f5f5f5] rounded-3xl p-[2.3rem] min-h-[30rem] flex">
            <div className="flex-1 flex flex-col items-start gap-2">
              <p className="text-dark text-[2.25rem] leading-[1.1] font-markerBold">
                Edit script &<br /> media
              </p>
              <span className="text-[22px] text-gray font-semibold">
                Change the script by clicking 'Edit script' or replace stock
                media with your own with a simple upload.
              </span>
            </div>
            <div className="flex-shrink-0 font-markerBold text-[150px] text-gray opacity-20">
              3
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-[#f5f5f5] rounded-3xl p-[2.3rem] min-h-[30rem] flex">
            <div className="flex-1 flex flex-col items-start gap-2">
              <p className="text-dark text-[2.25rem] leading-[1.1] font-markerBold">
                Edit video &<br /> export
              </p>
              <span className="text-[22px] text-gray font-semibold">
                <span className="text-dark">
                  Use invideo AI's magic box to make edits to your video.
                </span>
                Use prompts like, delete scene, narrate in an midwest male
                accent, etc. Once satisfied, export the video and share it on
                any channel with your audience
              </span>
            </div>
            <div className="flex-shrink-0 font-markerBold text-[150px] text-gray opacity-20">
              4
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ConvertSlide;
