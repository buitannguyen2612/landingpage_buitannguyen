import React from "react";

const EachCol = ({ items }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <span className="text-[13px] text-gray_dark font-bold">
        {items.titleName}
      </span>
      <div className="flex flex-col gap-1">
        {items.listSub.map((val, idx) => (
          <span key={idx} className="text-[13px] text-gray font-semibold">
            {val}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EachCol;
