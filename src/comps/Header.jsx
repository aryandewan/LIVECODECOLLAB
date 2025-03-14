import React from "react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiListBold } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { useWindowScroll } from "react-use";
import { FaCodeBranch } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const navItems = ["Features", "Pricing", "Try Me", "About Us", "Contact Us"];

const Header = ({ handleNavOpen, handleModeChange, mode }) => {
  const headerRef = useRef(null);
  const navContainerRef = useRef(null);
  const [isXL, setIsXL] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      headerRef.current.classList.remove("top-[-100%]");
      headerRef.current.classList.add("top-0");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      headerRef.current.classList.add("top-[-100%]");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      headerRef.current.classList.remove("top-[-100%]");
      headerRef.current.classList.add("top-0");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(headerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [isNavVisible]);

  useEffect(() => {
    const handleResize = () => {
      setIsXL(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div
      id="header"
      className={`fixed top-[-100%] left-0 right-0 z-50 flex justify-between items-end xl:p-4 p-2 bg-white text-black rounded-xl m-4 ${
        mode === "code" || mode === "draw" ? "hidden" : "block"
      }`}
      ref={headerRef}
    >
      <div className="flex items-end px-3 py-2">
        <a
          href={"#hero"}
          className="text-2xl font-bold cursor-pointer flex items-center"
          onClick={() => handleModeChange("main")}
        >
          LCC
          <FaCodeBranch className="text-2xl" />
        </a>
      </div>
      {isXL ? (
        <div
          className="flex xl:justify-between items-end"
          ref={navContainerRef}
        >
          <div className="flex items-end gap-4">
            <nav className="flex items-end gap-10 ">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleModeChange("main")}
                  className="relative px-3 py-2 font-bold text-lg cursor-pointer after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black cursor-pointer;"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : (
        <div
          className="flex items-center gap-4 px-3 py-2"
          ref={navContainerRef}
        >
          <BsThreeDots
            className="text-2xl cursor-pointer font-bold"
            onClick={handleNavOpen}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
