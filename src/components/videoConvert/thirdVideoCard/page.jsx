import React, { useEffect, useRef, useState } from "react";
import VideoConvert from "../../../videos/thirdVideo-marker.mp4";

const ThirdVideoCard = () => {
  const videoDuration = useRef(null);
  const [isEdit, setIsEdit] = useState(true);
  const [isText, setIsText] = useState(false);
  const [isTransitions, setIsTransitions] = useState(false);

  const seekVideo = (e) => {
    const { id } = e.target;
    const videoElement = videoDuration.current;
    if (id === "media") {
      videoElement.currentTime = 0;
    } else if (id === "text") {
      videoElement.currentTime = 7.5;
    } else if (id === "transitions") {
      videoElement.currentTime = 18;
    }
  };

  useEffect(() => {
    const videoElement = videoDuration.current;

    const handleTimeUpdate = () => {
      const duration = videoElement.currentTime;
      if (duration < 16) {
        if (duration < 7) {
          setIsEdit(true);
          setIsText(false);
          setIsTransitions(false);
        } else {
          setIsEdit(false);
          setIsText(true);
          setIsTransitions(false);
        }
      } else {
        setIsEdit(false);
        setIsText(false);
        setIsTransitions(true);
      }
    };

    // Listen to the current time of video
    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    // Cleanup when component unmount
    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="col-span-2 md:col-span-1 rounded-3xl overflow-hidden relative">
      <video
        ref={videoDuration}
        className="object-cover w-full h-full"
        src={VideoConvert}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 p-[2.3rem] flex flex-col justify-between">
        <h3 className="font-markerBold text-white text-[3.438rem] leading-[1.2]">
          Text to video creation <br /> made easy
        </h3>
        <div className="w-full flex justify-start items-center gap-[2rem]">
          <span
            id="media"
            className={`text-video-revert ${
              isEdit ? "opacity-100" : "opacity-35"
            } transition duration-700 ease`}
            onClick={seekVideo}
          >
            Edit media
          </span>
          <span
            id="text"
            className={`text-video-revert ${
              isText ? "opacity-100" : "opacity-35"
            } transition duration-700 ease`}
            onClick={seekVideo}
          >
            Edit text
          </span>
          <span
            id="transitions"
            className={`text-video-revert ${
              isTransitions ? "opacity-100" : "opacity-35"
            } transition duration-700 ease`}
            onClick={seekVideo}
          >
            Transitions
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThirdVideoCard;
