"use client";
import React, { useEffect, useRef } from "react";
import InfoCard from "./ui/InfoCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const infoData = [
  {
    img: "/images/icons/graduation-2.svg",
    number: "13",
    desc: "Student Enrolled",
  },
  {
    img: "/images/icons/video-lesson.svg",
    number: "20",
    desc: "Class Completed",
  },
  {
    img: "/images/icons/user-avatar.svg",
    number: "10",
    desc: "Happy Users",
  },
  {
    img: "/images/icons/school.svg",
    number: "900",
    desc: "Top Instructors",
  },
];

const Info = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!cardsRef.current || !containerRef.current) return;

      // Initial state
      gsap.set(cardsRef.current.children, {
        opacity: 0,
        y: 50,
      });

      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(cardsRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE] padding-top">
      <section className="screen" ref={containerRef}>
        <div
          className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 padding-x"
          ref={cardsRef}
        >
          {infoData.map((info) => (
            <InfoCard
              key={info.number}
              number={info.number}
              desc={info.desc}
              src={info.img}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Info;
