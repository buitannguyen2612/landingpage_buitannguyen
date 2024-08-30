import React, { useState } from "react";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Slider } from "@mui/material";
import CardMax from "./cardMax/page.jsx";
import CardPlus from "./cardPlus/page.jsx";

const RightPlace = () => {
  const [defineButton, setDefineButton] = useState(true);

  const handleClick = () => {
    setDefineButton(!defineButton);
  };

  return (
    <div className="w-full flex flex-col items-center gap-[4rem] md:gap-[2rem] mt-[7.5rem]">
      <span className="text-6xl md:text-md text-dark font-extrabold text-center leading-[1] tracking-wide lg:text-lgg">
        The right plans,
        <br />
        <span className="special-text"> for the right price</span>
      </span>

      {/* button effect */}
      <div
        onClick={handleClick}
        className="bg-[#f5f5f5] rounded-full w-[15rem] p-[1.6rem_2rem] outline-none cursor-pointer relative overflow-hidden"
      >
        <div className="font-bold z-10 flex items-center justify-between absolute inset-0 p-[0_0]">
          <span className="text-gray_dark text-sm flex-[0.8] flex justify-center items-center ">
            Monthly
          </span>
          <div className="relative flex-1 h-full rounded-full flex justify-center items-center overflow-hidden ">
            <span className="absolute top-[50%] translate-y-[-50%] bg-[#f5f5f5] text-sm text-gray_dark h-[95%] w-[98%] rounded-full text-center pt-1">
              Yearly{" "}
              <span className="special-text">
                20% <br /> off
              </span>
            </span>
            {defineButton && (
              <div className="animated-card-before w-[130%] h-[87%] rounded-[12px] rotate-45 z-[-1] bg-blue absolute" />
            )}
          </div>
        </div>
        <motion.div
          className="rounded-3xl absolute bg-white h-[90%] top-[50%] z-10"
          animate={{
            x: defineButton ? 77 : -29,
            width: defineButton ? 128 : 100,
            y: "-50%",
          }}
          //   transition={{ type: "spring", stiffness: 300 }}
        >
          {defineButton ? (
            <span className="text-gray_dark text-sm font-bold text-center align-middle absolute inset-0 pt-1">
              Yearly{" "}
              <span className="special-text">
                20% <br /> off
              </span>
            </span>
          ) : (
            <span className="text-gray_dark text-sm font-bold absolute inset-0 flex justify-center items-center">
              Monthly
            </span>
          )}
        </motion.div>
      </div>
      {/*Ending button effect */}

      <div className="md:w-full lg:w-full xl:w-full  grid grid-cols-[repeat(3,333px)] xl:grid-cols-[repeat(3,300px)] md:grid-cols-1 lg:grid-cols-1 gap-[4rem] xl:gap-[2rem] justify-center md:justify-normal md:p-[0_1rem]  lg:justify-normal lg:p-[0_1rem]">
        {/* one */}
        <div className="border_element h-auto grid grid-rows-subgrid row-span-3 rounded-3xl overflow-hidden">
          {/* content */}
          <div className="w-full grid justify-start pt-[2.3rem] pl-[2.3rem] ">
            <span className="font-markerBold text-dark text-5xl  grid-rows-subgrid row-span-3 ">
              Free
            </span>
            <span className="font-semibold text-2xl text-gray  grid-rows-subgrid row-span-3">
              For anyone who wishes to try AI video creation
            </span>
            <span className="w-full flex gap-1 items-end justify-start grid-rows-subgrid row-span-3">
              <p className="font-markerBold text-dark text-5xl">$0</p>
              <p className="font-semibold text-2xl text-gray mb-2">/mo*</p>
            </span>
          </div>
          {/* content */}

          {/* range */}
          <div className="w-full flex flex-col items-center p-[0_2.3rem]">
            <span></span>
            <span className="w-full mt-auto">
              <button className="p-[0.8rem_1rem] w-full rounded-full bg-dark text-white text-2xl font-subBold ">
                Try for free
              </button>
            </span>
          </div>
          {/* range */}

          {/* check list */}
          <div className="w-full flex flex-col gap-2 bg-[#f5f5f5] p-[2rem_2.1rem]">
            <div className="flex justify-between items-center gap-2  w-full">
              <div className="flex items-center gap-2 flex-shrink-0">
                <span>
                  <CheckIcon
                    sx={{
                      fontSize: "1rem",
                      color: "#71717a",
                      fontWeight: "bold",
                      strokeWidth: 5,
                    }}
                  />
                </span>
                <p className="text-base text-gray font-semibold opacity-50">
                  10 mins/wk of AI generation
                </p>
              </div>
              <span className="ml-auto">
                <InfoOutlinedIcon
                  sx={{
                    fontSize: "1rem",
                    color: "#71717a",
                    fontWeight: "bold",
                    strokeWidth: 5,
                  }}
                />
              </span>
            </div>
            <div className="flex justify-between items-center gap-2  w-full">
              <div className="flex items-center gap-2 flex-shrink-0">
                <span>
                  <CloseIcon
                    sx={{
                      fontSize: "1rem",
                      color: "#71717a",
                      fontWeight: "bold",
                      strokeWidth: 5,
                      opacity: 0.5,
                    }}
                  />
                </span>
                <p className="text-base text-gray font-semibold opacity-50">
                  iStock
                </p>
              </div>
              <span className="ml-auto"></span>
            </div>
            <div className="flex justify-between items-center gap-2  w-full">
              <div className="flex items-center gap-2 flex-shrink-0">
                <span>
                  <CheckIcon
                    sx={{
                      fontSize: "1rem",
                      color: "#71717a",
                      fontWeight: "bold",
                      strokeWidth: 5,
                    }}
                  />
                </span>
                <p className="text-base text-gray font-semibold opacity-50">
                  10 GB storage
                </p>
              </div>
              <span className="ml-auto"></span>
            </div>
            <div className="flex justify-between items-center gap-2  w-full">
              <div className="flex items-center gap-2 flex-shrink-0">
                <span>
                  <CheckIcon
                    sx={{
                      fontSize: "1rem",
                      color: "#71717a",
                      fontWeight: "bold",
                      strokeWidth: 5,
                    }}
                  />
                </span>
                <p className="text-base text-gray font-semibold opacity-50">
                  4 exports/wk with invideo logo
                </p>
              </div>
              <span className="ml-auto">
                <InfoOutlinedIcon
                  sx={{
                    fontSize: "1rem",
                    color: "#71717a",
                    fontWeight: "bold",
                    strokeWidth: 5,
                  }}
                />
              </span>
            </div>
            <div className="flex justify-between items-center gap-2  w-full">
              <div className="flex items-center gap-2 flex-shrink-0">
                <span>
                  <CheckIcon
                    sx={{
                      fontSize: "1rem",
                      color: "#71717a",
                      fontWeight: "bold",
                      strokeWidth: 5,
                    }}
                  />
                </span>
                <p className="text-base text-gray font-semibold opacity-50">
                  2.5M+ standard media
                </p>
              </div>
              <span className="ml-auto">
                <InfoOutlinedIcon
                  sx={{
                    fontSize: "1rem",
                    color: "#71717a",
                    fontWeight: "bold",
                    strokeWidth: 5,
                  }}
                />
              </span>
            </div>
            <div className="flex justify-between items-center gap-2  w-full">
              <div className="flex items-center gap-2 flex-shrink-0">
                <span>
                  <CloseIcon
                    sx={{
                      fontSize: "1rem",
                      color: "#71717a",
                      fontWeight: "bold",
                      strokeWidth: 5,
                      opacity: "0.5",
                    }}
                  />
                </span>
                <p className="text-base text-gray font-semibold opacity-50">
                  voice clones
                </p>
              </div>
              <span className="ml-auto"></span>
            </div>
          </div>
          {/* check list */}
        </div>
        {/* one */}

        {/* two */}
        <CardPlus isSale={defineButton} />
        {/* two */}

        {/* final */}
        <CardMax isSale={defineButton} />
        {/* final */}
      </div>
      <button className="p-[1rem_1rem] md:p-[0.2rem_1rem] rounded-full text-blue text-2xl font-subBold mt-auto border-solid border-blue border-[0.1rem] hover:bg-blue hover:text-white transition-all duration-150 ease-linear">
        Compare all features
      </button>
    </div>
  );
};

export default RightPlace;
