import logo from "../assets/logo.webp";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#190A28] py-16 px-0 md:px-32 text-white overflow-hidden">
        <div className="m-auto w-fit">
          <div className="flex gap-5 items-center">
            <img src={logo} alt="" className="w-14 h-14 md:h-auto md:w-20 rounded-3xl" />
            <div className="space-y-3 py-2">
              <h1 className="text-xl font-semibold">
                Follow us on social media
              </h1>
              <div className="flex gap-4 text-3xl">
                <FaFacebook />
                <FaLinkedin />
                <FaTwitterSquare />
                <FaInstagramSquare />
                <FaYoutube />
              </div>
            </div>
          </div>

          <div className="my-12 border-b border-white w"></div>

          <div className="flex flex-col text-center md:flex-row gap-4 md:gap-10 text-sm">
            <a href="">© 2025 Apna | All rights reserved</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
