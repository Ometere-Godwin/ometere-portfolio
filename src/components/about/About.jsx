import React from "react";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import Title from "../layouts/Title";

export default function About() {
  return (
    <section
      id="about"
      className="w-full pt-10 pb-20 flex flex-col gap-10 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center">
        <Title title="About Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <div>
            <AboutRight />
          </div>
          <AboutLeft />
        </div>
      </div>
    </section>
  );
}
