import React from "react";

export default function RightHomeSide() {
  return (
    <div className="w-1/2">
      <img
        className="w-[500px] h-[680px] z-10 flex justify-center items-center relative"
        src="assets/lady.png"
        alt=""
      />
      <div className="absolute bottom-0 w-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}
