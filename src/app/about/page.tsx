import Banner from "@/components/common/Banner";
import React from "react";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";
import Team from "@/components/Team";
import WhatWeOffer from "./components/WhatWeOffer";

const AboutUs = () => {
  return (
    <main className="w-full">
      <Banner />
      <OurStory />
      <OurValues />
      <WhatWeOffer />
      {/* <Team /> */}
    </main>
  );
};

export default AboutUs;
