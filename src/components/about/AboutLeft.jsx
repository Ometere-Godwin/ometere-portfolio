import React from "react";
import { FaGithub, FaReact, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTailwindcss,
  SiVercel,
  SiNetlify,
  SiTypescript,
} from "react-icons/si";
import { TbBrandVscode, TbBrandNextjs } from "react-icons/tb";

export default function AboutLeft() {
  return (
    <div
      className="w-full lgl:w-[1/2] h-full bg-gradient-to-r from-[#1e2024]
      to-[#23272b] p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center mb-4"
    >
      <div>
        <p className="lgl:text-2xl  text: xl mb-3">
          Here are a few{" "}
          <span className="text-[#ff014f]">Languages and Tools </span> I have
          been working with recently
        </p>
        <div className="grid lgl:grid-cols-3 grid-cols-5  lgl:gap-10 gap-8 items-center mt-3 ">
          <span className=" bg-black lgl:w-[100px] lgl:h-[100px] w-[50px] h-[50px] lgl:text-[80px] text-[30px] items-center justify-center flex rounded-lg">
            <FaGithub />
          </span>
          <span className=" bg-black lgl:w-[100px] lgl:h-[100px] w-[50px] h-[50px] lgl:text-[80px] text-[30px] items-center justify-center flex rounded-lg">
            <IoLogoJavascript />
          </span>

          <span className=" bg-black lgl:w-[100px] lgl:h-[100px] w-[50px] h-[50px] lgl:text-[80px] text-[30px] items-center justify-center flex rounded-lg">
            <SiTailwindcss />
          </span>

          <span className=" bg-black lgl:w-[100px] lgl:h-[100px] w-[50px] h-[50px] lgl:text-[80px] text-[30px] items-center justify-center flex rounded-lg">
            <FaReact />
          </span>

          <span className=" bg-black lgl:w-[100px] lgl:h-[100px] w-[50px] h-[50px] lgl:text-[80px] text-[30px] items-center justify-center flex rounded-lg">
            <FaFigma />
          </span>

          <span className=" bg-black lgl:w-[100px] lgl:h-[100px] w-[50px] h-[50px] lgl:text-[80px] text-[30px] items-center justify-center flex rounded-lg">
            <SiVercel />
          </span>

          <span className=" bg-black lgl:w-[100px] lgl:h-[100px] w-[50px] h-[50px] lgl:text-[80px] text-[30px] items-center justify-center flex rounded-lg">
            <TbBrandNextjs />
          </span>

          <span className=" bg-black lgl:w-[100px] lgl:h-[100px] w-[50px] h-[50px] lgl:text-[80px] text-[30px] items-center justify-center flex rounded-lg">
            <TbBrandVscode />
          </span>

          <span className=" bg-black lgl:w-[100px] lgl:h-[100px] w-[50px] h-[50px] lgl:text-[80px] text-[30px] items-center justify-center flex rounded-lg">
            <SiNetlify />
          </span>

          <span className=" bg-black lgl:w-[100px] lgl:h-[100px] w-[50px] h-[50px] lgl:text-[80px] text-[30px] items-center justify-center flex rounded-lg">
            <SiTypescript />
          </span>
        </div>
      </div>
    </div>
  );
}
