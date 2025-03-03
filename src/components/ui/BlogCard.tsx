import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className="space-y-3 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg rounded-lg overflow-hidden cursor-pointer group p-8">
      <div className="overflow-hidden">
        <Image
          src={"/images/blog/blog.png"}
          alt="blog"
          width={440}
          height={340}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {/* Info  */}
      <div className="pl-3 pb-4">
        <p className="text-[#FFC107]">18 Jan, 2025</p>
        <hgroup className="space-y-1 pt-1 pb-3">
          <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-[#FF7B07]">
            Union Budget 2025-26
          </h3>
          <p className="text-gray-600 line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            distinctio, necessitatibus hic architecto quas asperiores harum
            itaque officiis quibusdam accusantium voluptatibus nihil sit
            delectus nesciunt consectetur perferendis aut repellat molestias.
          </p>
        </hgroup>
        <div className="flex items-center gap-x-2">
          <a
            href=""
            className="text-[#FF7B07] text-lg font-semibold transition-all duration-300 group-hover:underline"
          >
            Read More{" "}
          </a>
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">
            <Image
              src={"/images/icons/arrow-4.svg"}
              alt="arrow"
              width={34}
              height={34}
            />
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
