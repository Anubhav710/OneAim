import React from "react";
import CommonHeading from "./ui/CommonHeading";
import BlogCard from "./ui/BlogCard";

const Blog = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFE5E5] via-[#FFEBD9] to-[#FFF5EE] padding-x">
      <section className="screen padding-y space-y-12">
        <div className="mx-auto w-max">
          <CommonHeading title="Latest Updates" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-sm:space-y-6 gap-x-6">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </div>
  );
};

export default Blog;
