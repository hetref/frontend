import React from "react";
import logo from "/vite.svg";

import {
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsReddit,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#b6b6b64e] sm:px-16 px-6 w-full flex sm:flex-row flex-col py-[3rem]">
        <div className="sm:flex-1">
          <div className="mb-4 flex items-center text-[#000000] text-[1.4rem] font-bold tracking-[2px] gap-3">
            <img src={logo} alt="" />
            GEMS
          </div>
          <div>
            <p className="text-[#000000bb] font-medium text-[1.1rem]">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>
        </div>
        <div className="sm:flex-1 flex sm:flex-row flex-col w-full sm:mt-0 mt-6">
          <div className="flex justify-center w-full">
            <div className="sm:px-[40px] w-full">
              <span className="text-[#000000bb] tracking-wider">Product</span>
              <div className="flex flex-col sm:mt-3 sm:gap-2">
                <a href="#">Overview</a>
                <a href="#">Features</a>
                <a href="#">Solutions</a>
                <a href="#">Tutorials</a>
                <a href="#">Pricing</a>
                <a href="#">Releases</a>
              </div>
            </div>
            <div className="sm:px-[40px] w-full">
              <span className="text-[#000000bb] tracking-wider">Company</span>
              <div className="flex flex-col sm:mt-3 sm:gap-2">
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
                <a href="#">News</a>
                <a href="#">Media Kit</a>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full sm:mt-0 mt-6">
            <div className="sm:px-[40px] w-full">
              <span className="text-[#000000bb] tracking-wider">Resources</span>
              <div className="flex flex-col sm:mt-3 sm:gap-2">
                <a href="#">Blog</a>
                <a href="#">Newsletter</a>
                <a href="#">Events</a>
                <a href="#">Help Center</a>
                <a href="#">Tutorials</a>
                <a href="#">Support</a>
              </div>
            </div>
            <div className="sm:px-[40px] w-full">
              <span className="text-[#000000bb] tracking-wider">Social</span>
              <div className="flex flex-col sm:mt-3 sm:gap-2">
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Facebook</a>
                <a href="#">Github</a>
                <a href="#">AngelList</a>
                <a href="#">Dribble</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full sm:mt-0 mt-6">
            <div className="sm:px-[40px] w-full">
              <span className="text-[#000000bb] tracking-wider">Legal</span>
              <div className="flex flex-col sm:mt-3 sm:gap-2">
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
                <a href="#">Licences</a>
                <a href="#">Settings</a>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:px-16 px-6 w-full flex sm:flex-row flex-col-reverse sm:justify-between items-center py-5">
        <div>
          <span>&copy; 2023 GEMS, All rights reserved.</span>
        </div>
        <div className="flex gap-4 sm:mb-0 mb-2">
          <div className="px-1 text-[1.5rem] text-[#000000bb] rounded-full">
            <BsTwitter />
          </div>
          <div className="px-1 text-[1.5rem] text-[#000000bb] rounded-full">
            <BsFacebook />
          </div>
          <div className="px-1 text-[1.5rem] text-[#000000bb] rounded-full">
            <BsLinkedin />
          </div>
          <div className="px-1 text-[1.5rem] text-[#000000bb] rounded-full">
            <BsGithub />
          </div>
          <div className="px-1 text-[1.5rem] text-[#000000bb] rounded-full">
            <BsReddit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
