import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function FilterBlock({ icon, title, onClear, onInput }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onInput) onInput(e.target.value);
  };

  return (
    <div className="bg-gray-100 rounded-full px-4 py-2 w-full mb-2">
      <div className="relative flex items-center w-full">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">{icon}</span>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={title}
          className="pl-10 pr-10 py-1 rounded-full bg-white text-gray-700 text-[13px] outline-none border border-gray-200 w-full"
        />
        <button
          onClick={onClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6"
        >
          <XMarkIcon className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}