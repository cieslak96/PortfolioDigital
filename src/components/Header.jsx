"use client"
import React, { useState } from "react";
import Link from "next/link";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white  dark:bg-black p-4 flex justify-center items-center relative">
      <div className="hidden  md:flex justify-center dark:hover:shadow-teal-400 hover:text-teal-400 bg-white dark:bg-gray-800 rounded-full border-gray-400 border dark:shadow-gray-200 dark:shadow-md hover:shadow-teal-400 hover:shadow-md shadow-lg p-1 absolute mr-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/uses">Uses</NavLink>
      </div>
      <button
        className="md:hidden  px-6 dark:bg-gray-800 hover:text-teal-400 hover:shadow-md hover:shadow-teal-400 hover:border-teal-400 p-3 text-lg cursor-pointer rounded-full shadow-lg  dark:shadow-gray-200 dark:shadow-md border-gray-200 border absolute top-0 right-0 m-4 flex items-center  "
        onClick={toggleMobileMenu}
      >
        <span className="mr-1">Menu</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="ml-2 {{ IsDarkMode ? 'fill-white' : 'fill-gray-800' }}"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.22 8.22C5.36063 8.07955 5.55125 8.00066 5.75 8.00066C5.94875 8.00066 6.13937 8.07955 6.28 8.22L10 11.94L13.72 8.22C13.7887 8.14631 13.8715 8.08721 13.9635 8.04622C14.0555 8.00523 14.1548 7.98319 14.2555 7.98141C14.3562 7.97963 14.4562 7.99816 14.5496 8.03588C14.643 8.0736 14.7278 8.12974 14.799 8.20096C14.8703 8.27218 14.9264 8.35701 14.9641 8.4504C15.0018 8.54379 15.0204 8.64382 15.0186 8.74452C15.0168 8.84523 14.9948 8.94454 14.9538 9.03654C14.9128 9.12854 14.8537 9.21134 14.78 9.28L10.53 13.53C10.3894 13.6705 10.1988 13.7493 10 13.7493C9.80125 13.7493 9.61063 13.6705 9.47 13.53L5.22 9.28C5.07955 9.13938 5.00066 8.94875 5.00066 8.75C5.00066 8.55125 5.07955 8.36063 5.22 8.22Z"
            class="fill-current"
          />
        </svg>
      </button>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full right-0 px-4 py-1 rounded-lg bg-white dark:bg-gray-800 border-gray-200 border shadow-md hover:shadow-teal-400 mt-10 mr-4">
          <NavLinkMobile to="/">Home</NavLinkMobile>
          <NavLinkMobile to="/about">About</NavLinkMobile>
          <NavLinkMobile to="/projects">Projects</NavLinkMobile>
          <NavLinkMobile to="/uses">Uses</NavLinkMobile>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link href={to} className="p-2 mx-2 rounded  border-b-4 border-transparent hover:border-teal-400 hover:text-teal-400 active:text-gray-400 active:no-underline">
      {children}
    </Link>
  );
};

const NavLinkMobile = ({ to, children }) => {
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Link href={to} onClick={closeMenu} className="block  text-lg py-2 px-3 rounded-lg hover:text-teal-400 hover:border-b-4 hover:border-teal-400 ">
      {children}
    </Link>
  );
};

export default Header;
