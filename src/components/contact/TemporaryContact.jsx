import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

export default function TemporaryContact() {
  return (
    <div className="my-20">
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-normal">Find me in</h2>
        <div className="flex gap-4 flex-col">
          <div className="flex items-center gap-4">
            <span className="bannerIcon w-[70px] h-[70px] ">
              <a
                href="https://www.linkedin.com/in/ometere-godwin-oghene-4b75b391/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-[40px] h-[40px]" />
              </a>
            </span>

            <a
              href="https://www.linkedin.com/in/ometere-godwin-oghene-4b75b391/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-[25px] text-bold hover:text-[#ff014f]">
                LinkedIn
              </p>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="bannerIcon w-[70px] h-[70px] ">
              <FaEnvelope className="w-[40px] h-[40px]" />
            </span>

            <p className="text-[25px] text-bold hover:text-[#ff014f]">
              ookuoluse@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="bannerIcon w-[70px] h-[70px] ">
              <FaPhone className="w-[40px] h-[40px]" />
            </span>

            <p className="text-[25px] text-bold hover:text-[#ff014f]">
              +234 8061372599
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
