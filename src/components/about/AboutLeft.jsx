import React from "react";
import { FaGithub, FaReact, FaSass, FaFigma, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiVercel, SiNetlify } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";

export default function AboutLeft() {
  return (
    <div
      className="w-full lgl:w-[1/2] h-full bg-gradient-to-r from-[#1e2024]
      to-[#23272b] p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center mb-4"
    >
      <div>
        <p className="text-2xl mb-3">
          Here are a few{" "}
          <span className="text-[#ff014f]">Languges and Tools </span> I have
          been working with recently
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-6 gap-10  items-center mt-3">
          <span className=" bg-black w-[100px] h-[100px] text-[80px] items-center justify-center flex ">
            <FaGithub />
          </span>
          <span
            className=" bg-black w-[100px] 
          h-[100px] text-[80px] items-center 
          justify-center flex "
          >
            <IoLogoJavascript />
          </span>

          <span
            className=" bg-black w-[100px] h-[100px] text-[80px] 
          items-center justify-center flex 
          "
          >
            <SiTailwindcss />
          </span>

          <span className=" bg-black w-[100px] h-[100px] text-[80px] items-center justify-center flex tex">
            <FaReact />
          </span>

          <span className=" bg-black w-[100px] h-[100px] text-[80px] items-center justify-center flex tex">
            <FaFigma />
          </span>

          <span className=" bg-black w-[100px] h-[100px] text-[80px] items-center justify-center flex tex">
            <SiVercel />
          </span>

          <span className=" bg-black w-[100px] h-[100px] text-[80px] items-center justify-center flex tex">
            <DiNodejs />
          </span>

          <span className=" bg-black w-[100px] h-[100px] text-[80px] items-center justify-center flex tex">
            <TbBrandVscode />
          </span>

          <span className=" bg-black w-[100px] h-[100px] text-[80px] items-center justify-center flex tex">
            <SiNetlify />
          </span>
        </div>
      </div>
    </div>
  );
}
