import React from "react";
import LeftHomeSide from "./LeftHomeSide";
import RightHomeSide from "./RightHomeSide";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 items-center border-b-[1px] border-b-black lgl:flex-row xl:gap-0"
    >
      <LeftHomeSide />
      <RightHomeSide />
    </section>
  );
}
