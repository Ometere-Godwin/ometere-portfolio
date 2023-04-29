import React from "react";

export default function Title({ title, description }) {
  return (
    <div className="flex  flex-col gap-4 font-normal mb-14">
      <h3 className="text-sm uppercase font-light text-[#ff014f] tracking-wider">
        {title}
      </h3>
      <h1 className=" text-4xl lgl:text-5xl text-gray-300 font-bold capitalize">
        {description}
      </h1>
    </div>
  );
}
