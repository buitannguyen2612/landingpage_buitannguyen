import React from "react";
import Heros from "../../components/heros/page.jsx";
import VideoAi from "../../components/invideoAI/page.jsx";
import KnowMore from "../../components/knowMore/page.jsx";
import RightPlace from "../../components/rightPlace/page.jsx";
import SubHeros from "../../components/subHeros/page.jsx";
import VideoConvert from "../../components/videoConvert/page.jsx";
import VideoMarker from "../../components/videoMarker/page.jsx";
import Discover from "../../components/discover/page.jsx";
import SubFoot from "../../components/subfooter/page.jsx";
import Footer from "../../components/footer/page.jsx";
import ConvertSlide from "../../components/convertSlide/page.jsx";
import FullPower from "../../components/fullPower/page.jsx";

const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col bg-white ">
        <Heros />
        <SubHeros />
        <VideoMarker />
        <FullPower />
        <VideoConvert />
        <RightPlace />
        <ConvertSlide />
        <KnowMore />
        <VideoAi />
        <Discover />
        <SubFoot />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
