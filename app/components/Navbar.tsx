import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import { useEffect, useRef, useState } from "react";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const handleOpenMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const handleCloseMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <div className="w-11/12 fixed top-0 right-0 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="header_bg_color"
          className="w-full h-full object-cover"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScrolled
            ? "bg-white bg-opacity-50 background-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <Link href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </Link>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScrolled
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <Link className="font-Ovo" href="#top">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#about">
              About
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#services">
              Services
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#work">
              Projects
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#contact">
              Contact Me
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="cursor-pointer"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="moon_icon"
              className="w-6"
            />
          </button>
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="contact"
              className="w-3"
            />
          </Link>
          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={handleOpenMenu}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu_black"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkTheme dark:text-white"
        >
          <div className="absolute right-6 top-6">
            <Image
              onClick={handleCloseMenu}
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close_black"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <Link onClick={handleCloseMenu} className="font-Ovo" href="#top">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} className="font-Ovo" href="#about">
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleCloseMenu}
              className="font-Ovo"
              href="#services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} className="font-Ovo" href="#work">
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={handleCloseMenu}
              className="font-Ovo"
              href="#contact"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
