import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import BentoOutlinedIcon from "@mui/icons-material/BentoOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import "./page.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Json from "../../images/JasonZ.png";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const FullPower = () => {
  const listSlider = [
    {
      id: 1,
      title: "“Possibly the best tool for video making”",
      name: "Ankush C.",
      image: Json,
    },
    {
      id: 2,
      title: "“Possibly the best tool for video making”",
      name: "Ankush C.",
      image: Json,
    },
    {
      id: 3,
      title: "“Possibly the best tool for video making”",
      name: "Ankush C.",
      image: Json,
    },
    {
      id: 4,
      title: "“Possibly the best tool for video making”",
      name: "Ankush C.",
      image: Json,
    },
    {
      id: 5,
      title: "“Possibly the best tool for video making”",
      name: "Ankush C.",
      image: Json,
    },
    {
      id: 6,
      title: "“Possibly the best tool for video making”",
      name: "Ankush C.",
      image: Json,
    },
    {
      id: 7,
      title: "“Possibly the best tool for video making”",
      name: "Ankush C.",
      image: Json,
    },
    {
      id: 8,
      title: "“Possibly the best tool for video making”",
      name: "Ankush C.",
      image: Json,
    },
    {
      id: 9,
      title: "“Possibly the best tool for video making”",
      name: "Ankush C.",
      image: Json,
    },
    {
      id: 10,
      title: "“Possibly the best tool for video making”",
      name: "Ankush C.",
      image: Json,
    },
    {
      id: 11,
      title: "“Possibly the best tool for video making”",
      name: "Ankush C.",
      image: Json,
    },
  ];
  return (
    <div className="w-full flex flex-col h-auto gap-[4rem] items-center mt-[7.5rem] md:p-[0_1rem] lg:p-[0_1rem] xl:p-[0_1rem]">
      <span className="text-6xl md:text-md text-dark font-extrabold text-center leading-[1] lg:text-lgg ">
        Use the full power of video <br />
        <span className="special-text">to grow your brand</span>
      </span>
      <div className="w-[1400px] lg:w-full xl:w-full md:w-full rounded-3xl bg-[#f5f5f5] h-[677px] md:h-auto lg:h-auto flex flex-row md:flex-col  lg:flex-col md:gap-[1rem] lg:gap-[1rem] p-[2.3rem]">
        <div className="flex-1 flex flex-col gap-[3rem] md:gap-3">
          <div className="flex gap-[1rem]">
            <span className="mb-auto">
              <AccessTimeIcon sx={{ color: "#8437bd", fontSize: "2rem" }} />
            </span>
            <span className="flex flex-col">
              <p className="text-dark font-subBold text-[1.625rem] md:text-2xl">
                From idea to videos with AI
              </p>
              <p className="text-gray font-semibold text-2xl md:text-xl">
                Invideo AI's idea to video generator changes the way you made
                videos for your YouTube, social media and other channels. Simply
                prompt an idea and get ready-made videos, complete with script,
                stock and voiceovers.
              </p>
            </span>
          </div>
          <div className="flex gap-[1rem]">
            <span className="mb-auto">
              <DiamondOutlinedIcon
                sx={{ color: "#dc2d83", fontSize: "2rem" }}
              />
            </span>
            <span className="flex flex-col">
              <p className="text-dark font-subBold text-[1.625rem] md:text-2xl">
                Create YouTube Shorts with AI
              </p>
              <p className="text-gray font-semibold text-2xl md:text-xl">
                Scale your YouTube Shorts production with invideo AI and watch
                your views grow. Prompt invideo AI to make Youtube Shorts for
                any interesting topic and get AI generated videos to boost your
                YouTube presence.
              </p>
            </span>
          </div>
          <div className="flex gap-[1rem]">
            <span className="mb-auto">
              <BentoOutlinedIcon sx={{ color: "#00a0f5", fontSize: "2rem" }} />
            </span>
            <span className="flex flex-col">
              <p className="text-dark font-subBold text-[1.625rem] md:text-2xl">
                Create Instagram Reels with AI
              </p>
              <p className="text-gray font-semibold text-2xl md:text-xl">
                Make videos for Instagram with invideo AI. Create Reels for
                topics like Finance, Tech and travel with ease.
              </p>
            </span>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            modules={[Pagination, Navigation]}
            navigation={true}
            className="mySwiper"
          >
            {listSlider.map((val) => (
              <SwiperSlide className=" bg-white rounded-3xl h-[35rem] flex flex-col items-center pt-[4rem] gap-4">
                <div className="h-[5rem] w-[5rem] rounded-full overflow-hidden">
                  <img
                    src={val.image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-dark font-[800] text-5xl text-center leading-[1.2]">
                  {val.title}
                </p>
                <p className="text-dark font-[500] text-[18px] text-center leading-[1.2]">
                  {val.name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FullPower;
