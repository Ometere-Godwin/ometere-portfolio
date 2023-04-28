import React from "react";

export default function RightHomeSide() {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] z-10 lgl:w-[500px]  lgl:h-[680px]"
        src="assets/lady.png"
        alt=""
      />
      <div
        className="absolute bottom-0 w-[350px] h-[300px] lgl:h-[500px] lgl:w-[500px]
      bg-gradient-to-r from-[#1e2024] to-[#202327] 
      drop-shadow-xl flex justify-center items-center"
      ></div>
    </div>
  );
}
