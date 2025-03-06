import Image from "next/image";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="text-gray-800 bg-[#FFEDDD]  md:pt-20 pt-10 pb-10"
    >
      <div className="screen mx-auto padding-x">
        {/* Company Info  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-x-10">
          <div className="mb-8 sm:mb-0">
            <div className="flex justify-center sm:justify-start">
              <Image
                src={"/images/logo.svg"}
                alt="logo"
                width={220}
                height={180}
                className="w-auto h-auto"
              />
            </div>
            <h6 className="text-[#C1151B] mt-4">
              <p className="text-sm md:text-base">
                One Aim - TCNFB is a global community dedicated to empowering
                individuals through education, mentorship, and actionable
                strategies. Join us and start your journey to success today!
              </p>
              <div className="flex items-center gap-x-2 text-sm mt-2">
                <a href="">Read More </a>
                <span>
                  <IoChevronDown />
                </span>{" "}
              </div>
            </h6>
          </div>
          {/* About Company */}
          <div className="mb-8 sm:mb-0">
            <h3 className="text-xl md:text-2xl mb-4 text-[#C1151B] font-semibold text-center sm:text-left">
              About Company
            </h3>
            <ul className="space-y-2 pl-1 text-center sm:text-left">
              <li className="text-[#C1151B]">
                <a href="/">Home</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/">About us</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/">Courses</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/">Test Series</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="mb-8 sm:mb-0">
            <h3 className="text-xl md:text-2xl mb-4 text-[#C1151B] font-semibold text-center sm:text-left">
              Legal Links
            </h3>
            <ul className="space-y-2 pl-1 text-center sm:text-left">
              <li className="text-[#C1151B]">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/">Terms & Condition</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/">Our Blogs</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/">Faculty</a>
              </li>
              <li className="text-[#C1151B]">
                <a href="/">Career</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl mb-4 text-[#C1151B] font-semibold text-center sm:text-left">
              Contact Us
            </h3>
            <div className="space-y-4 pl-1">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-y-2 gap-x-3">
                <div className="bg-white rounded-full h-10 w-10 p-2 flex items-center justify-center shrink-0">
                  <FaPhone className="text-primaryred" />
                </div>
                <hgroup className="text-center sm:text-left">
                  <h4 className="text-lg font-semibold text-primaryred">
                    Phone Number
                  </h4>
                  <p className="text-primaryred text-sm">
                    <a href="tel: +91-8955249714">+91-8955249714</a>{" "}
                  </p>
                </hgroup>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-y-2 gap-x-3">
                <div className="bg-white rounded-full h-10 w-10 p-2 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-primaryred" />
                </div>
                <hgroup className="text-center sm:text-left">
                  <h4 className="text-lg font-semibold text-primaryred">
                    Email
                  </h4>
                  <p className="text-primaryred text-sm">
                    <a href="mailto:info@theoneaim.co.in">
                      {" "}
                      info@theoneaim.co.in
                    </a>
                  </p>
                </hgroup>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-y-2 gap-x-3">
                <div className="bg-white rounded-full h-10 w-10 p-2 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-primaryred" />
                </div>
                <hgroup className="text-center sm:text-left">
                  <h4 className="text-lg font-semibold text-primaryred">
                    Address
                  </h4>
                  <p className="text-primaryred text-sm">
                    Office No-123,Omega, Anukampa,Near Sanskrit
                    College,Bhankrota,Jaipur
                  </p>
                </hgroup>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-primaryred my-7"></div>
        <div>
          <p className="text-primaryred mx-auto w-max text-sm md:text-base">
            © {new Date().getFullYear()} Designed by{" "}
            <a href="https://utxotech.com/" target="_blank">
              UTXO Tech.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
