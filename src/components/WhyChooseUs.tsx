"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CommonHeading from "./ui/CommonHeading";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for screen size and update state
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (
        !imageRef.current ||
        !contentRef.current ||
        !cardsRef.current ||
        !containerRef.current
      )
        return;

      // Initial state
      gsap.set([imageRef.current, contentRef.current], {
        opacity: 0,
        y: 50,
      });

      gsap.set(cardsRef.current.children, {
        opacity: 0,
        x: isMobile ? -20 : -30,
        scale: 0.95,
      });

      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: isMobile ? "top 80%" : "top center",
          end: isMobile ? "bottom 70%" : "bottom center",
          toggleActions: "play none none reverse",
          // Uncomment to debug
          // markers: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.to(imageRef.current, {
        opacity: 1,
        y: 0,
        duration: isMobile ? 0.8 : 1,
      })
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.8 : 1,
          },
          "-=0.5"
        )
        .to(cardsRef.current.children, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: isMobile ? 0.15 : 0.2,
        });

      // Add hover animations for the cards
      if (!isMobile) {
        const cards = cardsRef.current.children;
        for (let i = 0; i < cards.length; i++) {
          cards[i].addEventListener("mouseenter", () => {
            gsap.to(cards[i], {
              y: -10,
              duration: 0.3,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            });
          });

          cards[i].addEventListener("mouseleave", () => {
            gsap.to(cards[i], {
              y: 0,
              duration: 0.3,
              boxShadow: "none",
            });
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      className="bg-gradient-to-t from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE] padding-[100px]"
      ref={containerRef}
    >
      <section className="screen">
        <div className="flex flex-col lg:flex-row gap-8 padding-x">
          <div className="lg:flex-1 mx-auto lg:mx-0" ref={imageRef}>
            <div>
              <div className="w-full mx-auto max-sm:max-w-full">
                <Image
                  src={"/images/choose-us/choose-us.png"}
                  alt="why-choose-us"
                  width={740}
                  height={240}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="lg:flex-1 space-y-8 lg:space-y-10 my-auto">
            <div ref={contentRef}>
              <CommonHeading
                title="Why Choose Us?"
                desc="At One Aim , we pride ourselves on standing out from the crowd. Our commitment to excellence in IAS preparation is reflected in every aspect of our platform. Here's what sets us apart :"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8">
              <div className="flex gap-x-5">
                {/* Image  */}
                <div className="group">
                  <div className="bg-white h-14 w-14 sm:h-16 sm:w-16 rounded-full p-3 flex items-center justify-center shrink-0">
                    <Image
                      src={"/images/icons/graduation.svg"}
                      alt="graduation"
                      width={42}
                      height={42}
                      className="h-full w-full transition-transform duration-500 ease-in-out group-hover:[transform:rotateY(180deg)]"
                    />
                  </div>
                </div>
                {/* info  */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl text-primaryred font-semibold">
                    Expert Faculty
                  </h3>
                  <p className="text-sm sm:text-base">
                    Learn from experienced educators and industry experts.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5">
                {/* Image  */}
                <div className="group">
                  <div className="bg-white h-14 w-14 sm:h-16 sm:w-16 rounded-full p-3 flex items-center justify-center shrink-0">
                    <Image
                      src={"/images/icons/degree.svg"}
                      alt="graduation"
                      width={42}
                      height={42}
                      className="h-full w-full transition-transform duration-500 ease-in-out group-hover:[transform:rotateY(180deg)]"
                    />
                  </div>
                </div>
                {/* info  */}
                <div>
                  <h3 className="text-xl sm:text-2xl text-primaryred font-semibold">
                    Comprehensive Curriculum
                  </h3>
                  <p className="text-sm sm:text-base">
                    Our syllabus covers every topic in-depth.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5">
                {/* Image  */}
                <div className="group">
                  <div className="bg-white h-14 w-14 sm:h-16 sm:w-16 rounded-full p-3 flex items-center justify-center shrink-0">
                    <Image
                      src={"/images/icons/ebook.svg"}
                      alt="graduation"
                      width={42}
                      height={42}
                      className="h-full w-full transition-transform duration-500 ease-in-out group-hover:[transform:rotateY(180deg)]"
                    />
                  </div>
                </div>
                {/* info  */}
                <div>
                  <h3 className="text-xl sm:text-2xl text-primaryred font-semibold">
                    Personalized Learning
                  </h3>
                  <p className="text-sm sm:text-base">
                    Adaptive technology customizes your study plan.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5">
                {/* Image  */}
                <div className="group">
                  <div className="bg-white h-14 w-14 sm:h-16 sm:w-16 rounded-full p-3 flex items-center justify-center shrink-0">
                    <Image
                      src={"/images/icons/session.svg"}
                      alt="graduation"
                      width={42}
                      height={42}
                      className="h-full w-full transition-transform duration-500 ease-in-out group-hover:[transform:rotateY(180deg)]"
                    />
                  </div>
                </div>
                {/* info  */}
                <div>
                  <h3 className="text-xl sm:text-2xl text-primaryred font-semibold">
                    Interactive Sessions
                  </h3>
                  <p className="text-sm sm:text-base">
                    Engage in live classes, quizzes, and forums.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhyChooseUs;
