import React from "react";
import { BiArrowFromBottom } from "react-icons/bi";

const TopDown = () => {
  return (
    <div className="absolute bottom-5 right-5 bg-primaryred w-14 h-14 z-[99] max-sm:w-10 max-sm:h-10">
      <a
        href="#home"
        className="h-full w-full flex items-center justify-center"
      >
        <BiArrowFromBottom className="text-white h-[70%] w-[70%]" />
      </a>
    </div>
  );
};

export default TopDown;
