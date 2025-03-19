import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="bg-gradient-to-t from-[#FFE5E5] via-[#FFEBD9] to-[#FFE5E5] h-[60vh] flex-center space-y-4 relative">
      <div className="absolute bottom-0 right-0 left-0 w-full">
        <Image
          src={"/images/hero/hero-style.png"}
          alt="hero-style"
          width={1200}
          height={1200}
          className="w-full h-32"
        />
      </div>
      <hgroup className="space-y-1">
        <h2 className="heading text-primaryred relative w-max  mx-auto">
          <span className="relative z-20">About Us</span>{" "}
          <Image
            src={"/images/icons/button-style.svg"}
            alt="style"
            width={140}
            height={120}
            className="absolute top-5 right-5"
          />
        </h2>
        <p className="text-xl font-semibold">
          Empowering Lives, One Step at a Time
        </p>
      </hgroup>
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm">
        <a
          href="/"
          className="hover:underline hover:text-primaryred duration-500"
        >
          Home
        </a>
        <span className="">{">"}</span>
        <span className="text-primaryred">About Us</span>
      </div>
      <div></div>
    </section>
  );
};

export default Banner;
