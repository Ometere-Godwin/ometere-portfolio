import React from "react";
import { navLinks } from "../utils/constants";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="w-full h-24 mx-auto flex justify-between items-center border-b-[1px] border-b-gray-600 sticky top-0 z-50 bg-[#212428] ">
      <div>
        <img src="assets/logo1.png" alt="" className="w-[9em]" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinks.map(({ id, title, link }) => (
            <li
              className="text-base text-gray-400 tracking-wide cursor-pointer hover:text-[#ff014f] duration-300 font-normal"
              key={id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
