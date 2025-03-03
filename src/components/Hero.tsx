"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import MagneticButton from "./ui/MagnaticButton";
import Button from "./ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import SplitType from "split-type";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const ctx = gsap.context(() => {
      // Type guard for null checks
      if (
        !headingRef.current ||
        !contentRef.current ||
        !imageRef.current ||
        !circlesRef.current ||
        !buttonContainerRef.current ||
        !subtitleRef.current ||
        !taglineRef.current
      )
        return;

      // Create a smooth page intro animation
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Split text using Split Type
      const headingSplit = new SplitType(headingRef.current, {
        types: "chars,words",
        tagName: "span",
      });

      const subtitleSplit = new SplitType(subtitleRef.current, {
        types: "lines",
        tagName: "span",
      });

      // Background gradient animation
      gsap.fromTo(
        heroRef.current,
        {
          backgroundPosition: "0% 0%",
        },
        {
          backgroundPosition: "100% 0%",
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );

      // Set initial states
      gsap.set(headingSplit.chars, { y: 100, opacity: 0 });
      gsap.set(subtitleSplit.lines, { y: 30, opacity: 0 });
      gsap.set(buttonContainerRef.current, { y: 40, opacity: 0 });
      gsap.set(taglineRef.current, { scale: 0.9, opacity: 0 });

      // Set image initial state
      gsap.set(imageRef.current, {
        opacity: 0,
        x: "50px",
      });

      // Set circles initial state
      const circles = circlesRef.current.children;
      gsap.set(circles, {
        scale: 0,
        opacity: 0,
      });

      // Main timeline
      tl.to(headingSplit.chars, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.02,
        ease: "back.out(1.2)",
      })
        .to(
          taglineRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.5)",
          },
          "-=0.8"
        )
        .to(
          subtitleSplit.lines,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.6"
        )
        .to(
          buttonContainerRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.4"
        )
        .to(
          imageRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1"
        )
        .to(
          circles,
          {
            scale: 1,
            opacity: 1,
            stagger: {
              each: 0.1,
              from: "random",
            },
            ease: "elastic.out(1, 0.5)",
            duration: 1.5,
          },
          "-=1"
        );

      // Create a floating animation for the hero image
      gsap.to(imageRef.current, {
        y: "15px",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Create a subtle arrow animation (non-repeating)
      gsap.fromTo(
        ".arrow-container",
        { rotation: 0 },
        {
          rotation: 5,
          duration: 1.5,
          ease: "power1.inOut",
          yoyo: true,
          repeat: 1,
        }
      );

      // Create breathing effect for the circles
      Array.from(circles).forEach((circle, index) => {
        gsap.to(circle, {
          scale: 1.2,
          duration: 2 + index * 0.7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Parallax effect for the background on scroll
      gsap.to(".hero-bg-element", {
        y: "-20%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Magnetic effect for circles
      const moveCircles = (e: MouseEvent) => {
        if (!circlesRef.current) return;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        Array.from(circlesRef.current.children).forEach((circle, index) => {
          const rect = circle.getBoundingClientRect();
          const circleX = rect.left + rect.width / 2;
          const circleY = rect.top + rect.height / 2;

          // Calculate distance
          const distX = mouseX - circleX;
          const distY = mouseY - circleY;
          const distance = Math.sqrt(distX * distX + distY * distY);

          // Only move if mouse is within 200px
          if (distance < 200) {
            const strength = 0.2 - distance / 1000;
            gsap.to(circle, {
              x: distX * strength,
              y: distY * strength,
              duration: 0.3,
              overwrite: "auto",
            });
          } else {
            gsap.to(circle, {
              x: 0,
              y: 0,
              duration: 0.5,
            });
          }
        });
      };

      window.addEventListener("mousemove", moveCircles);

      // Clean up function
      return () => {
        window.removeEventListener("mousemove", moveCircles);

        // Clean up Split Type instances
        if (headingSplit) headingSplit.revert();
        if (subtitleSplit) subtitleSplit.revert();
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-gradient-to-t from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE] padding-x relative">
      <div className="absolute -bottom-[37px] right-0 left-0 h-32  max-sm:-bottom-12 w-full overflow-hidden">
        <Image
          src={"/images/bg/hero-style.png"}
          alt=""
          height={1200}
          width={1200}
          className="w-full"
        />
      </div>
      <div
        ref={heroRef}
        className=" relative h-screen max-sm:h-[10vh] min-h-screen screen"
      >
        {/* Background decorative elements */}
        <div className="hero-bg-element absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#FFC107]/10 blur-3xl"></div>
        <div className="hero-bg-element absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-[#DA232A]/10 blur-3xl"></div>

        <section className="h-full max-sm:py-20 w-full  relative z-10 ">
          <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-auto max-sm:gap-8 items-center h-full">
            <div className="w-full space-y-7 max-sm:space-y-5" ref={contentRef}>
              <div
                ref={taglineRef}
                className="flex flex-wrap items-center gap-x-3 text-xl max-sm:text-lg font-semibold uppercase"
              >
                <h3>Turning Dreams</h3>
                <div className="arrow-container border border-primaryred w-28 max-sm:w-[8rem] h-8 rounded-full flex items-center justify-center">
                  <Image
                    src={"/images/icons/arrow.svg"}
                    alt="arrow"
                    width={72}
                    height={72}
                  />
                </div>{" "}
                <h3>To Reality</h3>
              </div>

              <hgroup className="space-y-7 pb-11 pt-5 max-sm:pb-7 max-sm:pt-3">
                <div
                  ref={headingRef}
                  className="text-primaryred heroHeading overflow-hidden"
                >
                  <h1>Achieve Your Dreams</h1>
                  <h1>With One Aim Academy</h1>
                </div>
                <p
                  ref={subtitleRef}
                  className="text-xl max-sm:text-lg max-w-[52ch] font-medium"
                >
                  Your efforts will shine only when you are equipped with all
                  the resources. Join our live batch today and make your dream a
                  reality.
                </p>
              </hgroup>

              {/* Button Container  */}
              <div className="space-x-5 flex" ref={buttonContainerRef}>
                <div className="w-max">
                  <MagneticButton
                    backgroundColor="#333333"
                    className="bg-primaryred  max-sm:!px-4 max-sm:!py-3 text-white font-semibold"
                  >
                    Explore Courses
                  </MagneticButton>
                </div>
                <div className="w-max">
                  <Button className="bg-transparent max-sm:!px-4 max-sm:!py-3 !hover:text-primaryred ring-[1px] ring-black font-medium hover:ring-primaryred hover:bg-transparent hover:text-primaryred">
                    Join Now
                  </Button>
                </div>
              </div>
            </div>

            <div className="w-full max-sm:pt-0 max-sm:h-[35vh]" ref={imageRef}>
              <div className="relative h-full w-full">
                <div className="absolute h-full w-full -translate-x-1/2 left-[60%] top-[60%] -translate-y-1/2 animate-spin-slow max-sm:left-1/2 max-sm:top-1/2">
                  <Image
                    src={"/images/icons/line.svg"}
                    width={740}
                    height={840}
                    alt="hero-image"
                    className="w-[80%] h-[80%] max-sm:w-[70%] max-sm:h-[70%]"
                  />
                </div>
                <div className="h-[90%] w-[90%] mx-auto relative z-30 max-sm:h-auto max-sm:flex max-sm:justify-center max-sm:items-center">
                  <Image
                    src={"/images/hero/hero-image.png"}
                    width={540}
                    height={240}
                    alt="hero-image"
                    className="w-full h-full max-sm:w-4/5 max-sm:h-auto max-sm:object-contain"
                    priority
                  />
                </div>

                {/* Animated highlights */}
                <div className="absolute top-1/4 right-1/3 w-10 h-10 animate-pulse-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M50,2 L52,30 L70,12 L60,40 L85,30 L65,50 L95,60 L65,70 L85,90 L55,75 L60,98 L45,80 L35,98 L40,70 L10,85 L35,60 L2,50 L35,40 L15,20 L45,30 L35,2 Z"
                      fill="#FFC107"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Random Circle  */}
        {/* <div ref={circlesRef} className="circles-container">
          <div className="h-5 w-5 rounded-full bg-[#FFC107] absolute top-[10%] right-[50%] z-10 max-sm:top-[5%]"></div>
          <div className="h-3 w-3 rounded-full bg-[#DA232A] absolute top-[20%] right-[71%] z-10 max-sm:top-[18%]"></div>
          <div className="h-5 w-5 rounded-full bg-[#5D8AA8] absolute bottom-[20%] right-[67%] z-10 max-sm:bottom-[10%]"></div>
          <div className="h-5 w-5 rounded-full bg-[#FFC107] absolute bottom-[20%] right-[10%] z-10 max-sm:bottom-[10%]"></div>
          <div className="h-4 w-4 rounded-full bg-[#DA232A] absolute top-[30%] right-[30%] z-10 max-sm:top-[15%]"></div>
          <div className="h-3 w-3 rounded-full bg-[#5D8AA8] absolute top-[40%] right-[15%] z-10 max-sm:top-[30%]"></div>
          <div className="h-4 w-4 rounded-full bg-[#FFC107] absolute top-[15%] right-[85%] z-10 max-md:hidden "></div>
          <div className="h-6 w-6 rounded-full bg-[#DA232A]/70 absolute bottom-[30%] right-[40%] z-10 max-md:hidden"></div>
        </div> */}

        {/* Mobile scroll indicator */}
        <a
          href="#about"
          className="hidden max-sm:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-40"
        >
          <div className="w-8 h-12 rounded-full border-2 border-primaryred flex items-center justify-center">
            <div className="w-1.5 h-3 bg-primaryred rounded-full animate-scroll-indicator"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
