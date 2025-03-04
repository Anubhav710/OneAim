import Image from "next/image";
import React from "react";

const CommonHeading = ({ title, desc }: { title: string; desc?: string }) => {
  return (
    <hgroup className="space-y-1">
      <h2 className="text-primaryred heading relative  w-max">
        <span className="relative z-10">{title}</span>
        <div className="h-32 w-32 absolute top-1/2 -translate-y-1/2 -right-20 -translate-x-1/2">
          <Image
            src={"/images/icons/button-style.svg"}
            alt="style-1"
            width={120}
            height={120}
            className="h-full w-full"
          />
        </div>
      </h2>
      <p className="text-lg w-[95%]">{desc}</p>
    </hgroup>
  );
};

export default CommonHeading;
