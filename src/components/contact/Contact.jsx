import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
//import RightContact from "./RightContact";
import TemporaryContact from "./TemporaryContact";

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
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div
            className="w-full lgl:w-[60%] h-full 
          flex flex-col py-10 gap-8 p-4 lgl:p-8 rounded-1g drop-shadow-black 
          bg-gradient-to-r from-[#1e2024] to-[#23272b]"
          >
            {/* <RightContact /> */}
            <TemporaryContact />
          </div>
        </div>
      </div>
    </section>
  );
}
