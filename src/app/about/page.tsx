import Banner from "@/components/common/Banner";
import React from "react";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";
import Team from "@/components/Team";
import WhatWeOffer from "./components/WhatWeOffer";
import Community from "./components/Community";
import Testimonials from "@/components/Testimonials";
import AboutTeam from "./components/AboutTeam";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <main className="w-full bg-gradient-to-t from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE]">
      <Banner />
      <OurStory />
      <OurValues />
      <WhatWeOffer />
      <AboutTeam />
      <Community />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default AboutUs;
