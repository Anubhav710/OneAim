"use client";
import React, { useRef } from "react";
import FeaturedCard from "./ui/FeaturedCard";
import CommonHeading from "./ui/CommonHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaClipboardList } from "react-icons/fa";
import Button from "./ui/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  BiBook,
  BiFile,
  BiQuestionMark,
  BiUser,
  BiVideo,
} from "react-icons/bi";

// Data
const courses = [
  {
    course: "Prelims Master Program",
    price: "₹ 36500",
    description:
      "This module will contain the full course for UPSC/IAS/CSE foundation EXAM that will be held in year 2025-26.",
    features: [
      {
        name: "2000 Video Lectures",
        icon: <BiVideo className="h-7 w-7 text-primaryred" />,
      },
      {
        name: "Subjective Test Series",
        icon: <FaClipboardList className="h-7 w-7 text-primaryred" />,
      },
      {
        name: "Previous Years Question Papers",
        icon: <BiBook className="h-7 w-7 text-primaryred" />,
      },
      {
        name: "100000 Questions",
        icon: <BiQuestionMark className="h-7 w-7 text-primaryred" />,
      },
      {
        name: "Virtual mentorship",
        icon: <BiUser className="h-7 w-7 text-primaryred" />,
      },
    ],
  },
  {
    course: "IAS/RAS Foundation Batch",
    price: "₹ 24000",
    description:
      "This module will contain the full course for UPSC/RPSC PRELIMINARY EXAMs that will be held in year 2025-26.",
    features: [
      {
        name: "Video Lectures ",
        icon: <BiVideo className="h-7 w-7 text-primaryred" />,
      },
      {
        name: "Subjective Test Series",
        icon: <FaClipboardList className="h-7 w-7 text-primaryred" />,
      },
      {
        name: "Weekly Real Time Full Tests",
        icon: <BiFile className="h-7 w-7 text-primaryred" />,
      },
      {
        name: "Previous Years Question Papers",
        icon: <BiBook className="h-7 w-7 text-primaryred" />,
      },
      {
        name: "Virtual mentorship",
        icon: <BiUser className="h-7 w-7 text-primaryred" />,
      },
    ],
  },
  {
    course: "Test Series for UPSC",
    price: "₹ 5000",
    description:
      "This module will contain full-length tests (1 lakh questions).",
    features: [
      {
        name: "Subjective Test Series",
        icon: <FaClipboardList className="h-7 w-7 text-primaryred" />,
      },
      {
        name: "Weekly Real Time Full Tests",
        icon: <BiFile className="h-7 w-7 text-primaryred" />,
      },
    ],
  },
  {
    course: "Pdf Notes for Prelims",
    price: "₹ 10000",
    description:
      "This module will contain all subject PDFs for UPSC/IAS/CSE PRELIMINARY EXAM that will be held in year 2025-26.",
    features: [
      {
        name: "All Subject PDFs",
        icon: <BiFile className="h-7 w-7 text-primaryred" />,
      },
    ],
  },
];

const FeaturedCourse = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE] relative"
    >
      <div className="bg-gradient-to-t from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE] rounded-t-[12rem] max-md:rounded-t-[6rem] max-sm:rounded-t-[3rem] max-sm:pt-[60px] pt-[100px]">
        <div className="screen space-y-12 max-sm:space-y-8 padding-x">
          <div className="w-max mx-auto" ref={headingRef}>
            <CommonHeading title="Featured Courses" />
          </div>

          <div className="relative px-12 max-sm:px-7 " ref={swiperRef}>
            {/* Custom navigation buttons */}
            <button
              className="custom-prev-button group absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-primaryred group-hover:text-white" />
            </button>

            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              spaceBetween={20}
              slidesPerView={3}
              grabCursor={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                type: "bullets",
              }}
              navigation={{
                nextEl: ".custom-next-button",
                prevEl: ".custom-prev-button",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                991: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              style={{
                padding: "0px 10px 50px 10px",
              }}
            >
              {courses.map((course, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full transform transition-transform hover:scale-[1.02] duration-300">
                    <FeaturedCard
                      title={course.course}
                      description={course.description}
                      features={course.features}
                      price={course.price}
                    />
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-pagination"></div>
            </Swiper>
            {/* Next Button  */}
            <button
              className="custom-next-button group absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-primaryred group-hover:text-white" />
            </button>
          </div>

          {/* View all courses button */}
          <div className="text-center">
            <Button className="text-white">View All Courses</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;
