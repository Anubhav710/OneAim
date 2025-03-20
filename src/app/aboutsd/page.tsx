import Banner from "@/components/common/Banner";
import React from "react";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";
import Team from "@/components/Team";
import WhatWeOffer from "./components/WhatWeOffer";
import Community from "./components/Community";
import Testimonials from "@/components/Testimonials";
import AboutTeam from "./components/AboutTeam";

const AboutUs = () => {
  return (
    <main className="w-full">
      <Banner />
      <OurStory />
      <OurValues />
      <WhatWeOffer />
      <AboutTeam />
      <Community />
      <Testimonials />
    </main>
  );
};

export default AboutUs;
