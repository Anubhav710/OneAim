"use client";
import React, { useEffect, useRef } from "react";
import CommonHeading from "./ui/CommonHeading";
import TeamCard from "./ui/TeamCard";
import Button from "./ui/Button";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teamInfo = [
  {
    id: 1,
    name: "Diksha kashyap",
    qualifications: {
      experience: "5 Years of Experience",
      education: "Masters in Political Science",
      subject: "Science",
    },
    description:
      "Joined National Human Rights Commission as an intern and completed a group research project with first position.",
    role: "Program Director", // Optional: Adds clarity to her position
    image: "/images/team/Dikshakashyap.png",
  },
  {
    id: 2,
    name: "Ritika kaushal",
    qualifications: {
      experience: "4 Years of Experience",
      education: "MBA",
      subject: "Computer Science",
    },
    description:
      "Mr. Johnson is a seasoned educator with a strong background in computer science. He has taught various programming languages and has a passion for mentoring students.",
    role: "Computer Science Instructor", // Optional: Adds clarity to his position
    image: "/images/team/Ritikakaushal.png",
  },
  {
    id: 3,
    name: "Aatiba Nasti",
    qualifications: {
      experience: "4 Years of Experience",
      education: "M.tech transportation engineering",
      subject: "English",
    },
    description:
      "Ms. Rodriguez is an accomplished English teacher with a focus on creative writing and literature. She has a talent for inspiring students to express themselves through words.",
    role: "English Instructor", // Optional: Adds clarity to her position
    image: "/images/team/AatibaNasti.png",
  },
  {
    id: 4,
    name: "Munaza Nasti ",
    qualifications: {
      experience: "7 Years of Experience",
      education: "B.sc Masters in gender studies",
      subject: "Mathematics",
    },
    description:
      "Dr. Patel is a mathematics expert who makes complex concepts simple and engaging. His innovative teaching methods have helped countless students excel in mathematics and competitive exams.",
    role: "Mathematics Head",
    image: "/images/team/Munazanasti.png",
  },
  {
    id: 5,
    name: "Saloni  Vaishnoi",
    qualifications: {
      experience: "14 Years of Experience",
      education: "M.A. (Physics), B.Ed.",
      subject: "Physics",
    },
    description:
      "Mrs. Zhang specializes in making physics practical and relatable. Her hands-on approach to teaching and real-world examples help students understand complex physics concepts easily.",
    role: "Physics Specialist",
    image: "/images/team/SaloniVaishnoi.png",
  },
  {
    id: 6,
    name: "Col Paresh Dave",
    qualifications: {
      experience: "14 Years of Experience",
      education: "M.Com., CA",
      subject: "Commerce",
    },
    description:
      "Mr. Kumar brings real-world financial expertise to the classroom. His experience in chartered accountancy and commerce education makes him an invaluable asset for commerce students.",
    role: "Commerce Expert",
    image: "/images/team/ColPareshDave.png",
  },
  {
    id: 7,
    name: "Narendra Raj Singh",
    qualifications: {
      experience: "16 Years of Experience",
      education: "Ph.D. (Chemistry), M.Sc.",
      subject: "Chemistry",
    },
    description:
      "Dr. Williams makes chemistry exciting through interactive experiments and real-world applications. Her research background brings cutting-edge knowledge to her teaching methods.",
    role: "Chemistry Head",
    image: "/images/team/NarendraRajSingh.png",
  },
  {
    id: 8,
    name: "Preeti Rathi",
    qualifications: {
      experience: "8 Years of Experience",
      education: "M.S ( AI & ML)",
      subject: "Career Counseling",
    },
    description:
      "Ms. Sharma guides students in making informed career choices. Her expertise in psychology and career counseling helps students align their interests with suitable career paths.",
    role: "Career Counselor",
    image: "/images/team/PreetiRathi.png",
  },
  {
    id: 9,
    name: "Payal kundu",
    qualifications: {
      experience: "8 Years of Experience",
      education: "M.A. (Psychology), B.Ed.",
      subject: "Career Counseling",
    },
    description:
      "Ms. Sharma guides students in making informed career choices. Her expertise in psychology and career counseling helps students align their interests with suitable career paths.",
    role: "Career Counselor",
    image: "/images/team/Payalkundu.png",
  },
];

const Team = () => {
  return (
    <section className="bg-gradient-to-t from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE] padding-tx">
      <section className="screen space-y-12">
        <div className="w-max mx-auto">
          <CommonHeading title="Meet Our Team" />
        </div>
        <div className="relative px-12 max-sm:px-0">
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
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            style={{
              padding: "0px 10px 50px 10px",
            }}
          >
            {teamInfo.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="transform transition-transform hover:scale-[1.02] duration-300">
                  <TeamCard
                    name={member.name}
                    qualification={member.qualifications}
                    description={member.description}
                    role={member.role}
                    image={member.image}
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

        <div className="w-max mx-auto">
          <Button className="!px-16 !text-white">View All</Button>
        </div>
      </section>
    </section>
  );
};

export default Team;
