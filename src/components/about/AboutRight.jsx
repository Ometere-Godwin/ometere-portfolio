import React from "react";

export default function AboutRight() {
  return (
    <div
      className="w-full lgl:w-[1/2] h-full
      flex flex-col py-10 gap-10 p-4 lgl:p-8 rounded-1g drop-shadow-black 
      bg-gradient-to-r from-[#1e2024] to-[#23272b] "
    >
      <div className="w-full flex flex-col gap-4 lgl:gap-4 py-2 lgl:py-5 text-justify ">
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
