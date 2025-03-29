"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaFacebook, FaPhoneAlt, FaQuora } from "react-icons/fa";
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
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import CustomDropdown from "./ui/CustomDropdown";
import { usePathname } from "next/navigation";

const socialLinks = [
  {
    href: "https://www.facebook.com/oneaimeducation/",
    icon: (
      <FaFacebookF className="h-4 w-4 md:h-5 md:w-5 text-primaryred group-hover:text-white duration-300 ease-in-out" />
    ),
  },
  {
    href: "https://www.instagram.com/oneaim__official/",
    icon: (
      <FaInstagram className="h-4 w-4 md:h-5 md:w-5 text-primaryred group-hover:text-white duration-300 ease-in-out" />
    ),
  },
  {
    href: "https://x.com/OneAim01",
    icon: (
      <FaXTwitter className="h-4 w-4 md:h-5 md:w-5 text-primaryred group-hover:text-white duration-300 ease-in-out" />
    ),
  },
  {
    href: "https://www.quora.com/profile/One-Aim-5",
    icon: (
      <FaQuora className="h-4 w-4 md:h-5 md:w-5 text-primaryred group-hover:text-white duration-300 ease-in-out" />
    ),
  },
  {
    href: "https://www.youtube.com/@OneAim-q7r",
    icon: (
      <FaYoutube className="h-4 w-4 md:h-5 md:w-5 text-primaryred group-hover:text-white duration-300 ease-in-out" />
    ),
  },
];

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "#course", label: "Courses" },
  { href: "#course", label: "Test Series" },
  { href: "#footer", label: "Contact us" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const path = usePathname();
  console.log(path);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      setHeaderVisible(scrollY < lastScrollY || scrollY < 100);
      setLastScrollY(scrollY);
    }
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className="z-50 sticky top-0">
      <div className={`header-top text-white bg-primaryred py-[8px]`}>
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
              {socialLinks.map((link, index) => (
                <li
                  key={index}
                  className="bg-white rounded-full h-7 w-7 md:h-7 md:w-7 flex-center group hover:bg-primaryred hover:ring-[1.5px] hover:ring-white duration-300 ease-in-out cursor-pointer"
                >
                  <a href={link.href}>{link.icon}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`desktop-heading bg-white relative  transition-transform duration-300 ${
          headerVisible
            ? "translate-y-0"
            : "md:-translate-y-[55%] -translate-y-[66%] top-full"
        }`}
      >
        <div className="screen py-2 flex items-center justify-between padding-x">
          {/* Logo  */}
          <a href="/" className="cursor-pointer">
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={120}
              height={50}
              className="w-[170px] md:w-[160px] lg:w-[220px]"
            />
          </a>
          {/* Desktop navigation  */}

          <nav className="hidden xl:block">
            <ul className="flex gap-x-10">
              {navItems.map((item, index) => {
                const isActive = path === item.href;
                return (
                  <li key={index} className="group relative cursor-pointer">
                    <a
                      href={item.href}
                      className={`relative z-50 ${
                        isActive
                          ? "text-primaryred font-bold"
                          : "group-hover:text-primaryred"
                      }`}
                    >
                      {item.label}
                    </a>
                    {isActive && (
                      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-16 w-16">
                        <Image
                          src="/images/icons/button-style.svg"
                          alt="style-1"
                          width={120}
                          height={120}
                          className="h-full w-full"
                        />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* Buttons  */}
          <div className="hidden md:flex space-x-5">
            <CustomDropdown
              options={[
                { value: "english", label: "English" },
                { value: "hindi", label: "Hindi" },
              ]}
              onChange={(value) => {
                // Handle language change
                console.log("Selected language:", value);
              }}
              className="w-44"
            />
            <Button className="!py-3 !px-8 hover:bg-primaryred !text-white">
              Log in
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
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
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-0 bottom-0 right-0 h-screen w-[80%] bg-white shadow-lg z-50 overflow-y-auto"
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
              <a href="/">
                <Image
                  src={"/images/logo.svg"}
                  alt="logo"
                  width={140}
                  height={50}
                />
              </a>
            </div>

            <nav>
              <ul className="space-y-6">
                <li className="mobile-menu-item border-b pb-2">
                  <a href="/" className="text-primaryred block text-lg">
                    Home
                  </a>
                </li>
                <li className="mobile-menu-item border-b pb-2">
                  <a
                    href="/about"
                    className="hover:text-primaryred block text-lg"
                  >
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
                  <a
                    href="#footer"
                    className="hover:text-primaryred block text-lg relative z-50"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="space-y-4">
              <CustomDropdown
                options={[
                  { value: "", label: "Select Language" },
                  { value: "english", label: "English" },
                  { value: "hindi", label: "Hindi" },
                ]}
                onChange={(value) => {
                  // Handle language change
                  console.log("Selected language:", value);
                }}
                className="w-44"
              />
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
