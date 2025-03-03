"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { gsap } from "gsap";

const TestimonialCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const infoOverlayRef = useRef(null);
  const basicOverlayRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Initial setup - hide the info overlay
    gsap.set(infoOverlayRef.current, {
      opacity: 0,
      y: 20,
      display: "none",
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Animate basic overlay out
    gsap.to(basicOverlayRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.3,
      display: "none",
    });

    // Animate info overlay in
    gsap.set(infoOverlayRef.current, {
      display: "flex",
    });
    gsap.to(infoOverlayRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Animate info overlay out
    gsap.to(infoOverlayRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        gsap.set(infoOverlayRef.current, {
          display: "none",
        });
      },
    });

    // Animate basic overlay in
    gsap.set(basicOverlayRef.current, {
      display: "flex",
    });
    gsap.to(basicOverlayRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
    });
  };

  return (
    <section>
      <div
        className="relative w-max cursor-pointer overflow-hidden"
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <Image
            src={"/images/testimonial/t1.png"}
            alt="testimonial"
            width={320}
            height={240}
          />
        </div>
        {/* Basic Overlay  */}
        <div
          ref={basicOverlayRef}
          className="bg-black/35 absolute top-0 left-0 h-full w-full p-4 flex items-end"
        >
          <h6 className="text-white font-semibold">Archika</h6>
        </div>
        {/* Info Overlay  */}
        <div
          ref={infoOverlayRef}
          className="absolute top-0 left-0 h-full w-full px-4 py-6 bg-[#961313]  flex flex-col justify-between"
        >
          <div className="flex justify-between max-sm:justify-start max-sm:space-x-3 items-center">
            <div className="flex gap-x-1">
              {[...Array(5)].map((_, i) => (
                <IoStar key={i} className="text-white" />
              ))}
            </div>
            <div>
              <h6 className="text-white">(4/5 Ratings)</h6>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold w-[80%]">
              One Aim changed my life! The courses are practical, and the
              community is incredibly supportive."
            </p>
          </div>
          <div className="flex items-center gap-x-3">
            <div>
              <Image
                src={"/images/testimonial/archika.png"}
                alt="archika"
                width={54}
                height={54}
              />
            </div>
            <hgroup className="text-white">
              <h5 className="font-medium text-lg">Archika</h5>
              <p className="text-xs">19 yrs. Old</p>
            </hgroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
