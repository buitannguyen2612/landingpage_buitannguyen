import React from "react";
import { listFooter } from "../../mockData/mocker.js";
import EachCol from "./eachCol/page.jsx";
import Tiwiter from "../../images/icon-twitter.svg";
import FaceBook from "../../images/icon-fb.svg";
import Snap from "../../images/icon-snap.svg";
import Youtube from "../../images/icon-yt.svg";
import Linkedin from "../../images/icon-in.svg";
import Quote from "../../images/icon-pin.svg";

const Footer = () => {
  const iconSocial = [Tiwiter, FaceBook, Snap, Youtube, Linkedin, Quote];
  return (
    <footer className="w-full h-svh md:h-auto lg:h-auto xl:h-auto bg-[#f5f5f5] md:gap-[5rem] lg:gap-[5rem] flex flex-col justify-start p-[5rem_12rem_2rem_12rem] md:p-[2rem_0_0_0] lg:p-[2rem_0_0_0] xl:p-[2rem_0_0_0]">
      <div className="w-full grid grid-cols-4 md:grid-cols-2 lg:grid-cols-2">
        {listFooter.map((val) => (
          <div
            key={val.id}
            className="flex flex-col pl-[5rem] items-start gap-[2rem] "
          >
            {val.allTitle.map((val, idx) => (
              <EachCol key={idx} items={val} />
            ))}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center gap-[2rem] mt-auto">
        <div className="flex gap-[2rem]">
          {iconSocial.map((val, idx) => (
            <span key={idx} className="w-[25px] h-[25px]">
              <img
                src={val}
                alt="Icon"
                className="w-full h-full object-contain"
              />
            </span>
          ))}
        </div>
        <div className="text-[0.75rem] text-gray font-semibold text-center">
          Privacy policy•Terms & conditions <br />
          ©2024 invideo
        </div>
      </div>
    </footer>
  );
};

export default Footer;
