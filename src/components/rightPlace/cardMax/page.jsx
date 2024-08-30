import CheckIcon from "@mui/icons-material/Check";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";

const CardMax = ({ isSale }) => {
  const [value, setValue] = useState("");
  const [mainNumber, setMainNumber] = useState(isSale ? 48 : 60);
  const [currentValue, setCurrentValue] = useState({
    ai: (mainNumber * 200) / (isSale ? 48 : 60),
    stock: (mainNumber * 320) / (isSale ? 48 : 60),
    storage: (mainNumber * 400) / (isSale ? 48 : 60),
    voice: (mainNumber * 5) / (isSale ? 48 : 60),
    user: value,
  });

  const rangeChane = (val) => {
    if (isSale) {
      setMainNumber(+val * 48);
      setValue(+val);
    } else {
      setMainNumber(+val * 60);
      setValue(+val);
    }
  };

  const changeDetail = (val) => {
    if (isSale) {
      setCurrentValue((prv) => ({
        ...prv,
        ai: (+val * 200) / 48,
        stock: (+val * 320) / 48,
        storage: (+val * 400) / 48,
        voice: (+val * 5) / 48,
        user: value,
      }));
    } else {
      setCurrentValue((prv) => ({
        ...prv,
        ai: (+val * 200) / 60,
        stock: (+val * 320) / 60,
        storage: (+val * 400) / 60,
        voice: (+val * 5) / 60,
        user: value,
      }));
    }
  };

  useEffect(() => {
    changeDetail(mainNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainNumber]);

  const caculating = (val) => {
    if (val) {
      setCurrentValue((prv) => ({
        ...prv,
        ai: (mainNumber * 200) / 48,
        stock: (mainNumber * 320) / 48,
        storage: (mainNumber * 400) / 48,
        voice: (mainNumber * 5) / 48,
      }));
    } else {
      setCurrentValue((prv) => ({
        ...prv,
        ai: (mainNumber * 200) / 60,
        stock: (mainNumber * 320) / 60,
        storage: (mainNumber * 400) / 60,
        voice: (mainNumber * 5) / 60,
      }));
    }
  };

  useEffect(() => {
    caculating(isSale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSale]);

  return (
    <div className="border-solid border-[#8610e0] border-[0.1rem] h-auto grid grid-rows-subgrid row-span-3 rounded-3xl overflow-hidden">
      {/* content */}
      <div className="w-full grid justify-start pt-[2.3rem] pl-[2.3rem] relative overflow-hidden">
        <div className="rotate-45 top-[24px] right-[-29px] absolute bg-[#8610e0] text-white font-bold text-[0.815rem] p-[0.2rem_2rem]">
          Best Value
        </div>
        <span className="font-markerBold text-dark text-5xl  grid-rows-subgrid row-span-3 ">
          Max
        </span>
        <span className="font-semibold text-2xl text-gray  grid-rows-subgrid row-span-3">
          For growing & established creators
        </span>
        <span className="w-full flex gap-1 items-end justify-start grid-rows-subgrid row-span-3">
          <p className="font-markerBold text-dark text-5xl">${mainNumber}</p>
          <p className="font-semibold text-2xl text-gray mb-2">/mo*</p>
        </span>
      </div>
      {/* content */}

      {/* range */}
      <div className="w-full flex flex-col items-center p-[0_2.3rem]">
        <span className="w-full">
          <Slider
            aria-label="Temperature"
            defaultValue={1}
            getAriaValueText={rangeChane}
            valueLabelDisplay="auto"
            shiftStep={1}
            step={1}
            marks
            min={1}
            max={10}
            className="w-full"
            style={{
              color: "#191919", // Màu chính của slider
            }}
            componentsProps={{
              thumb: { style: { backgroundColor: "#FFF" } }, // Màu của nút điều chỉnh (thumb)
              rail: { style: { backgroundColor: "#191919" } }, // Màu của đường ray slider
              track: { style: { backgroundColor: "#191919" } }, // Màu của đường di chuyển slider
            }}
          />
        </span>
        <span className="w-full">
          <button className="p-[0.8rem_1rem] w-full rounded-full bg-[#8610e0] text-white text-2xl font-subBold">
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
            <p className="text-base text-gray font-semibold ">
              {currentValue.ai} mins/mo of AI generation
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
            <p className="text-base text-gray font-semibold ">
              {currentValue.stock}/mo iStock
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
            <p className="text-base text-gray font-semibold ">
              {currentValue.storage} GB storage
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
            <p className="text-base text-gray font-semibold ">
              Unlimited exports
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
            <p className="text-base text-gray font-semibold ">
              {currentValue.voice} voice clones
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
            <p className="text-base text-gray font-semibold ">
              Upto {value} user
            </p>
          </div>
          <span className="ml-auto"></span>
        </div>
      </div>
      {/* check list */}
    </div>
  );
};

export default CardMax;
