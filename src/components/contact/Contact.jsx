import React from "react";
import Title from "../layouts/Title";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full
      py-20 border-b-[1px] 
      border-b-black "
    >
      <div className="flex justify-center items-center">
        <Title title="Contact" description="Contact with me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex justify-between">
          <div
            className="w-[35%] h-full bg-gradient-to-r from-[#1e2024]
          to-[#23272b] p-8 rounded-lg flex flex-col gap-4 justify-center mb-4"
          >
            <img
              className="w-full h-64 object-cover rounded-lg"
              src="assets/handShake.png"
              alt=""
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-white">Ometere Godwin</h3>
              <p className="text-lg font-normal text-gray-400">
                Front End Developer
              </p>
              <p className="text-base text-gray-400 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus corrupti ratione mollitia, architecto quae assumenda,
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Email:
                <span className="text-[#c4cfde]">ookuoluse@gmail.com</span>
              </p>
            </div>
            <div>
              <h2 className="text-base uppercase font-normal">Find me in</h2>
              <div className="flex gap-2 mt-2">
                <span className="bannerIcon w-8 h-8 ">
                  <a
                    href="https://www.linkedin.com/in/ometere-godwin-oghene-4b75b391/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </span>

                <span className="bannerIcon w-8 h-8 ">
                  <a
                    href="https://github.com/Ometere-Godwin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="w-[60%] h-full flex flex-col justify-between bg-blue-400"></div>
        </div>
      </div>
    </section>
  );
}
