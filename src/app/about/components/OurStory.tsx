import CommonHeading from "@/components/ui/CommonHeading";
import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <section className=" padding-yx bg-[#FFF5EE]">
      <div className="screen">
        <div className="flex">
          {/* Image Container  */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="h-[60vh] w-[35vh]  rounded-full overflow-hidden">
                <Image
                  src={"/images/course/course.png"}
                  width={5400}
                  height={1200}
                  alt="about-image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[30vh] w-[30vh] absolute top-1/2 -translate-y-1/2 left-1/2">
                {" "}
                <Image
                  src={"/images/about/image.png"}
                  width={4200}
                  height={1200}
                  alt="about-image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Information Container  */}
          <div className="flex-1 space-y-7">
            <CommonHeading
              title="Our Story"
              desc="Founded in [Year], One Aim began with a simple yet powerful vision: to create a global community where individuals can learn, grow, and achieve their goals.
What started as a small initiative has now grown into a movement that impacts thousands of lives across the globe."
            />
            <div>
              <h6 className="text-xl font-semibold">
                Our journey is fueled by:
              </h6>
              <div className="space-y-4 mt-3">
                <div className="flex items-center gap-x-4">
                  <div className="h-12 w-12 bg-red-300 rounded-full"></div>
                  <p>A passion for education and lifelong learning.</p>
                </div>
                <div className="flex items-center gap-x-4">
                  <div className="h-12 w-12 bg-red-300 rounded-full"></div>
                  <p>A passion for education and lifelong learning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
