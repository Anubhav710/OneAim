import Banner from "@/components/common/Banner";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const BlogPage = () => {
  // Sample blog data with placeholder image paths (replace with downloaded images)
  const blogPosts = [
    {
      id: 1,
      image: "/images/blog/blog-2.png", // Replace with actual Unsplash image path
      date: "11 Jan, 2025",
      title: "How to Create an Effective Study Plan",
      description:
        "Learn how to create a study plan that covers all subjects systematically.",
      link: "/",
    },
    {
      id: 2,
      image: "/images/blog/blog-2.png", // Replace with actual Google CC image path
      date: "12 Jan, 2025",
      title: "Staying Motivated During IAS Preparation",
      description:
        "Explore techniques to stay motivated and focused throughout your journey.",
      link: "/",
    },
    {
      id: 3,
      image: "/images/blog/blog-2.png", // Replace with actual Unsplash image path
      date: "13 Jan, 2025",
      title: "Top Strategies for Cracking IAS Prelims",
      description:
        "Discover the best strategies to ace your IAS prelims with our expert tips.",
      link: "/",
    },
    {
      id: 4,
      image: "/images/blog/blog-2.png", // Replace with actual Unsplash image path
      date: "14 Jan, 2025",
      title: "How to Create an Effective Study Plan",
      description:
        "Learn how to create a study plan that covers all subjects systematically.",
      link: "/",
    },
    {
      id: 5,
      image: "/images/blog/blog-2.png", // Replace with actual Google CC image path
      date: "15 Jan, 2025",
      title: "Staying Motivated During IAS Preparation",
      description:
        "Explore techniques to stay motivated and focused throughout your journey.",
      link: "/",
    },
    {
      id: 6,
      image: "/images/blog/blog-2.png", // Replace with actual Unsplash image path
      date: "16 Jan, 2025",
      title: "Top Strategies for Cracking IAS Prelims",
      description:
        "Discover the best strategies to ace your IAS prelims with our expert tips.",
      link: "/",
    },
  ];

  return (
    <div className="bg-beige-50 min-h-screen">
      <Banner title="Blog" desp="Empowering Lives, One Step at a Time">
        <Link href="/">Home</Link>
        <span>{">"}</span>
        <span className="text-[#FF8315]">Blog</span>
      </Banner>
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const BlogCard = ({
  image,
  date,
  title,
  description,
  link,
}: {
  image: string;
  date: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full">
        <img
          src={image || "/images/blog/blog.png"}
          alt={title}
          className="object-cover h-auto w-full"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500">
          <FaCalendarAlt className="h-4 w-4 text-[#FF8315] mr-2" />
          <span>{date}</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mt-2">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4">
          <Link
            href={link}
            className="flex items-center text-[#FF8315] font-medium hover:underline"
          >
            Read More
            <FaArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
