import { useState } from "react";
import axios from "axios";

export default function RightContact() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccessMsg] = useState("");
  const [subject, setSubject] = useState("");

  const handleSend = async (event) => {
    event.preventDefault();
    if (username === "") {
      setErrMsg("Username is required");
    } else if (phoneNumber === "") {
      setErrMsg("Phone Number is required");
    } else if (email === "") {
      setErrMsg("Email is required");
    } else if (subject === "") {
      setErrMsg("Please, give your subject");
    } else if (message === "") {
      setErrMsg("Message is required");
    } else {
      setSuccessMsg(`Thank you ${username}, Message sent successfully`);
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }

    try {
      const response = await axios.post("https://formspree.io/f/xpzevblq", {
        username,
        email,
        phoneNumber,
        message,
      });

      console.log(response);
      // Optionally, you can show a success message or redirect the user after successful submission.
    } catch (error) {
      console.error(error);
      // Handle the error case, such as showing an error message to the user.
    }
  };

  return (
    <div>
      <form className="w-full flex flex-col gap-2 lgl:gap-4 py-2 lgl:py-5">
        {/* Error Message */}
        {errMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] drop-shadow-lg text-center
        text-red-500 text-base tracking-wide animate-bounce"
          >
            {errMsg}
          </p>
        )}
        {/* Success Message */}
        {success && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] drop-shadow-lg text-center
        text-green-500 text-base tracking-wide animate-bounce"
          >
            {success}
          </p>
        )}
        {/* Input Container */}
        <div className="flex gap-10 w-full flex-col lgl:flex-row ">
          {/* Username */}
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <label className="uppercase text-gray-400 tracking-wide text-sm">
              your name
            </label>
            <input
              className={`${
                errMsg === "Username is required" && "outline-red-400"
              } contactInput`}
              type="text"
              name="name"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>

          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            {/* Phone Number */}
            <label className="uppercase text-gray-400 tracking-wide text-sm">
              phone number
            </label>
            <input
              className={`${
                errMsg === "Phone Number is required" && "outline-red-400"
              } contactInput`}
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-4">
          <label className="uppercase text-gray-400 tracking-wide">Email</label>
          <input
            className={`${
              errMsg === "Email is required" && "outline-red-400"
            } contactInput`}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-4">
          <label className="uppercase text-gray-400 tracking-wide">
            Subject
          </label>
          <input
            className={`${
              errMsg === "Please, give your subject" && "outline-red-400"
            } contactInput`}
            type="text"
            name="message"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-4">
          <label className="uppercase text-gray-400 tracking-wide">
            Message
          </label>
          <textarea
            className={`${
              errMsg === "Message is required" && "outline-red-400"
            } contactTextArea`}
            cols="30"
            rows="8"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </div>
        <div className="w-full">
          <button
            disabled={username.length === 0 || phoneNumber.length === 0}
            onClick={handleSend}
            className="w-full h-12 bg-[#141518] rounded-lg text-base
          text-gray-400 tracking-wide uppercase hover:text-white duration-300
          hover:border-[1px] hover:border-[#ff014f] border-transparent"
          >
            Send Message
          </button>
        </div>
        {errMsg && (
          <p
            className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] drop-shadow-lg text-center
        text-red-500 text-base tracking-wide animate-bounce"
          >
            {errMsg}
          </p>
        )}
      </form>
    </div>
  );
}
