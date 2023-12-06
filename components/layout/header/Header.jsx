"use client";

import React, { useState } from "react";
import BorderdBtn from "@/components/atoms/btn/BorderdBtn";
import SolidBtn from "@/components/atoms/btn/SolidBtn";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import LoginCard from "@/components/cards/LoginCard";
import RegisterCard from "@/components/cards/RegisterCard";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginCardOpen, setIsLoginCardOpen] = useState(false);
  const [isRegisterCardOpen, setIsRegisterCardOpen] = useState(false);
  const headerLinks = [
    {
      title: "News",
      slug: "/news",
    },
    {
      title: "Travel",
      slug: "/travel",
    },
    {
      title: "AboutUs",
      slug: "/about-us",
    },
  ];

  const menuOpen = () => setIsMenuOpen(true);
  const menuClose = () => setIsMenuOpen(false);
  const loginOpen = () => setIsLoginCardOpen(true);
  const loginClose = () => setIsLoginCardOpen(false);
  const registerOpen = () => setIsRegisterCardOpen(true);
  const registerClose = () => setIsRegisterCardOpen(false);

  console.log(isLoginCardOpen);

  return (
    <>
      <div className=" bg-white px-4 py-4">
        <div className="max-w-lg mx-auto flex justify-between items-center">
          <Link href="/" className="relative w-40 h-10 cursor-pointer">
            <Image
              src={
                "https://res.cloudinary.com/dllqtyi1j/image/upload/v1701783294/horizon-headlines/HHLogo_ez3plw.svg"
              }
              fill
              className="object-contain"
            />
          </Link>
          <IoMenu
            onClick={menuOpen}
            className="text-2xl md:hidden cursor-pointer"
          />

          <div
            className={`w-full h-full fixed p-10 md:hidden px-4 top-0 left-0 flex flex-col gap-y-10
           z-50 bg-black duration-200 ease-in-out ${
             isMenuOpen ? "translate-x-0" : "-translate-x-full"
           }`}
          >
            <IoClose
              onClick={menuClose}
              className="text-2xl md:hidden cursor-pointer text-white absolute top-6 right-4 z-10"
            />
            <div className="flex flex-col items-start gap-6 md:gap-8">
              {headerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.slug}
                  onClick={menuClose}
                  className="hover:text-primary text-white border-b-2 border-transparent hover:border-primary  border-solid"
                >
                  <p className=" text-base font-medium tracking-tighter">
                    {link.title}
                  </p>
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-start gap-y-4">
              <BorderdBtn
                title="Login"
                handleClick={() => (loginOpen(), menuClose())}
              />
              <SolidBtn
                title="Register"
                handleClick={() => (registerOpen(), menuClose())}
              />
            </div>
          </div>

          <div className="items-center gap-6 md:gap-20 md:flex hidden">
            <div className="flex items-center gap-6 md:gap-8">
              {headerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.slug}
                  className="hover:text-primary text-black border-b-2 border-transparent hover:border-primary  border-solid"
                >
                  <p className=" text-base font-medium tracking-tighter">
                    {link.title}
                  </p>
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <BorderdBtn title="Login" handleClick={loginOpen} />
              <SolidBtn title="Register" handleClick={registerOpen} />
            </div>
          </div>
        </div>
      </div>
      {isLoginCardOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-50 backdrop-blur-lg flex items-center justify-center">
          <div
            onClick={loginClose}
            className="w-full h-full bg-transparent absolute top-0 left-0"
          ></div>
          <div className="p-10 w-screen flex">
            <LoginCard
              loginClose={loginClose}
              loginOpen={loginOpen}
              registerClose={registerClose}
              registerOpen={registerOpen}
            />
          </div>
        </div>
      )}
      {isRegisterCardOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-50 backdrop-blur-lg flex items-center justify-center">
          <div
            onClick={registerClose}
            className="w-full h-full bg-transparent absolute top-0 left-0"
          ></div>
          <div className="p-10 w-screen flex">
            <RegisterCard
              loginClose={loginClose}
              loginOpen={loginOpen}
              registerClose={registerClose}
              registerOpen={registerOpen}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
