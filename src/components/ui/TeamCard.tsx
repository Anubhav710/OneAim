"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

type Qualification = {
  experience: string;
  education: string;
  subject: string;
};

const qualificationIcons = [
  {
    id: "experience",
    icon: "images/icons/expertise.svg",
    alt: "expertise",
    getLabel: (qualification: Qualification) => qualification.experience,
  },
  {
    id: "education",
    icon: "images/icons/open-book.svg",
    alt: "education",
    getLabel: (qualification: Qualification) => qualification.education,
  },
  {
    id: "subject",
    icon: "images/icons/molecule.svg",
    alt: "subject",
    getLabel: (qualification: Qualification) => qualification.subject,
  },
];

const TeamCard = ({
  name,
  qualification,
  description,
  role,
  image = "/images/team/team.png",
}: {
  name: string;
  qualification: Qualification;
  description: string;
  role?: string;
  image?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;
    const button = buttonRef.current;
    const imageContainer = imageRef.current;

    // Initial states
    gsap.set(overlay, { opacity: 0 });
    gsap.set([content, button], { opacity: 0, y: 20 });

    // Create timeline for hover animation
    const tl = gsap.timeline({ paused: true });

    tl.to(overlay, {
      opacity: 1,
      duration: 0.4,
      ease: "power3.inOut",
    })
      .to(
        imageContainer,
        {
          scale: 1.05,
          duration: 0.5,
          ease: "power2.out",
        },
        0
      )
      .to(
        content,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.05,
        },
        "-=0.2"
      )
      .to(
        button,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.2"
      );

    // Hover handlers for desktop
    const handleHover = () => {
      // Only apply hover effects on devices that support hover
      if (window.matchMedia("(hover: hover)").matches) {
        const enterHandler = () => tl.play();
        const leaveHandler = () => tl.reverse();

        const card = cardRef.current;
        card?.addEventListener("mouseenter", enterHandler);
        card?.addEventListener("mouseleave", leaveHandler);

        // Cleanup
        return () => {
          card?.removeEventListener("mouseenter", enterHandler);
          card?.removeEventListener("mouseleave", leaveHandler);
        };
      }

      // For touch devices, show a partial overlay by default
      if (window.matchMedia("(hover: none)").matches) {
        gsap.set(overlay, { opacity: 0 });
        gsap.set(content, { opacity: 0 });

        // Show just name and role with a semi-transparent overlay
        const touchTl = gsap.timeline();
        touchTl
          .to(overlay, { opacity: 0.7, duration: 0 })
          .to(content, { opacity: 1, y: 0, duration: 0 });
      }
    };

    const cleanup = handleHover();
    return cleanup;
  }, []);

  return (
    <div
      ref={cardRef}
      className="rounded-2xl relative group overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl h-full"
    >
      <div ref={imageRef} className="transition-transform duration-500">
        <Image
          src={image}
          alt={`${name} team member photo`}
          width={520}
          height={320}
          className="rounded-2xl w-full h-auto object-cover aspect-[12/16]"
        />
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="h-full rounded-2xl w-full absolute top-0 left-0 bg-gradient-to-t from-[#D6853D]/90 to-[#D6853D]/80 backdrop-blur-[2px] flex items-center justify-center px-4 sm:px-6 md:px-8 z-10"
      >
        <div
          ref={contentRef}
          className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 w-full"
        >
          <div className="w-full space-y-2 sm:space-y-3">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-white">
              {name}
            </h1>
            {role && (
              <p className="text-center text-sm sm:text-base text-white/90 font-medium -mt-1 mb-1">
                {role}
              </p>
            )}
            <div className="w-full h-[1px] bg-white/80"></div>

            {/* Qualification Box */}
            <div className="flex flex-col gap-y-3 ">
              {qualificationIcons.map((item) => (
                <div key={item.id} className="flex items-center gap-x-2">
                  {/* Image Container  */}
                  <div className="bg-white/90 h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full flex items-center justify-center shadow-sm">
                    <div className="h-[70%] w-[70%]">
                      <Image
                        src={item.icon}
                        alt={item.alt}
                        width={32}
                        height={32}
                        className="w-full h-full bg-cover"
                      />
                    </div>
                  </div>
                  <p className="text-white text-xs sm:text-sm font-medium">
                    {item.getLabel(qualification)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-h-[150px] custom-scrollbar">
            <p className="text-justify text-xs sm:text-sm md:text-base text-white font-medium px-2 line-clamp-4">
              {description}
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 cursor-pointer">
          <button
            ref={buttonRef}
            className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full flex items-center justify-center bg-white hover:bg-[#FFFFFF] hover:scale-110 transition-all duration-300 shadow-md"
            aria-label="View more details"
          >
            <div className="h-1/2 w-[75%]">
              <Image
                src={"/images/icons/arrow-2.svg"}
                alt="arrow"
                width={164}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile text overlay when not hovered - only shown on touch devices */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:hidden">
        <h3 className="text-white font-bold text-lg">{name}</h3>
        {role && <p className="text-white/90 text-sm">{role}</p>}
      </div>
    </div>
  );
};

export default TeamCard;

// Add this CSS to your global styles or component:
// .custom-scrollbar::-webkit-scrollbar {
//   width: 4px;
// }
// .custom-scrollbar::-webkit-scrollbar-track {
//   background: rgba(255, 255, 255, 0.1);
//   border-radius: 10px;
// }
// .custom-scrollbar::-webkit-scrollbar-thumb {
//   background: rgba(255, 255, 255, 0.3);
//   border-radius: 10px;
// }
