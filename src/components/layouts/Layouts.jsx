import React from "react";

export default function Layouts({ title, description }) {
  return (
    <div className="flex flex-col gap-4 font-normal">
      <h3 className="text-sm uppercase text-[#ff014f] tracking-widest">
        {title}
      </h3>
      <h1>{description}</h1>
    </div>
  );
}
