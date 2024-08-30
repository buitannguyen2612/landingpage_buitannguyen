import CheckIcon from "@mui/icons-material/Check";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";

const CardPlus = ({ isSale }) => {
  const [value, setValue] = useState("");
  const [mainNumber, setMainNumber] = useState(isSale ? 20 : 25);
  const [currentValue, setCurrentValue] = useState({
    ai: mainNumber * 2.5,
    stock: mainNumber * 4,
    storage: mainNumber * 5,
    voice: mainNumber * 2,
    user: value,
  });

  const rangeChane = (val) => {
    if (isSale) {
      setMainNumber(+val * 20);
      setValue(+val);
      //   setCurrentValue((prv) => ({
      //     ...prv,
      //     ai: +val * 20 * 2.5,
      //     stock: +val * 20 * 4,
      //     storage: +val * 20 * 5,
      //     voice: +val * 20 * 2,
      //     user: val,
      //   }));
    } else {
      setMainNumber(+val * 25);
      setValue(+val);
      //   setCurrentValue((prv) => ({
      //     ...prv,
      //     ai: +val * 25 * 2.5,
      //     stock: +val * 25 * 4,
      //     storage: +val * 25 * 5,
      //     voice: +val * 25 * 2,
      //     user: val,
      //   }));
    }
  };

  const changeDetail = (val) => {
    setCurrentValue((prv) => ({
      ...prv,
      ai: +val * 2.5,
      stock: +val * 4,
      storage: +val * 5,
      voice: +val * 2,
      user: value,
    }));
  };

  useEffect(() => {
    changeDetail(mainNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainNumber]);

  return (
    <div className="border_element h-auto grid grid-rows-subgrid row-span-3 rounded-3xl overflow-hidden">
      {/* content */}
      <div className="w-full grid justify-start pt-[2.3rem] pl-[2.3rem] ">
        <span className="font-markerBold text-dark text-5xl  grid-rows-subgrid row-span-3 ">
          Plus
        </span>
        <span className="font-semibold text-2xl text-gray  grid-rows-subgrid row-span-3">
          For creators starting their journey
        </span>
        <span className="w-full flex gap-1 items-end justify-start grid-rows-subgrid row-span-3">
          <p className="font-markerBold text-dark text-5xl">{`$ ${mainNumber}`}</p>
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
          <button className="p-[0.8rem_1rem] w-full rounded-full bg-blue text-white text-2xl font-subBold">
            Get Plus
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
              {`${currentValue.ai} mins/mo of AI generation`}
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

export default CardPlus;
