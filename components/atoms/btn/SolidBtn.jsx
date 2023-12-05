import React from "react";

const SolidBtn = ({ title }) => {
  return (
    <button className="border-2 border-primary bg-primary px-4 rounded-full py-1 text-white hover:bg-transparent hover:text-primary">
      {title}
    </button>
  );
};

export default SolidBtn;
