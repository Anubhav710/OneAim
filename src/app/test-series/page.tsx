import Banner from "@/components/common/Banner";
import Link from "next/link";
import React from "react";
import Hero from "./components/Hero";
import TestSeriesC from "./components/TestSeriesC";
import TestSeriesT from "./components/TestSeriesT";
import HowItWork from "./components/HowItWork";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const TestSeries = () => {
  return (
    <main>
      <Banner title="Test Series" desp="Your Ultimate UPSC Exam Practice Hub">
        <Link href="/">Home</Link>
        <span>{">"}</span>
        <span className="text-primaryred"> Test Series</span>
      </Banner>
      <Hero />
      <TestSeriesC />
      <TestSeriesT />
      <HowItWork />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default TestSeries;
