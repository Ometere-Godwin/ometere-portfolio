import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function ({ title, description, icon }) {
  return (
    <div
      className="w-full h-80 px-12 
    rounded-lg flex items-center 
    bg-gradient-to-r from-[#212428] 
    group hover:bg-gradient-to-b hover:from-black hover:t0-[#1e2024]
     transition-colors duration-100 shadow-[10px 10px 10px #1c1e22, -10px -10px 10px #262a2e] group"
    >
      <div className="h-70 overflow-y-hidden">
        <div className="flex h-full flex-col gap-8 translate-y-14 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex h-8 flex-col justify-between w-8">
            {icon ? (
              <span className="text-5xl text-[#ff014f]">{icon}</span>
            ) : (
              <div className="flex flex-col gap-1">
                <span className="w-full h-[2px] rounded-lg bg-[#ff014f]"></span>
                <span className="w-full h-[2px] rounded-lg bg-[#ff014f] "></span>
                <span className="w-full h-[2px] rounded-lg bg-[#ff014f] "></span>
                <span className="w-full h-[2px] rounded-lg bg-[#ff014f] "></span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-gray-300 font-bold">{title}</h2>
            <p className="base text-justify">{description}</p>
            <span className="text-2xl text-[#ff014f]">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
