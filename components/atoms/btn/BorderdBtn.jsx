import React from "react";

const BorderdBtn = ({ title }) => {
  return (
    <button className="border-2 border-primary px-4 rounded-full py-1 text-primary hover:bg-primary hover:text-white">
      {title}
    </button>
  );
};

export default BorderdBtn;
