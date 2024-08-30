import React from "react";

const Heros = () => {
  return (
    <div className="w-full pt-[1.2rem] flex justify-center items-center h-svh ">
      <div className=" w-[70%] md:w-full flex flex-col gap-[1.5rem] items-center">
        <span className="text-6xl text-dark font-extrabold text-center leading-[1] tracking-wide md:text-md lg:text-lgg">
          Convert <span className="special-text">Text to Video</span> with AI
        </span>
        <span
          className="text-center text-gray font-bold text-3xl md:text-xl leading-[1.5] w-[79%] lg:text-2
        xl"
        >
          <span className="text-dark">
            The easiest way to turn text to video with AI is here.
          </span>
          Create videos for YouTube, Instagram and TikTok with simple text
          prompts. Just type in your idea to generate a video with stock
          footage, voiceover, background music, transitions and more.
        </span>
        <div className="w-max h-auto flex flex-col items-center gap-3">
          <button className="p-[1rem_1rem] rounded-full bg-blue hover:bg-hoverBtn transition-all duration-150 ease-linear text-white text-2xl font-subBold">
            Turn text to video, now!
          </button>
          <p className="text-sm text-gray font-semibold">
            No credit card required
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heros;
