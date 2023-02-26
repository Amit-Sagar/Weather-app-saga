import React from "react";

const Input = ({ label, value = "", name, onChange }) => {
  return (
    <div className="flex flex-col md:flex-row w-[90%] lg:items-center">
      <label className="font-semibold">{label}:</label>
      <input
        name={name}
        type="number"
        className="py-3 pl-2 md:ml-4 rounded-lg border border-gray-200 focus:border-transparent focus:ring-0 focus:outline-none md:w-[300px]"
        value={value}
        onInput={onChange}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
