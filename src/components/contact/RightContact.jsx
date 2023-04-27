import React from "react";

export default function RightContact() {
  return (
    <div>
      <form className="w-full flex flex-col gap-6 py-3">
        <div className="flex gap-10 w-full">
          <div className="w-1/2 flex flex-col gap-4">
            <label className="uppercase text-gray-400 tracking-wide text-sm">
              your name
            </label>
            <input className="contactInput" type="text" />
          </div>

          <div className="w-1/2 flex flex-col gap-4">
            <label className="uppercase text-gray-400 tracking-wide text-sm">
              phone number
            </label>
            <input className="contactInput" type="text" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="uppercase text-gray-400 tracking-wide">Email</label>
          <input className="contactInput" type="email" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="uppercase text-gray-400 tracking-wide">
            Subject
          </label>
          <input className="contactInput" type="text" />
        </div>

        <div className="flex flex-col gap-4">
          <label className="uppercase text-gray-400 tracking-wide">
            Messaage
          </label>
          <textarea className="contactTextArea" cols="30" rows="10"></textarea>
        </div>
      </form>
      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}
