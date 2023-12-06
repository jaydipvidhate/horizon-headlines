import React from "react";

const SolidBtn = ({ title, handleClick, loading }) => {
  return (
    <button
      onClick={handleClick ? handleClick : null}
      className={`border-2 border-primary duration-150 ease-in-out bg-primary px-4 rounded-full py-1 text-white ${
        !loading && "hover:bg-transparent hover:text-primary"
      }`}
    >
      {title}
    </button>
  );
};

export default SolidBtn;
