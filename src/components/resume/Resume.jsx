import React from "react";
import Title from "../layouts/Title";

export default function Resume() {
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px]
   border-b-black"
    >
      <div className="flex justify-center iteems-center text-center">
        <Title title="My Resume" description="Take a tour through my resume" />
      </div>
      <div>
        <ul className=" flex w-full">
          <li className="resumeLi">Education</li>
          <li className="resumeLi">Professional Skill</li>
          <li className="resumeLi">Experience</li>
          <li className="resumeLi">Achievement</li>
        </ul>
      </div>
    </section>
  );
}
