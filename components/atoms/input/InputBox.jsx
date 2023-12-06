import React from "react";

const InputBox = ({ val, onChange, title, name, placeholder, type }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-black text-sm font-medium">{title}</label>
      <input
        type={type ? type : "text"}
        placeholder={placeholder}
        value={val}
        name={name}
        onChange={(e) => onChange(e)}
        className="border border-black/20 p-2 rounded-md outline-black"
      />
    </div>
  );
};

export default InputBox;
