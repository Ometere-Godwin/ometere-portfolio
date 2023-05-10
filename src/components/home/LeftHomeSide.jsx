import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiReact } from "react-icons/si";

export default function LeftHomeSide() {
  const [text] = useTypewriter({
    words: ["Front End Developer.", "WordPress Expert."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-lg font-normal ">WELCOME TO MY WORLD</h1>
        <h1 className="text-3xl lgl:text-5xl text-white font-bold mdl:text-2xl">
          Hi, I'm{" "}
          <span className="text-[#ff014f] capitalize">
            Ometere Oghene-Godwin
          </span>
        </h1>
        <h2 className="text-3xl font-bold">
          a <span>{text}</span>
        </h2>
        <p className="text-base font-normal leading-6 tracking-wide">
          I'am Front-end developer who cares deeply about user experience. I
          have strong passion on building beautiful and responsive web
          applications. My tech stack includes React, TailwindCSS, Nodejs and
          Styled-component, and I'm always eager to learn and expand my skills.
        </p>
      </div>

      <div className="flex justify-between flex-col xl:flex-row gap-6 lgl:gap-0">
        <div>
          <h2 className="mb-4 uppercase font-semibold">Find me in</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="https://github.com/Ometere-Godwin"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <FaGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/ometere-godwin-oghene-4b75b391/"
                target="_blank"
                rel="noopenner noreferrer"
              >
                <FaLinkedin />
              </a>
            </span>
          </div>
        </div>

        <div>
          <h2 className="mb-4 uppercase font-semibold">I have skills on</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div>
      </div>

      <button
        className="rounded-xl bannerIcon p-[10px] text-gray-400 text-2xl 
      font-normal leading-6 cursor-pointer w-1/2 uppercase"
      >
        <a
          href="https://drive.google.com/file/d/1Jx39aVEtos5QUj1lZWFKxXvHf5lMyT3j/view?usp=share_link"
          target="_blank"
          rel="noopenner noreferrer"
        >
          Resume
        </a>
      </button>
    </div>
  );
}
