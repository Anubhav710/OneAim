import CommonHeading from "@/components/ui/CommonHeading";
import React from "react";

const OurValues = () => {
  return (
    <section className="bg-[#FFEDDD]">
      <div className="screen space-y-12 padding-yx">
        <div className="mx-auto w-max">
          <CommonHeading title="Our Values" />
        </div>
        <div className="flex justify-center flex-wrap gap-y-5 gap-x-10">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default OurValues;

const Card = () => {
  return (
    <div
      className="relative hover:scale-105 duration-500 transition-all bg-white aspect-square w-max py-20 px-10 rounded-2xl space-y-3 
                before:content-[''] before:absolute before:top-1/2 before:-left-4 before:-translate-y-1/2 before:w-[40px] before:rounded-[50%] before:h-[95%] before:bg-white 
                after:content-[''] after:absolute after:top-1/2 after:-right-4 after:-translate-y-1/2 after:w-[40px] after:rounded-[50%] after:h-[95%] after:bg-white "
    >
      <div className="h-12 w-12 rounded-full bg-gray-500"></div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">Integrity</h3>
        <p className="w-[24ch]">
          We believe in honesty, transparency, and ethical practices in
          everything we do.
        </p>
      </div>
    </div>
  );
};
