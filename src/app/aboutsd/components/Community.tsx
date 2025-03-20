import CommonHeading from "@/components/ui/CommonHeading";
import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <section className="padding-yx bg-gradient-to-t from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE]">
      <div className="screen">
        <div className="flex">
          <div className="flex-1 flex justify-center">
            <div>
              <div className="h-[30rem] w-[30rem] rounded-full border relative flex items-center justify-center">
                <div className="h-[14%] w-[14%] rounded-full bg-red-300 absolute -top-8"></div>
                <div className="h-[14%] w-[14%] rounded-full bg-purple-600 absolute -bottom-8"></div>
                <div className="h-[14%] w-[14%] rounded-full bg-purple-600 absolute -left-8"></div>
                <div className="h-[40%] w-[40%] rounded-full bg-green-400">
                  <Image
                    src={"/images/image.png"}
                    alt="images"
                    width={240}
                    height={240}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-5 flex flex-col justify-center">
            <CommonHeading title="Join Our Community" />
            <hgroup className="space-y-3">
              <h5 className="text-xl font-medium">
                At One Aim - we’re more than just an organization – we’re a
                community. When you join us, you become part of a network of
                like-
              </h5>
              <p>
                Minded individuals who are committed to growth, learning, and
                making a difference. Together, we can achieve more than we ever
                could alone.
              </p>
            </hgroup>
            <button className="bg-black text-white px-7 py-2 rounded-full w-max">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
