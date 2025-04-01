import CommonHeading from "@/components/ui/CommonHeading";
import React from "react";
import Video from "./ui/Video";

const DemoClass = () => {
  return (
    <section className="screen padding-yx space-y-12">
      <div className="mx-auto w-max">
        <CommonHeading title="Demo Class" />
      </div>
      <Video />
    </section>
  );
};

export default DemoClass;
