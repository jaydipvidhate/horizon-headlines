"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InputBox from "../atoms/input/InputBox";
import SolidBtn from "../atoms/btn/SolidBtn";
import BorderdBtn from "../atoms/btn/BorderdBtn";
import app from "@/lib/firebase";
import { doc, getFirestore, setDoc } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
} from "firebase/auth";

const auth = getAuth(app);
const db = getFirestore(app);

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
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async () => {
    setLoading(true);
    let result = null,
      error = null;
    try {
      result = await createUserWithEmailAndPassword(
        auth,
        registerDetails.email,
        registerDetails.password
      );

      await updateProfile(auth.currentUser, {
        displayName: registerDetails.name.trim(),
      });
      console.log(result.user.uid, {
        name: registerDetails.name,
        email: registerDetails.email,
      });
      await setDoc(doc(db, "users", result.user.uid), {
        name: registerDetails.name,
        email: registerDetails.email,
      })
        .then(() => console.log("ader"))
        .catch((err) => console.log(err));

      setLoading(false);
      registerClose();

      console.log("User registered successfully:", result.user);
    } catch (e) {
      error = e;
    }

    console.log(error);
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
          minLength={6}
          val={registerDetails.password}
        />
      </div>
      <SolidBtn
        title={loading ? "Loading" : "Register"}
        handleClick={!loading ? handleOnSubmit : ""}
      />
      <BorderdBtn
        title="Login Now"
        handleClick={() => (loginOpen(), registerClose())}
      />
    </div>
  );
};

export default RegisterCard;
