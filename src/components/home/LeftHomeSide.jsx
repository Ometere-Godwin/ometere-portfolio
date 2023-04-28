import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
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
        <h1 className="text-3xl font-wwhite font-bold mdl:text-2xl">
          Hi, I'm{" "}
          <span className="text-[#ff014f] capitalize">
            Ometere Oghene-Godwin
          </span>
        </h1>
        <h2 className="text-3xl font-bold">
          a <span>{text}</span>
        </h2>
        <p className="text-base font-normal leading-6 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores a
          soluta a a a a minima consequatur obcaecati voluptatibus itaque
          accusantium eveniet dicta libero beatae maiores totam at, rerum alias?
          Eveniet ut nihil quas?
        </p>
      </div>
      <div className="flex justify-between flex-col xl:flex-row gap-6 lgl:gap-0">
        <div>
          <h2 className="mb-4 uppercase font-semibold">Find me in</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
              <FaLinkedin />
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
    </div>
  );
}
