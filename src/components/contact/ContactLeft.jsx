import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactLeft() {
  return (
    <div
      className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024]
          to-[#23272b] p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center mb-4"
    >
      <img
        className="w-full h-64 object-cover rounded-lg"
        src="assets/handShake.png"
        alt=""
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ometere Godwin</h3>
        <p className="text-lg font-normal text-gray-400">Front End Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          I am seeking out opportunities to collaborate with companies,
          agencies, individuals. I don't just want to work for them but to bring
          my collective design experience to the table where we can work
          together to solve real business problems in a way that optimizes all
          our respective experience and knowledge.
        </p>
        <p>
          {" "}
          If that sounds about right, then we can work together for sure chat
          about how we can work together. Feel free to reach out through any
          platform listed here.
        </p>

        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone Number:
          <span className="text-[#c4cfde]">+234 8061372599</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:
          <span className="text-[#c4cfde]">ookuoluse@gmail.com</span>
        </p>
      </div>
    </div>
  );
}
