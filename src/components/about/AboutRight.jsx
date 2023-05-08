import React from "react";
import { FaGithub } from "react-icons/fa";

export default function AboutRight() {
  return (
    <div
      className="w-full lgl:w-[1/2] h-full
      flex flex-col py-10 gap-10 p-4 lgl:p-8 rounded-1g drop-shadow-black 
      bg-gradient-to-r from-[#1e2024] to-[#23272b] "
    >
      <div className="w-full flex flex-col gap-4 lgl:gap-4 py-2 lgl:py-5 text-justify text-xl">
        <p>
          Hi, I am Ometere Oghene-Godwin. I am a software developer focused on
          building websites and web apps that help businesses solve user
          problems.
        </p>
        <p>
          I don't like to defined by the work I have done. I defined myself by
          the work I want to do. Skills can be taught, personality is inherent.
          I prefer to keep learning, continue to keeep challenging myself and do
          interesting things that matter.
        </p>
        <p>
          You can read more about my biography, experience, skills, eduaction
          and much more in the PDF attached below.
        </p>

        <p>
          If you're looking for a reliable and skilled frontend developer to
          help you build your website, look no further than me. I'm committed to
          helping my clients achieve their goals and providing exceptional
          service every step of the way.
        </p>
      </div>
      <button className="bg-blue-400">Resume</button>
    </div>
  );
}