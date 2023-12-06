"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InputBox from "../atoms/input/InputBox";
import SolidBtn from "../atoms/btn/SolidBtn";
import BorderdBtn from "../atoms/btn/BorderdBtn";

const RegisterCard = ({
  loginClose,
  loginOpen,
  registerClose,
  registerOpen,
}) => {
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e, name) => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = () => {
    console.log(registerDetails);
  };

  return (
    <div className="p-10 bg-white rounded-lg flex flex-col gap-4 w-screen max-w-2xl mx-auto relative">
      <div href="/" className="relative w-40 h-10 cursor-pointer">
        <Image
          src={
            "https://res.cloudinary.com/dllqtyi1j/image/upload/v1701783294/horizon-headlines/HHLogo_ez3plw.svg"
          }
          fill
          className="object-contain"
        />
      </div>
      <div>
        <h4 className="text-lg md:text-2xl font-bold tracking-wide">
          Register Now
        </h4>
        <p className="text-sm">Continue to Horizon Headlines</p>
      </div>
      <div className="flex flex-col gap-3 ">
        <InputBox
          onChange={handleInputChange}
          name="name"
          placeholder="John Doe"
          title="Name"
          val={registerDetails.name}
        />
        <InputBox
          onChange={handleInputChange}
          name="email"
          placeholder="abc@email.com"
          title="Email"
          val={registerDetails.email}
        />
        <InputBox
          onChange={handleInputChange}
          name="password"
          placeholder="******"
          title="Password"
          type="password"
          val={registerDetails.password}
        />
      </div>
      <SolidBtn title="Register" handleClick={handleOnSubmit} />
      <BorderdBtn
        title="Login Now"
        handleClick={() => (loginOpen(), registerClose())}
      />
    </div>
  );
};

export default RegisterCard;
