import React, { useEffect, useState } from "react";
import fakeVideo from "../../images/fakeVideo.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PopupImage from "../popupVideos/page.jsx";
const VideoAi = () => {
  const [isOpen, setOpent] = useState(false);
  const opentPopup = () => {
    setOpent(true);
  };

  const closePop = () => {
    setOpent(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);
  return (
    <>
      <div className="w-full flex justify-center mt-[7.5rem]">
        <div className="w-[1400px] md:w-full md:p-[0_1rem] lg:w-full lg:p-[0_1rem] h-auto flex flex-col justify-center items-center gap-[4rem]">
          <span className="text-6xl text-dark font-extrabold text-center leading-[1] tracking-wide md:text-md lg:text-lgg">
            Turn a prompt into a video with <br />
            <span className="special-text">invideo AI</span>
          </span>
          <div className="w-[85%] max-h-[45rem] rounded-3xl overflow-hidden relative">
            <img
              src={fakeVideo}
              alt="Fake video"
              className="w-full object-contain"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <span
                className="flex justify-center items-center h-[10rem] w-[10rem] rounded-full bg-dark bg-opacity-45 cursor-pointer"
                onClick={opentPopup}
              >
                <PlayArrowIcon sx={{ fontSize: "10rem", color: "white" }} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <PopupImage isOpen={isOpen} closePopup={closePop} />
    </>
  );
};

export default VideoAi;
