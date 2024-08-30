import React from "react";
import { UseCondition } from "../../hooks/useCondition.jsx";

const PopupImage = ({ isOpen, closePopup }) => {
  return (
    <UseCondition isTrue={isOpen}>
      <div
        onClick={() => closePopup()}
        id="container"
        className="fixed pt-5 inset-0 z-40 bg-dark bg-opacity-75 backdrop-blur-sm flex justify-center items-center"
      >
        <div className=" h-[30rem] md:h-[20rem] w-[60rem] md:w-[40rem] overflow-hidden ">
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/x4VJ7DSkOqg`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </UseCondition>
  );
};

export default PopupImage;
