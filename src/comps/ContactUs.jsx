import React, { useState } from "react";
import { MdWavingHand } from "react-icons/md";
import { Label } from "@/components/ui/label";

const ContactUs = ({ id }) => {
  const [formDataNew, setFormDataNew] = useState({});

  const handleChange = (formData) => {
    console.log(formData);
  };

  return (
    <div
      id={id}
      className="min-h-dvh flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="w-[1950px] h-[1950px] rounded-full bg-black absolute bottom-[-15%] mb-50 shadow-[0_2px_0_0_rgba(255,255,255,0.5)]">
        <div className="w-[1950px] h-[1950px] rounded-full bg-black absolute bottom-0 shadow-[0_0_90px_2px_rgba(255,255,255,0.3)]"></div>
      </div>
      <div className="flex flex-col items-center justify-center text-white z-10 w-full gap-5">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-row items-center justify-center">
            <h1 className="text-2xl md:text-4xl xl:text-5xl">
              Lets Have a Chat
            </h1>
            <MdWavingHand className="text-2xl md:text-4xl xl:text-5xl" />
          </div>
          <div>
            <p className="text-xs md:text-base xl:text-base opacity-50 text-center">
              Questions about our products or just want to say hi? We're here to
              help
            </p>
          </div>
        </div>
        <form
          action={handleChange}
          className="flex flex-col items-center justify-center gap-5 w-[90%] xl:w-1/3 mb-30 lg:mb-0"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
            <div className="flex flex-col gap-3 w-full">
              <Label className="text-sm xl:text-base">First Name</Label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="border-1 border-gray-500 rounded-xl p-3 w-full focus:outline-none"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <Label className="text-sm xl:text-base">Last Name</Label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="border-1 border-gray-500 rounded-xl p-3 w-full focus:outline-none"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
            <div className="flex flex-col gap-3 w-full">
              <Label className="text-sm xl:text-base">Email</Label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border-1 border-gray-500 rounded-xl p-3 w-full focus:outline-none"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <Label className="text-sm xl:text-base">Phone Number</Label>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                className="border-1 border-gray-500 rounded-xl p-3 w-full focus:outline-none"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 w-full">
            <div className="flex flex-col gap-3 w-full">
              <Label className="text-sm xl:text-base">Message</Label>
              <textarea
                name="message"
                id="message"
                cols="55"
                rows="10"
                placeholder="Hey, I'm interested in your products..."
                className="border-1 border-gray-500 rounded-xl p-3 w-full focus:outline-none"
                autoComplete="off"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white rounded-xl p-3 w-full shadow-[inset_0_-2px_20px_2px_rgba(255,255,255,0.3)] hover:shadow-[inset_0_-2px_20px_2px_rgba(255,255,255,0.5)] transition-all duration-300 cursor-pointer"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
