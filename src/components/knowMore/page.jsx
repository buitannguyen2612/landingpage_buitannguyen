import React, { useEffect, useState } from "react";
import { knowMoreList } from "../../mockData/mocker.js";
import KnowMoreCard from "./card/page.jsx";

const KnowMore = () => {
  const [listCard, setListCard] = useState(knowMoreList);

  useEffect(() => {
    setListCard(knowMoreList);
  }, []);

  return (
    <div className="w-full h-auto p-[0_18rem] md:p-[0_1rem] lg:p-[0_1rem] xl:p-[0_1rem] flex flex-col items-center gap-[4rem] mt-[7.5rem]">
      <span className="text-6xl text-dark font-extrabold text-center leading-[1] tracking-wide md:text-md md:w-full lg:text-lgg lg:w-full xl:w-full">
        Want to <br /> <span className="special-text">know more?</span>
      </span>
      <div className="w-full flex flex-col items-center gap-[2rem] ">
        {listCard.map((val) => (
          <KnowMoreCard key={val.id} items={val} setListCard={setListCard} />
        ))}
      </div>
    </div>
  );
};

export default KnowMore;
