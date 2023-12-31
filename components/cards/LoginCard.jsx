"use client";

import React, { useState } from "react";
import Image from "next/image";
import InputBox from "../atoms/input/InputBox";
import SolidBtn from "../atoms/btn/SolidBtn";
import BorderdBtn from "../atoms/btn/BorderdBtn";
import app from "@/lib/firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { IoMdCloseCircle } from "react-icons/io";

const auth = getAuth(app);
const LoginCard = ({ loginClose, loginOpen, registerClose, registerOpen }) => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [noUser, setNoUser] = useState(false);

  const handleInputChange = (e, name) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async () => {
    setLoading(true);
    let result = null,
      error = null;
    try {
      result = await signInWithEmailAndPassword(
        auth,
        loginDetails.email,
        loginDetails.password
      );
    } catch (e) {
      error = e;
    }

    setLoading(false);
    return loginClose();
  };

  return (
    <div className="p-10 bg-white rounded-lg flex flex-col gap-4 w-screen max-w-2xl mx-auto relative">
      <IoMdCloseCircle
        onClick={() => loginClose()}
        className="absolute cursor-pointer top-4 z-20 right-4 text-3xl text-black rounded-full hover:scale-110 duration-200 ease-in-out"
      />
      <div href="/" className="relative w-40 h-10 cursor-pointer">
        <Image
          src={
            "https://res.cloudinary.com/dllqtyi1j/image/upload/v1701783294/horizon-headlines/HHLogo_ez3plw.svg"
          }
          alt="Horizon Headlines Logo"
          priority={true}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
          className="object-contain"
        />
      </div>
      <div>
        <h4 className="text-lg md:text-2xl font-bold tracking-wide">Login</h4>
        <p className="text-sm">Continue to Horizon Headlines</p>
      </div>
      <div className="flex flex-col gap-3 ">
        <InputBox
          onChange={handleInputChange}
          name="email"
          placeholder="abc@email.com"
          title="Email"
          val={loginDetails.email}
        />
        <InputBox
          onChange={handleInputChange}
          name="password"
          placeholder="******"
          title="Password"
          val={loginDetails.password}
        />
      </div>
      <SolidBtn
        title={loading ? "Loading" : "Login"}
        loading={loading}
        handleClick={!loading && handleOnSubmit}
      />
      <BorderdBtn
        title="Register Now"
        handleClick={() => (registerOpen(), loginClose())}
      />
    </div>
  );
};

export default LoginCard;
