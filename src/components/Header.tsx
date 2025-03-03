"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Button from "./ui/Button";
import gsap from "gsap";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      // GSAP animation for mobile menu
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }
      );

      // Animate menu items
      gsap.fromTo(
        ".mobile-menu-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }
  }, [isMenuOpen]);

  return (
    <header className="relative z-50">
      <div className="header-top text-white bg-primaryred py-4">
        <div className="bg-primaryred flex justify-between items-center screen padding-x">
          <div className="hidden md:block">
            <div className="flex gap-x-10">
              <div className="flex items-center gap-x-2">
                <div>
                  <FaPhoneAlt />
                </div>
                <div>
                  <a href="tel: +91-8955249714">+91-8955249714</a>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div>
                  <IoMdMail />
                </div>
                <div>
                  <a href="mailto:info@theoneaim.co.in">info@theoneaim.co.in</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto md:mx-0">
            <ul className="flex gap-x-4">
              <li className="bg-white rounded-full h-5 w-5 md:h-10 md:w-10 flex-center group hover:bg-primaryred hover:ring-[1.5px] hover:ring-white duration-300 ease-in-out cursor-pointer">
                <FaWhatsapp className="h-4 w-4 md:h-6 md:w-6 text-primaryred group-hover:text-white duration-300 ease-in-out" />
              </li>
              <li className="bg-white rounded-full h-5 w-5 md:h-10 md:w-10 flex-center group hover:bg-primaryred hover:ring-[1.5px] hover:ring-white duration-300 ease-in-out cursor-pointer">
                <FaInstagram className="h-4 w-4 md:h-6 md:w-6 text-primaryred group-hover:text-white duration-300 ease-in-out" />
              </li>
              <li className="bg-white rounded-full h-5 w-5 md:h-10 md:w-10 flex-center group hover:bg-primaryred hover:ring-[1.5px] hover:ring-white duration-300 ease-in-out cursor-pointer">
                <TiSocialLinkedin className="h-4 w-4 md:h-6 md:w-6 text-primaryred group-hover:text-white duration-300 ease-in-out" />
              </li>
              <li className="bg-white rounded-full h-5 w-5 md:h-10 md:w-10 flex-center group hover:bg-primaryred hover:ring-[1.5px] hover:ring-white duration-300 ease-in-out cursor-pointer">
                <FaYoutube className="h-4 w-4 md:h-6 md:w-6 text-primaryred group-hover:text-white duration-300 ease-in-out" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="screen py-4 flex items-center justify-between padding-x">
        {/* Logo  */}
        <a href="/" className="cursor-pointer">
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            width={240}
            height={50}
            className="w-[120px] md:w-[160px] lg:w-[220px]"
          />
        </a>
        {/* Desktop navigation  */}
        <nav className="hidden lg:block">
          <ul className="flex gap-x-10">
            <li className="group relative cursor-pointer">
              <a href="/" className="text-primaryred">
                Home
              </a>{" "}
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-16 w-16">
                <Image
                  src={"/images/icons/button-style.svg"}
                  alt="style-1"
                  width={120}
                  height={120}
                  className="h-full w-full"
                />
              </div>
            </li>
            <li className="group relative cursor-pointer">
              <a href="/" className="group-hover:text-primaryred">
                About Us
              </a>{" "}
              <div className="hidden group-hover:block top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-16 w-16 group-hover:absolute duration-300 ease-in-out">
                <Image
                  src={"/images/icons/button-style.svg"}
                  alt="style-1"
                  width={120}
                  height={120}
                  className="h-full w-full"
                />
              </div>
            </li>
            <li className="group relative cursor-pointer">
              <a href="/" className="group-hover:text-primaryred">
                Courses
              </a>{" "}
              <div className="hidden group-hover:block top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-16 w-16 group-hover:absolute duration-300 ease-in-out">
                <Image
                  src={"/images/icons/button-style.svg"}
                  alt="style-1"
                  width={120}
                  height={120}
                  className="h-full w-full"
                />
              </div>
            </li>
            <li className="group relative cursor-pointer">
              <a href="/" className="group-hover:text-primaryred">
                Test Series
              </a>{" "}
              <div className="hidden group-hover:block top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-16 w-16 group-hover:absolute duration-300 ease-in-out">
                <Image
                  src={"/images/icons/button-style.svg"}
                  alt="style-1"
                  width={120}
                  height={120}
                  className="h-full w-full"
                />
              </div>
            </li>
            <li className="group relative cursor-pointer">
              <a href="/" className="group-hover:text-primaryred">
                Contact us
              </a>{" "}
              <div className="hidden group-hover:block top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-16 w-16 group-hover:absolute duration-300 ease-in-out">
                <Image
                  src={"/images/icons/button-style.svg"}
                  alt="style-1"
                  width={120}
                  height={120}
                  className="h-full w-full"
                />
              </div>
            </li>
          </ul>
        </nav>
        {/* Buttons  */}
        <div className="hidden md:flex space-x-5">
          <select
            name=""
            id=""
            className="border rounded-md p-2 bg-white text-primaryred focus:outline-none focus:ring-2 focus:ring-primaryred"
          >
            <option value="" className="text-gray-500">
              Select Language
            </option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
          <Button className="!py-3 !px-8 hover:bg-primaryred !text-white">
            Log in
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-primaryred p-2 focus:outline-none"
          >
            {isMenuOpen ? (
              <IoMdClose className="h-8 w-8" />
            ) : (
              <RiMenu3Line className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-0 right-0 h-screen w-[80%] bg-white shadow-lg z-50 overflow-y-auto"
        >
          <div className="p-4 flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-primaryred p-2 focus:outline-none"
            >
              <IoMdClose className="h-8 w-8" />
            </button>
          </div>

          <div className="p-6 space-y-8">
            <div className="flex justify-center">
              <Image
                src={"/images/logo.svg"}
                alt="logo"
                width={140}
                height={50}
              />
            </div>

            <nav>
              <ul className="space-y-6">
                <li className="mobile-menu-item border-b pb-2">
                  <a href="/" className="text-primaryred block text-lg">
                    Home
                  </a>
                </li>
                <li className="mobile-menu-item border-b pb-2">
                  <a href="/" className="hover:text-primaryred block text-lg">
                    About Us
                  </a>
                </li>
                <li className="mobile-menu-item border-b pb-2">
                  <a href="/" className="hover:text-primaryred block text-lg">
                    Courses
                  </a>
                </li>
                <li className="mobile-menu-item border-b pb-2">
                  <a href="/" className="hover:text-primaryred block text-lg">
                    Test Series
                  </a>
                </li>
                <li className="mobile-menu-item border-b pb-2">
                  <a href="/" className="hover:text-primaryred block text-lg">
                    Contact us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="space-y-4">
              <select
                name=""
                id=""
                className="w-full border rounded-md p-2 bg-white text-primaryred focus:outline-none focus:ring-2 focus:ring-primaryred"
              >
                <option value="" className="text-gray-500">
                  Select Language
                </option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
              <Button className="w-full !py-3 !px-8 hover:bg-primaryred !text-white">
                Log in
              </Button>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-x-2 mb-3">
                <FaPhoneAlt className="text-primaryred" />
                <a href="tel: +91-8955249714" className="text-gray-700">
                  +91-8955249714
                </a>
              </div>
              <div className="flex items-center gap-x-2">
                <IoMdMail className="text-primaryred" />
                <a href="mailto:info@theoneaim.co.in" className="text-gray-700">
                  info@theoneaim.co.in
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
