import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h4 className="text-black font-semibold tracking-wider text-base sm:text-lg border-l-2 sm:border-l-4 border-primary pl-2 border-solid ">
      {title}
    </h4>
  );
};

export default SectionTitle;
