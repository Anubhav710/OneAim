"use client";
import React, { useEffect, useRef } from "react";
import CommonHeading from "./ui/CommonHeading";
import TestimonialCard from "./ui/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  FreeMode,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import gsap from "gsap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Create a subtle animation for the section
    gsap.fromTo(
      ".testimonial-gradient-bg",
      { backgroundPosition: "0% 0%" },
      {
        backgroundPosition: "100% 100%",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );

    // Add subtle animation to the heading
    gsap.from(".testimonial-heading", {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
      },
    });

    // Add reveal animation for the slider
    gsap.from(".testimonial-slider", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="testimonial-gradient-bg bg-gradient-to-t from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE] relative overflow-hidden padding-yx"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#c1151b]/5 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#c1151b]/5 blur-2xl"></div>

      <section className="screen  space-y-12 relative z-10">
        <div className="w-max mx-auto">
          <CommonHeading title="Testimonials" />
        </div>

        <div className="relative testimonial-slider px-12 max-sm:px-5">
          <button
            className="custom-prev-button group absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-primaryred group-hover:text-white" />
          </button>
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, FreeMode, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            freeMode={true}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".custom-next-button",
              prevEl: ".custom-prev-button",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 120,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 160,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 160,
              },
            }}
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
          <button
            className="custom-next-button group absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 max-sm:w-7 max-sm:h-7 rounded-full shadow-lg flex items-center justify-center hover:bg-primaryred hover:text-white transition-colors duration-300"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-primaryred group-hover:text-white" />
          </button>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
