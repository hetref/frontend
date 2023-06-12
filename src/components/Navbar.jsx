import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { styles } from "../styles";
// import { navLinks } from "../constants";
import logo from "/vite.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-[#ffffff]">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-black text-[18px] font-bold cursor-pointer flex tracking-wide">
            GEMS
          </p>
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li
            className={`${
              active === "Home" ? "text-[#000000]" : "text-[#000000cb]"
            } hover:text-[#000000ee] text-[18px] font-medium cursor-pointer tracking-wider`}
            onClick={() => setActive("Home")}
          >
            <a href="#">Home</a>
          </li>
          <li
            className={`${
              active === "Products" ? "text-[#000000]" : "text-[#000000cb]"
            } hover:text-[#000000ee] text-[18px] font-medium cursor-pointer tracking-wider`}
            onClick={() => setActive("Products")}
          >
            <a href="#">Products</a>
          </li>
          <li
            className={`${
              active === "Resources" ? "text-[#000000]" : "text-[#000000cb]"
            } hover:text-[#000000ee] text-[18px] font-medium cursor-pointer tracking-wider`}
            onClick={() => setActive("Resources")}
          >
            <a href="#">Resources</a>
          </li>
          <li
            className={`${
              active === "Pricing" ? "text-[#000000]" : "text-[#000000a3]"
            } hover:text-[#000000ee] text-[18px] font-medium cursor-pointer tracking-wider`}
            onClick={() => setActive("Pricing")}
          >
            <a href="#">Pricing</a>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          {/* {toggle ? (
            <div onClick={() => setToggle(!toggle)}></div>
          ) : (
            <div onClick={() => setToggle(!toggle)}>
              <FaBars />
            </div>
          )} */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } h-[100vh] p-6 bg-[#000000bd] absolute top-0 right-0 mx-0 my-0 min-w[140px] z-10`}
          >
            <div className="flex justify-start flex-col items-end w-[40vw]">
              {/* <div
                onClick={() => setToggle(!toggle)}
                className="text-white pb-[3rem]"
              >
                <GrClose />
              </div> */}

              <img
                src={toggle ? close : menu}
                alt="Menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
              <ul className="mt-[3rem] list-none flex justify-center items-end flex-col gap-8">
                <li
                  className={`${
                    active === "Home" ? "font-bold" : "font-medium"
                  } text-white font-poppins font-medium cursor-pointer text-[18px] tracking-wide`}
                  onClick={() => {
                    setActive("Home");
                    setToggle(!toggle);
                  }}
                >
                  <a href="#">Home</a>
                </li>
                <li
                  className={`${
                    active === "Products" ? "font-bold" : "font-medium"
                  } text-white font-poppins font-medium cursor-pointer text-[18px] tracking-wide`}
                  onClick={() => {
                    setActive("Products");
                    setToggle(!toggle);
                  }}
                >
                  <a href="#">Products</a>
                </li>
                <li
                  className={`${
                    active === "Resources" ? "font-bold" : "font-medium"
                  } text-white font-poppins font-medium cursor-pointer text-[18px] tracking-wide`}
                  onClick={() => {
                    setActive("Resources");
                    setToggle(!toggle);
                  }}
                >
                  <a href="#">Resources</a>
                </li>
                <li
                  className={`${
                    active === "Pricing" ? "font-bold" : "font-medium"
                  } text-white font-poppins font-medium cursor-pointer text-[18px] tracking-wide`}
                  onClick={() => {
                    setActive("Pricing");
                    setToggle(!toggle);
                  }}
                >
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
