import CommonHeading from "@/components/ui/CommonHeading";
import Image from "next/image";
import React from "react";

const OurValue = [
  {
    title: "Integrity",
    desc: "We believe in honesty, transparency, and ethical practices in everything we do.",
    img: "/images/about/m-1.png",
  },
  {
    title: "Growth",
    desc: "We are committed to continuous learning and improvement, both for ourselves and for our students.",
    img: "/images/about/m-2.png",
  },
  {
    title: "Community",
    desc: "We foster a supportive and inclusive environment where everyone can thrive.",
    img: "/images/about/m-3.png",
  },
  {
    title: "Impact",
    desc: "We strive to create meaningful, lasting change in the lives of those we serve.",
    img: "/images/about/m-4.png",
  },
];

const OurValues = () => {
  return (
    <section className="bg-[#FFEDDD]">
      <div className="screen space-y-12 padding-yx">
        <div className="mx-auto w-max">
          <CommonHeading title="Our Values" />
        </div>
        <div className="flex justify-center flex-wrap gap-y-5 gap-x-16">
          {OurValue.map((data) => (
            <Card title={data.title} desc={data.desc} img={data.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;

const Card = ({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: any;
}) => {
  return (
    <div
      className="relative hover:scale-105 duration-500 transition-all bg-white  py-16 sm:py-20 px-5 sm:px-10 rounded-2xl space-y-3 
                before:content-[''] before:absolute before:top-1/2 before:-left-2 sm:before:-left-4 before:-translate-y-1/2 before:w-[20px] sm:before:w-[40px] before:rounded-[50%] before:h-[95%] before:bg-white 
                after:content-[''] after:absolute after:top-1/2 after:-right-2 sm:after:-right-4 after:-translate-y-1/2 after:w-[20px] sm:after:w-[40px] after:rounded-[50%] after:h-[95%] after:bg-white "
    >
      <div className="h-16 w-16 rounded-full p-4 bg-gray-100">
        <Image
          src={img}
          alt="image"
          width={320}
          height={120}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
        <p className="w-full max-w-[24ch]">{desc}</p>
      </div>
    </div>
  );
};
