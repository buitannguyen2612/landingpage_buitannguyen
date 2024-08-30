import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
const KnowMoreCard = ({ items, setListCard }) => {
  const extendModal = (id) => {
    setListCard((prevList) =>
      prevList.map((item) =>
        item.id === id.id ? { ...item, extend: !item.extend } : item
      )
    );
  };

  return (
    <div className="under-line-before w-full min-h-[6rem] flex flex-col gap-4 justify-start pb-[1rem]">
      <div
        className="w-full h-auto flex items-center justify-between cursor-pointer"
        onClick={() => extendModal(items)}
      >
        <div className="text-dark font-markerBold text-4xl md:text-2xl">
          {items.title}
        </div>
        <span>
          {items.extend ? (
            <RemoveCircleOutlineIcon
              sx={{
                fontSize: "2.5rem",
                color: "#71717a",
                fontWeight: "bold",
                strokeWidth: 5,
                cursor: "pointer",
              }}
            />
          ) : (
            <AddCircleOutlineIcon
              sx={{
                fontSize: "2.5rem",
                color: "#71717a",
                fontWeight: "bold",
                strokeWidth: 5,
                cursor: "pointer",
              }}
            />
          )}
        </span>
      </div>
      {items.extend && (
        <div className="w-full text-[1.25rem] text-gray font-semibold md:text-xl">
          {items.descriptions}
        </div>
      )}
    </div>
  );
};

export default KnowMoreCard;
