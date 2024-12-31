import React, { useState } from "react";
import logo from "../assets/profile/Logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpenBnt, setMenuOpenBnt] = useState(false);

  const navigationItems = [
    { to: "/", label: "Profile" },
    { to: "/projects", label: "Projects" },
    { to: "/dsacp", label: "DSA&CP" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="bg-pin fixed top-0 z-50 flex w-full items-center justify-between bg-black px-10 md:px-20 lg:px-32">
      <div className="flex items-center justify-between sm:gap-2">
        <div className="h-12 w-12">
          <img src={logo} alt="logo" />
        </div>
        <a
          href="/resume/Jaydeep_Lilachand_Tamkhane_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-xl transition-colors duration-150 hover:text-white sm:block"
        >
          Resume
        </a>
      </div>

      <div className="hidden items-center justify-between gap-10 sm:flex md:gap-12 lg:gap-14">
        {navigationItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to} // Use `item.to`
            className={({ isActive }) =>
              isActive
                ? "text-white hover:text-gray-300"
                : "text-gray-400 hover:text-gray-300"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <div
        className="sm:hidden"
        onClick={() => {
          setMenuOpenBnt(!menuOpenBnt);
        }}
      >
        {menuOpenBnt ? <FaTimes /> : <FaBars />}
      </div>

      <div
        className={`top-12 right-0 left-0 z-50 absolute flex flex-col justify-center items-center gap-4 sm:hidden px-10 md:px-20 lg:px-32  bg-black h-60  ${
          menuOpenBnt ? `block` : `hidden`
        }`}
      >
        {navigationItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to} // Use `item.to`
            className={({ isActive }) =>
              isActive
                ? "text-white hover:text-gray-300"
                : "text-gray-400 hover:text-gray-300"
            }
            onClick={()=>{
              return setMenuOpenBnt(!menuOpenBnt);
            }}
          >
            {item.label}
          </NavLink>
        ))}
        <a
          href="/resume/Jaydeep_Lilachand_Tamkhane_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-red-700"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
