import { useState } from "react";

function NumberInput({
  value,
  setValue,
  setFocus,
  emblem,
  placeholder,
  isFocused,
  emblemInvisible,
  emblemClass,
  hidden,
}) {
  return (
    <>
      <div
        className={`relative flex w-full justify-between bg-[#0F1923] ${
          hidden ? "hidden" : ""
        }`}
      >
        <div
          className={`absolute left-[10px] text-[#B7BFC7] top-[30%] transition-all ${
            isFocused || value ? "-translate-y-4 scale-50 -translate-x-4 " : ""
          }`}
        >
          {placeholder}
        </div>
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="number"
          className="bg-[#0F1923] w-4/5 outline-0 h-16 p-2"
        />
        <div
          className={` flex ${emblemClass} text-right items-center justify-center pr-5 ${
            emblemInvisible ? "invisible" : ""
          }`}
        >
          {emblem}
        </div>
      </div>
    </>
  );
}

export default NumberInput;
