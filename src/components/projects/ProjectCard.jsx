import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiNetlify, SiVercel } from "react-icons/si";

export default function ProjectCard({
  title,
  description,
  img,
  github,
  vercel,
}) {
  return (
    <div
      className="w-full p-4 xl:px-12 h-auto xl:py-8 round-lg flex flex-col shadow-black 
      bg-gradient-to-r from-[#212428] to-[#202327] 
      group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 "
    >
      <div className="w-full h-[80%] rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={img}
          alt=""
        />
        <div className="w-full mt-5 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-base uppercase text-[#ff014f]">{title}</h3>
            <div className="flex gap-3">
              <span
                className="text-lg w-10 h-10 rounded-full bg-black flex
              justify-center items-center text-gray-400 hover:text-[#ff014f] cursor-pointer"
              >
                <a href={github} target="_blank" rel="noopenner noreferrer">
                  <BsGithub />
                </a>
              </span>
              <span
                className="text-lg w-10 h-10 rounded-full bg-black flex
              justify-center items-center text-gray-400 hover:text-[#ff014f] cursor-pointer"
              >
                <a href={vercel} target="_blank" rel="noopenner noreferrer">
                  <SiVercel />
                </a>
              </span>
            </div>
          </div>
          <div>
            <p className="text-justify text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
