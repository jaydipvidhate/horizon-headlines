import React from "react";

const BorderdBtn = ({ title, light, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`border-2 ${
        light
          ? "border-white text-white hover:bg-white hover:text-black"
          : "border-primary text-primary hover:bg-primary hover:text-white"
      } px-4 rounded-full py-1  duration-150 ease-in-out`}
    >
      {title}
    </button>
  );
};

export default BorderdBtn;
