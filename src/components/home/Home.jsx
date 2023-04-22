import React from "react";
import LeftHomeSide from "./LeftHomeSide";
import RightHomeSide from "./RightHomeSide";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full pb-20 flex items-center border-b-[1px] border-b-black"
    >
      <LeftHomeSide />
      <RightHomeSide />
    </section>
  );
}
