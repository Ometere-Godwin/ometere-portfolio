import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import RightContact from "./RightContact";

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
          <ContactLeft />
          <div className="w-[60%] h-full flex flex-col p-10 gap-8 rounded-1g shadow-black bg-gradient-to-r from-[#1e2024] to-[#23272b]">
            <RightContact />
          </div>
        </div>
      </div>
    </section>
  );
}
