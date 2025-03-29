import CommonHeading from "@/components/ui/CommonHeading";
import React from "react";

const OurValues = () => {
  return (
    <section className="bg-[#FFEDDD]">
      <div className="screen space-y-12 padding-yx">
        <div className="mx-auto w-max">
          <CommonHeading title="Our Values" />
        </div>
        <div className="flex justify-center flex-wrap gap-y-5 gap-x-16">
          <Card />
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
      className="relative hover:scale-105 duration-500 transition-all bg-white  py-16 sm:py-20 px-5 sm:px-10 rounded-2xl space-y-3 
                before:content-[''] before:absolute before:top-1/2 before:-left-2 sm:before:-left-4 before:-translate-y-1/2 before:w-[20px] sm:before:w-[40px] before:rounded-[50%] before:h-[95%] before:bg-white 
                after:content-[''] after:absolute after:top-1/2 after:-right-2 sm:after:-right-4 after:-translate-y-1/2 after:w-[20px] sm:after:w-[40px] after:rounded-[50%] after:h-[95%] after:bg-white "
    >
      <div className="h-12 w-12 rounded-full bg-gray-500"></div>
      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-semibold">Integrity</h3>
        <p className="w-full max-w-[24ch]">
          We believe in honesty, transparency, and ethical practices in
          everything we do.
        </p>
      </div>
    </div>
  );
};
