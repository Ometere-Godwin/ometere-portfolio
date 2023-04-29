import React, { useState } from "react";
import { navLinks } from "../utils/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full h-24 mx-auto flex justify-between items-center border-b-[1px] border-b-gray-600 sticky top-0 z-50 bg-[#212428] ">
      <div>
        <img src="assets/logo1.png" alt="" className="w-[9em]" />
      </div>
      <div>
        <ul className="items-center gap-6 lgl:gap-10 hidden mdl:inline-flex">
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
        <span
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-xl mdl:hidden bg-black w-10 h-10 flex items-center justify-center rounded-full text-red-400 cursor-pointer"
        >
          <FiMenu />
        </span>
        {menuOpen && (
          <div
            className="w-[60%] h-screen overflow-scroll absolute
          top-0 left-0 bg-gray-900 p-4 scrollbar-hide"
          >
            <div>
              <div>
                <img className="w-[20%]" src="assets/logo1.png" alt="" />
              </div>
              <ul className="flex flex-col items-center gap-6">
                {navLinks.map((item) => (
                  <li
                    key={item.id}
                    className="text-base text-gray-400 tracking-wide 
                  cursor-pointer hover:text-[#ff014f] duration-300 font-normal"
                  >
                    <Link
                      onClick={() => setMenuOpen(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-4 mt-8">
                  <span className="bannerIcon w-8 h-8 ">
                    <a
                      href="https://www.linkedin.com/in/ometere-godwin-oghene-4b75b391/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </span>

                  <span className="bannerIcon w-8 h-8 ">
                    <a
                      href="https://github.com/Ometere-Godwin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 hover:red-400 duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
