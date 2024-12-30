//IMPORTS
import React, { useState, useEffect, useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { IoTrailSign } from "react-icons/io5";
import { MdPark } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { MdSportsVolleyball } from "react-icons/md";

function Navigation() {
  //HANDLING OPENING AND CLOSING OF THE MOBILE MENU
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("fixed");
      document.body.classList.add("bg-violet-dark");
    } else {
      document.body.classList.remove("fixed");
      document.body.classList.remove("bg-violet-dark");
    }
  }, [isMobileMenuOpen]);


  //HADNLING OPENING AND CLOSINIG FO THE DROPDOWN MENUS
  const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [isMobileDropdownMenuOpen, setMobileDropdownMenuOpen] = useState(false);

  const toggleMobileDropdownMenu = () => {
    setMobileDropdownMenuOpen(!isMobileDropdownMenuOpen);
  };

  const toggleDropdownMenu = () => {
    setDropdownMenuOpen(!isDropdownMenuOpen);
  };


  // CLICKING OUTSIDE THE DROPDOWN HANDLING
  let menuRef = useRef();
  let menuBtnRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target) && !menuBtnRef.current.contains(e.target)) {
        setDropdownMenuOpen(false);
      }
      
    }
    document.addEventListener("mousedown", handler);
  }, [isDropdownMenuOpen]);


  //HTML
  return (
    <header
      className={`${isMobileMenuOpen ? "h-screen" : ""} ${
        isMobileMenuOpen ? "fixed" : "static"
      } flex flex-col w-full z-50`}
    >
      {/* DESKTOP NAVBAR */}
      <nav
        className={`static ${
          isMobileMenuOpen ? "bg-violet-dark" : "bg-none"
        } !md:bg-none`}
      >
        <div className="w-4/5 mx-auto flex justify-between py-4 items-center font-semibold font-montserrat">
          {/* LOGO */}
          <a href="" className="flex items-center gap-3">
            <img
              src={`${
                isMobileMenuOpen
                  ? "src/assets/Nature-logo-white.png"
                  : "src/assets/Nature-logo-black.png"
              }`}
              width="40px"
              height="40px"
              alt="Logo"
              className={`${isMobileMenuOpen ? '' : 'filter-logo'}`}
            />
            <h1 className="text-violet-base font-bold text-lg hidden lg:block">
              Nature Explorer
            </h1>
          </a>
          {/* NAV LINKS DESKTOP */}
          <ul className="hidden md:flex gap-10 text-black absolute left-1/2 transform -translate-x-1/2">
            <li>
              <a
                href="#"
                className="font-extrabold relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-violet-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-150 after:origin-center after:rounded-full"
              >
                Home
              </a>
            </li>
            <div className="relative">
              <li className="flex gap-1 items-center">
                <a
                  href="#"
                  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-violet-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-150 after:origin-center after:rounded-full"
                >
                  Features
                </a>
                {/* DROPDOWN DESKTOP */}
                <div
                  ref={menuBtnRef}
                  onClick={toggleDropdownMenu}
                  className={`cursor-pointer ${
                    isDropdownMenuOpen ? "rotate-180" : ""
                  } transition-all`}
                >
                  <FaCaretDown />
                </div>
              </li>
              <div
                ref={menuRef}
                className={`left-1/2 -translate-x-1/2 absolute ${
                  isDropdownMenuOpen ? "block" : "hidden"
                } bg-white shadow-md py-3 px-5 rounded mt-1 flex flex-col gap-3 text-black font-medium`}
              >
                <li className="w-full">
                  <a
                    href=""
                    className="inline-block  hover:text-green-light transition-all duration-100 flex items-center justify-between gap-2"
                  >
                  Trails<IoTrailSign className="text-green-light" />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="w-full inline-block  hover:text-green-light transition-all duration-100 flex items-center gap-2 justify-between"
                  >
                  Parks<MdPark className="text-green-light" />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="w-full inline-block  hover:text-green-light transition-all duration-100 flex items-center gap-2 justify-between"
                  >
                  Wildlife<PiPlantFill className="text-green-light" />
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="w-full inline-block hover:text-green-light transition-all duration-100 flex items-center gap-7 justify-between"
                  >
                  Activities<MdSportsVolleyball className="text-green-light" />
                  </a>
                </li>
              </div>
            </div>
            <li>
              <a
                href="#"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-violet-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-150 after:origin-center after:rounded-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-violet-dark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-150 after:origin-center after:rounded-full"
              >
                Contact
              </a>
            </li>
          </ul>
          <a href="" className="hidden lg:block relative py-2 px-5 overflow-hidden rounded border-2 border-black cursor-pointer text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-violet-base before:transition-all before:duration-200 hover:text-white hover:shadow-violet-base hover:before:left-0 hover:before:w-full hover:border-violet-base">
          <span className="relative z-10">Login</span>
          </a>
          {/* MOBILE MENU TOGGLE */}
          <button
            className={`burger md:hidden ${
              isMobileMenuOpen ? "text-white" : "text-black"
            } text-3xl py-1 pl-1`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaXmark /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>
      {/* MOBILE NAVBAR */}
      <nav
        className={`mobileMenu flex-1 ${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-violet-dark overflow-y-auto font-montserrat`}
      >
      {/* MOBILE NAVLINKS */}
        <ul className="gap-10 text-white text-xl flex flex-col w-4/5 mx-auto my-5 font-semibold">
          <li>
            <a href="" className="w-full inline-block text-green-light font-bold">
              HOME
            </a>
          </li>
          <div className="overflow-hidden">
            {/* DROPDOWN MENU */}
            <li className="flex justify-between items-center">
              <a href="" className="text-shadow w-full inline-block">
                FEATURES
              </a>
              <div
                onClick={toggleMobileDropdownMenu}
                className={`${
                  isMobileDropdownMenuOpen ? "rotate-180" : ""
                } text-xl transition-all`}
              >
                <FaCaretDown />
              </div>
            </li>
            <div
              className={`${
                isMobileDropdownMenuOpen ? "flex" : "hidden"
              } flex-col gap-4 mt-7 ml-6 transition-all text-lg`}
            >
              <li>
                <a href="" className="w-full inline-block flex items-center justify-between">
                  TRAILS<IoTrailSign />
                </a>
              </li>
              <li>
                <a href="" className="w-full inline-block flex items-center justify-between">
                  PARKS<MdPark />
                </a>
              </li>
              <li>
                <a href="" className="w-full inline-block flex items-center justify-between">
                  WILDLIFE<PiPlantFill />
                </a>
              </li>
              <li>
                <a href="" className="w-full inline-block flex items-center justify-between">
                  ACTIVITIES<MdSportsVolleyball />
                </a>
              </li>
            </div>
          </div>
          <li>
            <a href="" className="w-full inline-block">
              ABOUT
            </a>
          </li>
          <li>
            <a href="" className="w-full inline-block">
              CONTACT
            </a>
          </li>
          {/* LOGIN BTN */}
          <div className="flex flex-col">
            <a
              href=""
              className="text-white text-lg bg-violet-base border-2 border-violet-light rounded-sm px-4 py-2 text-center"
            >
              LOGIN
            </a>
            <div className="mx-auto flex items-center gap-2 mt-2 text-sm">
              <p className="text-gray-300">Dont have an account?</p>
              <a href="" className="text-center">
                Sign up
              </a>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
}
export default Navigation;
