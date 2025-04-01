import CommonHeading from "@/components/ui/CommonHeading";
import React from "react";

const HowItWork = () => {
  return (
    <div className="h-screen screen mx-auto">
      <CommonHeading title="How It Works?" />
      <div className="bg-[url('/images/test-series/1.png')] bg-cover h-full w-full bg-center">
        <div>
          <div className="bg-white w-max p-2">
            <p className="text-xl font-medium">
              Enroll in Your Preferred Test Series
            </p>
            <div className="triangle rotate-180"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
